import React from "react";
import { Heart, ChevronDown } from "lucide-react";

interface CoverProps {
  recipient: string | null;
  timeLeft: Record<string, number>;
  weddingData: any;
  onOpen: () => void;
}

const CoverSection: React.FC<CoverProps> = ({
  recipient,
  timeLeft,
  weddingData,
  onOpen,
}) => (
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

      <button className="open-btn" onClick={onOpen}>
        Buka Undangan
      </button>
    </div>

    <ChevronDown className="scroll-icon bounce" />
  </section>
);

export default CoverSection;
