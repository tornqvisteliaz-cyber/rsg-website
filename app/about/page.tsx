"use client";

import React from 'react';
import { useStore } from '@/lib/store';
import { Users, Target, Award } from 'lucide-react';

export default function AboutPage() {
  const { aboutContent, siteSettings } = useStore();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="max-w-3xl mb-16">
        <div className="uppercase tracking-[4px] text-xs text-white/50 mb-3">OUR STORY</div>
        <h1 className="text-7xl font-semibold tracking-tighter mb-6">{aboutContent.title}</h1>
        <p className="text-2xl text-white/80">{aboutContent.intro}</p>
      </div>

      <div className="grid md:grid-cols-5 gap-x-16 gap-y-16">
        <div className="md:col-span-3 space-y-16">
          <div>
            <div className="flex items-center gap-3 mb-4 text-white/60">
              <Target className="w-5 h-5" /> <span className="uppercase tracking-widest text-xs font-semibold">MISSION</span>
            </div>
            <p className="text-xl leading-relaxed text-white/90">{aboutContent.mission}</p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4 text-white/60">
              <Award className="w-5 h-5" /> <span className="uppercase tracking-widest text-xs font-semibold">OUR JOURNEY</span>
            </div>
            <p className="text-xl leading-relaxed text-white/90">{aboutContent.story}</p>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="sticky top-24 card rounded-3xl p-9">
            <div className="uppercase tracking-[3px] text-xs mb-4 text-white/50">THE TEAM</div>
            <p className="text-lg text-white/90 leading-relaxed">{aboutContent.team}</p>
            
            <div className="mt-10 pt-8 border-t border-white/10 text-sm text-white/60">
              Founded in 2025 • Based in Sweden
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 pt-16 border-t border-white/10 text-center">
        <div className="text-sm text-white/50 mb-2">INTERESTED IN WORKING WITH US?</div>
        <a href="https://discord.gg/rsg" className="text-xl font-medium hover:underline">Reach out on Discord →</a>
      </div>
    </div>
  );
}