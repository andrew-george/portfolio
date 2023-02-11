import Fade from 'react-reveal/Fade'
import { skills } from '../data'

function Skills() {
	return (
		<section id='skills'>
			<Fade bottom distance='500px' duration={1000}>
				<h2 className='section-title'>Skills</h2>

				<div className='skills-container'>
					{skills.map((skill, index) => (
						<Fade key={index} bottom distance='500px' duration={1000}>
							<div className='skill '>
								<img src={skill} alt='skill' />
							</div>
						</Fade>
					))}
				</div>
			</Fade>
		</section>
	)
}

export default Skills
