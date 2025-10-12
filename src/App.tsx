import React, { useState, useEffect, useCallback } from "react";
import { weddingData } from "./data";
import CoverSection from "./components/CoverSection";
import StorySection from "./components/StorySection";
import CoupleSection from "./components/CoupleSection";
import EventsSection from "./components/EventSection";
import GiftSection from "./components/GiftSection";
import FooterSection from "./components/FooterSection";
import GallerySection from "./components/GallerySection";
import FloatingNav from "./components/FloatingNav";
import "./App.css";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [recipient, setRecipient] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nameParam = params.get("to");
    if (nameParam) {
      const decoded = decodeURIComponent(nameParam)
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
      setRecipient(decoded);
    }
  }, []);

  const weddingDate = React.useMemo(
    () => new Date(weddingData.date.weddingDate),
    []
  );
  const calculateTimeLeft = useCallback(() => {
    const diff = +weddingDate - +new Date();
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }, [weddingDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app">
      <section id="cover">
        <CoverSection
          recipient={recipient}
          timeLeft={timeLeft}
          weddingData={weddingData}
          onOpen={() => setShowContent(true)}
        />
      </section>
      {showContent && (
        <>
          <section id="gallery">
            <GallerySection images={weddingData.gallery || []} />
          </section>

          {/* 📖 Story */}
          <section id="story">
            <StorySection story={weddingData.story} />
          </section>

          {/* 💑 Couple */}
          <section id="couple">
            <CoupleSection couple={weddingData.couple} />
          </section>

          {/* 📅 Events */}
          <section id="events">
            <EventsSection
              events={weddingData.events}
              displayDate={weddingData.date.displayDate}
            />
          </section>

          {/* 🎁 Gift */}
          <section id="gift">
            <GiftSection weddingData={weddingData} />
          </section>

          {/* 💐 Footer */}
          <section id="footer">
            <FooterSection
              groomName={weddingData.couple.groom.name}
              brideName={weddingData.couple.bride.name}
            />
          </section>
          <FloatingNav onNavigate={handleScrollTo} />
        </>
      )}
    </div>
  );
}

export default App;
