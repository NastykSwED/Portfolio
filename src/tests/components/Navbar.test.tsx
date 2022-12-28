import { describe, it, expect, vi } from 'vitest';

import { fireEvent, render, screen } from '@testing-library/react';

import { Navbar } from '../../components';

import { ThemeContext } from '../../contexts';

const mockSetTheme = vi.fn();

describe('Testing Navbar Component', () => {
	it('Should match the snapshot', () => {
		const { container } = render(<Navbar isActive={false} />);

		expect(container).toMatchSnapshot();
	});

	it('Should set the Theme to Dark', () => {
		const data = {
			theme: 'light',
			setTheme: mockSetTheme,
		};

		render(
			<ThemeContext.Provider value={data}>
				<Navbar isActive={false} />
			</ThemeContext.Provider>
		);

		fireEvent.click(screen.getByAltText('Theme Icon'));

		expect(mockSetTheme).toBeCalledTimes(1);
	});

	it('If isActive prop is true, the navigation bar should have the className "isActive"', () => {
		render(<Navbar isActive />);

		const navbar = screen.getByRole('navigation') as HTMLElement;

		expect(navbar.className.includes('isActive')).toBeTruthy();
	});
});
