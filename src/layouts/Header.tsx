import { useState } from 'react';

import { Navbar, Hamburger } from '../components';

export const Header = () => {
	const [isActive, setIsActive] = useState<boolean>(false);

	const onClick = () => {
		setIsActive(!isActive);
	};

	return (
		<header className='re-Header' id='re-Header'>
			<div className='re-Header-wrapNavbar'>
				<h1 className='re-Header-logo'>Ronald Torres</h1>
				<Navbar isActive={isActive} />
				<Hamburger onClick={onClick} />
			</div>
		</header>
	);
};
