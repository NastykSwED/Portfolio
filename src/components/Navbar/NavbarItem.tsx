type NavbarItemProps = {
	name: string;
};

export const NavbarItem = (props: NavbarItemProps) => {
	const { name } = props;

	return (
		<li className='re-Navbar-listItem'>
			<a
				className='re-Navbar-link'
				href={`#re-${name.includes('Contact') ? 'Contact' : name}Section`}
			>
				{name}
			</a>
		</li>
	);
};
