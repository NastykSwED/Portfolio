import {
	ContactSection,
	HomeSection,
	ProjectsSection,
	SkillsSection,
} from '../components';

export const Main = () => {
	return (
		<main className='re-Main' id='re-Main'>
			<HomeSection />
			<SkillsSection />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
};
