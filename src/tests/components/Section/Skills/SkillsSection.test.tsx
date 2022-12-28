import { describe, it, expect } from 'vitest';

import { screen, render } from '@testing-library/react';
import { SkillsSection } from '../../../../components';

describe('Testing SkillSection component', () => {
	it('Should match the snapshot', () => {
		const { container } = render(<SkillsSection />);

		expect(container).toMatchSnapshot();
	});
});
