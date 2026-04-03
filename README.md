# Yoder Construction Inc. Website

Premium custom deck and outdoor living space builder website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Hero Video Background** with Safari optimizations
- **Responsive Design** - Mobile-first approach
- **Framer Motion Animations** - Smooth scroll effects and transitions  
- **Local SEO Pages** - Service area landing pages (Carlsbad, etc.)
- **Contact Forms** - EmailJS integration for lead generation
- **Image Galleries** - Lightbox functionality for project showcases
- **Static Export** - Optimized for fast hosting on SiteGround

## 🛠️ Development

### Local Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build
```bash
npm run build
```
Generates static files in the `out/` directory ready for hosting.

### Test Static Build
```bash
npm run build
cd out && python3 -m http.server 8080
```
Test the production build at [http://localhost:8080](http://localhost:8080)

## 🚀 Deployment

### Automated Deployment (Recommended)
- **GitHub** → **DeployHQ** → **SiteGround**
- Push to `main` branch triggers automatic deployment
- Build configuration in `deploy.json`

### Manual Deployment
Upload the contents of the `out/` folder to your SiteGround `public_html` directory.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/             # About Us page
│   ├── services/          # Service pages (decks, patio covers, outdoor living)
│   ├── service-areas/     # Local SEO pages (Carlsbad, etc.)
│   ├── our-work/          # Portfolio gallery
│   └── request-consultation/ # Contact form
├── components/            # Reusable components
│   ├── ui/               # UI components (Navbar, Footer, etc.)
│   └── animations/       # Animation components (ScrollReveal, HeroVideo)
└── styles/               # Global CSS and Tailwind config

public/
└── images/               # Optimized images and video assets
```

## 🎨 Key Technologies

- **Next.js 14** (App Router)
- **TypeScript** for type safety
- **Tailwind CSS** for styling  
- **Framer Motion** for animations
- **EmailJS** for contact forms
- **Static Export** for hosting compatibility

## 📧 Contact Form

The contact form uses EmailJS for serverless form submission. Configure your EmailJS settings in the request consultation page.

---

**Built for Yoder Construction Inc. - Premium outdoor living spaces in Southern California**
