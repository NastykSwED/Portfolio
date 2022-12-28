import { useState } from 'react';

import { Button } from '../Buttons/Button';

import { SiGiphy } from 'react-icons/si';

import { ModalCV } from '../Modals/ModalCV';

export const NavbarCV = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='re-Navbar-CV'>
			<Button onClick={handleClick} text='CV' variant='primary'>
				<SiGiphy />
			</Button>
			{isOpen && <ModalCV isOpen={isOpen} />}
		</div>
	);
};
