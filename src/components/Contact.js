import { FaAt, FaGithub, FaLinkedin } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'

function Contact() {
	return (
		<Fade bottom distance='50px' duration={600}>
			<section id='contact'>
				<h2 className='section-title'>Contact</h2>

				<div className='contact--container'>
					<a className='contact' href='https://github.com/andrew-george'>
						<FaGithub />
					</a>
					<a className='contact' href='https://www.linkedin.com/in/andrew-berty'>
						<FaLinkedin />
					</a>
					<a className='contact' href='mailto:andrewgeorgeberty@gmail.com'>
						<FaAt />
					</a>
				</div>
			</section>
		</Fade>
	)
}

export default Contact
