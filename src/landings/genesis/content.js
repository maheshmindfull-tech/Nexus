import { image } from './images';
import breakShot from './media/break.jpg';
import amenityVideo from './media/amenity.mp4';
import logo from './media/logo.png';
import { OFFICE } from '../shared';

const genesis = {
  name: 'Nexus Genesis',
  shortName: 'Genesis',
  location: 'Kiwale',
  theme: 'kinara',
  breakShot,
  gallerySlide: true,
  heroScrim: true,
  heroSoft: true,
  heroPosition: 'center center',
  eyebrow: 'Kiwale · Pune',
  heading: 'Where Life Begins',
  headingPrefix: 'Where',
  heroTitle: [
    { text: 'Life' },
    { text: 'Begins' },
  ],
  lede: '2, 3 and 4 BHK homes on 3.5 acres in Kiwale.',
  hero: image('home.jpg'),
  logo,
  logoColor: true,
  brochure: '/landings/genesis/nexus-genesis-brochure.pdf',
  brochureName: 'Nexus Genesis Brochure.pdf',
  email: 'sales@nexuspune.com',
  address: 'Survey No. 42A/7, Vikas Nagar, Kiwale, Pune, Maharashtra.',
  office: OFFICE,
  rera: 'PR1261012501959',
  phoneRequired: false,
  stats: [
    { value: '2, 3 & 4', label: 'BHK homes' },
    { value: '550+', label: 'Residences' },
    { value: '5', label: 'Towers on 3.5 acres' },
    { value: '12 ft', label: 'Swimming pool' },
  ],
  aboutTitle: 'Where life begins, in the heart of Kiwale.',
  about: [
    'Nexus Genesis is planned around the five elements: earth, water, fire, air and space. Five towers hold 2, 3 and 4 BHK homes on 3.5 acres, with Vastu-compliant layouts, sunlight and ventilation.',
    'A 12-ft pool, glass clubhouse, gymnasium, yoga terrace, landscaped garden and children’s play sit within the project, a short drive from the Mumbai–Pune Expressway and Hinjewadi.',
  ],
  highlights: [
    { src: image('highlights/pool.jpg'), title: 'Swimming Pool' },
    { src: image('highlights/clubhouse.jpg'), title: 'Clubhouse' },
    { src: image('highlights/evening.jpg'), title: 'Relaxation Area' },
    { src: image('highlights/play.jpg'), title: 'Mumbai–Pune Expressway' },
  ],
  amenities: {
    subtitle: '',
    lead: { src: amenityVideo, label: 'Yoga terrace', video: true },
    items: [
      { src: image('amenities/pool.jpg'), label: 'Swimming Pool' },
      { src: image('amenities/gym.jpg'), label: 'Gymnasium' },
      { src: image('amenities/play.jpg'), label: 'Children’s Play' },
      { src: image('amenities/opengym.jpg'), label: 'Open Gym' },
      { src: image('amenities/lawn.jpg'), label: 'Party Lawn' },
      { src: image('amenities/clubhouse.jpg'), label: 'Clubhouse' },
    ],
  },
  gallery: [
    { src: image('hero.jpg'), label: 'Evening aerial' },
    { src: image('street.jpg'), label: 'Tower elevation' },
    { src: image('dusk.jpg'), label: 'Dusk view' },
    { src: image('pool.jpg'), label: 'Swimming pool' },
    { src: image('play.jpg'), label: 'Children’s play' },
    { src: image('lawn.jpg'), label: 'Party lawn' },
  ],
};

export default genesis;
