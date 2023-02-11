import { NavItem } from './'

function Navbar() {
	return (
		<nav>
			<img src='./assets/images/mono-logo.svg' alt='logo' className='logo' />
			<NavItem name='projects' />
			<NavItem name='skills' />
			<NavItem name='contact' />
		</nav>
	)
}

export default Navbar
