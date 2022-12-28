import { useState } from 'react';

interface HamburgerProps {
	onClick: () => void;
}

export const Hamburger = (props: HamburgerProps) => {
	const { onClick } = props;

	const [isActive, setIsActive] = useState<boolean>(false);

	return (
		<div
			data-testid='Hamburger'
			onClick={() => {
				onClick();
				setIsActive(!isActive);
			}}
			className={`re-Hamburger ${isActive ? 'isActive' : ''}`}
		>
			<span className='re-Hamburger-bar'></span>
			<span className='re-Hamburger-bar'></span>
			<span className='re-Hamburger-bar'></span>
		</div>
	);
};
