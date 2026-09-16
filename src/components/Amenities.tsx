import React from 'react';
import { Waves, Coffee, Sparkles, UserCheck, Wifi, Utensils } from 'lucide-react';
import { VILLA_AMENITIES } from '../data/villaData';

const iconMap: Record<string, React.ElementType> = {
  Waves,
  Coffee,
  Sparkles,
  UserCheck,
  Wifi,
  Utensils,
};

export const Amenities: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF7F2] text-[#2D2723] border-b border-[#E8E1D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B58554] font-semibold block mb-2">
            The Athanaya Experience
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-normal text-[#2D2723]">
            Signature Guest Amenities
          </h2>
          <p className="text-sm text-[#7A6B5D] mt-3">
            Every moment thoughtfully tailored to offer you effortless comfort and authentic Balinese tranquility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VILLA_AMENITIES.map((amenity, index) => {
            const Icon = iconMap[amenity.icon] || Sparkles;
            return (
              <div
                key={amenity.title}
                className="p-6 rounded-2xl bg-[#F5EFEB] border border-[#E5DBCC] hover:bg-white hover:shadow-md transition-all duration-300 flex items-start space-x-4"
                id={`amenity-card-${index}`}
              >
                <div className="w-11 h-11 rounded-xl bg-[#E8DEC9] text-[#B58554] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-lg text-[#2D2723] mb-1">
                    {amenity.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#66594C] leading-relaxed">
                    {amenity.desc}
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
