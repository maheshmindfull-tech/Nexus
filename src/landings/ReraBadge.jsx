import atrium from './rera/P52100032575.svg';
import skydale from './rera/P52100050149.svg';
import prime from './rera/P52100050975.svg';
import imperia from './rera/P52100053378.svg';
import westia from './rera/P52100080184.svg';
import genesis from './rera/PR1261012501959.svg';

const QR = {
  P52100032575: atrium,
  P52100050149: skydale,
  P52100050975: prime,
  P52100053378: imperia,
  P52100080184: westia,
  PR1261012501959: genesis,
};

export default function ReraBadge({ number }) {
  const src = QR[number];
  if (!number || !src) return null;
  const href = `https://maharerait.mahaonline.gov.in/searchlist/project?projectregistrationnumber=${number}`;

  return (
    <a className="lp-rera" href={href} target="_blank" rel="noopener noreferrer">
      <span>MahaRERA Registration</span>
      <img src={src} alt="" />
      <strong>{number}</strong>
    </a>
  );
}
