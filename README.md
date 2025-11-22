# Venture - Contract Management SaaS Template

A modern, animated React website template for a SaaS contract management platform, built with Vite, React, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, clean design with green color scheme
- ✨ Smooth animations using Framer Motion
- 📱 Fully responsive design
- 🎯 Hero section with animated team avatars
- 🔄 Infinite scrolling partner/integration logos
- 🎭 Interactive feature cards with hover effects
- 📊 Animated statistics counters
- 🎪 Smooth scroll animations throughout

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
ak-template-venture/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header with dropdowns
│   │   ├── Hero.jsx             # Hero section with animations
│   │   ├── PartnerLogos.jsx     # Scrollable partner logos
│   │   ├── Features.jsx         # Features grid with animations
│   │   ├── Integrations.jsx     # Integrations section
│   │   ├── Testimonials.jsx     # Testimonial section
│   │   ├── Statistics.jsx       # Statistics with counters
│   │   ├── CTA.jsx              # Call-to-action section
│   │   └── Footer.jsx           # Footer with links
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Components

### Header
- Fixed navigation with scroll effects
- Dropdown menus for Solutions and Customers
- Mobile-responsive menu

### Hero
- Animated team avatars with connecting lines
- Highlighted text animation
- Animated background elements
- Scrollable partner logos

### Features
- 2x2 grid layout
- Interactive cards with hover effects
- Animated dashboard visualization
- Smart notifications with toggle switches
- Task management activity feed

### Integrations
- Dark green background section
- Infinite scrolling integration logos
- Hover effects on integration cards

### Testimonials
- Large quote display
- Animated quote icon
- Customer profile with avatar

### Statistics
- Animated counters
- Three-column layout
- Scroll-triggered animations

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
- `accent` - Primary green color
- `accent-dark` - Dark green variant
- `accent-light` - Light green variant

### Animations
Animations are configured in:
- `tailwind.config.js` - CSS animations
- Component files - Framer Motion animations

## License

See LICENSE file for details.

