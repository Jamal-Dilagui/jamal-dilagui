# Jamal-Eddine Dilagui - Portfolio Website

A world-class personal portfolio website built with Next.js 14, TailwindCSS, and Framer Motion. This portfolio showcases Jamal-Eddine's skills as a Front-End Developer specializing in React.js and Next.js.

## 🚀 Features

- **Modern Design**: Clean, professional, and responsive design
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Interactive Animations**: Smooth scroll-triggered animations using Framer Motion
- **Sticky Navigation**: Navigation with active section highlighting
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Mobile First**: Fully responsive design for all devices
- **Performance Optimized**: Fast loading times and optimized assets
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Interactive project cards with filtering
- **Skills Visualization**: Animated skill bars and tech stack icons
- **Experience Timeline**: Interactive career timeline

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom components with Radix UI primitives
- **Theme**: next-themes for dark/light mode
- **TypeScript**: Full type safety
- **Deployment**: Vercel ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jamal-eddine-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
├── app/
│   ├── globals.css          # Global styles and TailwindCSS
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── sections/            # Page sections
│   │   ├── hero.tsx         # Hero section
│   │   ├── about.tsx        # About section
│   │   ├── skills.tsx       # Skills section
│   │   ├── experience.tsx   # Experience timeline
│   │   ├── projects.tsx     # Projects showcase
│   │   └── contact.tsx      # Contact form
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   ├── navigation.tsx       # Navigation component
│   ├── theme-toggle.tsx     # Theme switcher
│   └── theme-provider.tsx   # Theme provider
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
└── package.json
```

## 🎨 Customization

### Colors and Theme
The portfolio uses a custom color scheme defined in `tailwind.config.js`:
- Primary: Blue gradient (#3B82F6 to #1E40AF)
- Secondary: Dark blue (#1E40AF)
- Accent: Orange (#F59E0B)

### Content Updates
1. **Personal Information**: Update the content in each section component
2. **Projects**: Modify the `projects` array in `components/sections/projects.tsx`
3. **Experience**: Update the `experiences` array in `components/sections/experience.tsx`
4. **Skills**: Modify the `skillCategories` in `components/sections/skills.tsx`
5. **Contact**: Update contact information in `components/sections/contact.tsx`

### Styling
- Global styles are in `app/globals.css`
- Component-specific styles use TailwindCSS classes
- Custom animations are defined in `tailwind.config.js`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Environment Variables

Create a `.env.local` file for any environment-specific configurations:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: jamaldilagui.dev@gmail.com
- **LinkedIn**: [Jamal-Eddine Dilagui](https://www.linkedin.com/in/jamal-eddine-dilagui)
- **Phone**: +212 638760629

---

Built with ❤️ by Jamal-Eddine Dilagui
