import { image } from './images';
import logo from '../../../public/assets/projects/logos/square.png';
import breakShot from './media/break.jpg';
import familyVideo from './media/family.mp4';
import { OFFICE } from '../shared';

const square = {
  name: 'Nexus Prime Square',
  shortName: 'Prime Square',
  location: 'Moshi',
  theme: 'kinara',
  breakShot,
  gallerySlide: true,
  heroScrim: true,
  heroSoft: true,
  heroPosition: 'center center',
  eyebrow: 'Borhadewadi · Moshi',
  heading: 'Close to Dreams',
  headingPrefix: 'Close to',
  heroTitle: [
    { text: 'Dreams' },
  ],
  lede: '2 and 3 BHK homes in Borhadewadi, Moshi.',
  hero: image('hero-rooftop.jpg'),
  logo,
  logoColor: true,
  brochure: '/landings/prime/nexus-prime-square-brochure.pdf',
  brochureName: 'Nexus Prime Square Brochure.pdf',
  email: 'sales@nexuspune.com',
  address: 'Sr. No. 643/44, Laxman Sadashiv Alhar Marg, Borhadewadi, Moshi, Pune 412 105.',
  office: OFFICE,
  rera: 'P52100050975',
  phoneRequired: false,
  stats: [
    { value: '2 & 3', label: 'BHK homes' },
    { value: 'Vastu', label: 'Compliant planning' },
    { value: '2', label: 'Balconies in each home' },
    { value: 'Moshi', label: 'Centre of Pradhikaran' },
  ],
  aboutTitle: 'A lifestyle closer to the city.',
  about: [
    'Nexus Prime Square offers 2 and 3 BHK homes in Moshi, Pradhikaran, planned for light, ventilation and a shorter journey to work, schools and everyday conveniences.',
    'Podium and ground-level amenities include a swimming pool, fitness zone, indoor games, community hall, landscaped garden and children’s play area, with 24-hour security and power backup for each home.',
  ],
  highlights: [
    { src: image('highlights/towers.jpg'), title: 'At the centre of Moshi' },
    { src: image('highlights/pool.jpg'), title: 'Podium swimming pool' },
    { src: image('highlights/aerial.jpg'), title: 'Indoor games' },
    { src: image('highlights/garden.jpg'), title: 'Fitness zone' },
    { src: image('highlights/play.jpg'), title: 'For children and seniors' },
  ],
  amenities: {
    subtitle: '',
    lead: { src: familyVideo, label: 'Nexus Prime Square', video: true },
    items: [
      { src: image('amenities/pool.jpg'), label: 'Swimming Pool' },
      { src: image('amenities/gym.jpg'), label: 'Fitness Zone' },
      { src: image('amenities/games.jpg'), label: 'Indoor Games' },
      { src: image('amenities/hall.jpg'), label: 'Community Hall' },
      { src: image('amenities/play.jpg'), label: 'Children’s Play' },
      { src: image('amenities/garden.jpg'), label: 'Landscape Garden' },
    ],
  },
  plansIntro: '',
  plans: [
    { src: image('plans/2bhk.jpg'), title: '2 BHK · Comfort' },
    { src: image('plans/2bhk-plus.jpg'), title: '2 BHK · Comfort Plus' },
    { src: image('plans/2bhk-prime.jpg'), title: '2 BHK · Comfort Prime' },
    { src: image('plans/3bhk-prime.jpg'), title: '3 BHK · Prime' },
    { src: image('plans/3bhk.jpg'), title: '3 BHK · Comfort Plus' },
  ],
  gallery: [
    { src: image('hero.jpg'), label: 'Street elevation' },
    { src: image('street.jpg'), label: 'Twin towers' },
    { src: image('aerial.jpg'), label: 'Aerial view' },
    { src: image('pool.jpg'), label: 'Swimming pool' },
    { src: image('play.jpg'), label: 'Children’s play' },
    { src: image('garden.jpg'), label: 'Podium garden' },
  ],
};

export default square;
