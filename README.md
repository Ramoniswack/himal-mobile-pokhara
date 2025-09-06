# Himal Mobile Traders Website

<div align="center">
  <img src="public/photos/himal-logo.png" alt="Himal Mobile Logo" width="200"/>
  
  **Professional Mobile Phone Store Website for Pokhara**
  
  [![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://typescriptlang.org)
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
</div>

---

## Overview

The Himal Mobile Traders website is a modern, responsive web application for a mobile phone store in Pokhara, Nepal. It features a clean design with sections for services, photo gallery, about us, and contact information.

## Key Features

### Modern Interactive Design

- Responsive layout optimized for all devices
- Smooth scrolling navigation with active section highlighting
- Interactive components with beautiful animations
- Fully accessible and SEO-friendly

### Photo Gallery

- Album-style photo organization
- Auto-sliding gallery on mobile devices
- Lightbox image viewing with intelligent cropping
- Category-based photo collections

### Business Information

- Store hours with real-time open/closed status
- EMI financing options for iPhone and Android phones
- Comprehensive services listing
- Google Maps integration for store location

### Contact Features

- Contact form with form validation
- Direct phone number links
- Location map and directions
- Social media integration

## Project Structure Navigator

### Main Components

| Component     | Description               | Location                                     |
| ------------- | ------------------------- | -------------------------------------------- |
| Navigation    | Header with section links | `src/components/ui/navigation.tsx`           |
| Hero Section  | Main landing area         | `src/components/ui/hero-section-updated.tsx` |
| Services      | Available services        | `src/components/ui/services-section.tsx`     |
| Photo Gallery | Store & product photos    | `src/components/ui/photo-gallery.tsx`        |
| About Section | Company information       | `src/components/ui/about-section.tsx`        |
| Contact       | Contact information       | `src/components/ui/contact-section.tsx`      |

### Key Files

- **Index Page:** `src/pages/Index.tsx` - Main page layout
- **App:** `src/App.tsx` - Root application component
- **Styles:** `src/index.css` - Global styles
- **Utilities:** `src/lib/utils.ts` - Helper functions
- **Custom Hooks:** `src/hooks/` - Custom React hooks

### UI Components

The UI components are built using Shadcn UI and can be found in `src/components/ui/`. Key components include:

- Button: `src/components/ui/button.tsx`
- Card: `src/components/ui/card.tsx`
- Dialog: `src/components/ui/dialog.tsx`
- Badge: `src/components/ui/badge.tsx`
- Form elements: `src/components/ui/form.tsx`, `src/components/ui/input.tsx`
- Accordion: `src/components/ui/accordion.tsx`

## Quick Start

### Prerequisites

- Node.js 16.0+
- npm or bun package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ramoniswack/himal-mobile-pokhara.git
   cd himal-mobile-pokhara
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   bun install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   bun run dev
   ```

   Open your browser and navigate to `http://localhost:5173`

## Technology Stack

### Frontend

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and development server
- **TailwindCSS** - Utility-first CSS framework

### UI Components

- **Shadcn UI** - Component library
- **Lucide Icons** - SVG icon library
- **Radix UI** - Headless UI components
- **Tailwind Variants** - Advanced styling solutions

### Animation & Effects

- **CSS Animations** - Smooth transitions
- **React Hooks** - State and effect management
- **Custom CSS** - Additional styling

## Available Scripts

| Command           | Description               |
| ----------------- | ------------------------- |
| `npm run dev`     | Start development server  |
| `npm run build`   | Build for production      |
| `npm run preview` | Preview production build  |
| `npm run lint`    | Run ESLint                |
| `npm run format`  | Format code with Prettier |

## Customization Guide

### Modifying the Photo Gallery

To update the photo gallery:

1. Add new photos to the `public/photos/` directory
2. Edit the photo array in `src/components/ui/photo-gallery.tsx`
3. Organize photos into categories as needed

### Changing Business Information

To update store details:

1. Modify the hero section in `src/components/ui/hero-section-updated.tsx`
2. Update store hours logic in the useEffect hook
3. Edit the EMI information card

### Updating Services

To modify service offerings:

1. Edit the services array in `src/components/ui/services-section.tsx`
2. Add or remove service cards as needed
3. Update icons and descriptions

### Styling Changes

To adjust the visual design:

1. Global styles are in `src/index.css`
2. Component-specific styles are in their respective files
3. TailwindCSS configuration is in `tailwind.config.ts`

## Deployment

### Build for Production

```bash
npm run build
```

This generates optimized files in the `dist/` directory.

### Hosting Options

- **Vercel**: Connect GitHub repository for automatic deployment
- **Netlify**: Similar to Vercel with continuous deployment
- **GitHub Pages**: Host static files directly from your repository
- **Any Static Hosting**: Upload the `dist/` directory to any static file host

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## Contributing

We welcome contributions to improve the website:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p><strong>Developed for Himal Mobile Traders</strong></p>
  <p><i>© 2024 Himal Mobile Traders. All rights reserved.</i></p>
</div>
