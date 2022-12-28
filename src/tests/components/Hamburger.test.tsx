import { describe, it, vi, expect } from 'vitest';

import { render, screen, fireEvent } from '@testing-library/react';

import { Hamburger } from '../../components';

describe('Testing Hamburger Component', () => {
	const mockOnClick = vi.fn();

	it('should match the snapshot', () => {
		const { container } = render(<Hamburger onClick={mockOnClick} />);

		expect(container).toMatchSnapshot();
	});

	it('Clicking on it should add the property active', () => {
		render(<Hamburger onClick={mockOnClick} />);

		const hamburgerContainer = screen.getByTestId('Hamburger') as HTMLElement;

		fireEvent.click(hamburgerContainer);

		expect(mockOnClick).toHaveBeenCalledTimes(1);

		expect(hamburgerContainer.className.includes('isActive')).toBeTruthy();
	});
});
