import { describe, it, expect } from 'vitest';

import { screen, render } from '@testing-library/react';

import { SkillCardItem } from '../../../../components';

import { getSkillsData } from '../../../../helpers/getSkillsData';

describe('Testing SkillsItem component', () => {
	const skills = getSkillsData();
	const [frontEnd, tools] = skills;

	it('Should render the React JS skill', () => {
		const reactSkill = frontEnd.filter(skill => skill.name == 'React JS');

		render(<SkillCardItem {...reactSkill[0]} />);

		expect(screen.getByText('React JS')).toBeTruthy();
	});

	it('Should render the Vitest tool', () => {
		const vitest = tools.filter(tool => tool.name == 'Vitest');

		render(<SkillCardItem {...vitest[0]} />);

		expect(screen.getByText('Vitest')).toBeTruthy();
	});
});
