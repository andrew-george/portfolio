import { FaArrowUp } from 'react-icons/fa'

function Footer() {
	return (
		<footer>
			<FaArrowUp className='scroll' onClick={() => window.scrollTo(0, 0)} />
			<p className='copyright'>
				&copy; Designed & Developed by <span className='name'>Andrew Berty</span>
			</p>
			<img src='./assets/images/mono-logo.svg' alt='logo' className='logo' />
		</footer>
	)
}

export default Footer
