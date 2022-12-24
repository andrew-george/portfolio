import Fade from 'react-reveal/Fade'
import { skills } from '../data'

function Skills() {
	return (
		<Fade bottom distance='50px' duration={600}>
			<section id='skills'>
				<h2 className='section-title'>Skills</h2>

				<div className='skills--container'>
					{skills.map((skill, index) => (
						<Fade key={index} bottom distance='50px' duration={600}>
							<div className='skill '>
								<img src={skill} alt='skill' />
							</div>
						</Fade>
					))}
				</div>
			</section>
		</Fade>
	)
}

export default Skills
