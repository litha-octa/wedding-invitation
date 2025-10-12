import React from "react";
import { Person } from "../data";
import { Heart } from "lucide-react";

interface CoupleProps {
  couple: { bride: Person; groom: Person };
}

const CoupleSection: React.FC<CoupleProps> = ({ couple }) => (
  <section className="couple">
    <h2 className="section-title">Mempelai</h2>
    <div className="couple-grid">
      {[couple.bride, couple.groom].map((person, i) => (
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
      ))}
    </div>
  </section>
);

export default CoupleSection;
