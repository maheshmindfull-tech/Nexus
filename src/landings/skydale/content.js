import { image } from './images';
import logo from '../../../public/assets/projects/logos/skydale.png';
import breakShot from './images/twilight-terrace.jpg';
import poolVideo from './media/pool.mp4';
import { OFFICE, TEAM } from '../shared';

const skydale = {
  name: 'Nexus Skydale',
  shortName: 'Skydale',
  location: 'Punawale',
  theme: 'kinara',
  breakShot,
  gallerySlide: true,
  heroScrim: true,
  heroSoft: true,
  heroPosition: 'center center',
  eyebrow: 'Punawale · Pune',
  heading: 'Luxury Living',
  headingPrefix: 'The',
  heroTitle: [
    { text: 'Luxury' },
    { text: 'Living' },
  ],
  lede: 'Premium 2, 3 and 4 BHK homes & commercial spaces in Punawale.',
  hero: image('v2/hero-penthouse.jpg'),
  logo,
  logoColor: true,
  logoMark: true,
  brochure: '/landings/skydale/skydale-brouchure.pdf',
  brochureName: 'Nexus Skydale Brochure.pdf',
  email: 'skydale@nexuspune.in',
  address: 'Survey No. 14, 10, Pandhare Wasti Road, Kate Wasti, Punawale, Pimpri Chinchwad, Pune, Maharashtra 411 033.',
  office: OFFICE,
  rera: 'P52100050149',
  phoneRequired: true,
  stats: [
    { value: '2, 3, 4', label: 'BHK residences' },
    { value: 'Smart', label: 'Home planning' },
    { value: 'Infinity', label: 'Pool and club life' },
    { value: '24/7', label: 'Security' },
  ],
  aboutTitle: 'Homes designed for the way Punawale lives now.',
  about: [
    'Nexus Skydale offers premium 2 BHK, spacious 3 BHK and elegant 4 BHK residences. Each home is planned for smart layouts, ample natural light and excellent ventilation.',
    'Quality construction and refined finishes sit alongside lifestyle amenities, seamless connectivity, and Nexus Group’s record of clear titles and timely possession.',
  ],
  highlights: [
    { src: image('kinara/highlights/tower.jpg'), title: 'Prime Location' },
    { src: image('kinara/highlights/location.jpg'), title: 'Connectivity' },
    { src: image('kinara/highlights/smart.jpg'), title: 'Thoughtfully designed homes' },
    { src: image('kinara/highlights/club.jpg'), title: 'Clubhouse living' },
    { src: image('kinara/highlights/play.jpg'), title: 'Children’s play area' },
  ],
  amenities: {
    subtitle: '',
    lead: { src: poolVideo, label: 'Swimming pool', video: true },
    items: [
      { src: image('amenities/gym.jpg'), label: 'Gymnasium' },
      { src: image('amenities/billiards.jpg'), label: 'Clubhouse' },
      { src: image('amenities/lounge.jpg'), label: 'Community Hall' },
      { src: image('amenities/play.jpg'), label: 'Children’s Play' },
      { src: image('amenities/table-tennis.jpg'), label: 'Indoor Games' },
      { src: image('amenities/balcony.jpg'), label: 'Open Balconies' },
    ],
  },
  plansIntro: '2, 3 and 4 BHK layouts. Furniture shown on the plans is indicative.',
  plans: [
    { src: image('cuts/fp-2.jpg'), title: '2 BHK' },
    { src: image('cuts/fp-3.jpg'), title: '3 BHK' },
    { src: image('cuts/fp-4.jpg'), title: '4 BHK' },
  ],
  gallery: [
    { src: image('v2/g-aerial.jpg'), label: 'Aerial view', wide: true },
    { src: image('v2/g-hall.jpg'), label: 'Entrance lobby' },
    { src: image('v2/g-kids.jpg'), label: 'Children’s play' },
    { src: image('v2/g-tower.jpg'), label: 'Tower' },
    { src: image('v2/g-dusk.jpg'), label: 'Evening light' },
    { src: image('gallery/towers.jpg'), label: 'Towers', wide: true },
    { src: image('gallery/aerial-site.jpg'), label: 'Site view' },
    { src: image('gallery/facade.jpg'), label: 'Building' },
  ],
  team: TEAM,
};

export default skydale;
