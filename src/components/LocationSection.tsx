import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Compass, ExternalLink, Car, Waves, Mountain, Plane } from 'lucide-react';
import { NEARBY_ATTRACTIONS } from '../data/villaData';

export const LocationSection: React.FC = () => {
  const [selectedAttraction, setSelectedAttraction] = useState(NEARBY_ATTRACTIONS[0]);

  return (
    <section id="location" className="py-24 sm:py-32 bg-[#F5EFEB] text-[#2D2723]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B58554] font-semibold block mb-3">
            Prime Island Setting
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#2D2723] tracking-tight leading-tight">
            Located in Jimbaran, Bali
          </h2>
          <div className="w-16 h-0.5 bg-[#B58554]/40 mx-auto my-6" />
          <p className="text-base sm:text-lg text-[#5E5246] leading-relaxed">
            Positioned along the scenic Bukit peninsula hillside in Jimbaran. A tranquil haven that keeps you wonderfully close to Bali’s iconic ocean cliffs, sunset seafood shores, and rich heritage.
          </p>
        </div>

        {/* Location Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          {/* Detailed Narrative & Interactive Attraction List */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#E5DBCC] shadow-xs">
              <div className="flex items-center space-x-3 mb-4 text-[#B58554]">
                <Compass className="w-6 h-6" />
                <h3 className="text-xl font-serif font-semibold text-[#2D2723]">
                  The Charm of Jimbaran
                </h3>
              </div>
              <p className="text-sm text-[#5E5246] leading-relaxed mb-4">
                Historically a quaint Balinese fishing village, Jimbaran has blossomed into one of the island’s most prestigious and peaceful enclaves. Shielded from the heavy commotion of northern Kuta, it offers tranquil white sand bays, world-class dining, and rapid access to both the southern surf breaks of Uluwatu and the international airport.
              </p>
              <div className="p-4 rounded-xl bg-[#EFE6D8] border border-[#DFD5C4] flex items-center justify-between text-xs text-[#5C4E42]">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#B58554]" />
                  <span className="font-medium">Jl. Bukit Permai, Jimbaran, South Kuta, Bali</span>
                </div>
                <span className="font-semibold text-[#B58554]">80361 Indonesia</span>
              </div>
            </div>

            {/* Attractions Selector */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-[#7A6B5D] font-bold px-1">
                Nearby Attractions & Transit Times
              </h4>
              <div className="space-y-2">
                {NEARBY_ATTRACTIONS.map((attraction) => {
                  const isSelected = selectedAttraction.id === attraction.id;
                  return (
                    <div
                      key={attraction.id}
                      onClick={() => setSelectedAttraction(attraction)}
                      className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#FAF7F2] border-[#B58554] shadow-sm'
                          : 'bg-[#FAF7F2]/60 border-[#E8E1D7] hover:bg-[#FAF7F2] hover:border-[#D0C2AD]'
                      }`}
                      id={`attraction-item-${attraction.id}`}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-semibold ${
                            isSelected
                              ? 'bg-[#B58554] text-white'
                              : 'bg-[#EFE6D8] text-[#7A6B5D]'
                          }`}
                        >
                          <Navigation className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-serif font-semibold text-[#2D2723]">
                            {attraction.name}
                          </p>
                          <p className="text-xs text-[#7A6B5D]">{attraction.highlight}</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-3">
                        <span className="text-xs font-semibold text-[#B58554] block">
                          {attraction.driveTime}
                        </span>
                        <span className="text-[11px] text-[#A89886]">{attraction.distance}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active Attraction Spotlight Card & Visual Orientation */}
          <div className="lg:col-span-6 sticky top-24">
            <div className="bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#E5DBCC] shadow-md">
              <div className="relative aspect-16/10 bg-neutral-200">
                <img
                  src={selectedAttraction.imageUrl}
                  alt={selectedAttraction.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1C1713]/70 backdrop-blur-md text-white text-xs font-medium tracking-wide">
                  {selectedAttraction.category}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center space-x-2 text-xs text-[#E6C28B] mb-1 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Just {selectedAttraction.driveTime} drive from Athanaya Villa</span>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold drop-shadow-xs">
                    {selectedAttraction.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <p className="text-sm text-[#5E5246] leading-relaxed">
                  {selectedAttraction.description}
                </p>

                <div className="pt-4 border-t border-[#E8E1D7] flex flex-wrap items-center justify-between gap-4 text-xs">
                  <div className="flex items-center space-x-2 text-[#7A6B5D]">
                    <Car className="w-4 h-4 text-[#B58554]" />
                    <span>Private driver and scooter rentals available on-site</span>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      selectedAttraction.name + ' Bali'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-[#B58554] hover:text-[#9E6E3D] font-semibold"
                  >
                    <span>View on Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Travel Assistance Tag */}
            <div className="mt-4 p-4 rounded-2xl bg-[#EBE3D5] border border-[#DFD5C4] flex items-center justify-between text-xs text-[#5C4E42]">
              <div className="flex items-center space-x-3">
                <Plane className="w-4 h-4 text-[#B58554]" />
                <span>Airport pickup & drop-off can be arranged with our team</span>
              </div>
              <span className="font-semibold text-[#B58554]">18 mins away</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
