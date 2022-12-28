import React, { createContext, useState, useEffect } from 'react';

interface ThemeProviderProps {
	children: React.ReactNode;
}

interface ThemeContextProps {
	theme: string;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextProps>(
	{} as ThemeContextProps
);

export const ThemeProvider = (props: ThemeProviderProps) => {
	const { children } = props;

	const [theme, setTheme] = useState<string>('light');

	const data = {
		theme,
		setTheme,
	};

	useEffect(() => {
		setTheme(localStorage.getItem('theme') || 'light');
	}, []);

	return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
