# Enrico Hoffmann – Portfolio

A personal developer portfolio built with **Angular 17**, featuring a bilingual (DE/EN) interface, responsive design, and a contact form with a PHP mailer backend.

This project was developed as part of the **Frontend Web Developer** training program at the [Developer Akademie](https://developerakademie.com/).

**Live:** [enrico-hoffmann.de](https://enrico-hoffmann.de)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 17 (standalone components) |
| Styling | SCSS with custom mixins, CSS custom properties, `clamp()` |
| Forms | Angular FormsModule, template-driven |
| HTTP | Angular HttpClient, `firstValueFrom` |
| Routing | Angular Router with lazy-loaded pages |
| Backend | PHP mailer with rate limiting and CORS |
| Fonts | Karla, Fira Code (self-hosted) |

---

## Features

- **Bilingual** – full German/English toggle via `LanguageService` with `localStorage` persistence
- **Responsive** – fluid typography with `clamp()`, mobile-first breakpoints, adaptive header/navigation
- **Mobile navigation** – slide-in overlay menu with guarded close animation pipeline
- **Portfolio section** – filterable project grid with detail dialog
- **Contact form** – validation, error messages per field, PHP backend with 30s cooldown and `messageId`-based response mapping
- **Legal pages** – Impressum and Datenschutzerklärung with dynamic content and RouterLink navigation
- **Marquee** – animated skill/tech ticker in the hero section

---

## Project Structure

```
src/
├── app/
│   ├── features/        # Section components (hero, about-me, skills, portfolio, contact, references)
│   ├── layout/          # Header (desktop + mobile) and footer
│   ├── pages/           # Routed pages (landing, legal-notice, privacy-policy)
│   ├── services/        # Language, display, navigation, data services
│   ├── interfaces/      # TypeScript interfaces
│   └── ui/              # Reusable UI components (button, card, tooltip, etc.)
├── assets/
│   ├── font/            # Karla + Fira Code
│   └── icon/
└── phpScript/
    └── send_mail.php    # Contact form mailer
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- Angular CLI ≥ 17

```bash
npm install
```

### Development

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app reloads automatically on file changes.

### Production Build

```bash
ng build --configuration production --base-href /
```

Build artifacts are output to `dist/`.

---

## Contact Form Backend

The PHP mailer (`phpScript/send_mail.php`) requires a server with PHP mail support. It handles:

- CORS for configured origins
- IP-based rate limiting (30s cooldown)
- Header injection protection
- `messageId`-based response codes mapped to localized messages in the Angular app

---

## License

This project is for portfolio and demonstration purposes. All content and design are property of Enrico Hoffmann.
