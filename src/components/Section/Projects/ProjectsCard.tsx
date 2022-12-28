import { IoOpenOutline } from 'react-icons/io5';

import { FiGithub } from 'react-icons/fi';
import { getProjectsData } from '../../../helpers/getProjectsData';

interface ProjectsCardProps {
	title: string;
	description: string;
	imageUrl: string;
	linkGitHubUrl: string;
	linkSiteUrl: string;
	tools: string[];
}

export const ProjectsCard = (props: ProjectsCardProps) => {
	const { title, imageUrl, description, linkGitHubUrl, linkSiteUrl, tools } =
		props;

	return (
		<div className='re-ProjectCard'>
			<div className='re-ProjectCard-wrapImage'>
				<img
					className='re-ProjectCard-image'
					src={imageUrl}
					alt={`${title} Logo`}
				/>
			</div>

			<div className='re-ProjectCard-content'>
				<div className='re-ProjectCard-wrapBody'>
					<h1 className='re-ProjectCard-Title'>{title}</h1>
					<div className='re-ProjectCard-wrapLinks'>
						<a
							href={linkGitHubUrl}
							aria-label='Find out more information about the project through this link'
							className='re-ProjectCard-link'
							rel='noopener noreferrer'
							target='_blank'
						>
							<span className='re-ProjectCard-wrapIcon'>
								<FiGithub className='Icon Icon--FiGithub' />
							</span>
						</a>
						<a
							href={linkSiteUrl}
							aria-label='Find out more information about the project through this link'
							className='re-ProjectCard-link'
							rel='noopener noreferrer'
							target='_blank'
						>
							<span className='re-ProjectCard-wrapIcon'>
								<IoOpenOutline className='Icon Icon--IoOpenOutline' />
							</span>
						</a>
					</div>
				</div>
				<p className='re-ProjectCard-Description'>{description}</p>

				<div className='re-ProjectCard-wrapTools'>
					{tools.map(tool => (
						<span className='re-ProjectCard-tool' key={tool}>
							{tool}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};
