import { bindImages } from '../asset';

import img0 from './images/home.jpg';
import img1 from './images/highlights/pool.jpg';
import img2 from './images/highlights/clubhouse.jpg';
import img3 from './images/highlights/evening.jpg';
import img4 from './images/highlights/play.jpg';
import img5 from './images/amenities/pool.jpg';
import img6 from './images/amenities/gym.jpg';
import img7 from './images/amenities/play.jpg';
import img8 from './images/amenities/opengym.jpg';
import img9 from './images/amenities/lawn.jpg';
import img10 from './images/amenities/clubhouse.jpg';
import img11 from './images/hero.jpg';
import img12 from './images/street.jpg';
import img13 from './images/dusk.jpg';
import img14 from './images/pool.jpg';
import img15 from './images/play.jpg';
import img16 from './images/lawn.jpg';

const files = {
  './images/home.jpg': img0,
  './images/highlights/pool.jpg': img1,
  './images/highlights/clubhouse.jpg': img2,
  './images/highlights/evening.jpg': img3,
  './images/highlights/play.jpg': img4,
  './images/amenities/pool.jpg': img5,
  './images/amenities/gym.jpg': img6,
  './images/amenities/play.jpg': img7,
  './images/amenities/opengym.jpg': img8,
  './images/amenities/lawn.jpg': img9,
  './images/amenities/clubhouse.jpg': img10,
  './images/hero.jpg': img11,
  './images/street.jpg': img12,
  './images/dusk.jpg': img13,
  './images/pool.jpg': img14,
  './images/play.jpg': img15,
  './images/lawn.jpg': img16,
};

export const image = bindImages(files, 'genesis');
