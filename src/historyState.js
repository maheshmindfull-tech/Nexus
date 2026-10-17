let restoring = false;

export function markRestoring(active) {
  restoring = active;
}

export function rememberScroll() {
  if (restoring || typeof window === 'undefined') return;
  const state = window.history.state;
  if (!state || typeof state !== 'object') return;
  const scrollY = window.scrollY;
  if (state.scrollY === scrollY) return;
  window.history.replaceState({ ...state, scrollY }, '');
}

export function pushAppState(page, url) {
  rememberScroll();
  const prev = window.history.state;
  const idx = (prev && typeof prev === 'object' ? prev.idx : 0) ?? 0;
  window.history.pushState({ page, scrollY: 0, idx: idx + 1 }, '', url);
}

export function canGoBack() {
  const state = window.history.state;
  return Boolean(state && typeof state === 'object' && state.idx > 0);
}

export function stampHistory(page, url) {
  const prev = window.history.state;
  const base = prev && typeof prev === 'object' ? prev : {};
  window.history.replaceState(
    {
      ...base,
      page,
      idx: base.idx ?? 0,
      scrollY: base.scrollY ?? window.scrollY,
    },
    '',
    url,
  );
}
