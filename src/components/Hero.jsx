import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function Hero({ onOpenEnquire, onViewProjects }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !muted;
    video.muted = nextMuted;
    if (!nextMuted) video.volume = 1;
    setMuted(nextMuted);
    if (!nextMuted) video.play().catch(() => {});
  };

  return (
    <>
    <header className="hero relative overflow-hidden" id="home">
      {/* Background Video - Continuous loop, muted, no controls, exact dimensions */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={muted}
        playsInline
        preload="auto"
        disablePictureInPicture
        controls={false}
        poster="/assets/home/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="/assets/home/hero-video.mp4?v=3" type="video/mp4" />
        {/* Fallback image */}
        <img
          src="/assets/home/hero-poster.jpg"
          alt="Nexus Pune Luxury Living"
          className="w-full h-full object-cover"
        />
      </video>

      <div className="absolute inset-0 bg-black/20 pointer-events-none z-[1]" />
      <button
        type="button"
        className="hero-sound"
        onClick={toggleSound}
        aria-pressed={!muted}
        aria-label={muted ? 'Turn sound on' : 'Turn sound off'}
      >
        {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>
    </header>

    <section className="hero-band" aria-label="Home highlights">
      <div className="wrap hero-band-copy">
        <p className="hero-kicker">Nexus Group · Pune since 1996</p>
        <h1>
          Homes built <span>with purpose-</span>
        </h1>
        <p className="hero-description">
          Luxury homes and commercial landmarks across Pimpri Chinchwad,
          Pune, and Nashik. Three decades of planning, quality, and trust.
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
    </section>
    </>
  );
}
