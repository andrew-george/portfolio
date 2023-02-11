import React from 'react'

function NavItem({ name }) {
	return (
		<a href={`#${name}`} className='menu_link'>
			{name}
		</a>
	)
}

export default NavItem
