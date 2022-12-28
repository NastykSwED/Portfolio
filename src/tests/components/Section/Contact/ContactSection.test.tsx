import { describe, it, expect } from 'vitest';

import { render } from '@testing-library/react';

import { ContactSection } from '../../../../components';

describe('Testing ContactSection component', () => {
	it('Should match the snapshot', () => {
		const { container } = render(<ContactSection />);

		expect(container).toMatchSnapshot();
	});
});
