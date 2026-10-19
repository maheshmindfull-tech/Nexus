import React, { useState } from 'react';
import {
  Baby,
  Building2,
  ChevronLeft,
  ChevronRight,
  DoorOpen,
  Dumbbell,
  Flower2,
  Gamepad2,
  Home,
  MapPin,
  Sun,
  Trees,
  Users,
  Waves,
} from 'lucide-react';

const ICON_RULES = [
  [/pool|swim/i, Waves],
  [/gym|fitness/i, Dumbbell],
  [/play|child|kid/i, Baby],
  [/garden|lawn|park|landscape/i, Trees],
  [/hall|club|community/i, Users],
  [/entrance|gate/i, DoorOpen],
  [/game/i, Gamepad2],
  [/balcony|view/i, Sun],
  [/living|home|spacious/i, Home],
  [/connect/i, MapPin],
  [/elevat|tower/i, Building2],
  [/flower|lawn/i, Flower2],
];

function iconFor(label) {
  const match = ICON_RULES.find(([pattern]) => pattern.test(label));
  return match ? match[1] : Flower2;
}

function AmenityCopy() {
  return (
    <div className="lp-am-copy">
      <h2>Amenities</h2>
    </div>
  );
}

function IconName({ label }) {
  const Icon = iconFor(label);
  return (
    <div className="lp-am-icon-name">
      <Icon size={22} strokeWidth={1.4} aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}

function Banner({ lead, items }) {
  const [active, setActive] = useState(-1);
  const current = active >= 0 ? items[active] : null;
  const src = current?.src || lead?.src || items[0]?.src;
  return (
    <div className="lp-am-banner-block">
      <AmenityCopy />
      <div className="lp-am-banner">
        {src ? <img src={src} alt={current?.label || ''} /> : null}
        <div className="lp-am-banner-row">
          {items.map((item, i) => (
            <button
              key={item.label}
              type="button"
              className={i === active ? 'is-on' : ''}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
            >
              <IconName label={item.label} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function CleanGrid({ items }) {
  return (
    <div className="lp-am-clean">
      <AmenityCopy />
      {items.map((item, i) => (
        <figure key={item.label} className={`lp-am-card${i === 3 ? ' is-row2' : ''}`}>
          <img src={item.src} alt="" />
          <figcaption>{item.label}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function Split({ items }) {
  return (
    <div className="lp-am-split">
      <AmenityCopy />
      <div className="lp-am-mosaic">
        {items.map((item, i) => (
          <figure
            key={item.label}
            className={i === 0 ? 'is-lead' : i === items.length - 1 ? 'is-last' : ''}
          >
            <img src={item.src} alt="" />
            <figcaption>{item.label}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function Slider({ items }) {
  const [index, setIndex] = useState(0);
  const count = items.length;
  if (!count) return null;
  const prev = (index - 1 + count) % count;
  const next = (index + 1) % count;
  const pad = (n) => String(n).padStart(2, '0');

  return (
    <div className="lp-am-slider">
      <AmenityCopy />
      <div className="lp-am-slider-main">
        <button type="button" className="lp-am-arrow" onClick={() => setIndex(prev)} aria-label="Previous amenity">
          <ChevronLeft size={18} />
        </button>
        <div className="lp-am-slider-stage">
          {[prev, index, next].map((itemIndex, place) => {
            const item = items[itemIndex];
            const current = place === 1;
            return (
              <figure key={`${item.label}-${place}`} className={current ? 'is-current' : 'is-side'}>
                <img src={item.src} alt="" />
                {current ? <figcaption>{item.label}</figcaption> : null}
              </figure>
            );
          })}
        </div>
        <button type="button" className="lp-am-arrow" onClick={() => setIndex(next)} aria-label="Next amenity">
          <ChevronRight size={18} />
        </button>
        <div className="lp-am-slider-meta">
          <div className="lp-am-dots">
            {items.map((item, i) => (
              <button
                key={item.label}
                type="button"
                className={i === index ? 'is-on' : ''}
                aria-label={item.label}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <p>{pad(index + 1)} / {pad(count)}</p>
        </div>
      </div>
    </div>
  );
}

function Masonry({ items }) {
  const [first, second, ...rest] = items;
  return (
    <div className="lp-am-masonry">
      <div className="lp-am-masonry-top">
        <AmenityCopy />
        {[first, second].filter(Boolean).map((item) => (
          <figure key={item.label}>
            <img src={item.src} alt="" />
            <figcaption>{item.label}</figcaption>
          </figure>
        ))}
      </div>
      <div className="lp-am-masonry-row">
        {rest.map((item) => (
          <figure key={item.label}>
            <img src={item.src} alt="" />
            <figcaption>{item.label}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function IconFocus({ lead, items }) {
  const start = items.findIndex((item) => item.src === lead?.src);
  const [active, setActive] = useState(start >= 0 ? start : 0);
  const current = items[active] || lead || items[0];
  const src = current?.src;
  return (
    <div className="lp-am-icons">
      <div className="lp-am-icons-copy">
        <AmenityCopy />
        <div className="lp-am-icon-grid">
          {items.map((item, i) => (
            <button
              key={item.label}
              type="button"
              className={i === active ? 'is-on' : ''}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
            >
              <IconName label={item.label} />
            </button>
          ))}
        </div>
      </div>
      {src ? (
        <figure className="lp-am-icons-photo">
          <img src={src} alt={current?.label || ''} />
        </figure>
      ) : null}
    </div>
  );
}

const BOARDS = {
  banner: Banner,
  grid: CleanGrid,
  split: Split,
  slider: Slider,
  masonry: Masonry,
  icons: IconFocus,
};

export default function AmenityBoard({ layout, lead, items }) {
  const Board = BOARDS[layout];
  if (!Board) return null;
  return (
    <div className="lp-wrap">
      <Board lead={lead} items={items} />
    </div>
  );
}
