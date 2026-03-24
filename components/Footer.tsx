"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-white/10 z-10 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="text-3xl font-black bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            The Juice Lab
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            The future of freshness. 100% pure, natural ingredients crafted for your wellbeing.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-6 text-xl tracking-wide">Shop</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link href="/" className="hover:text-orange-400 transition-colors">All Products</Link></li>
            <li><Link href="/order" className="hover:text-orange-400 transition-colors">Order & Subscriptions</Link></li>
            <li><Link href="/about" className="hover:text-orange-400 transition-colors">Our Story</Link></li>
            <li><Link href="/process" className="hover:text-orange-400 transition-colors">The Process</Link></li>
          </ul>
        </div>

        <div>
           <h4 className="font-semibold mb-6 text-xl tracking-wide">Support</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link href="#" className="hover:text-orange-400 transition-colors">FAQ</Link></li>
            <li><Link href="#" className="hover:text-orange-400 transition-colors">Shipping & Returns</Link></li>
            <li><Link href="#" className="hover:text-orange-400 transition-colors">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-6 text-xl tracking-wide">Stay Fresh</h4>
          <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Enter your email" className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 w-full text-sm focus:outline-none focus:border-orange-500 transition-colors" />
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-sm font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm flex flex-col items-center justify-center space-y-2">
        <span>© {new Date().getFullYear()} The Juice Lab. All rights reserved.</span>
        <span className="text-xs">Proudly crafted with Next.js and Framer Motion</span>
      </div>
    </footer>
  );
}
