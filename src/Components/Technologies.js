import React from "react";
import technologies from "../context/TechnologiesUsed";
import styled from "styled-components";
const Technologies = () => {
	return (
		<Wrapper className='technologies-section'>
			<h3>Experience With </h3>
			<hr />
			<div className='technologies-container'>
				{technologies.map((technology) => {
					const { name, icon, id } = technology;
					return (
						<div className='technology' key={id}>
							{icon}
							<h4>{name}</h4>
						</div>
					);
				})}
			</div>
		</Wrapper>
	);
};
const Wrapper = styled.section`
	hr {
		margin: 1rem 0;
	}
	.technologies-container {
		max-width: 1600px;
		margin: 0 auto;
		margin-top: 1rem;

		padding: 2rem;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 0.5rem;
		text-align: center;
		color: var(--technologies-color);
	}
	h3 {
		text-align: center;
		font-size: 2rem;
		padding: 1.5rem 0;
	}
	.technology {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 5px;
		padding: 2rem;
		font-size: 4rem;
		transition: all 0.75s;
	}
	.technology:hover {
		background-color: orange;
		color: black;
		transform: scale(1.05);
	}
	.technology h4 {
		font-size: 2rem;
	}
	@media screen and (max-width: 768px) {
		.technologies-container {
			grid-template-columns: repeat(2, 1fr);
		}
		.technology {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			border-radius: 5px;
			padding: 1.5rem;
			font-size: 2rem;
			transition: all 0.75s;
		}
	}
	@media screen and (max-width: 500px) {
		.technologies-container {
			grid-template-columns: 1fr;
		}
		.technology {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			border-radius: 5px;
			padding: 1rem;
			font-size: 1.5rem;
			transition: all 0.75s;
		}
	}
`;

export default Technologies;
