# Enterprise Landing Page

A modern, responsive enterprise landing page built with React, showcasing best practices in web development, accessibility, and user experience.

![Enterprise Landing Page](https://img.shields.io/badge/React-19.1.1-blue) ![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **Responsive Design** - Mobile-first approach with breakpoints for tablet and desktop
- **Dark Mode Toggle** - Theme switcher with persistent localStorage
- **Accessible Components** - ARIA labels, keyboard navigation, and semantic HTML
- **Form Validation** - Real-time validation with accessible error messages
- **Smooth Scrolling** - Navigation with smooth scroll behavior
- **Performance Optimized** - Built with Vite for fast builds and HMR

## 🚀 Tech Stack

- **React 19.1.1** - UI library
- **Vite 7.1.7** - Build tool and dev server
- **CSS Variables** - Design tokens for theming
- **JavaScript ES6+** - Modern JavaScript features

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Ryheembon/enterprise-landing-page.git

# Navigate to the project directory
cd enterprise-landing-page

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
enterprise-landing-page/
├── src/
│   ├── components/     # React components
│   │   ├── NavBar.jsx
│   │   ├── Hero.jsx
│   │   ├── FeatureGrid.jsx
│   │   ├── Pricing.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CTA.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── Input.jsx
│   ├── styles/         # CSS files
│   │   └── token.css   # Design tokens
│   ├── utils/          # Utility functions
│   │   └── validators.js
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── global.css      # Global styles
├── public/             # Static assets
└── package.json
```

## 🎨 Key Components

- **NavBar** - Sticky navigation with mobile menu and theme toggle
- **Hero** - Landing section with CTAs and trust badges
- **FeatureGrid** - Responsive grid showcasing key features
- **Pricing** - Interactive pricing cards with monthly/annual toggle
- **Testimonials** - Customer testimonials with avatars
- **Contact Form** - Validated contact form with accessible error handling
- **Footer** - Site footer with navigation links

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Color contrast compliance (WCAG AA)

## 🌐 Deployment

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Import your GitHub repository
2. Framework preset: Vite
3. Deploy automatically on push

### GitHub Pages
```bash
npm run build
# Deploy the dist folder to GitHub Pages
```

## 📝 License

MIT License - feel free to use this project for your portfolio or learning!

## 👤 Author

**Ryheembon**
- GitHub: [@Ryheembon](https://github.com/Ryheembon)

## 🙏 Acknowledgments

Built as a practice project to demonstrate React skills, modern CSS techniques, and accessibility best practices.