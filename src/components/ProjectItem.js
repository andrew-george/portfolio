import { FaGithub, FaLink } from 'react-icons/fa'
import { logos } from '../data'

function ProjectItem({ project }) {
	return (
		<div className='project'>
			<div className='project--container'>
				<div className='info'>
					<p className='title'>{project.title}</p>
					<p className='description'>{project.description}</p>
					<div className='techs'>{project.techs.map(tech => [logos[tech]])}</div>
					<div className='buttons-container'>
						{project.repoLink && (
							<a href={project.repoLink} className='btn primary-btn'>
								<FaGithub /> CODE
							</a>
						)}
						{project.liveLink && (
							<a href={project.liveLink} className='btn primary-btn'>
								<FaLink /> VISIT
							</a>
						)}
					</div>
				</div>

				<img src={project.demo} alt={project.title} />
			</div>
		</div>
	)
}

export default ProjectItem
