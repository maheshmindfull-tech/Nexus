import { bindImages } from '../asset';

import img0 from './images/hero-emerald.jpg';
import img1 from './images/highlights/elevation.jpg';
import img2 from './images/highlights/facade.jpg';
import img3 from './images/highlights/garden.jpg';
import img4 from './images/highlights/entrance.jpg';
import img5 from './images/highlights/play.jpg';
import img6 from './images/amenities/gym.jpg';
import img7 from './images/amenities/hall.jpg';
import img8 from './images/amenities/play.jpg';
import img9 from './images/amenities/garden.jpg';
import img10 from './images/amenities/entrance.jpg';
import img11 from './images/amenities/aerial.jpg';
import img12 from './images/plans/1bhk.png';
import img13 from './images/plans/2bhk.png';
import img14 from './images/plans/2bhk-2.png';
import img15 from './images/plans/3bhk.png';
import img16 from './images/hero.jpg';
import img17 from './images/street.jpg';
import img18 from './images/elevation.jpg';
import img19 from './images/aerial.jpg';
import img20 from './images/entrance.jpg';
import img21 from './images/play.jpg';

const files = {
  './images/hero-emerald.jpg': img0,
  './images/highlights/elevation.jpg': img1,
  './images/highlights/facade.jpg': img2,
  './images/highlights/garden.jpg': img3,
  './images/highlights/entrance.jpg': img4,
  './images/highlights/play.jpg': img5,
  './images/amenities/gym.jpg': img6,
  './images/amenities/hall.jpg': img7,
  './images/amenities/play.jpg': img8,
  './images/amenities/garden.jpg': img9,
  './images/amenities/entrance.jpg': img10,
  './images/amenities/aerial.jpg': img11,
  './images/plans/1bhk.png': img12,
  './images/plans/2bhk.png': img13,
  './images/plans/2bhk-2.png': img14,
  './images/plans/3bhk.png': img15,
  './images/hero.jpg': img16,
  './images/street.jpg': img17,
  './images/elevation.jpg': img18,
  './images/aerial.jpg': img19,
  './images/entrance.jpg': img20,
  './images/play.jpg': img21,
};

export const image = bindImages(files, 'atrium');
