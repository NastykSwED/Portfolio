import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

import { ThemeProvider } from './contexts';

import './sass/styles.scss';

const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);

root.render(
	<React.StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
