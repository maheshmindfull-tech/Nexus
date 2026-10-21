import { image } from './images';
import logo from '../../../public/assets/projects/logos/kinara.png';
import leadVideo from './media/lead.mp4';
import planA from './media/plan-a.jpg';
import planB from './media/plan-b.jpg';
import breakShot from './media/break.jpg';
import { OFFICE } from '../shared';

const kinara = {
  name: 'Nexus Kinaara',
  shortName: 'Kinaara',
  location: 'Chikhali',
  theme: 'kinara',
  gallerySlide: true,
  breakShot,
  eyebrow: 'E Wing · The last wing',
  heading: 'Final Chapter -E',
  headingPrefix: 'The',
  heroTitle: [
    { text: 'Final' },
    { text: 'Chapter', dash: '–', after: 'E' },
  ],
  lede: 'One Final Chance to Wake Up by the River.',
  hero: image('hero-final-chapter.png'),
  logo,
  brochure: '/landings/kinara/nexus-kinara-brochure.pdf',
  brochureName: 'Nexus Kinaara Brochure.pdf',
  email: 'kinaara@nexuspune.in',
  address: 'Gat No. 79, Behind River Residency, Chikhali, Pimpri Chinchwad, Pune, Maharashtra 412 114.',
  office: OFFICE,
  phoneRequired: false,
  stats: [
    { value: '3 BHK', label: 'Riverside homes' },
    { value: '550+', label: 'Families already here' },
    { value: 'E Wing', label: 'The final chapter' },
    { value: 'Indrayani', label: 'River views' },
  ],
  aboutTitle: 'A new chapter, in a community that is already home.',
  about: [
    'Years ago, the first chapter of Nexus Kinaara began. Today that story is a riverside community where more than 550 families already belong.',
    'E Wing is the last chapter: the largest carpet homes in the vicinity, cross-ventilated rooms, and the confidence of moving into a place that is already established.',
  ],
  highlights: [
    { src: image('highlights/1.png'), title: 'Largest Carpet Homes in the Vicinity' },
    { src: image('highlights/2.png'), title: 'Scenic Indrayani River Views' },
    { src: image('highlights/3.png'), title: 'Premium Specifications' },
    { src: image('highlights/4.png'), title: 'Cross-Ventilated Homes' },
    { src: image('highlights/5.png'), title: '550+ Families, Established Community' },
  ],
  amenities: {
    subtitle: '',
    lead: { src: leadVideo, label: 'Nexus Kinaara', video: true },
    items: [
      { src: image('amenities/joyful.png'), label: 'Joyful Amenities' },
      { src: image('amenities/comfort.png'), label: 'Comfort Amenities' },
      { src: image('amenities/child.png'), label: 'Child-centric Amenities' },
      { src: image('amenities/woman.png'), label: 'Woman-centric Amenities' },
      { src: image('amenities/outdoor.png'), label: 'Outdoor Amenities' },
      { src: image('amenities/indoor.png'), label: 'Indoor Amenities' },
    ],
  },
  plansIntro: '',
  plans: [
    { src: planA, title: '3 BHK · Comfort Type A' },
    { src: planB, title: '3 BHK · Comfort Type B' },
  ],
  gallery: [
    { src: image('gallery/landscape.jpg'), label: 'Landscape garden' },
    { src: image('gallery/aerial.jpg'), label: 'Aerial view' },
    { src: image('gallery/tower.jpg'), label: 'Tower elevation' },
    { src: image('gallery/clubhouse.jpg'), label: 'Gazebo and clubhouse' },
    { src: image('gallery/gym.jpg'), label: 'Fitness center' },
  ],
};

export default kinara;
