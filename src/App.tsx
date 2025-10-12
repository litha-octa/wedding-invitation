import React, { useState, useEffect, useCallback } from "react";
import { Heart, Calendar, Gift, ChevronDown } from "lucide-react";
import { weddingData, StoryItem, EventItem, Person } from "./data";
import "./App.css";

function App() {
  const [showContent, setShowContent] = useState(false);

  // 🎯 Get recipient name from URL query (?to=...)
  const [recipient, setRecipient] = useState<string | null>(null);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nameParam = params.get("to");

    if (nameParam) {
      const decoded = decodeURIComponent(nameParam)
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      setRecipient(decoded);
    }
  }, []);

  // weddingData is static (imported), so it's safe to memoize once without deps
  const weddingDate = React.useMemo(
    () => new Date(weddingData.date.weddingDate),
    []
  );

  const calculateTimeLeft = useCallback(() => {
    const difference = +weddingDate - +new Date();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [weddingDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="app">
      {/* Cover Section */}
      <section className="cover">
        <div className="cover-content fade-in">
          <Heart className="heart-icon pulse" />
          <h1 className="title">
            {weddingData.couple.groom.name} & {weddingData.couple.bride.name}
          </h1>
          <p className="subtitle">
            Kami mengundang Anda untuk merayakan hari bahagia kami
          </p>
          <p className="date">{weddingData.date.displayDate}</p>

          {/* 🎉 Personalized Recipient Message */}
          {recipient && (
            <p className="recipient">
              Kepada Yth. <strong>{recipient}</strong>
            </p>
          )}

          <div className="countdown">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div className="count-item" key={label}>
                <div className="count-number">{value}</div>
                <div className="count-label">{label}</div>
              </div>
            ))}
          </div>

          <button className="open-btn" onClick={() => setShowContent(true)}>
            Buka Undangan
          </button>
        </div>

        <ChevronDown className="scroll-icon bounce" />
      </section>

      {showContent && (
        <>
          <section className="story">
            <h2 className="section-title">Kisah Cinta Kami</h2>
            <div className="timeline">
              {weddingData.story.map((item: StoryItem, index: number) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-text">
                    <h3>{item.title}</h3>
                    <p className="timeline-date">{item.date}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="couple">
            <h2 className="section-title">Mempelai</h2>
            <div className="couple-grid">
              {[weddingData.couple.bride, weddingData.couple.groom].map(
                (person: Person, i: number) => (
                  <div className="person" key={i}>
                    <div className="photo">
                      <img src={person.photo} alt={person.name} />
                      <Heart className="heart-icon fill" />
                    </div>
                    <h3>{person.name}</h3>
                    <p>Putra/Putri dari</p>
                    <p>
                      {person.parents.father} & {person.parents.mother}
                    </p>
                  </div>
                )
              )}
            </div>
          </section>

          <section className="events">
            <h2 className="section-title">Jadwal Acara</h2>
            <div className="event-grid">
              {weddingData.events.map((event: EventItem, i: number) => (
                <div className="event-card" key={i}>
                  <div className="icon-bg">
                    {event.icon === "calendar" ? (
                      <Calendar className="icon" />
                    ) : (
                      <Gift className="icon" />
                    )}
                  </div>
                  <h3>{event.title}</h3>
                  <p>{weddingData.date.displayDate}</p>
                  <p>{event.time}</p>
                  <p>{event.location}</p>
                  <p>{event.description}</p>
                </div>
              ))}
            </div>
          </section>

          <footer className="footer">
            <Heart className="footer-heart" />
            <p>
              Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
              Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu
              kepada kami
            </p>
            <p className="footer-names">
              {weddingData.couple.groom.name} & {weddingData.couple.bride.name}
            </p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
