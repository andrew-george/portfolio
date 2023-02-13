import React from 'react'
import Fade from 'react-reveal/Fade'

function BlogPost({ project }) {
	const { social_image, url, reading_time_minutes, tag_list, title } = project
	return (
		<Fade bottom distance='500px' duration={1000}>
			<div className='card'>
				<a href={url}>
					<img src={social_image} alt={title} />
				</a>
				<div className='content'>
					<p className='read-time'>{reading_time_minutes} minutes read</p>
					<div className='tags'>
						{tag_list.map((tag, index) => (
							<p key={index} className='tag'>
								{tag}
							</p>
						))}
					</div>
				</div>
			</div>
		</Fade>
	)
}

export default BlogPost
