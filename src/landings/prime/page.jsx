import LandingView from '../LandingView';
import content from './content';

export default function PrimePage({ onNavigateHome }) {
  return <LandingView id="square" content={content} onNavigateHome={onNavigateHome} />;
}
