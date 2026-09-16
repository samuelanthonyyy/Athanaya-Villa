import React, { useState } from 'react';
import { Users, Bed, Maximize2, Waves, ArrowRight, Check, Sparkles, X } from 'lucide-react';
import { VillaRoom, Currency } from '../types';
import { VILLA_ROOMS } from '../data/villaData';

interface RoomsProps {
  currency: Currency;
  onSelectRoomForBooking: (roomId: string) => void;
}

export const Rooms: React.FC<RoomsProps> = ({ currency, onSelectRoomForBooking }) => {
  const [activeModalRoom, setActiveModalRoom] = useState<VillaRoom | null>(null);

  const formatPrice = (room: VillaRoom) => {
    if (currency === 'IDR') {
      return `IDR ${room.priceIdr.toLocaleString('id-ID')}`;
    }
    return `$${room.priceUsd}`;
  };

  return (
    <section id="rooms" className="py-24 sm:py-32 bg-[#F5EFEB] text-[#2D2723]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B58554] font-semibold block mb-3">
            Private Sanctuaries
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#2D2723] tracking-tight leading-tight">
            Our Luxury Villas & Suites
          </h2>
          <div className="w-16 h-0.5 bg-[#B58554]/40 mx-auto my-6" />
          <p className="text-base sm:text-lg text-[#5E5246] leading-relaxed">
            Designed for uncompromised privacy, each villa combines open-concept Balinese living with contemporary air-conditioned master retreats and individual private swimming pools.
          </p>
        </div>

        {/* 3 Room Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          {VILLA_ROOMS.map((room) => (
            <div
              key={room.id}
              className="bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#E5DBCC] shadow-sm hover:shadow-xl hover:border-[#C89B6D]/60 transition-all duration-300 flex flex-col group"
              id={`room-card-${room.id}`}
            >
              {/* Villa Hero Image */}
              <div className="relative aspect-16/10 overflow-hidden bg-neutral-200">
                <img
                  src={room.image}
                  alt={room.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1C1713]/70 backdrop-blur-md text-white text-xs font-medium tracking-wider">
                  {room.category}
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-[#FAF7F2]/95 backdrop-blur-sm shadow-md text-[#2D2723] text-right">
                  <span className="text-xs text-[#7A6B5D] block">Starting from</span>
                  <span className="text-base font-serif font-bold text-[#B58554]">
                    {formatPrice(room)}
                  </span>
                  <span className="text-[10px] text-[#7A6B5D]"> / night</span>
                </div>
              </div>

              {/* Villa Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#7A6B5D] mb-2 font-medium">
                    <span>{room.tagline}</span>
                    <span className="font-serif italic">{room.size}</span>
                  </div>

                  <h3 className="text-2xl font-serif font-semibold text-[#2D2723] mb-3">
                    {room.name}
                  </h3>

                  <p className="text-sm text-[#66594C] leading-relaxed mb-6">
                    {room.description}
                  </p>

                  {/* Key Specifications */}
                  <div className="grid grid-cols-2 gap-3 py-4 border-y border-[#E8E1D7] text-xs text-[#4A4036] mb-6">
                    <div className="flex items-center space-x-2">
                      <Bed className="w-4 h-4 text-[#B58554]" />
                      <span>{room.bedrooms} {room.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-[#B58554]" />
                      <span>Up to {room.maxGuests} Guests</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Maximize2 className="w-4 h-4 text-[#B58554]" />
                      <span>{room.size} Living Area</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Waves className="w-4 h-4 text-[#B58554]" />
                      <span>Private Pool</span>
                    </div>
                  </div>

                  {/* Highlights Bullet list */}
                  <ul className="space-y-2 mb-8">
                    {room.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-[#5E5246]">
                        <Check className="w-3.5 h-3.5 text-[#B58554] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectRoomForBooking(room.id)}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#B58554] hover:bg-[#9E6E3D] text-white text-xs uppercase tracking-widest font-semibold transition-all duration-200 shadow-sm flex items-center justify-center space-x-2 cursor-pointer"
                    id={`book-room-btn-${room.id}`}
                  >
                    <span>Reserve This Villa</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveModalRoom(room)}
                    className="w-full py-2.5 px-4 rounded-xl border border-[#D9CFBE] hover:bg-[#EFE6D8] text-[#5C4E42] text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer"
                  >
                    View Details & Features
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Complimentary Guest Inclusions Banner */}
        <div className="mt-16 bg-[#EBE3D5] rounded-2xl p-6 sm:p-8 border border-[#DFD5C4] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#B58554] text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-medium text-[#2D2723]">
                Every Villa Stay Includes
              </h4>
              <p className="text-xs sm:text-sm text-[#5E5246]">
                Welcome tropical drinks, daily in-villa breakfast, afternoon tea, high-speed fiber Wi-Fi, and 24/7 dedicated butler service.
              </p>
            </div>
          </div>
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B58554] shrink-0">
            Guaranteed Best Direct Rate
          </div>
        </div>
      </div>

      {/* Villa Details Modal */}
      {activeModalRoom && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
          onClick={() => setActiveModalRoom(null)}
        >
          <div
            className="bg-[#FAF7F2] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-[#E3DAC9] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalRoom(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#EFE6D8] text-[#5C4E42] hover:bg-[#B58554] hover:text-white transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs uppercase tracking-widest text-[#B58554] font-semibold">
              {activeModalRoom.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#2D2723] mt-1 mb-2">
              {activeModalRoom.name}
            </h3>
            <p className="text-sm text-[#7A6B5D] italic mb-6">
              {activeModalRoom.tagline} • {activeModalRoom.size}
            </p>

            {/* Modal Image Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <div className="rounded-xl overflow-hidden aspect-4/3 sm:aspect-auto sm:h-36">
                <img
                  src={activeModalRoom.image}
                  alt={activeModalRoom.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {activeModalRoom.additionalImages?.map((imgUrl, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden aspect-4/3 sm:aspect-auto sm:h-36">
                  <img
                    src={imgUrl}
                    alt={`${activeModalRoom.name} space ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            <p className="text-sm text-[#5E5246] leading-relaxed mb-6">
              {activeModalRoom.description}
            </p>

            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#2D2723] mb-3">
              Included Amenities & Villa Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {activeModalRoom.features.concat(activeModalRoom.highlights).map((feat, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs text-[#5E5246]">
                  <Check className="w-3.5 h-3.5 text-[#B58554] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#E8E1D7]">
              <div>
                <span className="text-xs text-[#7A6B5D] block">Price per night</span>
                <span className="text-xl font-serif font-bold text-[#B58554]">
                  {formatPrice(activeModalRoom)}
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  const id = activeModalRoom.id;
                  setActiveModalRoom(null);
                  onSelectRoomForBooking(id);
                }}
                className="px-6 py-3 rounded-xl bg-[#B58554] hover:bg-[#9E6E3D] text-white text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
              >
                Reserve This Villa
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
