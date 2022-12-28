import { describe, it, expect } from 'vitest';

import { screen, render, fireEvent } from '@testing-library/react';

import { Header } from '../../layouts';

describe('Testing Header Layout', () => {
	it('Should match the snapshot', () => {
		const { container } = render(<Header />);

		expect(container).toMatchSnapshot();
	});

	it('Should activate the responsive navigation bar.', () => {
		render(<Header />);

		const hamburger = screen.getByTestId('Hamburger') as HTMLElement;
		const navElement = screen.getByRole('navigation') as HTMLElement;

		fireEvent.click(hamburger);

		expect(navElement.className.includes('isActive')).toBeTruthy();
	});
});
