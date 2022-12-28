import { describe, it, expect } from 'vitest';

import { screen, render } from '@testing-library/react';

import { SkillsCard } from '../../../../components';

import { getSkillsData } from '../../../../helpers';

describe('Testing SkillsCard component', () => {
	const skills = getSkillsData();
	const [frontEnd, tools] = skills;

	it('Should render the Frontend skills', () => {
		render(<SkillsCard title='Frontend' skills={frontEnd} />);

		expect(screen.getByText('Frontend') as HTMLElement).toBeTruthy();
	});

	it('Should render the Tools skills', () => {
		render(<SkillsCard title='Tools' skills={tools} />);

		expect(screen.getByText('Tools') as HTMLElement).toBeTruthy();
	});
});
