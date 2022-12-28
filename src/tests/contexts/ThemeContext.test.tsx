import { describe, it, expect, vi, afterEach } from 'vitest';

import { fireEvent, render, screen } from '@testing-library/react';

import { ThemeContext, ThemeProvider } from '../../contexts/ThemeContext';

import { HomePage } from '../../pages/HomePage';

describe('Testing ThemeContext', () => {
	const data = {
		theme: 'light',
		setTheme: vi.fn(),
	};

	afterEach(() => {
		vi.clearAllMocks();
	});

	it('Should render the HomePage with the light theme', () => {
		render(
			<ThemeContext.Provider value={data}>
				<HomePage />
			</ThemeContext.Provider>
		);

		const homeContainer = screen.getByTestId('re-Page') as HTMLElement;

		expect(homeContainer.getAttribute('data-theme')).toBe(data.theme);
	});

	it('Should render the HomePage with the dark theme', () => {
		render(
			<ThemeContext.Provider value={data}>
				<HomePage />
			</ThemeContext.Provider>
		);

		fireEvent.click(screen.getByAltText('Theme Icon'));

		expect(data.setTheme).toHaveBeenCalledWith('dark');
	});

	it('Should render the HomePage with the theme that is in the LocalStorage', () => {
		Storage.prototype.getItem = vi.fn();

		render(
			<ThemeProvider>
				<HomePage />
			</ThemeProvider>
		);

		expect(localStorage.getItem).toBeCalledWith('theme');
	});
});
