import { useEffect, useState } from 'react';

import { HomePage, LoadingPage } from './pages';

export const App = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(!isLoading);
		}, 2000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	if (!isLoading) {
		return <LoadingPage />;
	}

	return <HomePage />;
};
