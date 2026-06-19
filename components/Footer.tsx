"use client";

import React from 'react';
import { useStore } from '@/lib/store';

export default function Footer() {
  const { siteSettings } = useStore();

  return (
    <footer className="bg-rsg-darker border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: siteSettings.accentColor }}
              >
                {siteSettings.logoText}
              </div>
              <span className="font-semibold text-xl tracking-tight">{siteSettings.companyName}</span>
            </div>
            <p className="text-white/60 max-w-xs text-sm">
              Premium flight simulation for Microsoft Flight Simulator 2024.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8 text-sm">
            <div>
              <div className="font-semibold mb-3 text-white/90">Company</div>
              <div className="space-y-2 text-white/60">
                <div>About</div>
                <div>Roadmap</div>
                <div>News</div>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-3 text-white/90">Products</div>
              <div className="space-y-2 text-white/60">
                <div>Aircraft</div>
                <div>Features</div>
                <div>Gallery</div>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-3 text-white/90">Community</div>
              <div className="space-y-2 text-white/60">
                <a href="https://discord.gg/rsg" className="hover:text-white">Discord</a>
                <div>Forum</div>
                <div>Support</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          {siteSettings.footerText}
        </div>
      </div>
    </footer>
  );
}