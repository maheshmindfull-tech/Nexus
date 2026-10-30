import LandingView from '../LandingView';
import content from './content';

export default function WestiaPage({ onNavigateHome }) {
  return <LandingView id="westia" content={content} onNavigateHome={onNavigateHome} />;
}
