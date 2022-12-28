import { describe, it, expect, vi } from 'vitest';

import { render, screen } from '@testing-library/react';

import { ProjectsCard } from '../../../../components';

import { getProjectsData } from '../../../../helpers';

describe('Testing ProjectsCard component', () => {
	it('Should render the TodoApp project card', () => {
		const todoApp = getProjectsData().filter(
			project => project.title == 'Todo App'
		);

		render(<ProjectsCard {...todoApp[0]} />);

		expect(
			screen.getByAltText('Todo App Logo') as HTMLImageElement
		).toBeTruthy();
	});

	it('Should render the TodoApp project modal card', () => {
		const todoApp = getProjectsData().filter(
			project => project.title == 'Todo App'
		);

		render(<ProjectsCard {...todoApp[0]} />);
	});
});
