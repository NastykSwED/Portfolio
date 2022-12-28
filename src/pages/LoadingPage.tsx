import { useContext } from 'react';

import { Loader } from '../components';

import { ThemeContext } from '../contexts';

export const LoadingPage = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<div className='re-LoadingPage' data-theme={theme}>
			<Loader />
		</div>
	);
};
