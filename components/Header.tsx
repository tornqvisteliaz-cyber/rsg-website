"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useStore } from '@/lib/store';
import { Menu, X, LogOut, Settings } from 'lucide-react';

export default function Header() {
  const { siteSettings, menuItems, currentUser, logout, isAdmin } = useStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const visibleMenuItems = [...menuItems]
    .filter(item => item.visible)
    .sort((a, b) => a.order - b.order);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-rsg-dark/95 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div 
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl"
            style={{ backgroundColor: siteSettings.accentColor }}
          >
            {siteSettings.logoText}
          </div>
          <div>
            <div className="font-semibold text-white tracking-tight">{siteSettings.companyName}</div>
            <div className="text-[10px] text-white/50 -mt-1">SIMULATION GROUP</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {visibleMenuItems.map((item) => (
            <Link 
              key={item.id} 
              href={item.href}
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <a 
            href="https://discord.gg/rsg" 
            target="_blank"
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 text-sm font-medium transition-all border border-white/10"
          >
            Join Discord
          </a>

          {currentUser ? (
            <div className="flex items-center gap-3">
              {isAdmin && (
                <Link 
                  href="/admin"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-rsg-dark text-sm font-semibold hover:bg-white/90 transition-all"
                >
                  <Settings className="w-4 h-4" />
                  Admin
                </Link>
              )}
              <button 
                onClick={logout}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-sm font-medium transition-all border border-white/10"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden md:inline">Logga ut</span>
              </button>
            </div>
          ) : (
            <Link 
              href="/login"
              className="px-6 py-2 rounded-full bg-white text-rsg-dark text-sm font-semibold hover:bg-white/90 transition-all"
            >
              Logga in
            </Link>
          )}

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-rsg-dark/98 px-6 py-6">
          <nav className="flex flex-col gap-4 text-lg">
            {visibleMenuItems.map((item) => (
              <Link 
                key={item.id} 
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/90 hover:text-white py-1"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a href="https://discord.gg/rsg" className="text-white/80">Join Discord</a>
              {!currentUser && (
                <Link href="/login" className="text-white/80">Logga in</Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}