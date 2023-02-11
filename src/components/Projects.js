import Fade from 'react-reveal/Fade'
import { extensions, projects } from '../data'
import { ProjectItem } from './'

function Projects() {
	return (
		<section id='projects'>
			<Fade left distance='500px' duration={1000}>
				<h2 className='section-title'>Projects</h2>
			</Fade>
			{projects.map((project, index) => (
				<ProjectItem project={project} key={index} />
			))}
			<Fade left distance='500px' duration={1000}>
				<h2 className='section-title'>VS Code Extensions</h2>
			</Fade>
			{extensions.map((extension, index) => (
				<ProjectItem project={extension} key={index} />
			))}
		</section>
	)
}

export default Projects
