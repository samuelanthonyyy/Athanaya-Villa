import React, { useState, useEffect } from 'react';
import { Calendar, Users, Mail, User, MessageSquare, CheckCircle, Sparkles, AlertCircle, Phone, ArrowRight, X } from 'lucide-react';
import { VILLA_ROOMS } from '../data/villaData';
import { Currency } from '../types';

interface BookingSectionProps {
  selectedRoomId: string | null;
  currency: Currency;
  onClearSelectedRoom: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedRoomId,
  currency,
  onClearSelectedRoom,
}) => {
  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [roomType, setRoomType] = useState(selectedRoomId || 'one-bedroom');
  const [guests, setGuests] = useState('2');
  const [message, setMessage] = useState('');

  // UI state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedBooking, setSubmittedBooking] = useState<any | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync when selectedRoomId changes from other components
  useEffect(() => {
    if (selectedRoomId) {
      setRoomType(selectedRoomId);
    }
  }, [selectedRoomId]);

  // Today's date string for input min attribute
  const todayStr = new Date().toISOString().split('T')[0];

  // Calculate nights
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const nights = calculateNights();
  const currentRoom = VILLA_ROOMS.find((r) => r.id === roomType) || VILLA_ROOMS[0];

  const estimatedTotal = () => {
    if (nights <= 0) return null;
    if (currency === 'IDR') {
      return `IDR ${(currentRoom.priceIdr * nights).toLocaleString('id-ID')}`;
    }
    return `$${currentRoom.priceUsd * nights}`;
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) errs.email = 'Please enter a valid email address';
    if (!checkIn) errs.checkIn = 'Please select your check-in date';
    if (!checkOut) errs.checkOut = 'Please select your check-out date';
    if (checkIn && checkOut && new Date(checkOut) <= new Date(checkIn)) {
      errs.checkOut = 'Check-out date must be after check-in date';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate swift front-end reservation submission
    setTimeout(() => {
      const confirmationCode = `ATH-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedBooking({
        code: confirmationCode,
        fullName,
        email,
        phone,
        checkIn,
        checkOut,
        nights,
        roomName: currentRoom.name,
        guests,
        total: estimatedTotal(),
        message,
      });
      setIsSubmitting(false);
    }, 600);
  };

  const resetForm = () => {
    setSubmittedBooking(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setCheckIn('');
    setCheckOut('');
    setMessage('');
    onClearSelectedRoom();
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAF7F2] text-[#2D2723] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B58554] font-semibold block mb-3">
            Inquiries & Reservations
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#2D2723] tracking-tight leading-tight">
            Reserve Your Jimbaran Experience
          </h2>
          <div className="w-16 h-0.5 bg-[#B58554]/40 mx-auto my-6" />
          <p className="text-base sm:text-lg text-[#5E5246] leading-relaxed">
            Reserve directly with Athanaya Villa for the best guaranteed rate, personalized itinerary assistance, and complimentary floating breakfast.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Direct Contact & Villa Host Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#F5EFEB] p-8 rounded-3xl border border-[#E5DBCC]">
              <span className="text-xs uppercase tracking-widest text-[#B58554] font-semibold block mb-2">
                Warm Balinese Hospitality
              </span>
              <h3 className="text-2xl font-serif font-semibold text-[#2D2723] mb-4">
                We are here to tailor your stay.
              </h3>
              <p className="text-sm text-[#5E5246] leading-relaxed mb-6">
                Whether you need special anniversary decorations, dietary requests for breakfast, private car services, or airport transfers, our local team is pleased to arrange everything prior to your arrival.
              </p>

              <div className="space-y-4 text-sm text-[#4A4036] border-t border-[#E8E1D7] pt-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#A89886] block">Villa Location</span>
                  <p className="font-medium">Jl. Bukit Permai, Jimbaran, South Kuta, Bali 80361, Indonesia</p>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-[#A89886] block">Email Inquiries</span>
                  <p className="font-medium text-[#B58554]">stay@athanayavilla.com</p>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-[#A89886] block">Direct Concierge WhatsApp / Phone</span>
                  <p className="font-medium">+62 812 3456 7890</p>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-[#A89886] block">Check-in / Check-out</span>
                  <p className="font-medium">Check-in: 14:00 WITA • Check-out: 12:00 WITA</p>
                </div>
              </div>
            </div>

            {/* Selected Villa Preview Card */}
            <div className="p-6 rounded-2xl bg-[#EFE6D8] border border-[#DFD5C4] flex items-center space-x-4">
              <img
                src={currentRoom.image}
                alt={currentRoom.name}
                className="w-20 h-20 rounded-xl object-cover shrink-0 shadow-xs"
              />
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8C6D4C] font-semibold block">
                  Currently Selected Option
                </span>
                <h4 className="font-serif font-bold text-lg text-[#2D2723]">{currentRoom.name}</h4>
                <p className="text-xs text-[#5E5246]">
                  {currency === 'IDR'
                    ? `IDR ${currentRoom.priceIdr.toLocaleString('id-ID')}`
                    : `$${currentRoom.priceUsd}`}{' '}
                  / night • Private Pool
                </p>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="lg:col-span-7 bg-[#FAF7F2] p-8 sm:p-10 rounded-3xl border border-[#E3DAC9] shadow-lg">
            <h3 className="text-2xl font-serif font-semibold text-[#2D2723] mb-2">
              Reservation & Inquiry Form
            </h3>
            <p className="text-xs text-[#7A6B5D] mb-8">
              Complete the details below to request your booking. We will send an immediate confirmation summary.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6" id="villa-booking-form">
              {/* Full Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A4036] mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A89886]">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="e.g. Maya Lin"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white text-sm text-[#2D2723] focus:outline-hidden focus:ring-2 focus:ring-[#B58554]/40 transition-all ${
                      errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-[#D9CFBE]'
                    }`}
                    id="booking-name-input"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-xs text-red-600 mt-1 flex items-center space-x-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A4036] mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A89886]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. maya@example.com"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-white text-sm text-[#2D2723] focus:outline-hidden focus:ring-2 focus:ring-[#B58554]/40 transition-all ${
                        errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#D9CFBE]'
                      }`}
                      id="booking-email-input"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-red-600 mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A4036] mb-2">
                    Phone / WhatsApp (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A89886]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+62 812..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D9CFBE] bg-white text-sm text-[#2D2723] focus:outline-hidden focus:ring-2 focus:ring-[#B58554]/40 transition-all"
                      id="booking-phone-input"
                    />
                  </div>
                </div>
              </div>

              {/* Villa Option Selection & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A4036] mb-2">
                    Select Villa Option *
                  </label>
                  <select
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#D9CFBE] bg-white text-sm text-[#2D2723] focus:outline-hidden focus:ring-2 focus:ring-[#B58554]/40 transition-all"
                    id="booking-room-select"
                  >
                    {VILLA_ROOMS.map((room) => (
                      <option key={room.id} value={room.id}>
                        {room.name} ({room.bedrooms} BR)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A4036] mb-2">
                    Number of Guests *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A89886]">
                      <Users className="w-4 h-4" />
                    </div>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D9CFBE] bg-white text-sm text-[#2D2723] focus:outline-hidden focus:ring-2 focus:ring-[#B58554]/40 transition-all"
                      id="booking-guests-select"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6+ Guests (Royal Estate)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Check-in & Check-out Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A4036] mb-2">
                    Check-in Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      min={todayStr}
                      value={checkIn}
                      onChange={(e) => {
                        setCheckIn(e.target.value);
                        if (errors.checkIn) setErrors({ ...errors, checkIn: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#2D2723] focus:outline-hidden focus:ring-2 focus:ring-[#B58554]/40 transition-all ${
                        errors.checkIn ? 'border-red-400 bg-red-50/20' : 'border-[#D9CFBE]'
                      }`}
                      id="booking-checkin-input"
                    />
                  </div>
                  {errors.checkIn && (
                    <p className="text-xs text-red-600 mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.checkIn}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A4036] mb-2">
                    Check-out Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      min={checkIn || todayStr}
                      value={checkOut}
                      onChange={(e) => {
                        setCheckOut(e.target.value);
                        if (errors.checkOut) setErrors({ ...errors, checkOut: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#2D2723] focus:outline-hidden focus:ring-2 focus:ring-[#B58554]/40 transition-all ${
                        errors.checkOut ? 'border-red-400 bg-red-50/20' : 'border-[#D9CFBE]'
                      }`}
                      id="booking-checkout-input"
                    />
                  </div>
                  {errors.checkOut && (
                    <p className="text-xs text-red-600 mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.checkOut}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Live Stay & Estimated Total Summary */}
              {nights > 0 && (
                <div className="p-4 rounded-xl bg-[#F2ECE1] border border-[#E3DAC9] flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-[#2D2723]">
                      Duration: {nights} {nights === 1 ? 'Night' : 'Nights'}
                    </span>
                    <span className="text-[#7A6B5D] block">Includes breakfast & butler service</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-[#8C6D4C] block">
                      Estimated Rate
                    </span>
                    <span className="text-base font-serif font-bold text-[#B58554]">
                      {estimatedTotal()}
                    </span>
                  </div>
                </div>
              )}

              {/* Message */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A4036] mb-2">
                  Special Requests / Message
                </label>
                <div className="relative">
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about special occasions, dietary preferences, or airport transfer requests..."
                    className="w-full px-4 py-3 rounded-xl border border-[#D9CFBE] bg-white text-sm text-[#2D2723] focus:outline-hidden focus:ring-2 focus:ring-[#B58554]/40 transition-all"
                    id="booking-message-input"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-[#B58554] hover:bg-[#9E6E3D] text-white text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-75"
                id="booking-submit-btn"
              >
                {isSubmitting ? (
                  <span>Processing Reservation...</span>
                ) : (
                  <>
                    <span>Submit Reservation Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-[#8C7A6B]">
                No payment is charged today. Our reservations host will reply within 2 hours to confirm your booking and floating breakfast preferences.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Booking Confirmation Receipt Modal */}
      {submittedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-[#FAF7F2] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#E3DAC9] shadow-2xl relative">
            <button
              type="button"
              onClick={() => setSubmittedBooking(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#EFE6D8] text-[#5C4E42] hover:bg-[#B58554] hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-14 h-14 rounded-full bg-[#EFE6D8] text-[#B58554] flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="text-xs uppercase tracking-widest text-[#B58554] font-semibold block text-center">
              Reservation Received
            </span>
            <h3 className="text-2xl font-serif font-semibold text-[#2D2723] text-center mt-1 mb-1">
              Thank You, {submittedBooking.fullName}
            </h3>
            <p className="text-xs text-[#7A6B5D] text-center mb-6">
              Reference Code: <span className="font-mono font-bold text-[#2D2723]">{submittedBooking.code}</span>
            </p>

            {/* Receipt Summary Card */}
            <div className="p-4 rounded-2xl bg-[#F2ECE1] border border-[#E3DAC9] space-y-2.5 text-xs text-[#4A4036] mb-6">
              <div className="flex justify-between">
                <span className="text-[#7A6B5D]">Villa:</span>
                <span className="font-medium text-[#2D2723]">{submittedBooking.roomName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7A6B5D]">Dates:</span>
                <span className="font-medium text-[#2D2723]">
                  {submittedBooking.checkIn} to {submittedBooking.checkOut} ({submittedBooking.nights} nights)
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7A6B5D]">Guests:</span>
                <span className="font-medium text-[#2D2723]">{submittedBooking.guests} Person(s)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7A6B5D]">Email:</span>
                <span className="font-medium text-[#2D2723]">{submittedBooking.email}</span>
              </div>
              {submittedBooking.total && (
                <div className="flex justify-between pt-2 border-t border-[#DFD5C4] font-semibold text-[#B58554]">
                  <span>Estimated Total:</span>
                  <span className="text-sm">{submittedBooking.total}</span>
                </div>
              )}
            </div>

            <p className="text-xs text-[#66594C] leading-relaxed text-center mb-6">
              A copy of this inquiry has been staged for our villa manager. We will contact you at <strong>{submittedBooking.email}</strong> to finalize arrival times and personal concierge arrangements.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={resetForm}
                className="w-full py-3 rounded-xl bg-[#B58554] hover:bg-[#9E6E3D] text-white text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
              >
                Close & Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
