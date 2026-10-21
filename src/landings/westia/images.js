import { bindImages } from '../asset';

import img0 from './images/hero-studio.jpg';
import img1 from './images/highlights/1.jpg';
import img2 from './images/highlights/2.jpg';
import img3 from './images/highlights/3.jpg';
import img4 from './images/highlights/4.jpg';
import img5 from './images/highlights/5.jpg';
import img6 from './images/amenities/garden.jpg';
import img7 from './images/amenities/park.jpg';
import img8 from './images/amenities/lifestyle.jpg';
import img9 from './images/amenities/elevation.jpg';
import img10 from './images/amenities/aerial.jpg';
import img11 from './images/amenities/connect.jpg';
import img12 from './images/cuts/fp-2a.jpg';
import img13 from './images/cuts/fp-2b.jpg';
import img14 from './images/cuts/fp-2c.jpg';
import img15 from './images/hero.jpg';
import img16 from './images/cuts/g-garden.jpg';
import img17 from './images/gallery/aerial.jpg';
import img18 from './images/gallery/evening.jpg';
import img19 from './images/cuts/g-elevation.jpg';
import img20 from './images/gallery/site.jpg';

const files = {
  './images/hero-studio.jpg': img0,
  './images/highlights/1.jpg': img1,
  './images/highlights/2.jpg': img2,
  './images/highlights/3.jpg': img3,
  './images/highlights/4.jpg': img4,
  './images/highlights/5.jpg': img5,
  './images/amenities/garden.jpg': img6,
  './images/amenities/park.jpg': img7,
  './images/amenities/lifestyle.jpg': img8,
  './images/amenities/elevation.jpg': img9,
  './images/amenities/aerial.jpg': img10,
  './images/amenities/connect.jpg': img11,
  './images/cuts/fp-2a.jpg': img12,
  './images/cuts/fp-2b.jpg': img13,
  './images/cuts/fp-2c.jpg': img14,
  './images/hero.jpg': img15,
  './images/cuts/g-garden.jpg': img16,
  './images/gallery/aerial.jpg': img17,
  './images/gallery/evening.jpg': img18,
  './images/cuts/g-elevation.jpg': img19,
  './images/gallery/site.jpg': img20,
};

export const image = bindImages(files, 'westia');
