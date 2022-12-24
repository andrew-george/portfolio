import { FaArrowUp } from 'react-icons/fa'

function Footer() {
	return (
		<footer>
			<a href='/' className='logo'>
				&lt;<span> a </span>/ &gt;
			</a>
			<span className='copyright'>
				&copy; Designed & Developed by <span className='name'>Andrew Berty</span>
			</span>
			<div
				className='scroll'
				onClick={() => {
					window.scrollTo(0, 0)
				}}
			>
				<FaArrowUp />
				<span>Scroll up</span>
			</div>
		</footer>
	)
}

export default Footer
