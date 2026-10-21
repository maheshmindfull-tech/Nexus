import { bindImages } from '../asset';

import img0 from './images/hero-rooftop.jpg';
import img1 from './images/highlights/towers.jpg';
import img2 from './images/highlights/pool.jpg';
import img3 from './images/highlights/aerial.jpg';
import img4 from './images/highlights/garden.jpg';
import img5 from './images/highlights/play.jpg';
import img6 from './images/aerial.jpg';
import img7 from './images/amenities/pool.jpg';
import img8 from './images/amenities/gym.jpg';
import img9 from './images/amenities/games.jpg';
import img10 from './images/amenities/hall.jpg';
import img11 from './images/amenities/play.jpg';
import img12 from './images/amenities/garden.jpg';
import img13 from './images/plans/2bhk.jpg';
import img14 from './images/plans/2bhk-plus.jpg';
import img15 from './images/plans/2bhk-prime.jpg';
import img16 from './images/plans/3bhk-prime.jpg';
import img17 from './images/plans/3bhk.jpg';
import img18 from './images/hero.jpg';
import img19 from './images/street.jpg';
import img20 from './images/pool.jpg';
import img21 from './images/play.jpg';
import img22 from './images/garden.jpg';

const files = {
  './images/hero-rooftop.jpg': img0,
  './images/highlights/towers.jpg': img1,
  './images/highlights/pool.jpg': img2,
  './images/highlights/aerial.jpg': img3,
  './images/highlights/garden.jpg': img4,
  './images/highlights/play.jpg': img5,
  './images/aerial.jpg': img6,
  './images/amenities/pool.jpg': img7,
  './images/amenities/gym.jpg': img8,
  './images/amenities/games.jpg': img9,
  './images/amenities/hall.jpg': img10,
  './images/amenities/play.jpg': img11,
  './images/amenities/garden.jpg': img12,
  './images/plans/2bhk.jpg': img13,
  './images/plans/2bhk-plus.jpg': img14,
  './images/plans/2bhk-prime.jpg': img15,
  './images/plans/3bhk-prime.jpg': img16,
  './images/plans/3bhk.jpg': img17,
  './images/hero.jpg': img18,
  './images/street.jpg': img19,
  './images/pool.jpg': img20,
  './images/play.jpg': img21,
  './images/garden.jpg': img22,
};

export const image = bindImages(files, 'prime');
