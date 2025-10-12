import React from "react";
import { Image, BookOpen, Heart, Calendar, Gift, Home } from "lucide-react";
import "../App.css"; // make sure to create/import this file

interface FloatingNavProps {
  onNavigate: (id: string) => void;
}

const FloatingNav: React.FC<FloatingNavProps> = ({ onNavigate }) => {
  const navItems = [
    { id: "gallery", label: "Gallery", icon: <Image size={20} /> },
    { id: "story", label: "Story", icon: <BookOpen size={20} /> },
    { id: "couple", label: "Couple", icon: <Heart size={20} /> },
    { id: "events", label: "Events", icon: <Calendar size={20} /> },
    { id: "gift", label: "Gift", icon: <Gift size={20} /> },
    { id: "cover", label: "Top", icon: <Home size={20} /> },
  ];

  return (
    <nav className="floating-nav" aria-label="Floating navigation">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className="floating-nav__btn"
          title={item.label}
          aria-label={`Go to ${item.label}`}
        >
          <div className="floating-nav__icon">{item.icon}</div>
          <span className="floating-nav__label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default FloatingNav;
