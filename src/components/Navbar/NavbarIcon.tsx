import { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

const iconsTheme = {
	light: {
		name: 'moon',
		urlIcon: '/assets/icons/moon.svg',
	},
	dark: {
		name: 'sun',
		urlIcon: '/assets/icons/sun.svg',
	},
};

export const NavbarIcon = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const handleClick = () => {
		if (theme == 'light') {
			setTheme('dark');

			localStorage.setItem('theme', 'dark');
		} else {
			setTheme('light');

			localStorage.setItem('theme', 'light');
		}
	};

	return (
		<div onClick={handleClick} className='re-Navbar-icon'>
			<img
				className={`Icon Icon--${
					theme == 'light'
						? iconsTheme.light.name
						: `${iconsTheme.dark.name} isActive`
				}`}
				src={
					theme == 'light' ? iconsTheme.light.urlIcon : iconsTheme.dark.urlIcon
				}
				alt='Theme Icon'
			/>
		</div>
	);
};
