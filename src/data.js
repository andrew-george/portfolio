import { FaBootstrap, FaCss3Alt, FaHtml5, FaJsSquare, FaReact, FaSass } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript } from 'react-icons/si'

export const logos = {
	html: <FaHtml5 />,
	css: <FaCss3Alt />,
	sass: <FaSass />,
	javascript: <FaJsSquare />,
	bootstrap: <FaBootstrap />,
	react: <FaReact />,
	next: <SiNextdotjs />,
	typescript: <SiTypescript />,
}

export const skills = [
	'/assets/images/tech-logos/html.svg',
	'/assets/images/tech-logos/css.svg',
	'/assets/images/tech-logos/sass.svg',
	'/assets/images/tech-logos/bootstrap.svg',
	'/assets/images/tech-logos/javascript.svg',
	'/assets/images/tech-logos/typescript.svg',
	'/assets/images/tech-logos/react.svg',
	'/assets/images/tech-logos/nextjs.svg',
	'/assets/images/tech-logos/git.svg',
	'/assets/images/tech-logos/github.svg',
	'/assets/images/tech-logos/netlify.svg',
	'/assets/images/tech-logos/parcel.svg',
	'/assets/images/tech-logos/vercel.svg',
	'/assets/images/tech-logos/figma.svg',
	'/assets/images/tech-logos/xd.svg',
]

const publicAssetsPath = './assets/images/projects'

export const projects = [
	{
		title: 'Personal Portfolio',
		description:
			'Responsively designed portfolio to include all my projects and represent my technical skills and aesthetic',
		techs: ['html', 'sass', 'javascript'],
		repoLink: 'https://github.com/andrew-george/Personal-Porfolio',
		demo: `${publicAssetsPath}/portfolio-mockup.png`,
		liveLink: 'https://www.test.com',
	},
	{
		title: 'Margin',
		description: 'Minimal note taking app to minimize distractions while taking notes',
		techs: ['sass', 'react'],
		repoLink: '',
		demo: `${publicAssetsPath}/margin-mockup.png`,
		liveLink: '',
	},
	{
		title: 'O Fortuna',
		description: 'O Fortuna is a dummy text generator with latin flavor ',
		techs: ['sass', 'react'],
		repoLink: '',
		demo: `${publicAssetsPath}/o-fortuna-mockup.png`,
		liveLink: '',
	},
	{
		title: 'die Zeitung',
		description: 'Minimal Designed Blog',
		techs: ['sass', 'react'],
		repoLink: '',
		demo: `${publicAssetsPath}/o-fortuna-mockup.png`,
		liveLink: '',
	},
]
