import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import NFTCollectorPost from "../Components/projectWalkthroughs/NFTCollectorPost";
import SportingGoods from "../Components/projectWalkthroughs/SportingGoodsPost";
import GerdSolutions from "../Components/projectWalkthroughs/GerdSolutionsPost";
const projectComponents = [
	<NFTCollectorPost />,
	<SportingGoods />,
	<GerdSolutions />,
];
const ProjectsShowcase = () => {
	document.title = "Project";
	console.log(document.head);
	const { projectsList } = useGlobalContext();
	const [validID, setValidID] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [projectNum, setProjectNum] = useState(0);
	const { id } = useParams();
	/*Used to redirect to home if there is an error getting the product*/
	const navigate = useNavigate();

	useEffect(() => {
		let project = projectsList.find((project) => project.id === id);
		if (project) {
			setValidID(true);

			setProjectNum(projectsList.indexOf(project));
		} else {
			setValidID(false);
		}
		setIsLoading(false);

		window.scrollTo(0, 0);
	}, []);
	if (isLoading) {
		return (
			<Wrapper>
				<div className='spinner'></div>
			</Wrapper>
		);
	}
	if (!validID) {
		return (
			<Wrapper>
				{" "}
				<h2>There was an error, redirecting to home page</h2>
				<div className='spinner'></div>
				{setTimeout(() => {
					navigate("/");
				}, 3000)}
			</Wrapper>
		);
	}
	const changeCurrentProject = (index) => {
		setProjectNum(index);
	};

	const component = projectComponents[projectNum];

	return (
		<div className='projects-page-container'>
			<Wrapper>
				<div className='heading-area'>
					<h2>Projects Showcase</h2>
					<div className='btn-container'>
						{projectsList.map((project, index) => {
							return (
								<button
									onClick={() => changeCurrentProject(index)}
									key={project.id + 12}>
									{project.heading}
								</button>
							);
						})}
					</div>
				</div>

				{component}
			</Wrapper>
		</div>
	);
};

const Wrapper = styled.section`
	min-height: calc(100vh - 10rem);
	// background-color: #333;
	padding: 2rem;
	margin: 0 auto;
	margin-top: 5rem;
	max-width: 1400px;

	h2 {
		font-size: 2.5rem;
		text-align: center;
	}
	.spinner {
		width: 6rem;
		height: 6rem;
		margin: 0 auto;
		margin-top: 10rem;
		border-radius: 50%;
		border: 4px solid #ccc;
		border-top-color: blue;
		animation: spinner 0.75s linear infinite;
	}
	@keyframes spinner {
		to {
			transform: rotate(360deg);
		}
	}
	.project-name {
		margin: 1.5rem 0;
	}
	.heading-area {
		text-align: center;
	}
	.btn-container {
		margin: 1rem auto;
		transform: tran;
	}
	button {
		padding: 1rem;
		border-radius: 10px;
		font-weight: bold;
		background-color: var(--arrow-color);
		color: white;
		cursor: pointer;

		margin: 1rem 2rem;
	}

	@media screen and (max-width: 1000px) {
		button {
			padding: 0.75rem 1.5rem;
			border-radius: 10px;
			font-weight: bold;
			font-size: 1rem;

			margin: 1rem 1.5rem;
		}
	}
	@media screen and (max-width: 830px) {
		.btn-container {
			display: flex;
		}

		h2 {
			font-size: 1.5rem;
		}
	}

	@media screen and (max-width: 768px) {
		margin-top: 0rem;
		.btn-container {
			flex-direction: column;
		}
	}
	@media screen and (max-width: 600px) {
		.btn-container {
			// display: flex;
			flex-direction: column;
			width: 50%;
			margin: 0 auto;
			padding: 0;
		}
		button {
			margin: 0.25rem 0rem;
			font-size: 0.75rem;
		}
	}
`;
export default ProjectsShowcase;
