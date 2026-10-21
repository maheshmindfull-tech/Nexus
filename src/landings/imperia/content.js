import { image } from './images';
import logo from '../../../public/assets/projects/logos/imperia.png';
import breakShot from './media/break.jpg';
import hallVideo from './media/hall.mp4';
import { OFFICE } from '../shared';

const imperia = {
  name: 'Nexus Imperia',
  shortName: 'Imperia',
  location: 'Moshi',
  theme: 'kinara',
  breakShot,
  gallerySlide: true,
  heroScrim: true,
  heroSoft: true,
  heroPosition: 'center center',
  eyebrow: 'Borhadewadi · Moshi',
  heading: 'Supreme Homes',
  headingPrefix: 'The',
  heroTitle: [
    { text: 'Supreme' },
    { text: 'Homes' },
  ],
  lede: '2 and 3 BHK homes in Borhadewadi, Moshi.',
  hero: image('hero-city.jpg'),
  logo,
  logoColor: true,
  brochure: '/landings/imperia/nexus-imperia-brochure.pdf',
  brochureName: 'Nexus Imperia Brochure.pdf',
  email: 'imperia@nexuspune.in',
  phone: '800 70 70 144',
  address: 'Gat No. 79, Opposite Prasanna Goldfields Commercial Complex, Near MNGL CNG, Borhadewadi, Moshi, Pune 412 105.',
  office: OFFICE,
  rera: 'P52100053378',
  phoneRequired: false,
  stats: [
    { value: '2 & 3', label: 'BHK supreme homes' },
    { value: 'Vastu', label: 'Compliant homes' },
    { value: '2', label: 'Balconies in each flat' },
    { value: '2 min', label: 'To Spine Road' },
  ],
  aboutTitle: 'Supreme homes in Moshi.',
  about: [
    'Nexus Imperia offers 2 and 3 BHK homes in Borhadewadi, Moshi, a developing suburb of PCMC. The homes are planned to be spacious, with amenities for every age and a distinct elevation.',
    'Each flat has two balconies, a dedicated wardrobe space, and ventilation planned so sunlight reaches the rooms. Floors use double-charged vitrified tiles, with branded fittings, a video door phone and a concealed flush system.',
    'The address connects towards Chakan, Bhosari, Markal, Talawade IT Park and Hinjewadi IT Park. Spine Road and Tata Motors are about 2 minutes away, and Pune–Nashik Highway about 3 minutes.',
  ],
  highlights: [
    { src: image('highlights/aerial.jpg'), title: 'Double-charged marble floors' },
    { src: image('highlights/play.jpg'), title: 'Spine Road in two minutes' },
  ],
  amenities: {
    subtitle: '',
    lead: { src: hallVideo, label: 'Community Hall', video: true },
    items: [
      { src: image('amenities/gym.jpg'), label: 'Gymnasium' },
      { src: image('amenities/hall.jpg'), label: 'Community Hall' },
      { src: image('amenities/play.jpg'), label: 'Children’s Play' },
      { src: image('amenities/garden.jpg'), label: 'Landscape Garden' },
      { src: image('amenities/entrance.jpg'), label: 'Grand Entrance' },
      { src: image('amenities/living.jpg'), label: 'Spacious Homes' },
    ],
  },
  plansIntro: '',
  plans: [
    { src: image('plans/2bhk.jpg'), title: '2 BHK' },
    { src: image('plans/3bhk.jpg'), title: '3 BHK' },
  ],
  gallery: [
    { src: image('gallery/dusk.jpg'), label: 'Evening elevation', wide: true },
    { src: image('gallery/gate.jpg'), label: 'Entrance' },
    { src: image('gallery/elevation.jpg'), label: 'Day elevation' },
    { src: image('gallery/aerial.jpg'), label: 'Aerial view' },
    { src: image('gallery/play.jpg'), label: 'Play lawn' },
    { src: image('gallery/living.jpg'), label: 'Living and dining' },
  ],
};

export default imperia;
