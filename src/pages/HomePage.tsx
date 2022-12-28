import { useContext } from 'react';

import { Footer, Header, Main } from '../layouts';

import { ThemeContext } from '../contexts';

export const HomePage = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<div className='re-Page' data-theme={theme} data-testid='re-Page'>
			<Header />
			<Main />
			<Footer />
		</div>
	);
};
