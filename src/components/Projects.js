import { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
import { extensions, projects } from '../data'
import { BlogPost, ProjectItem } from './'

function Projects() {
	const [posts, setPosts] = useState()

	async function getBlogPosts() {
		const res = await fetch('https://dev.to/api/articles?username=andrewgeorge')
		const posts = await res.json()
		setPosts(posts)
	}

	useEffect(() => {
		getBlogPosts()
	}, [])

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
			<Fade left distance='500px' duration={1000}>
				<h2 className='section-title'>Blog Posts</h2>
			</Fade>
			<div className='posts-container'>{posts && posts.map(post => <BlogPost project={post} key={post.id} />)}</div>
		</section>
	)
}

export default Projects
