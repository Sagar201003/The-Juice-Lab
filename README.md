# The Juice Lab 🔬
*The Future of Freshness.*

**Live Deployment:** [https://the-juice-lab.vercel.app/](https://the-juice-lab.vercel.app/)

A pristine, high-end "Scrollytelling" e-commerce website designed for a premium juice brand. Built as a multi-route interactive experience using:
- **Next.js 14+** (App Router)
- **Tailwind CSS** (Styling & Utilities)
- **Framer Motion** (Subtle layout transitions & scroll hooks)
- **HTML5 Canvas** (Used for a flawless 240-frame image playback effect mapped perfectly to scroll physics).

## Features
- **Scroll-Controlled Fluid Animations**: As the user scrolls downwards on the home page, 240 high-definition frames play dynamically to reveal the beautiful splash and swirling of fruit juice. 
- **Flawless Sticky Engineering**: Bypassed CSS limitations to keep the animation sticky inside full-page transitioned motion containers.
- **Multiple Genuine Flavors**: 240 distinct image frames loaded contextually for Cream Mango, Dutch Chocolate, and Ruby Pomegranate flavours, offering a hyper-realistic experience without CSS filter hacks.
- **Interactive Order Experience**: A stateful `/order` page featuring dynamic glassmorphic product selector cards, subscription toggles, and live cart mathematics.
- **Engaging Brand Pages**: Dedicated `/about` (Our Story) and `/process` (The Process) routes detailing the High Pressure Processing (HPP) techniques with cinematic scale animations and scroll reveals.
- **Fully Responsive**: Flawless interaction and legibility on mobile and desktop viewports.
- **Production Ready STATIC EXPORT**: Next.js is explicitly configured to output a drop-ready static `export` folder with zero image unoptimization issues.

## Environment & Executing
This project uses **Node.js** as its core environment.
You do NOT need to push `node_modules` (the local environment logic) to GitHub! The exact dependencies needed to flawlessly reproduce the environment are safely bound into `package.json`.

To rebuild the environment on any machine, just type:
```bash
npm install
```

To run a live "Hot-Reloading" Development Server:
```bash
npm run dev
```

To create a static production drop locally:
```bash
npm run build
npx serve@latest out
```

Enjoy exploring the world of The Juice Lab fruit juices!
