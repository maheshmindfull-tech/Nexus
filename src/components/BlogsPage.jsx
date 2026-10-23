import React, { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Calendar, ChevronDown, Clock, Link2, Search } from 'lucide-react';
import Footer from './Footer';
import { BLOG_POSTS, readMinutes, slugify } from '../data/blogPosts';
import '../blogs.css';

function postIdFromHref(href) {
  if (href.startsWith('/blog/')) {
    const id = decodeURIComponent(href.slice(6).split(/[?#]/)[0].replace(/\/$/, ''));
    return BLOG_POSTS.some((post) => post.id === id) ? id : null;
  }
  if (href.startsWith('/blogs?post=')) {
    const id = href.slice(12).split('&')[0];
    return BLOG_POSTS.some((post) => post.id === id) ? id : null;
  }
  return null;
}

function PostMeta({ post }) {
  return (
    <div className="blog-meta">
      <span className="blog-meta-item"><Calendar size={13} />{post.date}</span>
      <span className="blog-meta-item"><Clock size={13} />{readMinutes(post)} min read</span>
    </div>
  );
}

const PAGE_SIZE = 9;
const INLINE_RE = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;

const plainText = (text) => text.replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

function Rich({ text, onOpenPost }) {
  const parts = [];
  let last = 0;
  let m;
  INLINE_RE.lastIndex = 0;
  while ((m = INLINE_RE.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) {
      parts.push(<strong key={m.index}>{m[1]}</strong>);
    } else {
      const href = m[3];
      const postId = postIdFromHref(href);
      const external = /^https?:/i.test(href);
      parts.push(
        <a
          key={m.index}
          href={postId ? `/blog/${postId}` : href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          onClick={postId ? (e) => {
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
            e.preventDefault();
            onOpenPost(postId);
          } : undefined}
        >
          {m[2]}
        </a>,
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function Block({ block, onOpenPost }) {
  const rich = (t) => <Rich text={t} onOpenPost={onOpenPost} />;
  if (typeof block === 'string') return <p>{rich(block)}</p>;
  if (block.h) return <h2 id={slugify(block.h)}>{block.h}</h2>;
  if (block.h3) return <h3>{block.h3}</h3>;
  if (block.ul) return <ul>{block.ul.map((li, i) => <li key={i}>{rich(li)}</li>)}</ul>;
  if (block.ol) return <ol>{block.ol.map((li, i) => <li key={i}>{rich(li)}</li>)}</ol>;
  if (block.quote) return <blockquote>{block.quote}</blockquote>;
  if (block.tip) return <aside className="blog-tip"><strong>Good to know</strong>{block.tip}</aside>;
  if (block.table) {
    return (
      <div className="blog-table-wrap">
        <table className="blog-table">
          <thead>
            <tr>{block.table.head.map((c, i) => <th key={i}>{c}</th>)}</tr>
          </thead>
          <tbody>
            {block.table.rows.map((row, r) => (
              <tr key={r}>{row.map((c, i) => <td key={i}>{c}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (block.faq) {
    return (
      <div className="blog-faq">
        {block.faq.map((item, i) => (
          <details key={i} className="blog-faq-item" open={i === 0}>
            <summary>
              <span>{item.q}</span>
              <ChevronDown size={18} />
            </summary>
            <div className="blog-faq-answer">
              {item.a.map((a, j) => <p key={j}>{rich(a)}</p>)}
            </div>
          </details>
        ))}
      </div>
    );
  }
  return null;
}

function Contents({ headings }) {
  const jump = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 96, behavior: 'smooth' });
  };
  return (
    <nav className="blog-toc" aria-label="In this article">
      <span className="blog-toc-title">In this article</span>
      <ol>
        {headings.map((h) => (
          <li key={h}>
            <a href={`#${slugify(h)}`} onClick={(e) => jump(e, slugify(h))}>{h}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function openArticle(event, id, onOpen) {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
  event.preventDefault();
  onOpen(id);
}

function PostCard({ post, onOpen }) {
  return (
    <a className="blog-card" href={`/blog/${post.id}`} onClick={(event) => openArticle(event, post.id, onOpen)}>
      <div className="blog-card-media">
        <img src={post.image} alt="" loading="lazy" />
      </div>
      <div className="blog-card-body">
        <PostMeta post={post} />
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <span className="blog-read">Read article <ArrowRight size={14} /></span>
      </div>
    </a>
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
  postId = null,
  onOpenPost,
}) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const active = BLOG_POSTS.find((post) => post.id === postId) || null;
  const headings = active ? active.body.filter((b) => b && b.h).map((b) => b.h) : [];
  const showLede = active
    ? !(typeof active.body[0] === 'string' && plainText(active.body[0]).startsWith(active.excerpt))
    : false;

  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [query]);

  useEffect(() => {
    setCopied(false);
    setProgress(0);
  }, [postId]);

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
    if (onOpenPost) onOpenPost(id || null);
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return BLOG_POSTS;
    return BLOG_POSTS.filter((p) => `${p.title} ${p.excerpt}`.toLowerCase().includes(q));
  }, [query]);

  const featured = query.trim() ? null : BLOG_POSTS.find((p) => p.featured);
  const gridPosts = featured ? filtered.filter((p) => p.id !== featured.id) : filtered;
  const shownPosts = gridPosts.slice(0, visible);

  const related = active ? BLOG_POSTS.filter((p) => p.id !== active.id).slice(0, 3) : [];

  const shareUrl = active ? `${window.location.origin}/blog/${active.id}` : '';

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
          <header className={`blog-article-hero${headings.length > 2 ? ' has-toc' : ''}`}>
            <img src={active.image} alt="" className="blog-hero-bg" />
            <div className="blog-hero-overlay" aria-hidden="true" />
            <div className="blog-article-head">
              <a className="blog-back" href="/blogs" onClick={(event) => openArticle(event, null, openPost)}>
                <ArrowLeft size={15} /> All articles
              </a>
              <h1>{active.title}</h1>
              {showLede && <p className="blog-article-lede">{active.excerpt}</p>}
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
            <div className={`blog-article-wrap${headings.length > 2 ? ' has-toc' : ''}`}>
              <img src={active.image} alt={active.title} className="blog-article-img" />

              <div className="blog-article-layout">
                <article className="blog-article-body">
                  {active.body.map((block, i) => <Block key={i} block={block} onOpenPost={openPost} />)}
                </article>
                {headings.length > 2 && <Contents headings={headings} />}
              </div>

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
            <img
              src="/assets/blog/top-residential-locations-in-pcmc-where-to-buy-your-dream-home-in-2026.jpg"
              alt=""
              className="blog-hero-bg"
            />
            <div className="blog-hero-overlay" aria-hidden="true" />
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
              {featured && (
                <a className="blog-featured" href={`/blog/${featured.id}`} onClick={(event) => openArticle(event, featured.id, openPost)}>
                  <div className="blog-featured-media">
                    <img src={featured.image} alt="" />
                  </div>
                  <div className="blog-featured-body">
                    <span className="blog-featured-label">Featured</span>
                    <h2>{featured.title}</h2>
                    <p>{featured.excerpt}</p>
                    <PostMeta post={featured} />
                    <span className="blog-read">Read article <ArrowRight size={14} /></span>
                  </div>
                </a>
              )}

              {featured && <h2 className="blog-section-title">Latest articles</h2>}

              {gridPosts.length > 0 ? (
                <>
                  <div className="blog-grid">
                    {shownPosts.map((post) => <PostCard key={post.id} post={post} onOpen={openPost} />)}
                  </div>
                  {gridPosts.length > visible && (
                    <div className="blog-more">
                      <button
                        type="button"
                        className="blog-btn blog-btn-outline"
                        onClick={() => setVisible((v) => v + PAGE_SIZE)}
                      >
                        Load more articles ({gridPosts.length - visible})
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="blog-empty">
                  <p>No articles match your search.</p>
                  <button
                    type="button"
                    className="blog-btn blog-btn-primary"
                    onClick={() => setQuery('')}
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
