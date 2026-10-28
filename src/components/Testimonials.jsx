import React, { useEffect, useState } from 'react';
import { Play, X, Video, Star, Quote } from 'lucide-react';
import { residentVideos } from '../data/residentVideos';

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(null);
  const videoStories = residentVideos;

  useEffect(() => {
    if (!activeVideo) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event) => {
      if (event.key === 'Escape') setActiveVideo(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [activeVideo]);

  const textTestimonials = [
    {
      p: '“We were moving up from a 2 BHK and wanted more space for the kids. The 3 BHK layout felt just right.”',
      b: 'Chetan Wani',
      s: 'Flat No. A 305 • Nexus Skydale, Punawale',
      tag: 'Skydale, Punawale',
    },
    {
      p: '“Big project, so I was worried about quality. Visited the site three times and the work looked consistent.”',
      b: 'Pankaj Bhangale',
      s: 'Flat No. E 1006 • Nexus Skydale, Punawale',
      tag: 'Skydale, Punawale',
    },
    {
      p: '“My wife and I wanted something away from the crowded city vibe. The riverside setting is what pulled us in.”',
      b: 'Popat Pisal',
      s: 'Flat No. B 206 • Nexus Kinaara, Chikhali',
      tag: 'Kinaara, Chikhali',
    },
    {
      p: '“First home for us, and the 2 BHK fit our budget without stretching too much.”',
      b: 'Jayendra Chapolikar',
      s: 'Flat No. B 1301 • Nexus Kinaara, Chikhali',
      tag: 'Kinaara, Chikhali',
    },
    {
      p: '“Went on a weekend visit just to see, and ended up booking. The location felt peaceful.”',
      b: 'Rohit Pawar',
      s: 'Flat No. D 1107 • Nexus Kinaara, Chikhali',
      tag: 'Kinaara, Chikhali',
    },
    {
      p: '“Compared a few projects in Moshi and this one felt the most organised.”',
      b: 'Sachin Varade',
      s: 'Flat No. A 705 • Nexus Prime Square, Moshi',
      tag: 'Prime Square, Moshi',
    },
    {
      p: '“Got a shop on the ground floor for my small business. Good footfall area, and the plan was explained clearly.”',
      b: 'Pradeep Sharma',
      s: 'Shop No - 8 (Commercial) • Nexus Prime Square, Moshi',
      tag: 'Prime Square, Moshi',
    },
    {
      p: '“We didn\'t want a huge crowded society. Approx 100-150 flats felt like the right size.”',
      b: 'Uttam Shinde',
      s: 'Flat No. C 306 • Nexus Atrium, Moshi',
      tag: 'Atrium, Moshi',
    },
    {
      p: '“Booked for my parents. They wanted a calm place. Everyone on site was easy to talk to.”',
      b: 'Jayesh Pachpute',
      s: 'Flat No. C 505 • Nexus Atrium, Moshi',
      tag: 'Atrium, Moshi',
    },
    {
      p: '“Liked that it\'s a smaller project. Easier to know the neighbours.”',
      b: 'Pravin Ranmale',
      s: 'Flat No. B 606 • Nexus Imperia, Moshi',
      tag: 'Imperia, Moshi',
    },
    {
      p: '“Paperwork was explained patiently. That\'s why we trusted them.”',
      b: 'Tejas Naik',
      s: 'Flat No. B 502 • Nexus Imperia, Moshi',
      tag: 'Imperia, Moshi',
    },
    {
      p: '“I needed an easy way to reach the highway for work. The Kiwale location suits that.”',
      b: 'Nisha R',
      s: 'Flat No. D 1005 • Nexus Genesis, Kiwale',
      tag: 'Genesis, Kiwale',
    },
    {
      p: '“We saw the site progress every month through photo updates. It felt reassuring.”',
      b: 'Girish Kamble',
      s: 'Flat No. D 606 • Nexus Genesis, Kiwale',
      tag: 'Genesis, Kiwale',
    },
    {
      p: '“We wanted 4 BHK for our joint family. Not many options give that at a fair price with a good carpet area.”',
      b: 'Atul Sonawane',
      s: 'Flat No. E 703 • Nexus Genesis, Kiwale',
      tag: 'Genesis, Kiwale',
    },
    {
      p: '“We already live in Punawale and didn\'t want to move far. This was the right fit.”',
      b: 'Vivek Baviskar',
      s: 'Flat No. 804 • Nexus Westia, Punawale',
      tag: 'Westia, Punawale',
    },
    {
      p: '“I invested in a shop here. The location is on a road with good movement.”',
      b: 'Premdevi Singh',
      s: 'Shop No. 9 (Commercial) • Nexus Westia, Punawale',
      tag: 'Westia, Punawale',
    },
    {
      p: '“We moved in a long time ago and are still happy. Maintenance has been smooth.”',
      b: 'Girish Rudrawar',
      s: 'Flat No. 802 • Nexus West Pride, Punawale',
      tag: 'West Pride, Punawale',
    },
    {
      p: '“Bought as a first home years back. I was very worried but it\'s been a good decision.”',
      b: 'Rahul Dey',
      s: 'Flat No. H 1501 • Nexus Gulmohar, Charholi Budruk',
      tag: 'Gulmohar, Charholi',
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
                    <img src={v.thumbnail} alt={v.name} loading="lazy" referrerPolicy="no-referrer" />
                    <div className="v-media-scrim" />
                    <div className="v-play-btn" aria-label="Play Video">
                      <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                    </div>
                  </div>
                  <div className="v-content">
                    <div className="v-author-info">
                      <div>
                        <strong className="v-name">{v.name}</strong>
                        <span className="v-project">
                          {v.flat ? `${v.project} · Flat No. ${v.flat}` : v.project}
                        </span>
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
          role="presentation"
        >
          <div
            className="video-modal-box"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={activeVideo.name}
          >
            <button
              type="button"
              className="video-modal-close"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="video-player-frame">
              <iframe
                src={activeVideo.videoUrl}
                title={activeVideo.name}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
