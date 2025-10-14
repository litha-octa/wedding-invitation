# 💍 Wedding Invitation
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://mywedding-invitation.netlify.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)


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



# 1️⃣ Clone this repository
git clone https://github.com/litha-octa/wedding-invitation.git

# 2️⃣ Navigate into the project folder
cd wedding-invitation

# 3️⃣ Install dependencies
npm install
# or
yarn install

# 4️⃣ Start the development server
npm run dev
# or
yarn dev

# 5️⃣ Open your browser
# The app usually runs at:
http://localhost:5173

# To build the project for production:
npm run build


# Project Structure
wedding-invitation/<br>
├── public/<br>
│   ├── favicon.ico<br>
│   └── index.html<br>
│<br>
├── src/<br>
│   ├── assets/<br>
│   │   └── images/<br>
│   │<br>
│   ├── components/<br>
│   │   ├── CoverSection/<br>
│   │   │   ├── CoverSection.tsx<br>
│   │   │   └── CoverSection.css<br>
│   │   ├── CoupleSection/<br>
│   │   ├── EventSection/<br>
│   │   ├── GallerySection/<br>
│   │   ├── GuestBookSection/<br>
│   │   ├── LocationSection/<br>
│   │   └── FooterSection/<br>
│   │<br>
│   ├── App.tsx<br>
│   ├── App.css<br>
│   └── main.tsx<br>
│<br>
├── package.json<br>
├── tsconfig.json<br>
└── README.md<br>


#This project is open-source and available for personal or portfolio use.
You are free to modify, customize, and deploy it as your own wedding website.

License: MIT
© 2025 Litha Octa

# Created and designed with love by Litha Octa 💕
# Deployed with Netlify ☁️
# Built using React + TypeScript ⚛️

“May your code be clean and your wedding full of love.” 💍

