import LandingView from '../LandingView';
import content from './content';

export default function AtriumPage({ onNavigateHome }) {
  return <LandingView id="atrium" content={content} onNavigateHome={onNavigateHome} />;
}
