import { bindImages } from '../asset';

import img0 from './images/hero-city.jpg';
import img1 from './images/highlights/elevation.jpg';
import img2 from './images/highlights/aerial.jpg';
import img3 from './images/highlights/gate.jpg';
import img4 from './images/highlights/play.jpg';
import img5 from './images/amenities/gym.jpg';
import img6 from './images/amenities/hall.jpg';
import img7 from './images/amenities/play.jpg';
import img8 from './images/amenities/garden.jpg';
import img9 from './images/amenities/entrance.jpg';
import img10 from './images/amenities/living.jpg';
import img11 from './images/plans/2bhk.jpg';
import img12 from './images/plans/3bhk.jpg';
import img13 from './images/gallery/dusk.jpg';
import img14 from './images/gallery/gate.jpg';
import img15 from './images/gallery/elevation.jpg';
import img16 from './images/gallery/aerial.jpg';
import img17 from './images/gallery/play.jpg';
import img18 from './images/gallery/living.jpg';

const files = {
  './images/hero-city.jpg': img0,
  './images/highlights/elevation.jpg': img1,
  './images/highlights/aerial.jpg': img2,
  './images/highlights/gate.jpg': img3,
  './images/highlights/play.jpg': img4,
  './images/amenities/gym.jpg': img5,
  './images/amenities/hall.jpg': img6,
  './images/amenities/play.jpg': img7,
  './images/amenities/garden.jpg': img8,
  './images/amenities/entrance.jpg': img9,
  './images/amenities/living.jpg': img10,
  './images/plans/2bhk.jpg': img11,
  './images/plans/3bhk.jpg': img12,
  './images/gallery/dusk.jpg': img13,
  './images/gallery/gate.jpg': img14,
  './images/gallery/elevation.jpg': img15,
  './images/gallery/aerial.jpg': img16,
  './images/gallery/play.jpg': img17,
  './images/gallery/living.jpg': img18,
};

export const image = bindImages(files, 'imperia');
