import Fade from 'react-reveal/Fade'

function Header() {
	return (
		<header>
			<Fade bottom distance='50px' duration={600}>
				<div className='text-container'>
					<p className='greeting'>
						Hello I am <span>Andrew</span>
					</p>
					<p className='job-title'>Frontend Developer</p>
					<p className='description'>I code and design websites for life</p>
					<a href='#projects' className='btn'>
						See my work
					</a>
				</div>
			</Fade>
		</header>
	)
}

export default Header
