# Nano Banana 🍌
*The Future of Freshness.*

A pristine, high-end "Scrollytelling" e-commerce website designed for a premium juice brand. Built as a single-page interactive experience using:
- **Next.js 14+** (App Router)
- **Tailwind CSS** (Styling & Utilities)
- **Framer Motion** (Subtle layout transitions & scroll hooks)
- **HTML5 Canvas** (Used for a flawless 120-frame image playback effect mapped perfectly to scroll physics).

## Features
- **Scroll-Controlled Fluid Animations**: As the user scrolls downwards, 120 high-definition frames play dynamically to reveal the beautiful splash and swirling of fruit juice. 
- **Flawless Sticky Engineering**: Bypassed CSS limitations to keep the animation sticky inside full-page transitioned motion containers.
- **Dynamic CSS Filtering**: Switches hue-based CSS filters in real-time matching the juice flavors (Mango -> Bright Orange, Chocolate -> Velvety Brown, Pomegranate -> Ruby Red).
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

Enjoy exploring the world of Nano Banana fruit juices!
