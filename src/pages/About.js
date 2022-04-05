import styled from "styled-components";
import AboutImage from "../images/About-Image.jpg";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import Resume from "../images/Resume.pdf";
const About = () => {
	return (
		<Wrapper>
			<div className='about-container'>
				<h3>About Me</h3>

				<div className='about-content-container'>
					<img src={AboutImage} alt='about-image' className='about-image' />
					<div>
						<p>
							Hello, My name is Saket Sama and I enjoy solving problems. I've
							always liked solving puzzles like Sudoku and naturally found
							programmming. I was hooked to Web Development as soon as I wrote
							my first html tag and logged my first "Hello World" to the
							console. Right now I'm working with React to make Uis faster and
							more effecient. In my free time you can catch me listening to
							music or watching comedy. I listen to all genres of music but
							mainly Hip Hop and R&B. Some of my favorite comics at the moment
							are Tim Dillion, Joey Diaz, and Bill Burr. I'm also a big
							basketball fan and enjoy watching NBA games whenever I get the
							chance. I'm very excited for the playoffs this season, especially
							in the eastern conference.
						</p>
						<div className='external-link-container'>
							<a
								href='https://www.linkedin.com/in/saket-sama-748526201/'
								target='_blank'
								className='external-link'
								id='external-link-linkedin'>
								<AiFillLinkedin />
								Linkedin
							</a>
							<a
								href='https://github.com/ssama8'
								target='_blank'
								className='external-link'
								id='github-btn'>
								<BsGithub />
								Github
							</a>
						</div>
					</div>
				</div>

				<h3>My Resume</h3>
				<iframe src={Resume} height='600px'></iframe>
			</div>
		</Wrapper>
	);
};

export default About;

const Wrapper = styled.section`
	background-color: var(--project-page-background);
	display: flex;
	align-items: flex-start;
	justify-content: center;
	margin-top: 5rem;
	min-height: calc(100vh - 10rem);
	@media screen and (max-width: 768px) {
		margin-top: 0rem;
	}
	iframe {
		width: 100%;
		max-width: 1000px;
		cursor: pointer;
		margin: 0 auto;
		margin-bottom: 3rem;
	}
	#external-link-linkedin {
		background-color: rgb(9, 102, 194);
	}
	.about-container {
		margin: 0 auto;
		margin-top: 10vh;
		width: 80vw;
		display: grid;
		grid-gap: 2rem;
		max-width: 1800px;
	}
	h3 {
		text-align: center;
		font-size: 3rem;
		margin-bottom: 3rem;
	}
	.about-content-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 5rem;
	}
	.about-image {
		width: 100%;
		height: 100%;
		// height: 100%;
	}
	p {
		line-height: 1.6;
		font-size: 1.5rem;
		font-weight: bold;
	}

	@media screen and (max-width: 1300px) {
		.about-content-container {
			grid-template-columns: 1fr;
			img {
				width: 75%;
				margin: 0 auto;
			}
		}

		h3 {
			font-size: 2rem;
			margin-bottom: 2rem;
		}
		p {
			line-height: 1.6;
			font-size: 1.3rem;
			font-weight: bold;
		}
	}
`;
