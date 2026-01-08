# Volksways - Study Abroad Consultancy Website

A modern, responsive Single Page Application (SPA) built with React + Vite for Volksways, a study abroad consultancy company based in Kerala, India, specializing in European education.

## 🚀 Features

- **Modern Design**: Clean, professional, and minimalist design
- **ReactBits Integration**: Premium animated components for enhanced UX
- **Aurora Background**: Stunning WebGL-powered background animation
- **Responsive**: Mobile-first approach, works on all devices
- **Smooth Animations**: Professional-grade animations with ReactBits components
- **Contact Form**: Integrated with Web3Forms for form handling
- **SEO Optimized**: Semantic HTML and meta tags
- **Accessibility**: ARIA-friendly components

## 🛠️ Tech Stack

- **React 19** - UI Library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **ReactBits Components** - Premium animated UI components
- **OGL** - WebGL library for Aurora background
- **React Icons** - Icon library
- **Web3Forms** - Form handling service

## ✨ ReactBits Components Integrated

### 🎨 Background Animations
- **Aurora Background** - WebGL-powered animated background in hero section
- **Theme Colors**: `#2563eb`, `#1d4ed8`, `#1e40af` (matching brand)

### 🧩 UI Components
- **AnimatedButton** - Shimmer effects and smooth hover animations
- **AnimatedCard** - Lift, tilt, and glow hover effects
- **AnimatedText** - Fade, slide, and gradient text animations
- **AnimatedNavbar** - Smooth navigation with animated elements

### 📝 Text Animations
- **AnimatedWords** - Word-by-word reveal animations
- **Multiple Variants** - fadeUp, slideLeft, slideRight, scale, gradient

### 🎯 Interactive Elements
- **Hover Effects** - Subtle lift, tilt, and glow animations
- **Button Animations** - Shimmer effects and micro-interactions
- **Card Interactions** - Professional hover states with border glow

## 📁 Project Structure

```
volksways-spa/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Destinations.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎨 Design System

### Colors (Based on Logo)
- **Primary**: Professional Blue (#2563eb, #1d4ed8, #1e40af)
- **Secondary**: Neutral Grays (#64748b, #475569, #334155)
- **Accent**: Subtle Grays (#6b7280, #4b5563, #374151)
- **Background**: Clean White/Off-white

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Animations
- **Subtle and Professional**: Reduced motion for better UX
- **Hover Effects**: Gentle scale and shadow transitions
- **No Excessive Motion**: Footer and other sections use minimal animation

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd volksways-spa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install ReactBits dependencies**
   ```bash
   npm install ogl
   ```

4. **Configure Web3Forms**
   - Sign up at [Web3Forms](https://web3forms.com/)
   - Get your access key
   - Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `src/sections/Contact.jsx` with your actual key

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🌐 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** to configure your deployment

### Other Platforms
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Firebase Hosting**: Use Firebase CLI

## 📝 Customization

### Adding New Sections
1. Create a new component in `src/sections/`
2. Import and add it to `App.jsx`
3. Update the navigation in `Navbar.jsx`

### Modifying Colors
Update the color palette in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary colors
  },
  secondary: {
    // Your secondary colors
  }
}
```

### Adding New Countries/Destinations
Update the `countries` array in `src/sections/Destinations.jsx`

## 🔧 Configuration

### Web3Forms Setup
1. Visit [Web3Forms](https://web3forms.com/)
2. Create an account and get your access key
3. Replace the placeholder in `Contact.jsx`:
   ```javascript
   access_key: 'YOUR_ACTUAL_ACCESS_KEY_HERE'
   ```

### Google Analytics (Optional)
Add your Google Analytics tracking code to `index.html`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 SEO Features

- Semantic HTML structure
- Meta tags for description and keywords
- Open Graph tags (can be added)
- Structured data (can be added)
- Fast loading times with Vite

## 🧪 Testing

```bash
# Run linting
npm run lint

# Preview production build
npm run preview
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions about this project, please contact:
- Email: info@volksways.com
- Phone: +91 98765 43210

## 🎉 Acknowledgments

- Design inspiration from modern education websites
- Icons from React Icons
- Animations powered by Framer Motion
- Built with love for students pursuing European education

---

**Note**: Remember to replace placeholder content (like phone numbers, email addresses, and Web3Forms access key) with actual information before deploying to production.