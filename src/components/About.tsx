import React from 'react';
import { Shield, Sparkles, SunMedium, Compass, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const corePillars = [
    {
      icon: Shield,
      title: 'Unrivaled Privacy',
      subtitle: 'Your Secluded Compound',
      description:
        'Concealed behind traditional Balinese limestone gates, each villa is an entirely self-contained compound. Indulge in complete seclusion with no shared corridors or overlooking balconies.',
    },
    {
      icon: Sparkles,
      title: 'Artisan Comfort',
      subtitle: 'Refined Tropical Living',
      description:
        'Every detail honors island craftsmanship—hand-carved teak wood, custom terrazzo deep-soak bathtubs, 400-thread count cotton sheets, and quiet inverter air-conditioning.',
    },
    {
      icon: SunMedium,
      title: 'Tropical Atmosphere',
      subtitle: 'Lush Flora & Serene Waters',
      description:
        'Surrounded by frangipani blossoms, golden bamboo, and swaying palms. Wake to gentle tropical bird songs and soak under sunny skies in your private plunge pool.',
    },
    {
      icon: Compass,
      title: 'Prime Jimbaran Location',
      subtitle: 'Tranquil Yet Connected',
      description:
        'Perched on the breezy Jimbaran hillside. Minutes from the celebrated seafood shorelines of Jimbaran Bay, the majestic GWK Cultural Park, and Uluwatu cliff temples.',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FAF7F2] text-[#2D2723] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B58554] font-semibold block mb-3">
            Welcome to Our Sanctuary
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#2D2723] tracking-tight leading-tight">
            An Artistic Haven of Stillness <br />
            <span className="italic text-[#8C6D4C]">in South Bali</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#B58554]/40 mx-auto my-6" />
          <p className="text-base sm:text-lg text-[#5E5246] leading-relaxed font-normal">
            Rooted in the ancient Balinese philosophy of <em>Tri Hita Karana</em>—harmony between humans, nature, and the spiritual realm—Athanaya Villa was created as an intimate artistic retreat for mindful travelers seeking genuine rest, local soul, and understated luxury.
          </p>
        </div>

        {/* Narrative & Visual Storytelling Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Visual Showcase with Balinese craftsmanship and garden */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3 sm:aspect-16/11">
              <img
                src="/images/bali_villa_main_building.jpg"
                alt="Athanaya Villa traditional Balinese main pavilion and tranquil pool at twilight"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md text-[#2D2723] border border-white/50 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#B58554]">Crafted with Soul</p>
                  <p className="text-sm font-medium">Traditional Balinese pavilion & teak woodwork</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#7A6B5D] font-serif italic">Jimbaran • Bali</span>
                </div>
              </div>
            </div>

            {/* Small floating detail accent */}
            <div className="hidden sm:block absolute -top-6 -right-6 w-48 rounded-xl overflow-hidden shadow-lg border-4 border-[#FAF7F2]">
              <img
                src="/images/bali_villa_bathroom.jpg"
                alt="Balinese stone bath with frangipani petals"
                referrerPolicy="no-referrer"
                className="w-full h-32 object-cover"
              />
            </div>
          </div>

          {/* Narrative Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3 py-1 rounded-md bg-[#EFE6D8] text-[#8C6D4C] text-xs font-semibold tracking-wider uppercase">
              The Athanaya Story
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#2D2723] leading-snug">
              Where traditional Balinese artistry meets contemporary barefoot luxury.
            </h3>
            <p className="text-[#5E5246] leading-relaxed">
              Tucked away from the crowded tourist corridors of South Bali, Athanaya Villa is located in the gentle residential hills of Jimbaran. We envisioned an enclave where travelers can decelerate: waking up to sunlight bouncing off pool waters, savoring tropical fruit bowls served on floating bamboo trays, and hearing the distant chants of coastal temples.
            </p>
            <p className="text-[#5E5246] leading-relaxed">
              Every villa has been curated with bespoke artwork, handcrafted furniture by Ubud woodcarvers, and native garden landscaping featuring blooming frangipani and heliconia flowers that offer both fragrant shade and complete privacy.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-sm font-medium text-[#4A4036]">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#B58554] shrink-0" />
                <span>100% Private Pool in Every Villa</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#B58554] shrink-0" />
                <span>Authentic Local Hospitality</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#B58554] shrink-0" />
                <span>Minutes to Jimbaran Bay</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#B58554] shrink-0" />
                <span>Eco-Mindful Amenities</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid (Privacy, Comfort, Tropical Atmosphere, Location) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {corePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-[#F2ECE1] border border-[#E3DAC9] rounded-2xl p-6 sm:p-8 hover:bg-white hover:border-[#D0C2AD] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                id={`about-pillar-${index}`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#E5DBCC] group-hover:bg-[#B58554] text-[#8C6D4C] group-hover:text-white flex items-center justify-center mb-5 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-[#A89886] font-semibold mb-1">
                    {pillar.subtitle}
                  </p>
                  <h4 className="text-xl font-serif font-semibold text-[#2D2723] mb-3">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-[#66594C] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
