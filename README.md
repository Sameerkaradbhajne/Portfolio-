<div align="center">

<!-- ═══════════════════════════════════════════════════════════════ -->
<!--                        HEADER BANNER                          -->
<!-- ═══════════════════════════════════════════════════════════════ -->

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0f0f,50:3B82F6,100:10B981&height=220&section=header&text=Sameer.dev&fontSize=70&fontColor=ffffff&fontAlignY=35&desc=AI%20%E2%80%A2%20Cloud%20%E2%80%A2%20Agentic%20Systems&descSize=18&descAlignY=55&animation=fadeIn" width="100%" />

<br/>

<!-- Typing SVG -->
<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=3B82F6&center=true&vCenter=true&multiline=true&repeat=true&width=600&height=80&lines=I+build+intelligent+systems.;I+create+agentic+flows.;I+solve+complex+problems." alt="Typing SVG" />
</a>

<br/><br/>

<!-- Quick Badges -->

[![Portfolio](https://img.shields.io/badge/🌐_Live_Portfolio-Visit_Now-3B82F6?style=for-the-badge&logoColor=white)](https://insta-triger.web.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sameer-karadbhajne)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Sameerkaradbhajne)

<br/>

<!-- Tech Stack Shields -->

![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=flat-square&logo=vite&logoColor=white)
![Spline](https://img.shields.io/badge/Spline_3D-FF5733?style=flat-square&logo=three.js&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

</div>

---

## 🤖 About This Project

> **A next-generation developer portfolio featuring an interactive 3D Spline robot background, glassmorphism UI, parallax tilt cards, and cinematic typewriter animations — engineered to leave a lasting impression.**

This isn't just a portfolio — it's an **immersive experience**. Built with **React 19** and **Vite 7**, the site showcases my work in AI/ML, edge computing, and agentic systems through a carefully crafted interface that blends cutting-edge 3D visuals with buttery-smooth animations.

<br/>

## ✨ Key Features

| Feature                          | Description                                                         |
| :------------------------------- | :------------------------------------------------------------------ |
| 🎮 **Interactive 3D Background** | Full-page Spline robot scene that responds to user interaction      |
| 🪟 **Glassmorphism UI**          | Frosted-glass cards with `backdrop-filter: blur()` and soft borders |
| 🎭 **Parallax Tilt Cards**       | Project cards with 3D depth via `react-parallax-tilt`               |
| ⌨️ **Typewriter Effect**         | Dynamic role cycling: _"I build intelligent systems."_              |
| 🧭 **Scroll-Aware Navbar**       | Transparent → frosted-glass transition on scroll                    |
| 🎬 **Cascade Animations**        | Staggered `fadeInUp` entrance animations across all sections        |
| 📱 **Responsive Design**         | CSS Grid layouts that adapt from desktop to mobile                  |
| 🚀 **Firebase Hosting**          | Production-optimized, deployed on Firebase CDN                      |

<br/>

## 🛠️ Tech Stack

<div align="center">

```
┌──────────────────────────────────────────────────────────────────┐
│                        FRONTEND CORE                              │
├──────────────────────────────────────────────────────────────────┤
│  React 19          │  Component-based UI architecture             │
│  Vite 7            │  Lightning-fast HMR & optimized builds       │
│  React Router 7    │  Client-side routing & navigation            │
├──────────────────────────────────────────────────────────────────┤
│                      DESIGN & ANIMATION                           │
├──────────────────────────────────────────────────────────────────┤
│  Spline 3D         │  Interactive 3D robot background             │
│  Framer Motion     │  Smooth page transitions & micro-animations  │
│  Parallax Tilt     │  3D perspective card hover effects           │
│  Typewriter Effect │  Dynamic text cycling animations             │
│  React Icons       │  Scalable vector icons (FA + SI)             │
├──────────────────────────────────────────────────────────────────┤
│                       DEPLOYMENT                                  │
├──────────────────────────────────────────────────────────────────┤
│  Firebase Hosting  │  Global CDN with SPA rewrites                │
│  ESLint            │  Code quality & consistency                  │
└──────────────────────────────────────────────────────────────────┘
```

</div>

<br/>

## 📂 Directory Structure

```
portfolio-sameer/
├── public/                     # Static assets served at root
│   └── vite.svg                # Favicon
│
├── src/                        # Application source code
│   ├── assets/                 # Static media (images, fonts)
│   │   └── profile.png         # Profile photograph
│   │
│   ├── components/             # Reusable UI components
│   │   ├── Background3D.jsx    # Spline 3D robot scene (fixed background)
│   │   ├── Navbar.jsx          # Scroll-aware frosted navigation bar
│   │   ├── Hero.jsx            # Landing section with typewriter effect
│   │   ├── About.jsx           # Bio section with profile image grid
│   │   ├── Skills.jsx          # Technical arsenal - glassmorphism cards
│   │   ├── Projects.jsx        # Project showcase with parallax tilt
│   │   ├── Contact.jsx         # CTA section with glassmorphism card
│   │   └── Footer.jsx          # Social links & copyright
│   │
│   ├── pages/                  # Route-level page components
│   │   ├── Home.jsx            # Main landing page composition
│   │   └── AllProjects.jsx     # Extended project gallery page
│   │
│   ├── App.jsx                 # Root component & layout orchestrator
│   ├── App.css                 # Component-scoped styles
│   ├── index.css               # Global design system & CSS variables
│   └── main.jsx                # React DOM entry point
│
├── dist/                       # Production build output (auto-generated)
├── .firebase/                  # Firebase cache (auto-generated)
├── .firebaserc                 # Firebase project configuration
├── firebase.json               # Firebase hosting rules & SPA rewrites
├── vite.config.js              # Vite bundler configuration
├── eslint.config.js            # ESLint rules & plugin config
├── package.json                # Dependencies & scripts
├── .gitignore                  # Git ignore rules
└── README.md                   # ← You are here
```

<br/>

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Sameerkaradbhajne/portfolio-sameer.git

# 2. Navigate to the project
cd portfolio-sameer

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

<br/>

## 🎨 Design System

<div align="center">

| Token              | Value                    | Usage                      |
| :----------------- | :----------------------- | :------------------------- |
| `--bg-color`       | `#f4f4f4`                | Page background            |
| `--text-color`     | `#000000`                | Primary text               |
| `--text-secondary` | `#444444`                | Muted body text            |
| `--accent-color`   | `#3B82F6`                | Links, buttons, highlights |
| `--accent-hover`   | `#2563EB`                | Interactive hover states   |
| `--card-bg`        | `rgba(255,255,255,0.65)` | Glassmorphism card fill    |
| `--card-border`    | `rgba(255,255,255,0.4)`  | Frosted card borders       |
| `--font-main`      | `'Inter', sans-serif`    | Typography family          |

</div>

<br/>

## 🧠 Featured Projects

<table>
<tr>
<td width="50%">

### 🛡️ EdgeGuard

**Agentic AI IoT Security System**

Detects, deceives, and autonomously responds to threats at the edge using AI vision models.

`Edge AI` `NVIDIA Vision` `Zynd SDK` `Security`

</td>
<td width="50%">

### 🧬 Neural Nexus

**AI Research Platform**

Collaborative AI research & experimentation platform for intelligent systems and applied ML.

`Machine Learning` `Python` `AI Pipelines` `Research`

</td>
</tr>
<tr>
<td width="50%">

### 🚨 Emergency Detection

**Zynd Aickathon 2025**

Low-latency multi-agent system detecting road accidents via vision models with instant reporting.

`Computer Vision` `Multi-Agent` `Real-time`

</td>
<td width="50%">

### 🏆 DevOps Excellence

**IIT Bombay × GitLab (Top 10)**

National Semifinalist — delivered Git/GitLab workflow solutions under tight deadlines.

`DevOps` `GitLab` `Hackathon` `Teamwork`

</td>
</tr>
</table>

<br/>

## 📊 Technical Arsenal

<div align="center">

| AI & Machine Learning | Cloud & Backend | Languages & Tools |
| :-------------------: | :-------------: | :---------------: |
|      TensorFlow       |       AWS       |      Python       |
|        PyTorch        |     Docker      |    JavaScript     |
|      NVIDIA NIM       |     MongoDB     |       React       |
|    Computer Vision    |     FastAPI     |     Zynd SDK      |

</div>

<br/>

## 🌐 Deployment

The portfolio is deployed on **Firebase Hosting** with:

- ⚡ **Global CDN** — Fast load times worldwide
- 🔄 **SPA Rewrites** — All routes redirect to `index.html`
- 🔒 **HTTPS** — Secure by default
- 📦 **Optimized Build** — Vite production bundle with tree-shaking

**Live URL:** [https://insta-triger.web.app](https://insta-triger.web.app)

<br/>

## 🤝 Connect With Me

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Sameer_Karadbhajne-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sameer-karadbhajne)
[![GitHub](https://img.shields.io/badge/GitHub-Sameerkaradbhajne-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Sameerkaradbhajne)
[![Portfolio](https://img.shields.io/badge/Portfolio-sameer.dev-3B82F6?style=for-the-badge&logo=google-chrome&logoColor=white)](https://insta-triger.web.app)

</div>

<br/>

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0f0f,50:3B82F6,100:10B981&height=120&section=footer" width="100%" />

**Designed & Built by Sameer Karadbhajne** ⚡

_Building intelligent systems, one project at a time._

</div>
