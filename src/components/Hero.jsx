import React from 'react';

export default function Hero({ onOpenEnquire }) {
  return (
    <header className="hero relative overflow-hidden" id="home">
      {/* Background Video - Continuous loop, muted, no controls, exact dimensions */}
      <video
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        controls={false}
        poster="/assets/home/slide-01.png"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="/assets/home/hero-video.mp4" type="video/mp4" />
        {/* Fallback image */}
        <img
          src="/assets/home/slide-01.png"
          alt="Nexus Pune Luxury Living"
          className="w-full h-full object-cover"
        />
      </video>

      {/* Cinematic subtle overlays for contrast and depth */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none z-[1]" />
    </header>
  );
}
