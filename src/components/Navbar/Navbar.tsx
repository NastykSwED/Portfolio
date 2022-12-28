import { NavbarList, NavbarIcon, NavbarCV } from './';

interface NavbarProps {
	isActive: boolean;
}

export const Navbar = (props: NavbarProps) => {
	const { isActive } = props;

	return (
		<nav className={`re-Navbar ${isActive ? 'isActive' : ''}`}>
			<NavbarList />
      
			<NavbarCV />

			<NavbarIcon />
		</nav>
	);
};
