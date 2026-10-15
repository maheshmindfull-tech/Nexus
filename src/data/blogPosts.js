/*
 * Article body blocks:
 *   'text'            paragraph (inline **bold** and [label](href))
 *   { h: 'text' }     section heading
 *   { h3: 'text' }    sub-heading
 *   { ul: [...] }     bullet list
 *   { ol: [...] }     numbered list
 *   { table: { head: [...], rows: [[...]] } }
 *   { faq: [{ q, a: [...] }] }
 */
import { NEXUS_ARTICLES } from './nexusArticles';

const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

function toTime(date) {
  const [d, m, y] = date.split(' ');
  return Date.UTC(Number(y), MONTHS.indexOf(m.toLowerCase()), Number(d));
}

export const BLOG_POSTS = [...NEXUS_ARTICLES]
  .sort((a, b) => toTime(b.date) - toTime(a.date))
  .map((post, i) => ({ ...post, featured: i === 0 }));

function blockText(b) {
  if (typeof b === 'string') return b;
  if (b.ul || b.ol) return (b.ul || b.ol).join(' ');
  if (b.table) return [b.table.head, ...b.table.rows].flat().join(' ');
  if (b.faq) return b.faq.map((f) => `${f.q} ${f.a.join(' ')}`).join(' ');
  return b.h || b.h3 || b.quote || b.tip || '';
}

export function readMinutes(post) {
  const words = post.body.map(blockText).join(' ').split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
}

export function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);
}
