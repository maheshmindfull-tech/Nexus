import React, { useState } from 'react';
import { Play, X, Video, Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(null);

  const videoStories = [
    {
      id: 'v1',
      name: 'Aarav & Priya Mehta',
      project: 'Nexus Skydale, Punawale',
      unit: '3 BHK Signature Residence',
      quote: '“Clubhouse views and the warm community make living here feel like a luxury resort every day.”',
      duration: '2:15 min',
      thumbnail: '/assets/testimonials/video-skydale.jpg',
      videoUrl: '/assets/home/hero-video.mp4',
    },
    {
      id: 'v2',
      name: 'Rahul, Priya & Aria Sharma',
      project: 'Nexus Westia, Punawale',
      unit: '2 BHK Elegance Tower',
      quote: '“Spacious balconies, zero wastage layout and seamless handover made our dream home a reality.”',
      duration: '1:45 min',
      thumbnail: '/assets/testimonials/video-westia.jpg',
      videoUrl: '/assets/home/hero-video.mp4',
    },
    {
      id: 'v3',
      name: 'Rajesh & Anita Sharma',
      project: 'Nexus Kinara, Chikhali',
      unit: 'Garden Promenade Living',
      quote: '“Unmatched construction quality, serene green surroundings and great connectivity for our family.”',
      duration: '2:30 min',
      thumbnail: '/assets/testimonials/video-kinara.jpg',
      videoUrl: '/assets/home/hero-video.mp4',
    },
    {
      id: 'v4',
      name: 'Aditya & Shalini Bankar',
      project: 'Nexus Prime Square',
      unit: 'Handover Day Experience',
      quote: '“Possession ahead of schedule! Complete transparency and genuine professionalism throughout.”',
      duration: '1:55 min',
      thumbnail: '/assets/testimonials/video-prime.jpg',
      videoUrl: '/assets/home/hero-video.mp4',
    },
  ];

  const textTestimonials = [
    {
      p: '“We were moving up from a 2 BHK and wanted more space for the kids. The 3 BHK layout felt just right.”',
      b: 'Aarav & Priya Mehta',
      s: '3 BHK • Nexus Skydale, Punawale',
      tag: 'Skydale, Punawale',
    },
    {
      p: '“My wife and I wanted something away from the crowded city vibe. The riverside setting is what pulled us in.”',
      b: 'Rahul & Sneha Jadhav',
      s: '2 BHK Riverside Home • Nexus Kinaara, Chikhali',
      tag: 'Kinaara, Chikhali',
    },
    {
      p: '“Got a shop on the ground floor for my small business. Good footfall area, and the plan was explained clearly.”',
      b: 'Vikram Rane',
      s: 'Commercial Shop • Nexus Prime Square, Moshi',
      tag: 'Prime Square, Moshi',
    },
    {
      p: '“We didn\'t want a huge crowded society. Around 150 flats felt like the right size for our family.”',
      b: 'Smita & Karan Desai',
      s: '2 BHK • Nexus Atrium, Moshi',
      tag: 'Atrium, Moshi',
    },
    {
      p: '“Only 84 flats, so it feels more like a community than a township. Paperwork was explained patiently — that\'s why we trusted them.”',
      b: 'Amit & Pooja Kulkarni',
      s: '2 BHK • Nexus Imperia, Moshi',
      tag: 'Imperia, Moshi',
    },
    {
      p: '“We wanted 4 BHK for our joint family. Not many options give that at a fair price with a good carpet area.”',
      b: 'Mahesh & Sunita Patil',
      s: '4 BHK • Nexus Genesis, Kiwale',
      tag: 'Genesis, Kiwale',
    },
    {
      p: '“We already live in Punawale and didn\'t want to move far. Smaller building, so the team gave us personal attention.”',
      b: 'Dr. Neha & Rohan Shah',
      s: '2 BHK • Nexus Westia, Punawale',
      tag: 'Westia, Punawale',
    },
    {
      p: '“We decided to book early because the pricing and location made sense. They explained the plan and timeline clearly.”',
      b: 'Rajesh & Shweta Joshi',
      s: 'Upcoming Project • Nexus Green\'s, Punawale',
      tag: 'Green\'s, Punawale',
    },
    {
      p: '“We have been living here for a long time. Big society, but it feels well managed. My neighbours became friends.”',
      b: 'Anand & Kavita Bhosale',
      s: 'Resident • Gulmohar, Charholi Budruk',
      tag: 'Gulmohar, Charholi',
    },
    {
      p: '“Shops on the ground floor make our life super easy. Everything\'s downstairs — daily needs sorted without stepping out.”',
      b: 'Sachin & Rupal Pawar',
      s: 'Resident • West Pride, Punawale',
      tag: 'West Pride, Punawale',
    },
    {
      p: '“Loved the open feel and the greenery. Kids play freely here — it\'s the kind of space every family dreams of.”',
      b: 'Tushar & Manasi Deshpande',
      s: 'Resident • Nirvana Beyond, Ravet-Kiwale',
      tag: 'Nirvana Beyond',
    },
    {
      p: '“We\'ve lived here since handover. Never faced any major issue. Minor issues get resolved very quickly.”',
      b: 'Suresh & Lata Gaikwad',
      s: 'Resident • Govind Darshan, Ravet',
      tag: 'Govind Darshan, Ravet',
    },
  ];

  return (
    <section className="testi" id="testimonials">
      <div className="wrap">
        <hr className="teal" style={{ margin: '0 0 50px' }} />
        <div className="testi-header">
          <div className="eyebrow">Resident Stories & Reviews</div>
          <h2 className="big">
            Words from the <span>people who live here</span>
          </h2>
        </div>

        {/* 1. Continuous Video Testimonials Row */}
        <div className="testi-section-block">
          <div className="testi-subheading">
            <Video className="w-4 h-4 text-[#0097a7]" />
            <span>Video Testimonials</span>
          </div>

          <div className="testi-marquee-wrapper">
            <div className="testi-marquee-track testi-track-videos">
              {[...videoStories, ...videoStories].map((v, i) => (
                <div
                  key={`${v.id}-${i}`}
                  className="v-card"
                  onClick={() => setActiveVideo(v)}
                >
                  <div className="v-media">
                    <img src={v.thumbnail} alt={v.name} loading="lazy" />
                    <div className="v-media-scrim" />
                    <div className="v-play-btn" aria-label="Play Video">
                      <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                    </div>
                    <span className="v-duration-badge">{v.duration}</span>
                  </div>
                  <div className="v-content">
                    <p className="v-quote">{v.quote}</p>
                    <div className="v-author-info">
                      <div>
                        <strong className="v-name">{v.name}</strong>
                        <span className="v-project">{v.project}</span>
                      </div>
                      <span className="v-watch-pill">
                        <Play className="w-3 h-3 fill-current" /> Watch
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Continuous Single-Line 12 Text Testimonials Row */}
        <div className="testi-section-block" style={{ marginTop: '42px' }}>
          <div className="testi-subheading">
            <Quote className="w-4 h-4 text-[#0097a7]" />
            <span>Homeowner Reviews</span>
          </div>

          <div className="testi-marquee-wrapper">
            <div className="testi-marquee-track testi-track-text">
              {[...textTestimonials, ...textTestimonials].map((t, i) => (
                <div key={i} className="t-single-card">
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <div style={{ display: 'flex', gap: '3px', color: '#b38b59' }}>
                        {[...Array(5)].map((_, sIdx) => (
                          <Star key={sIdx} className="w-3.5 h-3.5 fill-[#b38b59]" />
                        ))}
                      </div>
                      <span className="t-badge">{t.tag}</span>
                    </div>
                    <p className="t-quote">{t.p}</p>
                  </div>
                  <div className="t-author">
                    <div>
                      <strong className="t-name">{t.b}</strong>
                      <small className="t-sub">{t.s}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div
          className="video-modal-backdrop"
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="video-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="video-modal-close"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <div className="video-player-frame">
              <video
                src={activeVideo.videoUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full"
              />
            </div>
            <div className="video-modal-meta">
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0, color: '#fff' }}>
                  {activeVideo.name}
                </h3>
                <p style={{ fontSize: '13px', color: '#00bcd4', margin: '3px 0 0' }}>
                  {activeVideo.project} • {activeVideo.unit}
                </p>
              </div>
              <span style={{ fontSize: '12px', background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '12px' }}>
                Verified Resident Story
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
