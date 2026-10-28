import atrium from './rera/P52100032575.svg';
import skydale from './rera/PR1260002502718.svg';
import prime from './rera/P52100050975.svg';
import imperia from './rera/P52100053378.svg';
import westia from './rera/P52100080184.svg';
import genesis from './rera/PR1261012501959.svg';

const QR = {
  P52100032575: atrium,
  PR1260002502718: skydale,
  P52100050975: prime,
  P52100053378: imperia,
  P52100080184: westia,
  PR1261012501959: genesis,
};

const CERT = {
  P52100032575: 'https://maharera.maharashtra.gov.in/project-document?id=30631&type=DocProjectCert',
  PR1260002502718: 'https://maharera.maharashtra.gov.in/project-document?id=62453&type=DocProjectCert',
  P52100050975: 'https://maharera.maharashtra.gov.in/project-document?id=40010&type=DocProjectCert',
  P52100053378: 'https://maharera.maharashtra.gov.in/project-document?id=38504&type=DocProjectCert',
  P52100080184: 'https://maharera.maharashtra.gov.in/project-document?id=55475&type=DocProjectCert',
  PR1261012501959: 'https://maharera.maharashtra.gov.in/project-document?id=60667&type=DocProjectCert',
};

export default function ReraBadge({ number }) {
  const src = QR[number];
  const href = CERT[number];
  if (!number || !src || !href) return null;

  return (
    <a className="lp-rera" href={href} target="_blank" rel="noopener noreferrer">
      <span>MahaRERA Registration</span>
      <img src={src} alt="" />
      <strong>{number}</strong>
    </a>
  );
}
