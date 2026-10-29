import atrium from './rera/P52100032575.svg';
import skydale from './rera/PR1260002502718.svg';
import prime from './rera/P52100050975.svg';
import imperia from './rera/P52100053378.svg';
import westia from './rera/P52100080184.svg';
import genesis from './rera/PR1261012501959.svg';
import kinara from './rera/P52100051339.svg';

const QR = {
  P52100032575: atrium,
  PR1260002502718: skydale,
  P52100050975: prime,
  P52100053378: imperia,
  P52100080184: westia,
  PR1261012501959: genesis,
  P52100051339: kinara,
};

const CERT = {
  P52100032575: 'https://maharera.maharashtra.gov.in/project-document?id=30631&type=DocProjectCert',
  PR1260002502718: 'https://maharera.maharashtra.gov.in/project-document?id=62453&type=DocProjectCert',
  P52100050975: 'https://maharera.maharashtra.gov.in/project-document?id=40010&type=DocProjectCert',
  P52100053378: 'https://maharera.maharashtra.gov.in/project-document?id=38504&type=DocProjectCert',
  P52100080184: 'https://maharera.maharashtra.gov.in/project-document?id=55475&type=DocProjectCert',
  PR1261012501959: 'https://maharera.maharashtra.gov.in/project-document?id=60667&type=DocProjectCert',
  P52100051339: 'https://maharerait.mahaonline.gov.in/ProjectSummaryView/ProjectSummaryQRCodeView?id=Q2VydGlmaWNhdGVObz1QNTIxMDAwNTEzMzkmU2NhbnR5cGU9UmVnaXN0cmF0aW9uQ2VydGlmaWNhdGVRUlNjYW4=',
};

export default function ReraBadge({ number, numbers }) {
  const key = number || (Array.isArray(numbers) ? numbers[0] : null);
  const src = key ? QR[key] : null;
  const href = key ? CERT[key] : null;
  if (!key || !src || !href) return null;

  const list = Array.isArray(numbers) && numbers.length > 0 ? numbers : [key];

  return (
    <a className="lp-rera" href={href} target="_blank" rel="noopener noreferrer">
      <span>MahaRERA Registration</span>
      <img src={src} alt="" />
      {list.map((item) => (
        <strong key={item}>{item}</strong>
      ))}
    </a>
  );
}
