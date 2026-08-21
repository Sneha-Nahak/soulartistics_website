# Soulartistics Website

A responsive **Single Page Application (SPA)** built with React to showcase a design portfolio. The project features a modular component architecture, client-side routing, and reliable deep linking — built to demonstrate proficiency in modern UI development and responsive design.

🔗 **Live Site:** [soulartistics.vercel.app](https://soulartistics.vercel.app/)

---

## ✨ Features

- 🎨 Portfolio showcase across multiple design categories (Book Covers, Creatives, Logos, Posters, Typography, Social Media Designs, and Editing & Enhancement)
- 🧩 Modular, reusable component architecture
- 🧭 Client-side routing with React Router DOM
- 🔗 Reliable deep linking using `react-router-hash-link`
- 📱 Fully responsive design with custom CSS
- 📧 Contact functionality powered by EmailJS
- 🚀 Deployed on Vercel with GitHub Actions integration

---

## 🛠️ Tech Stack

- **JavaScript (ES6+)**
- **React.js**
- **HTML5**
- **CSS3 (Custom, no framework)**
- **React Router DOM**
- **react-router-hash-link**
- **react-icons**
- **EmailJS**
- **Vite** (build tool)
- **ESLint** (code quality)
- **GitHub Actions** (CI/CD)
- **Vercel** (deployment)

---

## 📁 Project Structure

```
soulartistics_website/
│
├── public/
│   ├── book_covers/
│   ├── creatives/
│   ├── editing_and_enhancement/
│   ├── logos/
│   ├── posters/
│   ├── product_designs/
│   ├── typography/
│   └── soulartistics-logo-white.png
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── WorkCard.jsx
│   │   └── WorkImageCard.jsx
│   │
│   ├── pages/
│   │   ├── BookCovers.jsx
│   │   ├── Creatives.jsx
│   │   ├── EditingAndEnhancement.jsx
│   │   ├── Home.jsx
│   │   ├── Logos.jsx
│   │   ├── Posters.jsx
│   │   ├── SocialMediaDesign.jsx
│   │   └── Typography.jsx
│   │
│   ├── routes/
│   │
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Hero.jsx
│   │   └── MyWork.jsx
│   │
│   ├── styles/
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── vercel.json
└── vite.config.js
```

---

## 📂 Folder Overview

| Folder/File | Description |
|---|---|
| `public/` | Static assets, organized into design category folders (book covers, creatives, logos, posters, etc.) plus the site logo |
| `src/components/` | Reusable UI components shared across pages (Navbar, Footer, WorkCard, WorkImageCard) |
| `src/pages/` | Individual portfolio category pages (Book Covers, Creatives, Logos, Posters, Typography, etc.) |
| `src/sections/` | Page-level sections used to build the Home page (Hero, About, MyWork) |
| `src/routes/` | Route configuration for the app |
| `src/styles/` | Additional stylesheets |
| `src/App.jsx` | Root application component |
| `src/main.jsx` | Application entry point |
| `vite.config.js` | Vite build configuration |
| `vercel.json` | Vercel deployment configuration |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (LTS recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Sneha-Nahak/soulartistics_website.git

# Navigate into the project directory
cd soulartistics_website

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Build for Production

```bash
npm run build
```

---

## 🌐 Deployment

This project is deployed on **Vercel**, with automated builds configured via **GitHub Actions**. Every push to the `main` branch triggers a new deployment.

---

## 🗺️ Roadmap

Planned improvements and upcoming additions to the portfolio:

- [ ] **UI/UX Case Studies** — Add a dedicated section showcasing end-to-end UI/UX case studies (problem statement, research, wireframes, final designs, and outcomes)
- [ ] Add filtering/sorting within portfolio category pages
- [ ] Improve accessibility (semantic HTML, keyboard navigation, alt text audit)
- [ ] Add dark/light mode toggle
- [ ] Optimize image loading (lazy loading, compressed assets)
- [ ] Add project-level animations/micro-interactions
- [ ] SEO enhancements (meta tags, Open Graph previews)

---

## 📬 Contact

Designs, feedback, or collaboration inquiries can be sent via the contact form on the live site, powered by **EmailJS**.

---

## 👤 Author

**Sneha Nahak**
UI/UX Designer & Frontend Developer

---

## 📄 License

This project is open for viewing as part of a personal design portfolio. Please reach out before reusing any design assets.
