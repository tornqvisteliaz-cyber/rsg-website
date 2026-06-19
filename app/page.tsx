"use client";

import React from 'react';
import Link from 'next/link';
import { useStore } from '@/lib/store';
import { ArrowRight, Plane, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const { siteSettings, products, posts } = useStore();

  const publishedPosts = posts.filter(p => p.published).slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section 
        className="relative min-h-[100dvh] flex items-center justify-center bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(10,15,26,0.75), rgba(10,15,26,0.85)), url('${siteSettings.heroImage}')` 
        }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center pt-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md mb-6 border border-white/20">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium tracking-widest">MICROSOFT FLIGHT SIMULATOR 2024</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter mb-6">
            {siteSettings.heroTitle}
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-white/80 mb-10">
            {siteSettings.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/aircraft" 
              className="btn-primary inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl text-lg font-semibold group"
            >
              Explore Aircraft
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </Link>
            <Link 
              href="/roadmap" 
              className="btn-secondary inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-lg font-semibold"
            >
              View Roadmap
            </Link>
          </div>

          <div className="mt-16 flex justify-center gap-10 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <Plane className="w-4 h-4" /> Premium Quality
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" /> Community Driven
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" /> MSFS 2024 Ready
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 text-xs tracking-[3px]">
          SCROLL TO DISCOVER
          <div className="h-px w-6 bg-white/30 mt-2" />
        </div>
      </div>

      {/* Project Cards / Featured */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="uppercase tracking-[3px] text-xs font-semibold text-white/50 mb-2">CURRENT PROJECTS</div>
            <h2 className="text-5xl font-semibold tracking-tight">On the Horizon</h2>
          </div>
          <Link href="/aircraft" className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-white/80">
            See all projects <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Main Project Card */}
          <Link href="/aircraft" className="group relative overflow-hidden rounded-3xl aspect-[16/10] bg-zinc-900">
            <img 
              src={products[0]?.image || siteSettings.heroImage} 
              alt="Fokker VFW 614" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90" />
            
            <div className="absolute bottom-0 left-0 right-0 p-10">
              <div className="uppercase text-xs tracking-[4px] text-white/70 mb-3">IN DEVELOPMENT • MSFS 2024</div>
              <h3 className="text-white text-5xl font-semibold tracking-tighter mb-3">Fokker VFW 614</h3>
              <p className="text-white/80 max-w-md text-lg">The legendary German short-haul jet. Now faithfully recreated for the most advanced flight simulator ever made.</p>
              
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
                DISCOVER THE AIRCRAFT <ArrowRight />
              </div>
            </div>
          </Link>

          {/* Side info cards */}
          <div className="space-y-6">
            <div className="card rounded-3xl p-9 h-full flex flex-col justify-between">
              <div>
                <div className="text-emerald-400 text-sm font-semibold tracking-widest mb-1">Q3 2026</div>
                <div className="text-3xl font-semibold tracking-tight mb-4">Early Access Available</div>
                <p className="text-white/70">Be among the first to experience the VFW 614 in MSFS 2024. Early Access includes the full aircraft with ongoing updates.</p>
              </div>
              <Link href="/aircraft" className="mt-8 text-sm font-semibold flex items-center gap-2 text-white/90 hover:text-white">
                LEARN MORE <ArrowRight size={15} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="card rounded-3xl p-8">
                <div className="text-4xl font-semibold tracking-tighter mb-1">40-44</div>
                <div className="text-white/70">Passengers</div>
              </div>
              <div className="card rounded-3xl p-8">
                <div className="text-4xl font-semibold tracking-tighter mb-1">Mach 0.65</div>
                <div className="text-white/70">Cruise Speed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Preview */}
      {publishedPosts.length > 0 && (
        <section className="bg-rsg-darker py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center mb-10">
              <div>
                <div className="text-xs tracking-[3px] uppercase text-white/50 mb-1">FROM THE HANGAR</div>
                <h3 className="text-4xl font-semibold tracking-tight">Latest Updates</h3>
              </div>
              <Link href="/news" className="text-sm flex items-center gap-2 hover:text-white/80">All News <ArrowRight size={16}/></Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {publishedPosts.map((post, index) => (
                <Link key={index} href="/news" className="card group rounded-3xl overflow-hidden flex flex-col">
                  <div className="aspect-video relative overflow-hidden">
                    <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <div className="text-xs text-white/50 mb-2">{new Date(post.date).toLocaleDateString('sv-SE', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                    <h4 className="font-semibold text-xl tracking-tight mb-3 line-clamp-2 group-hover:text-white/90">{post.title}</h4>
                    <p className="text-white/70 text-[15px] line-clamp-3 flex-1">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="text-sm uppercase tracking-[4px] text-white/50 mb-3">JOIN THE JOURNEY</div>
        <h2 className="text-6xl font-semibold tracking-tighter mb-6">Ready to fly the VFW 614?</h2>
        <p className="text-xl text-white/70 max-w-lg mx-auto mb-10">Get early access today and be part of shaping the future of this unique aircraft simulation.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/aircraft" className="btn-primary px-14 py-4 rounded-2xl text-lg font-semibold inline-flex items-center justify-center gap-3">
            Get Early Access
          </Link>
          <a href="https://discord.gg/rsg" className="btn-secondary px-10 py-4 rounded-2xl text-lg font-semibold inline-flex items-center justify-center gap-3">
            Join our Discord
          </a>
        </div>
      </section>
    </div>
  );
}