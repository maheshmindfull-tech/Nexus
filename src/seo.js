const ORIGIN = 'https://nexuspune.com';

export const PAGE_SEO = {
  home: {
    path: '/',
    title: 'Nexus Pune – Luxury Real Estate Developers & Property Advisors | Premium Homes',
    description:
      'Nexus Group is a premier real estate developer and property advisor in Pune. Discover luxury 2 & 3 BHK homes, apartments, and commercial projects across Punawale, Moshi, Kiwale, and Chikhali. 30+ years of legacy.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        ['Where can I find Nexus projects?', 'Nexus has projects across Pune and Nashik, with developments in Punawale, Chikhali, Moshi, Kiwale and other neighbourhoods.'],
        ['What kind of projects does Nexus build?', 'Thoughtfully planned residential communities and commercial spaces across different locations and configurations.'],
        ['How much experience does Nexus have?', 'Nexus began in 1996 and has spent three decades building spaces, relationships and trust.'],
        ['How many projects has Nexus delivered?', 'Nexus has 19+ completed projects, with 4,185+ homes delivered and 129+ commercial units handed over.'],
        ['Can I visit a Nexus project?', 'Yes. Connect with the team to enquire about a project and schedule a site visit.'],
      ].map(([name, text]) => ({
        '@type': 'Question',
        name,
        acceptedAnswer: { '@type': 'Answer', text },
      })),
    },
  },
  about: {
    path: '/about',
    title: 'About Nexus Group Pune | 30 Years of Real Estate Legacy',
    description:
      'Learn about Nexus Group, a Pune real estate developer since 1996. 55+ projects, 55 lakh sq. ft. delivered, and communities across Pune, PCMC, and Nashik.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Nexus Group Pune',
      url: `${ORIGIN}/about`,
      description: 'Three decades of residential and commercial development across Pune and Nashik.',
      isPartOf: { '@id': `${ORIGIN}/#website` },
      about: { '@id': `${ORIGIN}/#organization` },
    },
  },
  projects: {
    path: '/projects',
    title: 'Nexus Projects in Pune | 2 & 3 BHK Homes and Commercial Spaces',
    description:
      'Explore ongoing, completed, and upcoming Nexus projects in Punawale, Chikhali, Moshi, and Kiwale. Residential 2 & 3 BHK homes and commercial developments in Pune.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Nexus Pune Projects',
      itemListElement: [
        ['Nexus Kinara', 'Jadhavwadi, Chikhali'],
        ['Nexus Skydale', 'Tajanewasti, Punawale'],
        ['Nexus Westia', 'Punawale, Pune'],
        ['Nexus Square', 'Punawale, Pune'],
        ['Nexus Atrium', 'Borhadewadi, Moshi'],
        ['Nexus Imperia', 'Borhadewadi, Moshi'],
        ['Nexus Genesis', 'Kiwale, Pune'],
      ].map(([name, location], index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name,
        description: `${name} in ${location}`,
      })),
    },
  },
  careers: {
    path: '/careers',
    title: 'Careers at Nexus Pune | Engineering, Architecture & Sales Roles',
    description:
      'Join Nexus Group in Pune. Open roles in high-rise project management, architectural design, and luxury residential sales across Punawale, Kiwale, Chikhali, and Moshi.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Open roles at Nexus Group Pune',
      itemListElement: [
        'Senior Project Manager (High-Rise RCC)',
        'Architectural Design Lead',
        'Assistant Sales Manager (Luxury Residential)',
      ].map((title, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'JobPosting',
          title,
          hiringOrganization: { '@id': `${ORIGIN}/#organization` },
          jobLocation: {
            '@type': 'Place',
            address: { '@type': 'PostalAddress', addressLocality: 'Pune', addressRegion: 'Maharashtra', addressCountry: 'IN' },
          },
          employmentType: 'FULL_TIME',
        },
      })),
    },
  },
  'cp-inquiry': {
    path: '/cp-inquiry',
    title: 'Channel Partner Inquiry | Nexus Pune Real Estate Partnerships',
    description:
      'Register as a Nexus channel partner in Pune and PCMC. Partner with a 30-year developer for residential and commercial project mandates.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Nexus Channel Partner Inquiry',
      url: `${ORIGIN}/cp-inquiry`,
      description: 'Channel partner registration for Nexus Group projects in Pune.',
    },
  },
  skydale: {
    path: '/skydale',
    title: 'Nexus Skydale Punawale | 2, 3 & 4 BHK Homes in Pune',
    description:
      'Nexus Skydale in Tajanewasti, Punawale offers 2, 3 and 4 BHK homes with a prime Pune location, smart-home planning, and premium amenities. MahaRERA P52100050149.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ApartmentComplex',
      name: 'Nexus Skydale',
      url: `${ORIGIN}/skydale`,
      description: '2, 3 and 4 BHK residences by Nexus Group in Punawale, Pune.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Punawale',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
      brand: { '@id': `${ORIGIN}/#organization` },
    },
  },
};

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function applyPageSeo(page) {
  const seo = PAGE_SEO[page] || PAGE_SEO.home;
  const url = `${ORIGIN}${seo.path}`;

  document.title = seo.title;
  upsertMeta('name', 'description', seo.description);
  upsertMeta('name', 'title', seo.title);
  upsertMeta('property', 'og:title', seo.title);
  upsertMeta('property', 'og:description', seo.description);
  upsertMeta('property', 'og:url', url);
  upsertMeta('name', 'twitter:title', seo.title);
  upsertMeta('name', 'twitter:description', seo.description);
  upsertMeta('name', 'twitter:url', url);

  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', url);

  let script = document.getElementById('page-schema');
  if (!script) {
    script = document.createElement('script');
    script.id = 'page-schema';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(seo.schema);
}

const PATH_TO_PAGE = Object.fromEntries(
  Object.entries(PAGE_SEO).map(([page, seo]) => [seo.path, page])
);

const HASH_TO_PAGE = {
  '#all-projects': 'projects',
  '#projects': 'projects',
  '#careers': 'careers',
  '#career': 'careers',
  '#cp-inquiry': 'cp-inquiry',
  '#channel-partner': 'cp-inquiry',
  '#skydale': 'skydale',
  '#skydel': 'skydale',
  '#nexus-skydale': 'skydale',
  '#skydale-landing': 'skydale',
  '#about': 'about',
  '#about-us': 'about',
  '#about-page': 'about',
};

export function pageFromLocation() {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const hash = window.location.hash.toLowerCase();

  if (path.endsWith('about.html') || HASH_TO_PAGE[hash]) {
    if (HASH_TO_PAGE[hash]) return HASH_TO_PAGE[hash];
    if (path.endsWith('about.html')) return 'about';
  }

  return PATH_TO_PAGE[path] || 'home';
}

export function pathForPage(page) {
  return (PAGE_SEO[page] || PAGE_SEO.home).path;
}
