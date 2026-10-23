import { image } from './images';
import logo from '../../../public/assets/projects/logos/westia.png';
import breakShot from './media/break.jpg';
import roadVideo from './media/road.mp4';
import { OFFICE, TEAM } from '../shared';

const westia = {
  name: 'Nexus Westia',
  shortName: 'Westia',
  location: 'Punawale',
  theme: 'kinara',
  breakShot,
  gallerySlide: true,
  heroScrim: true,
  heroSoft: true,
  heroPosition: 'center center',
  eyebrow: 'Punawale · Pune',
  heading: 'The Smart Move',
  headingPrefix: 'The',
  heroTitle: [
    { text: 'Smart' },
    { text: 'Move' },
  ],
  lede: '2 and 3 BHK homes in Punawale, close to Hinjewadi, Wakad and the oxygen park.',
  hero: image('hero-studio.jpg'),
  logo,
  logoColor: true,
  brochure: '/landings/westia/nexus-westia-brochure.pdf',
  brochureName: 'Nexus Westia Brochure.pdf',
  email: 'westia@nexuspune.in',
  address: 'Sr. No. 41/48, Near Savata Mali Mandir, Malwadi, Punawale, Pimpri Chinchwad, Pune, Maharashtra 411 033.',
  office: OFFICE,
  rera: 'P52100080184',
  phoneRequired: false,
  stats: [
    { value: '2 & 3', label: 'BHK homes' },
    { value: '2', label: 'Balconies in each home' },
    { value: 'Hinjewadi', label: 'Easy work access' },
    { value: 'Low density', label: 'Privacy and space' },
  ],
  aboutTitle: 'Smart move. Realized.',
  about: [
    'Nexus Westia offers spacious 2 and 3 BHK homes in the heart of Punawale, planned for privacy, light and a quieter kind of everyday living.',
    'The site sits close to workplaces and IT hubs such as Hinjewadi and Wakad, beside Punawale’s oxygen park, with the kind of growth and timely delivery Nexus is known for.',
  ],
  highlights: [
    { src: image('highlights/1.jpg'), title: 'Punawale’s oxygen park' },
    { src: image('highlights/2.jpg'), title: 'Hinjewadi and Wakad' },
    { src: image('highlights/3.jpg'), title: 'Two balconies in each home' },
    { src: image('highlights/4.jpg'), title: 'Designer landscape garden' },
    { src: image('highlights/5.jpg'), title: 'Low-density living' },
  ],
  amenities: {
    subtitle: '',
    lead: { src: roadVideo, label: 'Road connectivity', video: true },
    items: [
      { src: image('amenities/garden.jpg'), label: 'Landscape Garden' },
      { src: image('amenities/park.jpg'), label: 'Oxygen Park' },
      { src: image('amenities/lifestyle.jpg'), label: 'Everyday Living' },
      { src: image('amenities/elevation.jpg'), label: 'Tower Elevation' },
      { src: image('amenities/aerial.jpg'), label: 'Open Views' },
      { src: image('amenities/connect.jpg'), label: 'Connected Address' },
    ],
  },
  plansIntro: '2 and 3 BHK layouts.',
  plans: [
    { src: image('plans/2bhk-1.jpg'), title: '2 BHK · Type 1' },
    { src: image('plans/2bhk-2.jpg'), title: '2 BHK · Type 2' },
    { src: image('plans/2bhk-3.jpg'), title: '2 BHK · Type 3' },
    { src: image('plans/3bhk-1.jpg'), title: '3 BHK · Type 1' },
    { src: image('plans/3bhk-2.jpg'), title: '3 BHK · Type 2' },
    { src: image('plans/3bhk-3.jpg'), title: '3 BHK · Type 3' },
  ],
  gallery: [
    { src: image('hero.jpg'), label: 'Tower elevation' },
    { src: image('cuts/g-garden.jpg'), label: 'Landscape garden' },
    { src: image('gallery/aerial.jpg'), label: 'Aerial view' },
    { src: image('gallery/evening.jpg'), label: 'Evening elevation' },
    { src: image('cuts/g-elevation.jpg'), label: 'Street elevation' },
    { src: image('gallery/site.jpg'), label: 'Site view' },
  ],
  team: TEAM,
};

export default westia;
