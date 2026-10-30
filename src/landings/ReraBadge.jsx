import atrium from './rera/P52100032575.svg';
import skydale from './rera/PR1260002502718.svg';
import skydaleAbc from './rera/P52100055009.svg';
import prime from './rera/P52100050975.svg';
import imperia from './rera/P52100053378.svg';
import westia from './rera/P52100080184.svg';
import genesis from './rera/PR1261012501959.svg';
import kinaraA from './rera/P52100051339.svg';
import kinaraBC from './rera/P52100031120.svg';
import kinaraD from './rera/P52100033605.svg';

const QR = {
  P52100032575: atrium,
  PR1260002502718: skydale,
  P52100055009: skydaleAbc,
  P52100050975: prime,
  P52100053378: imperia,
  P52100080184: westia,
  PR1261012501959: genesis,
  P52100051339: kinaraA,
  P52100031120: kinaraBC,
  P52100033605: kinaraD,
};

const CERT = {
  P52100032575: 'https://maharera.maharashtra.gov.in/project-document?id=30631&type=DocProjectCert',
  PR1260002502718: 'https://maharera.maharashtra.gov.in/project-document?id=62453&type=DocProjectCert',
  P52100055009: 'https://maharera.maharashtra.gov.in/project-document?id=42989&type=DocProjectCert',
  P52100050975: 'https://maharera.maharashtra.gov.in/project-document?id=40010&type=DocProjectCert',
  P52100053378: 'https://maharera.maharashtra.gov.in/project-document?id=38504&type=DocProjectCert',
  P52100080184: 'https://maharera.maharashtra.gov.in/project-document?id=55475&type=DocProjectCert',
  PR1261012501959: 'https://maharera.maharashtra.gov.in/project-document?id=60667&type=DocProjectCert',
  P52100051339: 'https://maharera.maharashtra.gov.in/project-document?id=39993&type=DocProjectCert',
  P52100031120: 'https://maharera.maharashtra.gov.in/project-document?id=30415&type=DocProjectCert',
  P52100033605: 'https://maharera.maharashtra.gov.in/project-document?id=31505&type=DocProjectCert',
};

function SingleReraCard({ number, label }) {
  const src = QR[number];
  const href = CERT[number];
  if (!number || !src || !href) return null;

  return (
    <a className="lp-rera" href={href} target="_blank" rel="noopener noreferrer">
      <span>MahaRERA Registration</span>
      <img src={src} alt="" />
      <strong>{label || number}</strong>
    </a>
  );
}

export default function ReraBadge({ number }) {
  if (!number) return null;

  if (Array.isArray(number)) {
    const items = number
      .map((entry) => (typeof entry === 'string' ? { number: entry, label: entry } : entry))
      .filter((entry) => entry?.number && QR[entry.number] && CERT[entry.number]);
    if (!items.length) return null;

    return (
      <div className="lp-rera-list">
        {items.map((entry) => (
          <SingleReraCard key={entry.number} number={entry.number} label={entry.label} />
        ))}
      </div>
    );
  }

  return <SingleReraCard number={number} />;
}
