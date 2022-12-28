import { IconType } from 'react-icons';

interface SkillsCardItemProps {
	name: string;
	Icon: IconType;
	iconName: string;
}

export const SkillCardItem = (props: SkillsCardItemProps) => {
	const { name, Icon, iconName } = props;

	return (
		<div className='re-SkillItem'>
			<p className='re-SkillItem-title'>{name}</p>
			<span className='re-SkillItem-icon'>
				<Icon className={`Icon Icon--${iconName} u-SImI`} />
			</span>
		</div>
	);
};
