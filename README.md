# 💍 Wedding Invitation

An elegant and responsive digital wedding invitation built with **React + TypeScript**, designed to make your special day beautifully shareable online.  

🌐 **Live Demo:** [https://mywedding-invitation.netlify.app/](https://mywedding-invitation.netlify.app/)

---

## ✨ Features (Component List)

This project is composed of modular **React components**, each representing a section of the wedding invitation.

| 🌸 Component | 📝 Description | 💡 Purpose |
|--------------|----------------|-------------|
| 💌 **CoverSection** | A stunning full-screen hero with the couple’s names and wedding date. | Creates a strong first impression. |
| 💑 **CoupleSection** | Introduces the bride and groom with short bios and profile photos. | Highlights the couple’s story. |
| 📅 **EventSection** | Displays ceremony and reception details with icons for time, date, and location. | Provides guests with essential info. |
| 📍 **LocationSection** | Embeds a map or venue link (e.g., Google Maps). | Helps guests find the location easily. |
| 🕊 **GallerySection** | A photo gallery showing prewedding or engagement photos. | Adds a personal, visual touch. |
| 💬 **GuestBookSection** | Allows guests to leave best wishes or messages. | Engages guests and adds a social element. |
| 🎁 **GiftSection** | (Optional) Displays digital gift / bank info / QR code. | Simplifies contributions or gifts. |
| 💖 **FooterSection** | Displays thank-you notes and contact/social links. | Nicely wraps up the page with gratitude. |

All sections are **responsive**, **reusable**, and **fully customizable**.

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|----------|
| ⚛️ **React + TypeScript** | UI development with type safety |
| 🎨 **CSS** | Styling and theme management |
| ⚡ **Vite** | Fast dev server and build tool |
| ☁️ **Netlify** | Deployment and hosting |
| 🖼 **Icons / Images** | SVG and image-based assets for visuals |

---

## 🎨 Change Theme

You can easily change the overall look & feel by editing the theme variables.

### Steps
1. Open **`src/App.css`**
2. Find the commented `:root` section
3. Uncomment and customize the variables:
   ```css
   :root {
     --primary-color: #f3c1b0;
     --secondary-color: #a2746b;
     --text-color: #333;
     --background-color: #fffaf7;
   }
