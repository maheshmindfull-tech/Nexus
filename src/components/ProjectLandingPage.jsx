import LandingView from './LandingView';

export { LANDING_PROJECTS } from '../data/landings';

export default function ProjectLandingPage({ project, onNavigateHome }) {
  return <LandingView id={project} onNavigateHome={onNavigateHome} />;
}
