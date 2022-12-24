function Navbar() {
	return (
		<nav>
			<a href='/' className='logo'>
				&lt;<span> a </span>/ &gt;
			</a>
			<a href='#projects' className='menu_link'>
				Projects
			</a>
			<a href='#skills' className='menu_link'>
				Skills
			</a>
			<a href='#contact' className='menu_link primary-btn'>
				Contact
			</a>
		</nav>
	)
}

export default Navbar
