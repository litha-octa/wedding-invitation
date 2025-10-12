import React, { useRef } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

interface GallerySectionProps {
  images: string[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ images }) => {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = galleryRef.current;
    if (!container) return;
    const scrollAmount = direction === "right" ? 300 : -300;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-header">
        <Heart className="gallery-icon" />
        <h2 className="gallery-title">Our Prewedding Moments</h2>
        <p className="gallery-subtitle">
          A glimpse of our journey together before the big day 💕
        </p>
      </div>

      <div className="gallery-wrapper">
        {/* Left Arrow (Mobile only, handled in CSS visibility) */}
        <button
          className="gallery-arrow gallery-arrow--left"
          onClick={() => scroll("left")}
          aria-label="Scroll left"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="gallery-grid" ref={galleryRef}>
          {images.map((src, index) => (
            <div key={index} className="gallery-item">
              <img src={src} alt={`Prewedding ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="gallery-arrow gallery-arrow--right"
          onClick={() => scroll("right")}
          aria-label="Scroll right"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default GallerySection;
