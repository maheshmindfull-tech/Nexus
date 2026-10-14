import React, { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Calendar, Clock, Link2, Search } from 'lucide-react';
import Footer from './Footer';
import { BLOG_CATEGORIES, BLOG_POSTS, readMinutes } from '../data/blogPosts';
import { applyPageSeo } from '../seo';
import '../blogs.css';

function postFromUrl() {
  if (typeof window === 'undefined') return null;
  const id = new URLSearchParams(window.location.search).get('post');
  return BLOG_POSTS.some((p) => p.id === id) ? id : null;
}

function PostMeta({ post }) {
  return (
    <div className="blog-meta">
      <span className="blog-meta-item"><Calendar size={13} />{post.date}</span>
      <span className="blog-meta-item"><Clock size={13} />{readMinutes(post)} min read</span>
    </div>
  );
}

function Block({ block }) {
  if (typeof block === 'string') return <p>{block}</p>;
  if (block.h) return <h2>{block.h}</h2>;
  if (block.ul) return <ul>{block.ul.map((li) => <li key={li}>{li}</li>)}</ul>;
  if (block.ol) return <ol>{block.ol.map((li) => <li key={li}>{li}</li>)}</ol>;
  if (block.quote) return <blockquote>{block.quote}</blockquote>;
  if (block.tip) return <aside className="blog-tip"><strong>Good to know</strong>{block.tip}</aside>;
  return null;
}

function PostCard({ post, onOpen }) {
  return (
    <button type="button" className="blog-card" onClick={() => onOpen(post.id)}>
      <div className="blog-card-media">
        <img src={post.image} alt="" loading="lazy" />
        <span className="blog-chip">{post.category}</span>
      </div>
      <div className="blog-card-body">
        <PostMeta post={post} />
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <span className="blog-read">Read article <ArrowRight size={14} /></span>
      </div>
    </button>
  );
}

