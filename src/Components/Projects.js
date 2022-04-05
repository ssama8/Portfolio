import React from "react";
import { useGlobalContext } from "../context/context";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Projects = () => {
	const { projectsList } = useGlobalContext();
	return (
		<Wrapper className='projects'>
			<h2>Project Gallery</h2>
			{projectsList.map((project, index) => {
				const { id, heading, image, description2 } = project;
				return (
					<div
						key={id}
						className={
							index === projectsList.length - 1 ? "last-project" : null
						}>
						{/* <div className='heading-image'> */}
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
								<Link className='btn-read' id='read more' to={`projects/${id}`}>
									Read More
								</Link>
								{/* <a href='' className='btn-read' id='read more'></a> */}
							</p>
						</div>

						{/* </div> */}
					</div>
				);
			})}
		</Wrapper>
	);
};
const Wrapper = styled.section`
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
	@media screen and (max-width: 1000px) {
		h3 {
			font-size: 1.5rem;
		}
		p {
			font-size: 1.15rem;
		}
	}
`;
export default Projects;
