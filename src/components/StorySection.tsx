import React from "react";
import { StoryItem } from "../data";

interface StoryProps {
  story: StoryItem[];
}

const StorySection: React.FC<StoryProps> = ({ story }) => (
  <section className="story">
    <h2 className="section-title">Kisah Cinta Kami</h2>
    <div className="timeline">
      {story.map((item, index) => (
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
);

export default StorySection;
