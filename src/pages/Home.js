import React from "react";
import "../App.css";
import Showcase from "../Components/Showcase";
import Projects from "../Components/Projects.js";
import Hero from "../Components/Hero";
import { useGlobalContext } from "../context/context";
import Technologies from "../Components/Technologies";
const Home = () => {
	const { theme } = useGlobalContext();
	document.title = "Home";
	const htmlObj = document.documentElement;
	htmlObj.className = theme;
	return (
		<main>
			<div className='home-image'>
				<Hero />
			</div>

			<Showcase />
			<Projects />
			<Technologies />
		</main>
	);
};

export default Home;
