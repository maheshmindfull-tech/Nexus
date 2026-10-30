import LandingView from '../LandingView';
import content from './content';

export default function ImperiaPage({ onNavigateHome }) {
  return <LandingView id="imperia" content={content} onNavigateHome={onNavigateHome} />;
}
