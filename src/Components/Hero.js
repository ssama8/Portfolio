import React from "react";
import logo from "../images/software-icon.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import projectsList from "../utils/projectListData";
const Hero = () => {
	const defaultId = projectsList[0].id;
	return (
		<Wrapper>
			<div className='about'>
				<div className='grid'>
					<div className='summary'>
						<p> Hello I'm </p>
						<h1>Saket Sama</h1>
						<div className='underline'></div>
						<h4>I create web apps </h4>
						<h5>
							{" "}
							Full-Stack Developer with an emphasis in Frontend Web Development
							with React. Also well-versed in technical SEO and SEO best
							practices{" "}
						</h5>
						<Link className='btn' to={`/projects/${defaultId}`}>
							Checkout My Work
						</Link>
					</div>
					<img className='home-icon' src={logo} alt='home icon' />
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	.btn {
		width: 100%;
		font-weight: bold;
		font-size: 1.05rem;
		text-align: center;
		background-color: var(--primary-color);
		color: var(--nav-text-color);
	}
	@media screen and (max-width: 1000px) {
		.grid {
			width: 80vw;
		}
		.grid div * {
			margin: 0.75rem 0;
		}
		.grid p {
			font-size: 1rem;
		}
		.grid h2 {
			font-size: 2rem;
			box-shadow: 0 5px red;
			width: 50%;
			/* mix-blend-mode: difference; */
		}
		.grid h4,
		.grid h5 {
			font-size: 1.15rem;
		}

		.home-icon {
			height: 30%;
			transform: translateX(20%);
			align-self: center;
		}
	}
	@media screen and (max-width: 768px) {
		.about {
			top: 0;
		}
		.grid {
			flex-direction: column;
			align-items: flex-start;
			text-align: center;
		}
		.grid h2 {
			margin: 0 auto;
			font-size: 1.5rem;
		}
		.home-icon {
			height: 30%;
			transform: translateX(0%);
			align-self: center;
		}
		display: block;
		.summary {
			h5 {
				font-size: 0.75rem;
				margin-bottom: 1rem;
				text-align: center;
				width: 100%;
			}
			a.btn {
				font-size: 0.75rem;
				padding: 0.75rem 0.25rem;
			}
		}
	}
	@media screen and (max-width: 500px) {
		.grid {
			width: 100vw;
		}
	}
`;
export default Hero;
