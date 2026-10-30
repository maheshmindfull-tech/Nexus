import LandingView from '../LandingView';
import content from './content';

export default function GenesisPage({ onNavigateHome }) {
  return <LandingView id="genesis" content={content} onNavigateHome={onNavigateHome} />;
}
