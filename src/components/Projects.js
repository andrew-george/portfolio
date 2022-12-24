import Fade from 'react-reveal/Fade'
import { projects } from '../data'
import ProjectItem from './ProjectItem'

function Projects() {
	return (
		<Fade bottom distance='50px' duration={600}>
			<section id='projects'>
				<h2 className='section-title'>Projects</h2>
				{projects.map((project, index) => (
					<Fade distance='50px' duration={600} bottom key={index}>
						<ProjectItem project={project} />
					</Fade>
				))}
			</section>
		</Fade>
	)
}

export default Projects
