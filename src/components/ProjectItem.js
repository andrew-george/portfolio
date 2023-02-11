import { FaGithub, FaLink } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'
import { logos } from '../data'

function ProjectItem({ project }) {
	const { title, description, demo, repoLink, liveLink, marketplace, techs } = project
	return (
		<div className='project-container'>
			<div className='info'>
				<Fade top>
					<p className='title'>{title}</p>
				</Fade>
				<Fade cascade bottom distance='200px' duration={500}>
					<p className='description'>{description}</p>
				</Fade>
				<Fade cascade left distance='500px' duration={500}>
					{techs && <div className='techs'>{techs.map(tech => [logos[tech]])}</div>}
					<div className='buttons-container'>
						{repoLink && (
							<a href={repoLink} className='btn'>
								<FaGithub /> CODE
							</a>
						)}
						{liveLink && (
							<a href={liveLink} className='btn'>
								<FaLink /> VISIT
							</a>
						)}
						{marketplace && (
							<a href={marketplace} className='btn'>
								<FaLink /> MARKETPLACE
							</a>
						)}
					</div>
				</Fade>
			</div>
			<Fade right distance='500px' duration={1000}>
				<div className='img-container'>
					<img src={demo} alt={title} />
				</div>
			</Fade>
		</div>
	)
}

export default ProjectItem
