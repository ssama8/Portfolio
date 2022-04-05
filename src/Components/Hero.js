import React from "react";
import logo from "../images/software-icon.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import projectsList from "../utils/projectListData";
const Hero = () => {
	console.log(projectsList);
	const defaultId = projectsList[0].id;
	return (
		<Wrapper>
			<div className='about'>
				<div className='grid'>
					<div>
						<p> Hello I'm </p>
						<h2>Saket Sama</h2>
						<div className='underline'></div>
						<h4>I create web apps </h4>
						<h5>
							{" "}
							Front End Engineer who designs and develops Responsive UIs and
							Uxs. Also well-versed in technical SEO and SEO best practices{" "}
						</h5>
						<Link className='btn' to={`/projects/${defaultId}`}>
							Checkout My Work
						</Link>
					</div>
					<img className='home-icon' src={logo} />
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
			// width: 70%;
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
		.grid {
			flex-direction: column;
			align-items: center;
			text-align: center;
			justif-content: center;
		}
		.grid h2 {
			margin: 0 auto;
		}
		.home-icon {
			height: 30%;
			transform: translateX(0%);
			align-self: center;
		}
	}
	@media screen and (max-width: 500px) {
		.grid {
			width: 100vw;
		}
	}
`;
export default Hero;