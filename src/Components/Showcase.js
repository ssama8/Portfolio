import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context/context";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import projectsList from "../utils/projectListData";

import styled from "styled-components";
let time = new Date().getTime().toString();

const Showcase = () => {
	const { projects, sliderValue } = useGlobalContext();
	const { value } = sliderValue;
	const [index, setIndex] = useState(0);
	const [slide, setSlide] = useState(true);

	useEffect(() => {
		if (!slide) return;
		let interval = setInterval(() => {
			addIndex();
		}, value * 1000);
		return () => clearInterval(interval);
	}, [index, slide, value]);
	const setClasses = (indx) => {
		if (indx === index) return "project-info current";
		if (index === 0) {
			if (indx === projects.length - 1) return "project-info prev ";
		} else {
			if (indx === index - 1) return "project-info prev";
		}
		if (index === projects.length - 1) {
			if (indx === 0) return "project-info next";
		}

		return "project-info next ";
	};
	const handleSlider = (operation) => {
		let newTime = new Date().getTime().toString();
		// console.log(time, newTime);
		let timeBetween = newTime - time;
		if (timeBetween < 1000) return;
		else {
			time = newTime;
		}
		if (operation === "subtract") subtractIndex();
		else addIndex();
	};

	const subtractIndex = () => {
		if (index === 0) {
			setIndex(projects.length - 1);
		} else {
			setIndex(index - 1);
		}
	};
	const addIndex = () => {
		if (index === projects.length - 1) {
			setIndex(0);
		} else {
			setIndex(index + 1);
		}
	};
	return (
		<div className='section-container'>
			<Wrapper
				className='showcase'
				style={{
					background: projects[index].image,
					transition: "all 1s",
				}}>
				<h2 className='header'>Some Of My Work</h2>
				<button
					className={slide ? "slider success" : "slider danger"}
					onClick={() => setSlide(!slide)}>
					{slide ? "Turn slider off" : "Turn slider on"}
				</button>

				<div className='left-arrow' onClick={() => handleSlider("subtract")}>
					<FaArrowLeft />
				</div>
				{projects.map((project, indx) => {
					const { description, heading, id } = project;
					return (
						<div className={setClasses(indx)} key={id}>
							<h3>{heading} </h3>
							<p>{description}</p>
							<Link to={`projects/${projectsList[indx].id}`}>Click Here</Link>
						</div>
					);
				})}
				<div className='right-arrow' onClick={() => handleSlider("sadd")}>
					<FaArrowRight />
				</div>
			</Wrapper>
		</div>
	);
};

const Wrapper = styled.section`
	h2 {
		position: absolute;
		color: black;

		font-weight: bold;
		font-size: 2.5rem;
		background-color: var(--slider-header);
		margin: 0 auto;
		top: 0px;

		width: 100vw;
		max-width: 2200px;
		z-index: 9;
		padding-bottom: 1rem;
		p {
			margin: 0 auto;
		}
	}

	.success {
		background-color: green;
	}
	.danger {
		background-color: red;
	}
	@media screen and (max-width: 1000px) {
		h2 {
			font-size: 2rem;
		}
	}
`;
export default Showcase;
