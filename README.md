<div align="center">

# ⚖️ Diraya — مكتب محاماة بالرباط

**A premium, bilingual law firm website built with Next.js 15 & React 19**

مكتب الأستاذ محمد صادق للمحاماة — خدمات قانونية متخصصة في القانون المغربي

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-diraya--law.vercel.app-000?style=for-the-badge)](https://diraya-law.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-15.2-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?style=flat-square&logo=tailwindcss)

</div>

---

## 📸 Overview

Diraya (دراية) is a professional, fully responsive law firm website designed for a Moroccan legal practice based in Rabat. The site features a modern, elegant UI with full **Arabic (RTL)** and **English** language support, dark/light theme toggling, consultation booking, a legal blog, and more.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌐 **Bilingual (AR / EN)** | Full Arabic RTL & English LTR support with client-side language switching |
| 🌙 **Dark / Light Mode** | Theme toggling powered by `next-themes` |
| 📱 **Fully Responsive** | Optimized layouts for desktop, tablet, and mobile |
| 📅 **Consultation Booking** | Interactive modal for scheduling legal consultations |
| 📝 **Legal Blog** | Dynamic articles on Moroccan law with slug-based routing |
| ⚖️ **Service Pages** | Dedicated pages for each legal service with dynamic routing |
| 📨 **Contact Form** | Validated with React Hook Form + Zod schema validation |
| 💬 **WhatsApp Integration** | Floating button for instant client communication |
| 🎨 **Premium Animations** | Smooth transitions & micro-interactions via Framer Motion |
| 📊 **Analytics** | Vercel Analytics integration for performance tracking |
| 🔍 **SEO Optimized** | Open Graph, Twitter cards, and structured metadata |

---

## 🛠️ Tech Stack

### Core

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 15.2 | React framework with App Router |
| [React](https://react.dev/) | 19 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type-safe development |
| [Tailwind CSS](https://tailwindcss.com/) | 4.1 | Utility-first CSS framework |

### UI & Components

- **[Radix UI](https://www.radix-ui.com/)** — Accessible primitives (Dialog, Accordion, Tabs, Tooltip, etc.)
- **[shadcn/ui](https://ui.shadcn.com/)** — Styled component layer built on Radix
- **[Lucide React](https://lucide.dev/)** — Icon library

### Forms & Validation

- **[React Hook Form](https://react-hook-form.com/)** — Performant form handling
- **[Zod](https://zod.dev/)** — Schema-based validation

### Animations & Interactions

- **[Framer Motion](https://www.framer.com/motion/)** — Declarative animations
- **[Embla Carousel](https://www.embla-carousel.com/)** — Testimonial carousel
- **[Sonner](https://sonner.emilkowal.dev/)** — Toast notifications

### Fonts

- **[Geist](https://vercel.com/font)** — Sans & Mono (Vercel)
- **[Playfair Display](https://fonts.google.com/specimen/Playfair+Display)** — Elegant serif headings
- **[Cairo](https://fonts.google.com/specimen/Cairo)** — Arabic body text
- **[Aref Ruqaa](https://fonts.google.com/specimen/Aref+Ruqaa)** — Arabic calligraphic logo
- **[Amiri](https://fonts.google.com/specimen/Amiri)** — Classic Arabic serif

---

## 📁 Project Structure

```
diraya-law-website/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (RTL, fonts, metadata)
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles & theme tokens
│   ├── about/                    # About the firm
│   ├── blog/                     # Blog listing & [slug] articles
│   ├── contact/                  # Contact page with form
│   ├── services/                 # Services listing & [slug] details
│   ├── privacy/                  # Privacy policy
│   └── terms/                    # Terms of service
├── components/                   # Reusable React components
│   ├── ui/                       # shadcn/ui primitives
│   ├── navbar.tsx                # Responsive navigation
│   ├── footer.tsx                # Multi-layout footer
│   ├── hero-section.tsx          # Animated hero
│   ├── booking-modal.tsx         # Consultation booking
│   ├── consultation-modal.tsx    # Contact consultation
│   ├── service-consultation-modal.tsx
│   ├── services-preview.tsx      # Homepage services grid
│   ├── testimonial-carousel.tsx  # Client reviews carousel
│   ├── whatsapp-button.tsx       # Floating WhatsApp CTA
│   ├── language-switcher.tsx     # AR / EN locale toggle
│   ├── theme-toggle.tsx          # Dark / light mode toggle
│   └── ...
├── hooks/                        # Custom React hooks
│   ├── use-locale-context.tsx    # Locale state management
│   └── use-consultation-modal.ts # Modal state hook
├── lib/                          # Data & utilities
│   ├── articles.tsx              # Blog article data
│   ├── services.ts               # Legal services data
│   ├── i18n.ts                   # Translations dictionary
│   └── utils.ts                  # Shared helpers
├── public/                       # Static assets & images
└── styles/                       # Additional stylesheets
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **pnpm** (recommended) or npm / yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/diraya-law-website.git
cd diraya-law-website

# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start development server |
| `pnpm build` | Create production build |
| `pnpm start` | Serve production build |
| `pnpm lint` | Run ESLint checks |

---

## 🌍 Deployment

The project is optimized for **[Vercel](https://vercel.com)**:

1. Push your repository to GitHub
2. Import the project on [vercel.com/new](https://vercel.com/new)
3. Deploy — zero config required

For other platforms, run `pnpm build` and serve the `.next` output directory.

---

## 📄 License

This project is **private and proprietary**.

---

<div align="center">

**Built with ❤️ in Morocco**

Next.js · React · TypeScript · Tailwind CSS

</div>
