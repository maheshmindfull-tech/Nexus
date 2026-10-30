import LandingView from '../LandingView';
import content from './content';

export default function SkydalePage({ onNavigateHome }) {
  return <LandingView id="skydale" content={content} onNavigateHome={onNavigateHome} />;
}
