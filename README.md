# Nigusu Tigabu — Personal Portfolio Website

A modern, accessible, and professional personal developer portfolio built for **Nigusu Tigabu**, an Ethiopian Software Engineering student (5th year, 1 semester remaining before graduation) and aspiring software developer specializing in backend systems, applied machine learning, and full-stack web applications.

---

## 🚀 Quick Start

### 1. Installation & Local Development

```bash
# Install dependencies
npm install

# Run the local development server (binds to http://localhost:3000)
npm run dev

# Compile production build
npm run build

# Run TypeScript linter
npm run lint
```

---

## 📁 Project Architecture

The codebase is organized cleanly to separate data, logic, components, and layout:

```text
├── index.html                  # SEO metadata, Open Graph tags, font definitions
├── metadata.json               # Platform manifest & capabilities
├── src/
│   ├── types/
│   │   └── portfolio.ts        # TypeScript interfaces for projects, skills, education, etc.
│   ├── data/
│   │   └── portfolioData.ts    # Centralized source of truth (edit this file to customize!)
│   ├── context/
│   │   └── ThemeContext.tsx    # Light / Dark theme with localStorage and system detection
│   ├── components/
│   │   ├── SkipLink.tsx        # WCAG 2.2 AA Skip to content link
│   │   ├── Navbar.tsx          # Sticky navigation with mobile accessible drawer
│   │   ├── ThemeToggle.tsx     # Accessible theme switch button
│   │   ├── ScrollProgress.tsx  # Reading progress indicator
│   │   ├── BackToTop.tsx       # Floating back-to-top button
│   │   ├── Toast.tsx           # Accessible live region notifications
│   │   └── ProjectCard.tsx     # Reusable project card component
│   ├── sections/
│   │   ├── Hero.tsx            # Hero with student positioning and interactive code terminal
│   │   ├── About.tsx           # Honest academic background & real-world mission
│   │   ├── Skills.tsx          # Categorized skills with realistic proficiency levels
│   │   ├── FeaturedProject.tsx # Capstone deep-dive with interactive Grad-CAM simulator
│   │   ├── OtherProjects.tsx   # Filterable projects with architectural detail modal
│   │   ├── Journey.tsx         # Chronological learning & development timeline
│   │   ├── Education.tsx       # 5th-year Software Engineering academic coursework
│   │   ├── Capabilities.tsx    # "What I Can Build" practical breakdown
│   │   ├── Contact.tsx         # Accessible contact form with validation and copy email
│   │   └── Footer.tsx          # Semantic footer, quick links, and copyright
│   ├── App.tsx                 # Main application composition
│   ├── main.tsx                # React 19 root entry point
│   └── index.css               # Base Tailwind CSS, accessible focus rings, and reduced motion
```

---

## 🛠️ Where to Customize Your Information

All personal details, URLs, and projects are centralized in **`src/data/portfolioData.ts`**:

### 1. Email Address
- Open `src/data/portfolioData.ts`
- Edit line `PERSONAL_INFO.email` (currently set to `nigusutigabu21016@gmail.com`).

### 2. GitHub Profile URL
- Open `src/data/portfolioData.ts`
- Replace `https://github.com/YOUR_GITHUB_USERNAME_HERE` with your actual GitHub profile link.

### 3. LinkedIn Profile URL
- Open `src/data/portfolioData.ts`
- Replace `https://linkedin.com/in/YOUR_LINKEDIN_USERNAME_HERE` with your LinkedIn link.

### 4. Curriculum Vitae (CV / Resume)
- Place your PDF file inside the `public/` directory (e.g., `public/Nigusu_Tigabu_CV.pdf`).
- In `src/data/portfolioData.ts`, change `cvDownloadUrl` to `'/Nigusu_Tigabu_CV.pdf'`.

### 5. University Name (Optional)
- In `src/data/portfolioData.ts`, under `EDUCATION_DATA`, you can add your university name if you wish to disclose it.

### 6. Project Repositories & Live Demos
- In `src/data/portfolioData.ts`, update `FEATURED_PROJECT` and `OTHER_PROJECTS`:
  - Set `githubUrl` to your repository URL and change `isGithubPlaceholder: false`.
  - Set `liveDemoUrl` to your deployed application URL and change `isDemoPlaceholder: false`.

### 7. Connecting the Contact Form to Real Email Delivery
The contact form includes complete client-side validation, accessible error announcements, and loading/success states. To deliver emails directly to your inbox:
- Use [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com).
- Replace the simulated timeout in `src/sections/Contact.tsx` (`handleSubmit`) with an API `fetch` call to your endpoint.

---

## ♿ Accessibility (WCAG 2.2 AA) Highlights

- **Semantic Landmark Structure**: Proper `<header>`, `<nav>`, `<main id="main-content">`, `<section>`, `<article>`, and `<footer role="contentinfo">`.
- **Keyboard Navigation**: Accessible focus indicators (`focus-visible:ring-2 focus-visible:ring-emerald-500`) on all interactive buttons, links, inputs, and tabs.
- **Skip Link**: Instant jump to main content for keyboard and screen-reader users.
- **Screen Reader Support**: ARIA live regions for toast feedback, correct `aria-expanded` and `aria-controls` for mobile navigation drawers and modal dialogs.
- **Form Accessibility**: Every input has an explicit `<label htmlFor="...">`, `aria-required="true"`, `aria-invalid`, and connected error messages with `aria-describedby`.
- **Respects `prefers-reduced-motion`**: Disables auto-scrolling and transitions when the user requests reduced motion in system settings.
- **No Artificial Metrics**: Real skill descriptions and realistic proficiency badges instead of fake percentages.
