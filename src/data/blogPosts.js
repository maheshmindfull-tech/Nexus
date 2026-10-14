/*
 * Article body blocks:
 *   'text'            paragraph
 *   { h: 'text' }     section heading
 *   { ul: [...] }     bullet list
 *   { ol: [...] }     numbered list
 *   { quote: 'text' } pull quote
 *   { tip: 'text' }   highlighted note
 */

export const BLOG_CATEGORIES = ['All', 'Buying Guides', 'Locality Guides', 'Finance', 'Projects', 'About Nexus'];

export const BLOG_POSTS = [
  {
    id: 'ongoing-projects-2026',
    title: 'Seven homes in progress: a guide to the Nexus ongoing portfolio',
    category: 'Projects',
    date: '12 October 2026',
    image: '/assets/projects/nexus-genesis.jpg',
    featured: true,
    excerpt:
      'From the riverside homes of Kinaara to the 550-flat Genesis township in Kiwale, here is where every ongoing Nexus project stands, and how to choose between them.',
    body: [
      'Nexus currently has seven projects under construction across Pimpri-Chinchwad. Each one answers a slightly different brief: some are built around a large shared amenity space, others around a shop-lined street front, and a few are compact buildings for buyers who prefer a quieter address.',
      'This guide puts them side by side so you can shortlist before you visit.',
      { h: 'Punawale and Kiwale' },
      { ul: [
        'Nexus Skydale, Kate Wasti, Punawale: 2, 3 and 4 BHK residences with a dedicated landing page, full floor plans and a downloadable brochure.',
        'Nexus Westia, Jamhe Road, Punawale: 86 flats and 17 shops, planned as 2 and 3 BHK homes close to the Hinjewadi work corridor.',
        'Nexus Genesis, Kiwale: the largest ongoing project, with 550 flats and 5 shops across 2, 3 and 4 BHK configurations.',
      ] },
      { h: 'Moshi and Chikhali' },
      { ul: [
        'Nexus Prime Square, Borhadewadi, Moshi: twin residential towers above a retail frontage, with 268 flats and 56 shops.',
        'Nexus Imperia, Borhadewadi, Moshi: a single 84-flat building of 2 and 3 BHK homes.',
        'Nexus Atrium, Borhadewadi, Moshi: 147 flats of 2 and 3 BHK homes across two wings.',
        'Nexus Kinaara, Chikhali: 2 and 3 BHK riverside homes, with E Wing now open.',
      ] },
      { h: 'How to shortlist' },
      'Start with the commute you make most often, not the amenity list. A home that saves forty minutes a day is worth more over ten years than an extra clubhouse feature. Then decide whether you want a larger community with more shared space, or a smaller building with fewer neighbours.',
      { tip: 'Skydale, Westia and Kinaara each have their own landing page with floor plans and a brochure download. Open them from the Projects page using the Learn more button.' },
      'Once you have two or three names, book a site visit. Seeing the sample flat, the approach road and the construction stage in person answers questions that no brochure can.',
    ],
  },
  {
    id: 'verify-maharera-project',
    title: 'How to verify a MahaRERA-registered project before you book',
    category: 'Buying Guides',
    date: '6 October 2026',
    image: '/assets/projects/nexus-skydale.jpg',
    excerpt:
      'A MahaRERA number is more than a line in the brochure. Here is how to look it up, what to read on the project page, and the red flags worth asking about.',
    body: [
      'Every residential project in Maharashtra with more than a small number of units must be registered with the Maharashtra Real Estate Regulatory Authority (MahaRERA) before it is advertised or sold. The registration number is your starting point for checking what a developer has promised on record.',
      { h: 'Step 1: Find the registration number' },
      'The number is printed on brochures, hoardings and the project website, usually beginning with a letter followed by digits. Many projects also print a QR code that opens the registration page directly.',
      { h: 'Step 2: Search it on the MahaRERA portal' },
      'Search the number on the official MahaRERA website. The project page lists the promoter, the approved plans, the proposed completion date and the number of units registered.',
      { h: 'Step 3: Read the details that matter' },
      { ul: [
        'Proposed completion date: compare it with what you are told verbally.',
        'Number of buildings and units: make sure the tower you are buying in is part of the registration.',
        'Quarterly progress updates: these show how construction is moving against plan.',
        'Litigation or complaints: check whether any are listed against the project.',
      ] },
      { quote: 'A registration number is a promise on record. Reading it takes ten minutes and can save you years of worry.' },
      { h: 'Step 4: Match it with your agreement' },
      'The carpet area, completion date and specifications in your agreement for sale should match what is registered. If anything differs, ask for it to be explained in writing before you pay the booking amount.',
      { tip: 'Nexus Skydale is registered under MahaRERA P52100050149. You can use it to practise the steps above.' },
    ],
  },
  {
    id: 'carpet-vs-built-up-area',
    title: 'Carpet area, built-up area and super built-up area, explained simply',
    category: 'Buying Guides',
    date: '28 September 2026',
    image: '/assets/projects/nexus-imperia.jpg',
    excerpt:
      'Three numbers describe the same flat. Knowing which is which helps you compare homes fairly and understand exactly what you are paying for.',
    body: [
      'When you compare two flats, the size printed in large type is not always the same kind of measurement. Understanding the three common terms makes comparisons fair.',
      { h: 'Carpet area' },
      'Carpet area is the usable floor area inside the walls of your home: the rooms, kitchen and bathrooms. Under RERA, developers must state the carpet area, and pricing is expected to be based on it.',
      { h: 'Built-up area' },
      'Built-up area adds the thickness of the walls and, in some cases, the balcony or utility area. It is typically higher than carpet area.',
      { h: 'Super built-up area' },
      'Super built-up area adds a proportionate share of common spaces such as lobbies, staircases, lift wells and amenities. It is the largest of the three figures.',
      { h: 'What this means for you' },
      { ol: [
        'Always ask for the RERA carpet area of the exact flat you are considering.',
        'Compare price per square foot only when both numbers use the same measure.',
        'Check whether balconies, terraces and dry areas are listed separately.',
        'Walk the sample flat with the floor plan in hand to understand how the space feels.',
      ] },
      { tip: 'A well-planned 2 BHK with less corridor space can feel larger than a bigger flat with awkward layouts. Look at the plan, not just the number.' },
    ],
  },
  {
    id: 'punawale-locality-guide',
    title: 'Punawale: why West Pune’s growth corridor keeps drawing homebuyers',
    category: 'Locality Guides',
    date: '20 September 2026',
    image: '/assets/projects/nexus-westia.jpg',
    excerpt:
      'Close to Hinjewadi, Wakad and the Mumbai–Bengaluru highway, Punawale has grown from a quiet village into one of PCMC’s most sought-after neighbourhoods.',
    body: [
      'Punawale sits on the western edge of Pimpri-Chinchwad, between Ravet, Tathawade and Kiwale. Over the past decade it has changed from open farmland into a residential neighbourhood with schools, hospitals and daily shopping close by.',
      { h: 'Connectivity' },
      { ul: [
        'Hinjewadi IT Park is a short drive away, which makes Punawale popular with technology professionals.',
        'The Mumbai–Bengaluru highway gives quick access to Wakad, Baner and the rest of Pune.',
        'Ravet and Akurdi are nearby for rail connections.',
      ] },
      { h: 'Everyday living' },
      'Schools, clinics, supermarkets and restaurants have followed the residential growth, so most daily needs are met within the neighbourhood. Open spaces and newer roads give it a calmer feel than older parts of the city.',
      { h: 'Who it suits' },
      'Punawale works well for young families and working professionals who want a modern home within reach of the IT corridor, without paying central Pune prices.',
      { tip: 'Nexus Skydale in Kate Wasti and Nexus Westia on Jamhe Road are both in Punawale. Nexus Genesis is just next door in Kiwale.' },
    ],
  },
  {
    id: 'moshi-chikhali-locality-guide',
    title: 'Moshi and Chikhali: the north PCMC neighbourhoods to watch',
    category: 'Locality Guides',
    date: '12 September 2026',
    image: '/assets/projects/nexus-atrium.jpg',
    excerpt:
      'With the Pune–Nashik highway, Bhosari MIDC and the Chakan industrial belt nearby, Moshi and Chikhali offer space, value and steady growth.',
    body: [
      'Moshi and Chikhali lie on the northern side of Pimpri-Chinchwad. They are close to some of the region’s largest employment centres, yet still offer more space for the money than many established neighbourhoods.',
      { h: 'Why buyers are looking here' },
      { ul: [
        'Easy access to the Pune–Nashik highway.',
        'Proximity to Bhosari MIDC and the Chakan industrial belt.',
        'Wider roads and newer residential layouts.',
        'Better value per square foot compared with more central areas.',
      ] },
      { h: 'Borhadewadi, Moshi' },
      'Borhadewadi has become a residential cluster in its own right. Nexus Prime Square, Nexus Imperia and Nexus Atrium are all being built here, alongside the completed Nexus Emerald.',
      { h: 'Jadhavwadi, Chikhali' },
      'Chikhali’s riverside stretch offers greener surroundings. Nexus Kinaara brings 2 and 3 BHK riverside homes to the area, close to the completed Nexus Shree Residency.',
      { quote: 'Buying where a neighbourhood is still growing means you benefit as the roads, schools and shops arrive around you.' },
    ],
  },
  {
    id: 'home-loan-basics',
    title: 'Home loan basics: eligibility, EMI and the paperwork you will need',
    category: 'Finance',
    date: '2 September 2026',
    image: '/images/principles/2.jpg',
    excerpt:
      'Getting your loan in order before you book makes the whole purchase calmer. A plain-language walkthrough of eligibility, EMIs and documents.',
    body: [
      'For most families, a home loan is the largest financial commitment they will make. Preparing early gives you a clear budget and a stronger position when you choose a home.',
      { h: 'What decides your eligibility' },
      { ul: [
        'Your monthly income and its stability.',
        'Existing loans and EMIs you already pay.',
        'Your credit score and repayment history.',
        'Your age and the loan tenure you choose.',
      ] },
      { h: 'Understanding your EMI' },
      'Your EMI depends on three things: the loan amount, the interest rate and the tenure. A longer tenure lowers the monthly EMI but increases the total interest you pay. Use any bank’s EMI calculator to try different combinations before you decide.',
      { h: 'Documents to keep ready' },
      { ol: [
        'Identity and address proof (PAN, Aadhaar).',
        'Salary slips and bank statements for recent months, or business financials if self-employed.',
        'Income tax returns.',
        'The property documents and agreement for sale, once you have booked.',
      ] },
      { tip: 'Get a loan sanction letter before you finalise a flat. It tells you exactly how much you can borrow and speeds up the booking.' },
      'Budget separately for the down payment, stamp duty, registration charges and interiors. These are usually not covered by the loan.',
    ],
  },
  {
    id: 'site-visit-checklist',
    title: 'Your site visit checklist: 10 things to look at before you book',
    category: 'Buying Guides',
    date: '25 August 2026',
    image: '/assets/projects/nexus-square.jpg',
    excerpt:
      'A site visit is your best chance to see beyond the brochure. Use this checklist to make the most of an hour on site.',
    body: [
      'Brochures show the finished picture. A site visit shows you the reality: the road, the neighbourhood, the construction quality and the people who will build your home.',
      { h: 'Before you go' },
      'Carry the floor plan of the flat you like, a list of questions, and if possible visit at the time of day you would usually travel to work.',
      { h: 'On site' },
      { ol: [
        'The approach road and how long it takes from your workplace.',
        'Natural light and ventilation in the sample flat.',
        'Which direction your flat faces and what it overlooks.',
        'The construction stage of your tower compared with the schedule.',
        'Quality of materials on display: tiles, fittings, windows.',
        'Water supply, power backup and drainage arrangements.',
        'Parking allotment and visitor parking.',
        'The amenities that are actually being built, and their timeline.',
        'Shops, schools and hospitals within a short distance.',
        'How clearly the sales team answers your questions.',
      ] },
      { tip: 'Ask for the MahaRERA number on site and check it on the portal before you pay anything.' },
      'After the visit, write down your impressions while they are fresh. Comparing notes across two or three projects makes the final decision much easier.',
    ],
  },
  {
    id: 'skydale-kate-wasti',
    title: 'Nexus Skydale in Kate Wasti, Punawale: what to know before you visit',
    category: 'Projects',
    date: '15 August 2026',
    image: '/assets/projects/nexus-skydale.jpg',
    excerpt:
      'Skydale is on Pandhare Wasti Road in Kate Wasti, Punawale. Here is the address, the home types and the quickest way to plan your visit.',
    body: [
      'Nexus Skydale is a residential development in Punawale offering 2, 3 and 4 BHK homes.',
      { h: 'The address' },
      'Survey No. 14, 10, Pandhare Wasti Road, Kate Wasti, Punawale, Pimpri Chinchwad, Pune, Maharashtra 411033. Kate Wasti is the locality name to use for directions and visits.',
      { h: 'What you will find on the Skydale page' },
      { ul: [
        'Project highlights and specifications.',
        'Floor plans for every home type.',
        'The gallery and a downloadable brochure.',
        'A form to request a call-back or site visit.',
      ] },
      { tip: 'Skydale is registered under MahaRERA P52100050149.' },
      'To plan a visit, call +91 99609 67070 or send an enquiry from the Skydale page, and the team will confirm a time with you.',
    ],
  },
  {
    id: 'three-decades',
    title: 'Three decades of building: what has stayed the same at Nexus',
    category: 'About Nexus',
    date: '1 August 2026',
    image: '/images/about_nexus_monument.png',
    excerpt:
      'Nexus started in 1996 as a family-owned company. Thirty years and 55+ projects later, the brief is still quality, integrity and communities people want to live in.',
    body: [
      'Nexus Group is a family-owned construction company, founded in 1996 on three ideas: quality, integrity and a vision for planned, liveable communities.',
      { h: 'The record' },
      { ul: [
        '55+ projects delivered across Pimpri-Chinchwad, Pune and Nashik.',
        '55 lakh+ sq. ft. of residential and commercial space built.',
        'Communities ranging from compact buildings to large townships.',
      ] },
      { h: 'What has not changed' },
      'The way a project is planned and handed over has stayed consistent: clear documentation, a site families can visit at any stage, and a team buyers can call long after possession.',
      { quote: 'A home is the biggest promise a builder makes. Keeping it, project after project, is what thirty years are really about.' },
      'Today the next generation works alongside the founders, carrying the same standards into a new set of projects across West and North Pune.',
    ],
  },
];

export function readMinutes(post) {
  const words = post.body
    .map((b) => (typeof b === 'string' ? b : b.h || b.quote || b.tip || (b.ul || b.ol || []).join(' ')))
    .join(' ')
    .split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
}
