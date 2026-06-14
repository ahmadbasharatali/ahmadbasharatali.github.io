# Ahmad Basharat Ali — Portfolio

A modern, responsive portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Features smooth animations, a dark theme with gradient accents, and a clean component-based architecture.

## 🚀 Live Demo

[ahmadbasharatali.github.io](https://ahmadbasharatali.github.io)

## 🛠 Tech Stack

| Category       | Technologies                                    |
| -------------- | ----------------------------------------------- |
| Framework      | Next.js 16.2.7 (App Router)                     |
| UI             | React 19, Tailwind CSS 3.4                      |
| Animation      | Framer Motion 12                                |
| Language       | TypeScript 5.9                                  |
| Package Manager| pnpm                                            |

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles & Tailwind imports
│   ├── layout.tsx          # Root layout with fonts & metadata
│   └── page.tsx            # Home page (composes all sections)
├── components/
│   ├── About/              # About section with stats
│   ├── Contact/            # Contact info & Upwork CTA
│   ├── Experience/         # Work experience timeline
│   ├── Footer/             # Footer with social links
│   ├── Hero/               # Hero with parallax orbs & typewriter
│   ├── Navigation/         # Sticky nav with mobile menu
│   ├── Projects/           # Project cards with video modals
│   ├── Skills/             # Skill bars by category
│   └── ui/                 # Reusable UI components
├── lib/
│   ├── data.ts             # All site content (config, projects, etc.)
│   └── utils.ts            # Utility functions (cn helper)
├── public/
│   ├── ytgpt1.mp4          # YTGPT demo video 1
│   ├── ytgpt2.mp4          # YTGPT demo video 2
│   └── images/             # Image assets
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🏗 Key Features

- **Responsive Design** — Fully responsive across all screen sizes
- **Dark Theme** — Elegant dark UI with cyan/purple gradient accents
- **Smooth Animations** — Framer Motion animations with spring physics & scroll-triggered reveals
- **Interactive Hero** — Floating orbs, mouse parallax effect, and typewriter text animation
- **Video Showcases** — Project demo videos in modal players
- **Timeline Experience** — Alternating left/right timeline layout
- **Skill Bars** — Animated progress bars with hover effects
- **Sticky Navigation** — Glassmorphism nav with smooth scroll links
- **Upwork Integration** — Direct CTA to Upwork freelance profile

## 🚦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/) (recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/ahmadbasharatali/portfolio.git
cd portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
pnpm build
pnpm start
```

## 📝 Customization

All site content is centralized in `lib/data.ts`. To personalize:

- **Personal info** — Update `siteConfig` (name, title, email, social links)
- **Projects** — Modify the `projects` array (title, description, tech stack, links, videos)
- **Experience** — Update the `experiences` array (roles, periods, descriptions)
- **Skills** — Edit the `skills` array (categories, skill names, proficiency levels)
- **Stats** — Adjust `aboutStats` for the About section counters

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📬 Contact

- **Email**: [ahmadbasharatali786@gmail.com](mailto:ahmadbasharatali786@gmail.com)
- **LinkedIn**: [linkedin.com/in/ahmadbasharatali](https://www.linkedin.com/in/ahmadbasharatali/)
- **GitHub**: [github.com/ahmadbasharatali](https://github.com/ahmadbasharatali)
- **Upwork**: [Hire me on Upwork](https://www.upwork.com/freelancers/~011afa7c2958eeb30d?mp_source=share)