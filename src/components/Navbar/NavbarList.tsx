import { NavbarItem } from './NavbarItem';

export const NavbarList = () => {
	const navbarItemsName = ['Home', 'Skills', 'Projects', 'Contact me'];

	return (
		<ul className='re-Navbar-list'>
			{navbarItemsName.map(navbarItemName => {
				return <NavbarItem key={navbarItemName} name={navbarItemName} />;
			})}
		</ul>
	);
};
