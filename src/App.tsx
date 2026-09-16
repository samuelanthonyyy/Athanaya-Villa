import React, { useState } from 'react';
import { Currency } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Rooms } from './components/Rooms';
import { Amenities } from './components/Amenities';
import { Gallery } from './components/Gallery';
import { LocationSection } from './components/LocationSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [currency, setCurrency] = useState<Currency>('IDR');
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === 'IDR' ? 'USD' : 'IDR'));
  };

  const scrollToBooking = (roomId?: string) => {
    if (roomId) {
      setSelectedRoomId(roomId);
    }
    const bookingElement = document.getElementById('contact');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRooms = () => {
    const roomsElement = document.getElementById('rooms');
    if (roomsElement) {
      roomsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D2723] flex flex-col selection:bg-[#B58554]/20 selection:text-[#5E3F1F]">
      {/* Responsive Sticky Header Navigation */}
      <Navbar
        currency={currency}
        onToggleCurrency={toggleCurrency}
        onBookClick={() => scrollToBooking()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero / Home Section */}
        <Hero
          onBookClick={() => scrollToBooking()}
          onExploreVillas={scrollToRooms}
        />

        {/* 2. About Section (Privacy, Comfort, Tropical Atmosphere, Location) */}
        <About />

        {/* 3. Rooms Section (One Bedroom, Two Bedroom, Three Bedroom Villas) */}
        <Rooms
          currency={currency}
          onSelectRoomForBooking={(roomId) => scrollToBooking(roomId)}
        />

        {/* Signature Guest Amenities */}
        <Amenities />

        {/* 4. Gallery Section (GWK view, bedroom, swimming pool, living room, Bali surroundings) */}
        <Gallery />

        {/* 5. Location Section (Jimbaran, GWK, Jimbaran Beach, Uluwatu) */}
        <LocationSection />

        {/* 6. Contact & Booking Form Section */}
        <BookingSection
          selectedRoomId={selectedRoomId}
          currency={currency}
          onClearSelectedRoom={() => setSelectedRoomId(null)}
        />
      </main>

      {/* 7. Footer Section */}
      <Footer />

      {/* Floating WhatsApp Concierge Button */}
      <a
        href="https://wa.me/6281234567890?text=Hello%20Athanaya%20Villa%20team,%20I%20would%20like%20to%20inquire%20about%20villa%20availability%20in%20Jimbaran"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center group"
        aria-label="Chat with villa concierge on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out px-0 group-hover:px-2 text-xs font-semibold">
          Chat with Concierge
        </span>
      </a>
    </div>
  );
}
