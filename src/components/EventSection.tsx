import React from "react";
import { EventItem } from "../data";
import { Calendar, Gift } from "lucide-react";

interface EventsProps {
  events: EventItem[];
  displayDate: string;
}

const EventsSection: React.FC<EventsProps> = ({ events, displayDate }) => (
  <section className="events">
    <h2 className="section-title">Jadwal Acara</h2>
    <div className="event-grid">
      {events.map((event, i) => (
        <div className="event-card" key={i}>
          <div className="icon-bg">
            {event.icon === "calendar" ? (
              <Calendar className="icon" />
            ) : (
              <Gift className="icon" />
            )}
          </div>
          <h3>{event.title}</h3>
          <p>{displayDate}</p>
          <p>{event.time}</p>
          <p>{event.location}</p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default EventsSection;
