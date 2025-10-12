import React from "react";
import { Gift, Copy, Banknote } from "lucide-react";

interface GiftSectionProps {
  weddingData: {
    couple: {
      groom: { name: string };
      bride: { name: string };
    };
    gifts?: {
      bankName?: string;
      accountNumber?: string;
      accountHolder?: string;
      address?: string;
    };
  };
}

const GiftSection: React.FC<GiftSectionProps> = ({ weddingData }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const { gifts } = weddingData;

  return (
    <section className="gift-section fade-in">
      <div className="gift-container">
        <Gift className="gift-icon" size={40} />
        <h2 className="gift-title">Wedding Gift</h2>
        <p className="gift-subtitle">
          Bagi yang berhalangan hadir namun ingin berbagi kebahagiaan, dapat
          mengirimkan tanda kasih melalui:
        </p>

        {gifts?.bankName && (
          <div className="gift-card">
            <Banknote className="bank-icon" />
            <div>
              <p className="bank-name">{gifts.bankName}</p>
              <p className="account-number">
                {gifts.accountNumber}
                <button
                  className="copy-btn"
                  onClick={() => copyToClipboard(gifts.accountNumber!)}
                >
                  <Copy size={14} />
                </button>
              </p>
              <p className="account-holder">
                a.n <strong>{gifts.accountHolder}</strong>
              </p>
            </div>
          </div>
        )}

        {gifts?.address && (
          <div className="gift-address">
            <p>
              Atau dapat dikirimkan langsung ke alamat kami:
              <br />
              <strong>{gifts.address}</strong>
            </p>
          </div>
        )}

        <p className="thank-you">Terima kasih atas doa dan perhatian Anda 🌸</p>
      </div>
    </section>
  );
};

export default GiftSection;
