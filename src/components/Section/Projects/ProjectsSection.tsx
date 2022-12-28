import { getProjectsData } from '../../../helpers';

import { ProjectsCard } from './';

export const ProjectsSection = () => {
	const projectsData = getProjectsData();

	return (
		<section className='re-Main-ProjectsSection' id='re-ProjectsSection'>
			<div className='re-ProjectsSection-content'>
				<h1 className='re-ProjectsSection-title'>Projects</h1>
				<h2 className='re-ProjectsSection-subtitle'>Most recent work</h2>
			</div>
			<div className='re-ProjectsSection-wrapProjects'>
				{projectsData.map(project => (
					<div
						className='re-ProjectsSection-wrapProjectCard'
						key={project.title}
					>
						<ProjectsCard {...project} />
					</div>
				))}
			</div>
		</section>
	);
};
