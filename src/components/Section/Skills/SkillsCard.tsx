import { SkillCardItem } from './';
import { IconType } from 'react-icons';

interface SkillsCardProps {
	title: string;
	skills: { name: string; Icon: IconType; iconName: string }[];
}

export const SkillsCard = (props: SkillsCardProps) => {
	const { title, skills } = props;
	return (
		<div className='re-SkillsCard'>
			<h1 className='re-SkillsCard-title'>{title}</h1>
			<div className='re-SkillsCard-wrapSkillsItems'>
				{skills.map(skill => (
					<SkillCardItem key={skill.name} {...skill} />
				))}
			</div>
		</div>
	);
};
