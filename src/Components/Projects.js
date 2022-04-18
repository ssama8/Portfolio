import React from "react";
import { useGlobalContext } from "../context/context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
	const { projectsList } = useGlobalContext();
	return (
		<Wrapper className='projects'>
			<h2>Project Gallery</h2>
			{projectsList.map((project, index) => {
				const { id, heading, image, description2, github, link } = project;
				return (
					<div
						key={id}
						className={
							index === projectsList.length - 1 ? "last-project" : null
						}>
						<h3>{heading}</h3>
						<div className='grid'>
							<Link to={`projects/${id}`} className='img-link'>
								<img
									src={image}
									alt={heading}
									className='project-preview-image'
								/>
							</Link>
							<p className='description'>
								{description2}
								<Link className='btn-read' to={`projects/${id}`}>
									Read More about {heading}
								</Link>
								<div className='container'>
									{github && (
										<a
											href={github}
											target='_blank'
											rel='noreferrer'
											className='external-link'
											id='github-btn'
											aria-label={`Source code for ${heading}`}>
											Src Code
										</a>
									)}
									<a
										href={link}
										target='_blank'
										rel='noreferrer'
										className={"external-link test"}>
										View
									</a>
								</div>
							</p>
						</div>
					</div>
				);
			})}
		</Wrapper>
	);
};
const Wrapper = styled.section`
	.container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		font-size: 1rem;
		margin-top: 1rem;
		.external-link {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0.25rem 0.5rem;
			margin: 0 1rem;
		}
		.test {
			padding: 1rem;
		}
	}

	h2 {
		padding: 1rem 0;
		text-align: center;
		font-size: 3rem;
		margin-bottom: 3rem;
	}
	h3 {
		font-size: 2rem;
		margin: 1rem 0;
		font-weight: bold;
	}
	.btn-read {
		color: purple;
		padding: 0;
		font-size: 0.9rem;
		margin: 0;
	}
	.description {
		background-color: var(--project-info);
		color: var(--showcase-text-color);
		padding: 2rem;
		border-radius: 10px;
	}
	.project-preview-image:hover {
		cursor: pointer;
		transform: scale(1.2);
	}
	.projects > div {
		width: 60vw;
	}
	p {
		font-size: 1.5rem;
		justify-self: flex-end;
	}
	@media screen and (max-width: 1100px) {
		h3 {
			font-size: 1.5rem;
		}
		p {
			font-size: 1.15rem;
		}
	}
	@media screen and (max-width: 500px) {
		.grid {
			width: 100vw;
			padding: 0;
			padding: 0rem;
		}

		.description {
			font-size: 0.85rem;
			font-weight: bold;

			padding: 1rem 0.75rem;
			border-radius: 5px;
		}
	}
`;
export default Projects;
