import { getSkillsData } from '../../../helpers';

import { SkillsCard } from './';

export const SkillsSection = () => {
	const [frontendSkills, toolSkills] = getSkillsData();

	return (
		<section className='re-Main-SkillsSection' id='re-SkillsSection'>
			<div className='re-SkillsSection-content'>
				<h1 className='re-SkillsSection-title'>Skills</h1>
			</div>
			<div className='re-SkillsSection-wrapSkills'>
				<div className='re-SkillsSection-wrapSkillCard'>
					<SkillsCard title='Frontend' skills={frontendSkills} />
				</div>
				<div className='re-SkillsSection-wrapSkillCard'>
					<SkillsCard title='Tools' skills={toolSkills} />
				</div>
			</div>
		</section>
	);
};
