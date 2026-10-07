import React, { useState, useEffect } from 'react';

/**
 * Typewriter – Types a phrase, pauses, backspaces, then advances to the next phrase.
 * Includes a hidden ghost phrase to reserve layout height and prevent content jumping.
 */
export default function Typewriter({
  phrases,
  typeMs = 65,
  deleteMs = 35,
  holdMs = 2000,
  className = '',
}) {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (reduced || !phrases || phrases.length === 0) return undefined;
    const full = phrases[idx];
    let delay = deleting ? deleteMs : typeMs;

    if (!deleting && text === full) delay = holdMs;
    if (deleting && text === '') delay = 350;

    const t = setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setIdx((idx + 1) % phrases.length);
      } else {
        setText(
          deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1)
        );
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, idx, phrases, typeMs, deleteMs, holdMs, reduced]);

  if (!phrases || phrases.length === 0) return null;
  if (reduced) return <>{phrases[0]}</>;

  // Reserve max height to prevent layout shift
  const longest = phrases.reduce((a, b) => (b.length > a.length ? b : a), '');

  return (
    <span className={`tw ${className}`} aria-label={phrases[idx] || phrases[0]}>
      <span className="tw-ghost" aria-hidden="true">
        {longest}
      </span>
      <span className="tw-live" aria-hidden="true">
        {text}
        <span className="tw-caret" />
      </span>
    </span>
  );
}
