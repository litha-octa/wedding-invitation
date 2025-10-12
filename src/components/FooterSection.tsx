import React from "react";
import { Heart } from "lucide-react";

interface FooterProps {
  groomName: string;
  brideName: string;
}

const FooterSection: React.FC<FooterProps> = ({ groomName, brideName }) => (
  <footer className="footer">
    <Heart className="footer-heart" />
    <p>
      Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
      Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami
    </p>
    <p className="footer-names">
      {groomName} & {brideName}
    </p>
  </footer>
);

export default FooterSection;
