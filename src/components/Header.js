import Fade from 'react-reveal/Fade'

function Header() {
	return (
		<header>
			<Fade cascade left distance='50px' duration={1000}>
				<div className='text-container'>
					<p className='greeting'>
						Hello I am <p className='name'>Andrew</p>
					</p>
					<p className='job-title'>Frontend Developer</p>
					<p className='description'>I code and design websites for life</p>
				</div>
			</Fade>
		</header>
	)
}

export default Header
