import { bindImages } from '../asset';

import img0 from './images/v2/hero-penthouse.jpg';
import img1 from './images/kinara/highlights/tower.jpg';
import img2 from './images/kinara/highlights/location.jpg';
import img3 from './images/kinara/highlights/smart.jpg';
import img4 from './images/kinara/highlights/club.jpg';
import img5 from './images/kinara/highlights/play.jpg';
import img6 from './images/amenities/gym.jpg';
import img7 from './images/amenities/billiards.jpg';
import img8 from './images/amenities/lounge.jpg';
import img10 from './images/amenities/table-tennis.jpg';
import img11 from './images/amenities/balcony.jpg';
import img15 from './images/v2/g-aerial.jpg';
import img16 from './images/v2/g-hall.jpg';
import img17 from './images/v2/g-kids.jpg';
import img18 from './images/v2/g-tower.jpg';
import img19 from './images/v2/g-dusk.jpg';
import img20 from './images/gallery/towers.jpg';
import img21 from './images/gallery/aerial-site.jpg';
import img22 from './images/gallery/facade.jpg';
import imgTower from './images/amenities/tower.jpg';

import fpEWing from './images/cuts/fp-e-wing.png';
import fp4bhkA from './images/cuts/fp-4bhk-a.png';
import fp3bhkB from './images/cuts/fp-3bhk-b.png';
import fp2bhkC from './images/cuts/fp-2bhk-c.png';
import fp2bhkD from './images/cuts/fp-2bhk-d.png';
import fp3bhkE from './images/cuts/fp-3bhk-e.png';
import fp4bhkF from './images/cuts/fp-4bhk-f.png';
import fp3bhkG from './images/cuts/fp-3bhk-g.png';
import fp3bhkH from './images/cuts/fp-3bhk-h.png';

const files = {
  './images/v2/hero-penthouse.jpg': img0,
  './images/kinara/highlights/tower.jpg': img1,
  './images/kinara/highlights/location.jpg': img2,
  './images/kinara/highlights/smart.jpg': img3,
  './images/kinara/highlights/club.jpg': img4,
  './images/kinara/highlights/play.jpg': img5,
  './images/amenities/gym.jpg': img6,
  './images/amenities/billiards.jpg': img7,
  './images/amenities/lounge.jpg': img8,
  './images/amenities/table-tennis.jpg': img10,
  './images/amenities/balcony.jpg': img11,
  './images/amenities/tower.jpg': imgTower,
  './images/cuts/fp-e-wing.png': fpEWing,
  './images/cuts/fp-4bhk-a.png': fp4bhkA,
  './images/cuts/fp-3bhk-b.png': fp3bhkB,
  './images/cuts/fp-2bhk-c.png': fp2bhkC,
  './images/cuts/fp-2bhk-d.png': fp2bhkD,
  './images/cuts/fp-3bhk-e.png': fp3bhkE,
  './images/cuts/fp-4bhk-f.png': fp4bhkF,
  './images/cuts/fp-3bhk-g.png': fp3bhkG,
  './images/cuts/fp-3bhk-h.png': fp3bhkH,
  './images/v2/g-aerial.jpg': img15,
  './images/v2/g-hall.jpg': img16,
  './images/v2/g-kids.jpg': img17,
  './images/v2/g-tower.jpg': img18,
  './images/v2/g-dusk.jpg': img19,
  './images/gallery/towers.jpg': img20,
  './images/gallery/aerial-site.jpg': img21,
  './images/gallery/facade.jpg': img22,
};

export const image = bindImages(files, 'skydale');