export default function BlogsPage({
  onNavigateHome,
  onNavigateAbout,
  onNavigateProjects,
  onNavigateCareers,
  onNavigateCPInquiry,
  onNavigateSkydale,
  onNavigateContact,
  onNavigateBlogs,
  onOpenEnquire,
}) {
  const [activeId, setActiveId] = useState(postFromUrl);
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [progress, setProgress] = useState(0);

  const active = BLOG_POSTS.find((post) => post.id === activeId) || null;

  useEffect(() => {
    const onPop = () => setActiveId(postFromUrl());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    if (active) {
      document.title = `${active.title} | Nexus Journal`;
    } else {
      applyPageSeo('blogs');
    }
  }, [active]);

  useEffect(() => {
    if (!active) return undefined;
    const onScroll = () => {
      const el = document.querySelector('.blog-article-body');
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight * 0.6;
      setProgress(Math.min(1, Math.max(0, -rect.top / Math.max(total, 1))));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [active]);

  const openPost = (id) => {
    window.history.pushState({ page: 'blogs' }, '', id ? `/blogs?post=${id}` : '/blogs');
    setActiveId(id);
    setCopied(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BLOG_POSTS.filter((p) => {
      if (category !== 'All' && p.category !== category) return false;
      if (!q) return true;
      return `${p.title} ${p.excerpt} ${p.category}`.toLowerCase().includes(q);
    });
  }, [category, query]);

  const showFeatured = category === 'All' && !query.trim();
  const featured = showFeatured ? BLOG_POSTS.find((p) => p.featured) : null;
  const gridPosts = featured ? filtered.filter((p) => p.id !== featured.id) : filtered;

  const related = active
    ? [
        ...BLOG_POSTS.filter((p) => p.id !== active.id && p.category === active.category),
        ...BLOG_POSTS.filter((p) => p.id !== active.id && p.category !== active.category),
      ].slice(0, 3)
    : [];

  const shareUrl = active ? `${window.location.origin}/blogs?post=${active.id}` : '';

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="blog-page">
      {active ? (
        <>
          <div className="blog-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
          <header className="blog-article-hero">
            <div className="blog-article-head">
              <button type="button" className="blog-back" onClick={() => openPost(null)}>
                <ArrowLeft size={15} /> All articles
              </button>
              <span className="blog-chip blog-chip-static">{active.category}</span>
              <h1>{active.title}</h1>
              <p className="blog-article-lede">{active.excerpt}</p>
              <div className="blog-byline">
                <span className="blog-avatar">N</span>
                <div>
                  <strong>Nexus Editorial Team</strong>
                  <PostMeta post={active} />
                </div>
              </div>
            </div>
          </header>

          <main className="blog-main blog-main-article">
            <div className="blog-article-wrap">
              <img src={active.image} alt={active.title} className="blog-article-img" />

              <article className="blog-article-body">
                {active.body.map((block, i) => <Block key={i} block={block} />)}
              </article>

              <div className="blog-share">
                <span>Share this article</span>
                <div className="blog-share-actions">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`${active.title} ${shareUrl}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <button type="button" onClick={copyLink}>
                    <Link2 size={14} /> {copied ? 'Link copied' : 'Copy link'}
                  </button>
                </div>
              </div>

              <section className="blog-cta">
                <div>
                  <h2>Planning your next home?</h2>
                  <p>Talk to our team about ongoing Nexus projects, pricing and site visits.</p>
                </div>
                <div className="blog-cta-actions">
                  <button type="button" className="blog-btn blog-btn-primary" onClick={onOpenEnquire}>
                    Enquire now
                  </button>
                  <button type="button" className="blog-btn blog-btn-ghost" onClick={onNavigateProjects}>
                    View projects
                  </button>
                </div>
              </section>
            </div>

            {related.length > 0 && (
              <section className="blog-related">
                <div className="blog-wrap">
                  <h2 className="blog-section-title">Keep reading</h2>
                  <div className="blog-grid">
                    {related.map((post) => <PostCard key={post.id} post={post} onOpen={openPost} />)}
                  </div>
                </div>
              </section>
            )}
          </main>
        </>
      ) : (
        <>
          <header className="blog-hero">
            <div className="blog-hero-wrap">
              <div className="blog-eyebrow">Nexus Journal</div>
              <h1 className="blog-title">Insights for smarter homebuying in Pune</h1>
              <p className="blog-subtitle">
                Buying guides, neighbourhood insights and project updates from the team that has
                been building across Pimpri-Chinchwad, Pune and Nashik since 1996.
              </p>
              <label className="blog-search">
                <Search size={18} />
                <input
                  type="search"
                  placeholder="Search articles"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Search articles"
                />
              </label>
            </div>
          </header>

          <main className="blog-main">
            <div className="blog-wrap">
              <div className="blog-filters" role="tablist" aria-label="Article categories">
                {BLOG_CATEGORIES.map((c) => (
                  <button
                    key={c}
                    type="button"
                    role="tab"
                    aria-selected={category === c}
                    className={`blog-filter${category === c ? ' is-active' : ''}`}
                    onClick={() => setCategory(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>

              {featured && (
                <button type="button" className="blog-featured" onClick={() => openPost(featured.id)}>
                  <div className="blog-featured-media">
                    <img src={featured.image} alt="" />
                  </div>
                  <div className="blog-featured-body">
                    <span className="blog-featured-label">Featured · {featured.category}</span>
                    <h2>{featured.title}</h2>
                    <p>{featured.excerpt}</p>
                    <PostMeta post={featured} />
                    <span className="blog-read">Read article <ArrowRight size={14} /></span>
                  </div>
                </button>
              )}

              {featured && <h2 className="blog-section-title">Latest articles</h2>}

              {gridPosts.length > 0 ? (
                <div className="blog-grid">
                  {gridPosts.map((post) => <PostCard key={post.id} post={post} onOpen={openPost} />)}
                </div>
              ) : (
                <div className="blog-empty">
                  <p>No articles match your search.</p>
                  <button
                    type="button"
                    className="blog-btn blog-btn-primary"
                    onClick={() => { setQuery(''); setCategory('All'); }}
                  >
                    Show all articles
                  </button>
                </div>
              )}
            </div>
          </main>
        </>
      )}

      <Footer
        onNavigateAbout={onNavigateAbout}
        onNavigateHome={onNavigateHome}
        onNavigateProjects={onNavigateProjects}
        onNavigateCareers={onNavigateCareers}
        onNavigateCPInquiry={onNavigateCPInquiry}
        onNavigateSkydale={onNavigateSkydale}
        onNavigateContact={onNavigateContact}
        onNavigateBlogs={onNavigateBlogs}
        onOpenEnquire={onOpenEnquire}
      />
    </div>
  );
}
