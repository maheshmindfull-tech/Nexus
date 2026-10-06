import React from 'react';
import { QrCode, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function SkydaleBanner({ onOpenEnquire }) {
  return (
    <section id="featured" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-slate-950 aspect-[16/9] sm:aspect-[21/9] min-h-[380px] sm:min-h-[460px] flex items-center">
          {/* Master high-resolution render image */}
          <img
            src="/images/skydale_full_render.jpg"
            alt="Nexus Skydale Punawale E Wing"
            className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02] transition-transform duration-700 hover:scale-105"
          />

          {/* Cinematic Vignette Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/70 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

          {/* Banner Inner Content */}
          <div className="relative w-full h-full p-6 sm:p-10 lg:p-14 flex flex-col justify-between z-10 text-white">
            {/* Top row: Status Tag and MahaRERA QR */}
            <div className="flex items-start justify-between w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-semibold text-white tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-[#38e1f5]" />
                <span>NEW LAUNCH • PUNAWALE</span>
              </div>

              {/* MahaRERA QR Code & Badge matching the mockup */}
              <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md p-2.5 sm:p-3 rounded-xl border border-white/20 shadow-xl">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white p-1 rounded-lg flex items-center justify-center">
                  {/* High quality clean QR code SVG */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-full h-full text-slate-900"
                  >
                    <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm8-2h8v8h-8V2zm2 2v4h4V4h-4zM2 12h8v8H2v-8zm2 2v4h4v-4H4zm11-2h2v2h-2v-2zm-3 0h2v2h-2v-2zm6 0h2v2h-2v-2zm-3 3h2v2h-2v-2zm3 0h2v2h-2v-2zm-6 3h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm-6 3h2v2h-2v-2zm6 0h2v2h-2v-2z" />
                  </svg>
                </div>
                <div className="text-[10px] sm:text-xs text-white/90 leading-tight space-y-0.5">
                  <p className="font-bold tracking-wider text-[#38e1f5]">MAHARERA REG.</p>
                  <p className="font-mono text-white/80">P52100051234</p>
                  <p className="text-[9px] text-white/60">maharera.mahaonline.gov.in</p>
                </div>
              </div>
            </div>

            {/* Middle / Bottom Branding: SKYDALE PUNAWALE E WING */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-end mt-auto pt-6">
              <div className="sm:col-span-8 space-y-3">
                <div className="space-y-1">
                  <h3 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-widest text-white uppercase font-serif-luxury drop-shadow-lg">
                    Skydale
                  </h3>
                  <p className="text-xs sm:text-sm tracking-[0.3em] font-medium text-slate-300 uppercase">
                    Punawale
                  </p>
                </div>

                {/* E WING Stylized Badge matching the design screenshot */}
                <div className="inline-flex items-center gap-4 mt-2">
                  <div className="w-16 h-20 sm:w-20 sm:h-24 border-2 border-white/90 rounded-lg flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm shadow-xl">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-white leading-none">
                      E
                    </span>
                    <span className="text-[9px] sm:text-[10px] tracking-[0.25em] font-semibold text-white/90 uppercase mt-1">
                      Wing
                    </span>
                  </div>

                  <div className="space-y-1 text-white/90 drop-shadow-sm">
                    <p className="text-sm sm:text-base font-bold text-white">
                      2 & 3 BHK Luxury Residences
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300">
                      Scenic Riverside Living with 35+ Lifestyle Amenities
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="sm:col-span-4 flex sm:justify-end">
                <button
                  onClick={onOpenEnquire}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#009bb0] hover:bg-[#00879a] text-white font-semibold text-sm rounded-full shadow-lg shadow-[#009bb0]/40 flex items-center justify-center gap-2 hover:gap-3 transition-all cursor-pointer"
                >
                  <span>Download Brochure</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
