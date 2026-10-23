import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ArrowLeft, Download, X } from 'lucide-react';
import AmenityBoard from './AmenityBoard';
import ReraBadge from './ReraBadge';
import { LANDING_CONTENT } from './index';
import { submitLeadToGoogleSheet } from '../services/leadService';
import './landing.css';

function ProjectBreak({ src }) {
  if (!src) return null;
  return (
    <figure className="lp-break" aria-hidden="true">
      <img src={src} alt="" />
    </figure>
  );
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

function circularOffset(item, center, count) {
  let delta = item - center;
  if (delta > count / 2) delta -= count;
  if (delta < -count / 2) delta += count;
  return delta;
}

function GalleryCarousel({ items }) {
  const count = items.length;
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const cardRefs = useRef([]);
  const animating = useRef(false);
  const pendingWrap = useRef(null);
  const chainTimer = useRef(0);
  const goRef = useRef(() => { });

  const stepOnce = (dir) => {
    const from = indexRef.current;
    const next = mod(from + dir, count);
    pendingWrap.current = { id: mod(from - 2 * dir, count), dir };
    indexRef.current = next;
    setIndex(next);
  };

  goRef.current = (target) => {
    if (animating.current || count < 2) return;
    const dist = circularOffset(target, indexRef.current, count);
    if (dist === 0) return;
    const dir = dist > 0 ? 1 : -1;
    const steps = Math.abs(dist);
    animating.current = true;
    let done = 0;
    const run = () => {
      stepOnce(dir);
      done += 1;
      chainTimer.current = window.setTimeout(() => {
        if (done < steps) run();
        else animating.current = false;
      }, 760);
    };
    run();
  };

  useLayoutEffect(() => {
    const wrap = pendingWrap.current;
    pendingWrap.current = null;
    if (!wrap) return undefined;
    const el = cardRefs.current[wrap.id];
    if (!el) return undefined;
    el.classList.add('is-instant');
    el.style.left = wrap.dir > 0 ? '108%' : '-24%';
    el.style.opacity = '0';
    void el.offsetWidth;
    el.classList.remove('is-instant');
    el.style.left = '';
    el.style.opacity = '';
    return undefined;
  });

  useEffect(() => {
    if (count < 2) return undefined;
    const timer = window.setInterval(() => {
      goRef.current(mod(indexRef.current + 1, count));
    }, 4500);
    return () => {
      window.clearInterval(timer);
      window.clearTimeout(chainTimer.current);
    };
  }, [count]);

  if (!count) return null;

  return (
    <section className="lp-carousel" aria-label="Gallery" aria-roledescription="carousel">
      <h2>Gallery</h2>
      <div className="lp-carousel-stage">
        {items.map((item, i) => {
          const offset = circularOffset(i, index, count);
          const isMain = offset === 0;
          return (
            <button
              key={item.src}
              ref={(el) => { cardRefs.current[i] = el; }}
              type="button"
              className="lp-card"
              data-slot={offset}
              aria-label={isMain ? item.label : `Show ${item.label}`}
              aria-current={isMain ? 'true' : undefined}
              onClick={() => { if (!isMain) goRef.current(i); }}
            >
              <img src={item.src} alt={isMain ? item.label : ''} />
            </button>
          );
        })}
      </div>
      <div className="lp-carousel-dots">
        {items.map((item, i) => (
          <button
            key={item.src}
            type="button"
            className={i === index ? 'is-on' : ''}
            aria-label={item.label}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => goRef.current(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default function LandingView({ id, onNavigateHome }) {
  const p = LANDING_CONTENT[id];
  const isKinara = p?.theme === 'kinara';
  const breakShot = p?.breakShot || (isKinara ? (p.gallery?.[3]?.src || p.gallery?.[2]?.src || p.gallery?.[0]?.src) : null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const openEnquiry = () => {
    setSubmitted(false);
    setEnquiryOpen(true);
  };

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('.lp-reveal'));
    const reveal = (node) => node.classList.add('is-in');
    const inView = (node) => {
      const rect = node.getBoundingClientRect();
      return rect.bottom > 0 && rect.top < window.innerHeight && rect.width > 0;
    };
    nodes.forEach((node) => {
      if (inView(node)) reveal(node);
    });
    document.documentElement.classList.add('lp-motion');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -4% 0px' },
    );
    nodes.forEach((node) => {
      if (!node.classList.contains('is-in')) io.observe(node);
    });
    return () => {
      io.disconnect();
      document.documentElement.classList.remove('lp-motion');
    };
  }, [id]);

  useEffect(() => {
    if (!lightbox && !enquiryOpen) return undefined;
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      setLightbox(null);
      setEnquiryOpen(false);
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    if (enquiryOpen) document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox, enquiryOpen]);

  if (!p) return null;
  const editorial = p.layout === 'editorial';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    if (p.phoneRequired && !formData.phone) return;
    setIsSubmitting(true);
    await submitLeadToGoogleSheet({
      formType: `${p.name} Landing Page Lead`,
      project: `${p.name} (${p.location})`,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message || '',
    });
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const setField = (key) => (e) => setFormData((prev) => ({ ...prev, [key]: e.target.value }));
  const slidingPlans = (p.plans?.length || 0) > 3;
  const planCard = (plan, key, hidden) => (
    <article key={key} className="lp-plan" aria-hidden={hidden || undefined}>
      <button
        type="button"
        className="lp-plan-shot"
        tabIndex={hidden ? -1 : undefined}
        onClick={() => setLightbox(plan)}
        aria-label={`View ${plan.title} floor plan`}
      >
        <img src={plan.src} alt={hidden ? '' : `${plan.title} floor plan`} />
      </button>
      <h3>{plan.title}</h3>
    </article>
  );

  return (
    <div className={`lp-page lp-brand-${id}${p.theme ? ` lp-theme-${p.theme}` : ''}${editorial ? ' lp-edit' : ''}`}>
      <header className="lp-bar">
        <div className="lp-bar-inner">
          <button type="button" className="lp-back" onClick={onNavigateHome}>
            <ArrowLeft size={16} strokeWidth={2.4} />
            <span>Back</span>
          </button>
          {p.theme !== 'kinara' && (
            <>
              <p className="lp-bar-name">
                {p.name} · {p.location}
              </p>
              <div className="lp-bar-actions">
                <button type="button" className="lp-bar-link" onClick={openEnquiry}>
                  Enquire
                </button>
                <a className="lp-brochure" href={p.brochure} download={p.brochureName}>
                  <Download size={15} strokeWidth={2.4} />
                  <span>Brochure</span>
                </a>
              </div>
            </>
          )}
        </div>
      </header>

      {p.theme === 'kinara' ? (
        <section
          className={`lp-hero lp-hero-light${p.heroScrim ? ' has-scrim' : ''}${p.heroSoft ? ' is-soft' : ''}`}
          aria-label={p.name}
          style={{
            ...(p.hero ? { backgroundImage: `url(${p.hero})` } : {}),
            ...(p.heroPosition ? { backgroundPosition: p.heroPosition } : {}),
          }}
        >
          {p.heroArt ? <img className="lp-hero-art" src={p.heroArt} alt="" /> : null}
          {p.logo ? <img className={`lp-hero-logo${p.logoColor ? ' is-color' : ''}${p.logoMark ? ' is-mark' : ''}`} src={p.logo} alt="" /> : null}
          <div className="lp-hero-copy-overlay">
            <p className="lp-hero-script lp-hero-anim" style={{ animationDelay: '0.08s' }}>{p.headingPrefix}</p>
            {(() => {
              const lines = p.heroTitle || [
                { text: 'Final' },
                { text: 'Chapter', dash: '–', after: 'E' },
              ];
              const oneLine = lines.length === 2
                && lines.every((line) => !line.dash && !line.after && line.text.trim().split(/\s+/).length === 1);
              return (
                <h1 className={`lp-hero-title lp-hero-anim${oneLine ? ' is-one-line' : ''}`} style={{ animationDelay: '0.18s' }}>
                  {oneLine ? (
                    <span>{lines.map((line) => line.text).join(' ')}</span>
                  ) : lines.map((line, i) => (
                    <span key={`${line.text}-${i}`} className={i > 0 ? 'lp-hero-line2' : undefined}>
                      {line.text}
                      {line.dash ? <span className="lp-hero-dash">{line.dash}</span> : null}
                      {line.after || null}
                    </span>
                  ))}
                </h1>
              );
            })()}
            {p.lede ? <p className="lp-hero-tagline lp-hero-anim" style={{ animationDelay: '0.32s' }}>{p.lede}</p> : null}
            <div className="lp-hero-actions lp-hero-anim" style={{ animationDelay: '0.44s' }}>
              <button type="button" className="lp-btn lp-btn-gold" onClick={openEnquiry}>
                Enquire now
              </button>
              <a className="lp-btn lp-btn-ghost" href={p.brochure} download={p.brochureName}>
                <Download size={16} />
                Download brochure
              </a>
            </div>
          </div>
        </section>
      ) : (
        <section className="lp-hero" aria-label={p.name}>
          <img className="lp-hero-photo" src={p.hero} alt="" />
          <div className="lp-hero-shade" />
          <div className="lp-wrap lp-hero-copy">
            <p className="lp-kicker lp-hero-anim" style={{ animationDelay: '0.05s' }}>
              {`Ongoing · ${p.eyebrow}`}
            </p>
            <h1 className="lp-hero-anim" style={{ animationDelay: '0.18s' }}>{p.heading}</h1>
            {p.lede ? <p className="lp-hero-lede lp-hero-anim" style={{ animationDelay: '0.32s' }}>{p.lede}</p> : null}
            <div className="lp-hero-actions lp-hero-anim" style={{ animationDelay: '0.46s' }}>
              <button type="button" className="lp-btn lp-btn-gold" onClick={openEnquiry}>
                Enquire now
              </button>
              <a className="lp-btn lp-btn-ghost" href={p.brochure} download={p.brochureName}>
                <Download size={16} />
                Download brochure
              </a>
            </div>
          </div>
        </section>
      )}

      <section className="lp-stats" aria-label="Project snapshot">
        <div className="lp-wrap lp-stats-grid lp-reveal">
          {p.stats.map((s) => (
            <div key={s.label} className="lp-stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="lp-section lp-about">
        <div className="lp-wrap lp-about-grid lp-reveal">
          <div>
            <p className="lp-eyebrow">The project</p>
            <h2>{p.aboutTitle}</h2>
          </div>
          <div className="lp-about-copy">
            {p.about.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </div>
        <div className="lp-wrap">
          <hr className="lp-section-break" />
        </div>
      </section>

      <section className="lp-section lp-highlights-sec" aria-label="Project highlights">
        <div className="lp-wrap">
          <div className="lp-section-head lp-reveal">
            {!isKinara && <p className="lp-eyebrow">At a glance</p>}
            <h2>Project highlights</h2>
          </div>
          {editorial ? (
            <div className="lp-edit-highlights">
              {p.highlights.map((item, i) => (
                <article
                  key={item.title}
                  className={`lp-edit-highlight lp-reveal${i === 0 ? ' is-feature' : ''}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <img src={item.src} alt="" />
                  <h3>{item.title}</h3>
                </article>
              ))}
            </div>
          ) : (
            <div className="lp-highlights">
              {p.highlights.map((item, i) => (
                <article
                  key={item.title}
                  className="lp-highlight lp-reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <img src={item.src} alt="" />
                  <h3>{item.title}</h3>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {p.amenities && (
        <section className={`lp-section lp-amenities${p.amenityLayout ? ` is-${p.amenityLayout}` : ''}`} aria-label="Lifestyle amenities">
          {p.amenityLayout ? (
            <AmenityBoard layout={p.amenityLayout} lead={p.amenities.lead} items={p.amenities.items} />
          ) : (
            <div className="lp-wrap">
              <div className="lp-section-head lp-reveal">
                {!isKinara && <p className="lp-eyebrow">Life on site</p>}
                <h2>Amenities</h2>
                {p.amenities.subtitle ? <p className="lp-sub">{p.amenities.subtitle}</p> : null}
                {!isKinara && (
                  <p className="lp-disclaimer">
                    Artist’s impressions of the amenities planned for this project. The images show the intended lifestyle. Finished spaces follow the sanctioned plans, so finishes and details on site can differ from the picture.
                  </p>
                )}
              </div>
              {editorial ? (
                <div className="lp-edit-amenities">
                  {p.amenities.items.map((item, i) => (
                    <figure
                      key={item.label}
                      className="lp-reveal"
                      style={{ transitionDelay: `${i * 70}ms` }}
                    >
                      <img src={item.src} alt="" />
                      <figcaption>{item.label}</figcaption>
                    </figure>
                  ))}
                </div>
              ) : isKinara ? (
                <div className="lp-amenity-bento">
                  <figure className="lp-bento-shot is-lead">
                    {p.amenities.lead.video ? (
                      <video
                        src={p.amenities.lead.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        aria-label={p.amenities.lead.label}
                      />
                    ) : (
                      <img src={p.amenities.lead.src} alt={p.amenities.lead.label} />
                    )}
                  </figure>
                  {p.amenities.items.map((item, i) => (
                    <figure key={item.label} className={`lp-bento-shot is-slot-${i}`}>
                      <img src={item.src} alt="" />
                      <span>{item.label}</span>
                    </figure>
                  ))}
                </div>
              ) : (
                <div className="lp-amenity-grid">
                  {p.amenities.items.map((item, i) => (
                    <figure
                      key={item.label}
                      className={`lp-amenity lp-reveal${i === 0 ? ' is-lead' : ''}`}
                      style={{ transitionDelay: `${i * 90}ms` }}
                    >
                      <img src={item.src} alt={item.label} />
                      <figcaption>{item.label}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </div>
          )}
        </section>
      )}

      {p.specs && (
        <section className="lp-section" aria-label="Specifications">
          <div className="lp-wrap">
            <div className="lp-section-head lp-reveal">
              <p className="lp-eyebrow">What you get</p>
              <h2>Specifications</h2>
            </div>
            <div className="lp-specs">
              {p.specs.map((group, i) => (
                <article key={group.title} className="lp-spec lp-reveal" style={{ transitionDelay: `${i * 90}ms` }}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {p.plans?.length > 0 && (
        <section className="lp-section lp-plans-sec" aria-label="Floor plans">
          <div className="lp-wrap">
            <div className="lp-section-head lp-reveal">
              {!isKinara && <p className="lp-eyebrow">Layouts</p>}
              <h2>Floor plans</h2>
              {p.plansIntro ? <p className="lp-sub">{p.plansIntro}</p> : null}
              {!isKinara && (
                <p className="lp-disclaimer">
                  Floor plans are artist-designed illustrations. Furniture shown is conceptual. Exact layout and carpet area follow the sanctioned plans.
                </p>
              )}
            </div>
            <div className={`lp-plans${slidingPlans ? ' is-marquee' : ''}`}>
              {slidingPlans ? (
                <div className="lp-plans-track" style={{ animationDuration: `${p.plans.length * 6}s` }}>
                  {p.plans.map((plan, i) => planCard(plan, `a-${i}`, false))}
                  {p.plans.map((plan, i) => planCard(plan, `b-${i}`, true))}
                </div>
              ) : (
                p.plans.map((plan, i) => planCard(plan, `a-${i}`, false))
              )}
            </div>
          </div>
        </section>
      )}

      {editorial ? (
        <section className="lp-section lp-edit-gallery-sec" aria-label="Gallery">
          <div className="lp-wrap">
            <div className="lp-section-head lp-reveal">
              <h2>Gallery</h2>
            </div>
            <div className="lp-edit-gallery">
              {p.gallery.map((shot, i) => (
                <figure
                  key={shot.src}
                  className={`lp-reveal${shot.wide ? ' is-wide' : ''}`}
                  style={{ transitionDelay: `${(i % 4) * 70}ms` }}
                >
                  <button type="button" onClick={() => setLightbox(shot)} aria-label={`View ${shot.label}`}>
                    <img src={shot.src} alt={shot.label} />
                    <figcaption>{shot.label}</figcaption>
                  </button>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : p.gallerySlide ? (
        <GalleryCarousel items={p.gallery} />
      ) : (
        <section className="lp-section" aria-label="Gallery">
          <div className="lp-wrap">
            <div className="lp-section-head lp-reveal">
              <p className="lp-eyebrow">Artist’s impressions</p>
              <h2>Gallery</h2>
            </div>
            <div className="lp-gallery">
              {p.gallery.map((shot, i) => (
                <figure
                  key={shot.src}
                  className={`lp-shot lp-reveal${shot.wide ? ' is-wide' : ''}`}
                  style={{ transitionDelay: `${(i % 4) * 70}ms` }}
                >
                  <button type="button" onClick={() => setLightbox(shot)} aria-label={`View ${shot.label}`}>
                    <img src={shot.src} alt={shot.label} />
                    <figcaption>{shot.label}</figcaption>
                  </button>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {!isKinara && (
        <section className="lp-download lp-reveal" id="download-brochure">
          <div className="lp-wrap lp-download-inner">
            <div>
              <p className="lp-eyebrow">Brochure</p>
              <h2>Plans and the full project brochure.</h2>
            </div>
            <a className="lp-btn lp-btn-gold" href={p.brochure} download={p.brochureName}>
              <Download size={18} />
              Download brochure
            </a>
          </div>
        </section>
      )}

      {!isKinara && p.team && (
        <section className="lp-team-sec" aria-label="Our team">
          <div className="lp-wrap">
            <div className="lp-section-head">
              <p className="lp-eyebrow">Partners</p>
              <h2>Our team</h2>
            </div>
            <ul className="lp-team">
              {p.team.map((member) => (
                <li key={member.role}>
                  <span>{member.role}</span>
                  <strong>{member.name}</strong>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {breakShot ? <ProjectBreak src={breakShot} /> : null}

      <footer className="lp-foot" aria-label="Project address and contact">
        <div className="lp-visit-panel">
          <div className="lp-wrap lp-visit">
            <div className="lp-visit-copy">
              <p className="lp-eyebrow">Visit</p>
              <h2>Site address</h2>
              <p className="lp-visit-address">{p.address}</p>
              <div className="lp-addresses">
                <p><strong>Office</strong> {p.office}</p>
                {p.rera ? <ReraBadge number={p.rera} /> : null}
                <p><a href={`mailto:${p.email}`}>{p.email}</a></p>
                {p.phone ? <p><a href={`tel:${p.phone.replace(/\s/g, '')}`}>{p.phone}</a></p> : null}
              </div>
            </div>
            <div className="lp-map">
              <iframe
                title={`${p.name} site on Google Maps`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(p.address)}&z=16&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <div className="lp-wrap lp-foot-inner">
          <span className="lp-foot-mark">
            <img className="lp-foot-logo" src="/assets/logo/nexus-logo-white.png" alt="Nexus" />
          </span>
          <p>
            {p.name} · {p.location}, Pune
          </p>
          <a href="https://nexuspune.in" target="_blank" rel="noopener noreferrer">
            nexuspune.in
          </a>
        </div>
      </footer>

      {lightbox && (
        <div
          className="lp-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.label || lightbox.title}
          onClick={() => setLightbox(null)}
        >
          <div className="lp-lightbox-window" onClick={(e) => e.stopPropagation()}>
            <div className="lp-lightbox-head">
              <h3 className="lp-lightbox-title">{lightbox.label || lightbox.title}</h3>
              <button
                type="button"
                className="lp-lightbox-close"
                onClick={() => setLightbox(null)}
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            <div className="lp-lightbox-body">
              <img src={lightbox.src} alt={lightbox.label || lightbox.title} />
            </div>
          </div>
        </div>
      )}

      {enquiryOpen && (
        <div
          className="lp-enquiry-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lp-enquiry-title"
          onClick={() => setEnquiryOpen(false)}
        >
          <div className="lp-enquiry-panel" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="lp-enquiry-close" onClick={() => setEnquiryOpen(false)} aria-label="Close">
              <X size={20} />
            </button>
            <p className="lp-eyebrow">Talk to us</p>
            <h2 id="lp-enquiry-title">Ask about {p.shortName}</h2>
            <p className="lp-sub lp-sub-left">
              Share your details and a sales advisor will get in touch with availability and pricing.
            </p>
            <p className="lp-enquiry-mail">
              <a href={`mailto:${p.email}`}>{p.email}</a>
            </p>
            <div className="lp-form-card">
              {submitted ? (
                <div className="lp-success" role="status">
                  <strong>Inquiry received</strong>
                  <p>Thank you for your interest in {p.name}. Our sales advisor will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <label className="lp-field">
                    <span>Name</span>
                    <input required value={formData.name} onChange={setField('name')} autoComplete="name" />
                  </label>
                  <label className="lp-field">
                    <span>Email</span>
                    <input required type="email" value={formData.email} onChange={setField('email')} autoComplete="email" />
                  </label>
                  <label className="lp-field">
                    <span>Phone</span>
                    <input
                      required={p.phoneRequired}
                      type="tel"
                      inputMode="tel"
                      value={formData.phone}
                      onChange={setField('phone')}
                      autoComplete="tel"
                    />
                  </label>
                  <label className="lp-field">
                    <span>Message</span>
                    <textarea rows={2} value={formData.message} onChange={setField('message')} />
                  </label>
                  <button type="submit" className="lp-btn lp-btn-solid" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting…' : 'Submit inquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
