import React, { useState } from 'react';
import { MapPin, Calendar, Users, ArrowRight, ShieldCheck, Sparkles, Waves } from 'lucide-react';
import baliAmbienceHero from '../assets/images/bali_ambience_hero_1789527882152.jpg';

interface HeroProps {
  onBookClick: () => void;
  onExploreVillas: () => void;
}

interface HeroScene {
  id: string;
  name: string;
  subtitle: string;
  url: string;
  alt: string;
}

const HERO_SCENES: HeroScene[] = [
  {
    id: 'bali-villa-ambience',
    name: 'Jimbaran Twilight Ambiance',
    subtitle: 'Private infinity pool, glowing amber lanterns & sunset glow',
    url: baliAmbienceHero,
    alt: 'Serene Bali luxury villa ambiance at golden hour twilight with warm glowing stone lanterns and turquoise infinity pool overlooking Jimbaran hills',
  },
  {
    id: 'bali-villa-main',
    name: 'Balinese Pavilion & Pool',
    subtitle: 'Alang-alang thatched roofs, teak columns & candlelit water',
    url: '/images/bali_villa_main_building.jpg',
    alt: 'Traditional Balinese villa main building and private pool illuminated by warm lanterns at twilight',
  },
  {
    id: 'bali-joglo-living',
    name: 'Teak Joglo Living Pavilion',
    subtitle: 'Soaring hand-carved woodwork & softly glowing ambient lanterns',
    url: '/images/bali_villa_living_room.jpg',
    alt: 'Traditional open-air Balinese joglo living room with carved teak beams and amber woven lanterns',
  },
];

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreVillas }) => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const activeScene = HERO_SCENES[activeSceneIndex];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with warm cinematic gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          key={activeScene.id}
          src={activeScene.url}
          alt={activeScene.alt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-all duration-1000 ease-out"
        />
        {/* Balanced multilayer gradient for rich Bali golden-hour warmth and typography legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1713]/90 via-[#1C1713]/35 to-[#1C1713]/50" />
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-black/15 to-black/55" />
      </div>

      {/* Ambiance Scene Indicator & Switcher */}
      <div className="absolute top-24 sm:top-28 right-4 sm:right-8 z-20 hidden md:flex items-center space-x-2 bg-black/45 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs text-white/90 shadow-lg">
        <Sparkles className="w-3.5 h-3.5 text-[#E6C28B] animate-pulse" />
        <span className="font-light tracking-wide">{activeScene.name}</span>
        <span className="text-white/30">|</span>
        <button
          type="button"
          onClick={() => setActiveSceneIndex((prev) => (prev + 1) % HERO_SCENES.length)}
          className="text-[#E6C28B] hover:text-white transition-colors cursor-pointer font-medium tracking-wide underline underline-offset-2"
          title="Switch Bali ambiance view"
        >
          Change Ambiance
        </button>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center flex flex-col items-center">
        {/* Location Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs sm:text-sm font-medium tracking-widest uppercase mb-6 animate-fade-in">
          <MapPin className="w-3.5 h-3.5 text-[#E6C28B]" />
          <span>Jimbaran, Bali, Indonesia</span>
        </div>

        {/* Villa Name & Headline */}
        <h2 className="text-[#E6C28B] text-lg sm:text-xl md:text-2xl font-sans tracking-[0.3em] uppercase font-light mb-3">
          Athanaya Villa
        </h2>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white font-normal tracking-tight leading-[1.08] max-w-4xl mb-6">
          Your Private Experience <br />
          <span className="italic font-light text-[#F7EBD9]">in Jimbaran</span>
        </h1>

        {/* Short Description */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-200/90 font-light max-w-2xl leading-relaxed mb-10">
          An artistic tropical sanctuary hidden amidst the tranquil hills of Jimbaran. Experience secluded private pool villas, authentic Balinese stone craftsmanship, and personalized island hospitality.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#B58554] hover:bg-[#9E6E3D] text-white text-sm font-semibold tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center space-x-3"
            id="hero-book-now-btn"
          >
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onExploreVillas}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-sm border border-white/30 text-sm font-medium tracking-widest uppercase transition-all duration-300 cursor-pointer"
            id="hero-explore-villas-btn"
          >
            Explore Villas
          </button>
        </div>

        {/* Quick Value Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-16 pt-8 border-t border-white/15 text-neutral-200 text-xs sm:text-sm w-full max-w-3xl">
          <div className="flex items-center justify-center space-x-2.5">
            <Waves className="w-4 h-4 text-[#E6C28B]" />
            <span>100% Private Pool in Every Villa</span>
          </div>
          <div className="flex items-center justify-center space-x-2.5">
            <Sparkles className="w-4 h-4 text-[#E6C28B]" />
            <span>Artisan Balinese Architecture</span>
          </div>
          <div className="flex items-center justify-center space-x-2.5">
            <ShieldCheck className="w-4 h-4 text-[#E6C28B]" />
            <span>5 Mins to Jimbaran Bay Sunset</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator prompt */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-widest text-white/80 mb-1">Scroll to Discover</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/40 flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-[#E6C28B] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
