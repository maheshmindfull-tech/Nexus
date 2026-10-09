import React from 'react';

export default function Hero({ onOpenEnquire, onViewProjects }) {
  return (
    <header className="hero relative overflow-hidden" id="home">
      {/* Background Video - Continuous loop, muted, no controls, exact dimensions */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40 pointer-events-none z-[1]" />

      <div className="hero-content wrap">
        <div className="hero-copy">
          <p className="hero-kicker">Nexus Group · Pune since 1996</p>
          <h1>
            Homes built
            <span>with purpose.</span>
          </h1>
          <p className="hero-description">
            Luxury 2 and 3 BHK homes and commercial landmarks across Punawale, Moshi,
            Kiwale, and Chikhali. Three decades of planning, quality, and trust.
          </p>
          <div className="hero-actions">
            <button type="button" className="hero-primary" onClick={onOpenEnquire}>
              Enquire Now
            </button>
            <button type="button" className="hero-secondary" onClick={onViewProjects}>
              View Projects
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
