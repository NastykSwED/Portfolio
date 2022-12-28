import { describe, it, expect, vi } from 'vitest';

import { render } from '@testing-library/react';

import { ProjectsSection } from '../../../../components';

describe('Testing ProjectsSection component', () => {
	it('Should match the snapshot', () => {
		const { container } = render(<ProjectsSection />);

		expect(container).toMatchSnapshot();
	});
});
