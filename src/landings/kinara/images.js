import { bindImages } from '../asset';

import img0 from './images/hero-final-chapter.png';
import img1 from './images/highlights/1.png';
import img2 from './images/highlights/2.png';
import img3 from './images/highlights/3.png';
import img4 from './images/highlights/4.png';
import img5 from './images/highlights/5.png';
import img6 from './images/amenities/joyful.png';
import img7 from './images/amenities/comfort.png';
import img8 from './images/amenities/child.png';
import img9 from './images/amenities/woman.png';
import img10 from './images/amenities/outdoor.png';
import img11 from './images/amenities/indoor.png';
import img12 from './images/gallery/landscape.jpg';
import img13 from './images/gallery/aerial.jpg';
import img14 from './images/gallery/tower.jpg';
import img15 from './images/gallery/clubhouse.jpg';
import img16 from './images/gallery/gym.jpg';

const files = {
  './images/hero-final-chapter.png': img0,
  './images/highlights/1.png': img1,
  './images/highlights/2.png': img2,
  './images/highlights/3.png': img3,
  './images/highlights/4.png': img4,
  './images/highlights/5.png': img5,
  './images/amenities/joyful.png': img6,
  './images/amenities/comfort.png': img7,
  './images/amenities/child.png': img8,
  './images/amenities/woman.png': img9,
  './images/amenities/outdoor.png': img10,
  './images/amenities/indoor.png': img11,
  './images/gallery/landscape.jpg': img12,
  './images/gallery/aerial.jpg': img13,
  './images/gallery/tower.jpg': img14,
  './images/gallery/clubhouse.jpg': img15,
  './images/gallery/gym.jpg': img16,
};

export const image = bindImages(files, 'kinara');
