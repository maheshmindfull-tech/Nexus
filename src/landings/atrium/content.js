import { image } from './images';
import logo from '../../../public/assets/projects/logos/atrium.png';
import breakShot from './media/break.jpg';
import childrenVideo from './media/children.mp4';
import { OFFICE } from '../shared';

const atrium = {
  name: 'Nexus Atrium',
  shortName: 'Atrium',
  location: 'Moshi',
  theme: 'kinara',
  breakShot,
  gallerySlide: true,
  heroScrim: true,
  heroSoft: true,
  heroPosition: 'center center',
  eyebrow: 'Pradhikaran Annexe · Moshi',
  heading: 'The Easy Life',
  headingPrefix: 'The',
  heroTitle: [
    { text: 'Easy' },
    { text: 'Life' },
  ],
  lede: '1, 2 and 3 BHK homes in Borhadewadi, Moshi.',
  hero: image('hero-emerald.jpg'),
  logo,
  logoColor: true,
  brochure: '/landings/atrium/nexus-atrium-brochure.pdf',
  brochureName: 'Nexus Atrium Brochure.pdf',
  email: 'atrium@nexuspune.in',
  phone: '800 70 70 144',
  address: 'Gat No. 79, Opposite Prasanna Goldfields Commercial Complex, Near MNGL CNG Pump, Borhadewadi, Moshi, Pune 412 105.',
  office: OFFICE,
  rera: 'P52100032575',
  phoneRequired: false,
  stats: [
    { value: '1, 2 & 3', label: 'BHK homes' },
    { value: 'Vastu', label: 'Compliant planning' },
    { value: '10+', label: 'Amenities on site' },
    { value: '2 min', label: 'To Spine Road' },
  ],
  aboutTitle: 'Everyday ease, in a connected Moshi address.',
  about: [
    'Nexus Atrium offers 1, 2 and 3 BHK homes in Pradhikaran Annexe, Borhadewadi. The site sits close to Spine Road, the Pune–Nashik Highway, Bhosari, Chinchwad and Talawade IT Park.',
    'Homes are Vastu compliant, with two balconies and cross ventilation. A landscaped garden, children’s play area, gymnasium and community hall complete the project.',
  ],
  highlights: [
    { src: image('highlights/elevation.jpg'), title: '1, 2 and 3 BHK homes' },
    { src: image('highlights/facade.jpg'), title: 'Two minutes to Spine Road' },
    { src: image('highlights/garden.jpg'), title: 'Vastu-compliant homes' },
    { src: image('highlights/entrance.jpg'), title: 'Entrance with security cabin' },
    { src: image('highlights/play.jpg'), title: 'Community hall' },
  ],
  amenities: {
    subtitle: '',
    lead: { src: childrenVideo, label: 'Children’s Play', video: true },
    items: [
      { src: image('amenities/gym.jpg'), label: 'Gymnasium' },
      { src: image('amenities/hall.jpg'), label: 'Community Hall' },
      { src: image('amenities/play.jpg'), label: 'Children’s Play' },
      { src: image('amenities/garden.jpg'), label: 'Landscaped Garden' },
      { src: image('amenities/entrance.jpg'), label: 'Grand Entrance' },
      { src: image('amenities/aerial.jpg'), label: 'Open Views' },
    ],
  },
  plansIntro: '',
  plans: [
    { src: image('plans/1bhk.png'), title: '1 BHK' },
    { src: image('plans/2bhk.png'), title: '2 BHK' },
    { src: image('plans/2bhk-2.png'), title: '2 BHK · Dry balcony' },
    { src: image('plans/3bhk.png'), title: '3 BHK' },
  ],
  gallery: [
    { src: image('hero.jpg'), label: 'Evening view' },
    { src: image('street.jpg'), label: 'Street elevation' },
    { src: image('elevation.jpg'), label: 'Grand elevation' },
    { src: image('aerial.jpg'), label: 'Aerial view' },
    { src: image('entrance.jpg'), label: 'Arrival' },
    { src: image('play.jpg'), label: 'Children’s play' },
  ],
};

export default atrium;
