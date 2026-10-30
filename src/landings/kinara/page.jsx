import LandingView from '../LandingView';
import content from './content';

export default function KinaraPage({ onNavigateHome }) {
  return <LandingView id="kinara" content={content} onNavigateHome={onNavigateHome} />;
}
