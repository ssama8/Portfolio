import React, { useRef, useState, useEffect } from "react";
import { useGlobalContext } from "../context/context";
import Settings from "./dropdowns/Settings.js";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import logo from "../images/logo.png";
import styled from "styled-components";
import navPages from "../context/navbarContext";
import { Link } from "react-router-dom";
const NavbarContext = React.createContext();

const Navbar = () => {
	const { isSidebarOpen, setIsSidebarOpen, projectsList } = useGlobalContext();

	const lineTop = useRef(null);
	const lineMiddle = useRef(null);
	const lineBottom = useRef(null);
	const pages = useRef(null);

	const [settingsVisibility, setSettingsVisibilty] = useState("none");
	const [projectsVisibility, setProjectsVisibilty] = useState("none");

	const [settingsChevron, setSettingsChevron] = useState(<FiChevronDown />);

	const [menuStyle, setMenuStyle] = useState("hamburger-menu");

	const setListPosition = (e) => {
		e.preventDefault();

		if (settingsVisibility === "none") {
			setSettingsVisibilty("block");
			setSettingsChevron(<FiChevronUp />);
		} else {
			setSettingsVisibilty("none");
			setSettingsChevron(<FiChevronDown />);
		}
	};

	const changeMenuStyle = () => {
		const menu = pages.current;
		const middle = lineMiddle.current;
		const top = lineTop.current;
		const bottom = lineBottom.current;
		if (menuStyle === "hamburger-menu") {
			top.style = "top: 2.5px ; transform: rotate(135deg)";
			bottom.style = "top: -2.5px ; transform: rotate(135deg)";
			middle.style.transform = "rotate(45deg)";
			setMenuStyle("x-menu");
		} else {
			top.style = "";
			bottom.style = "";
			middle.style.transform = "";
			setMenuStyle("hamburger-menu");
		}
	};

	return (
		<>
			<Wrapper>
				<nav>
					<div className='nav-container'>
						<img src={logo} alt='s logo' />

						<ul className='pages' ref={pages} style={{ position: "relative" }}>
							<Link to='/'>
								<li>
									<h3>Home</h3>
								</li>
							</Link>

							<Link to={`/projects/${projectsList[0].id}`}>
								<li>
									<h3>Projects</h3>
								</li>
							</Link>

							{/* <a href=''>
							
							</a> */}
							<Link to='/about'>
								<li>
									<h3>About</h3>
								</li>
							</Link>

							<a href='' onClick={setListPosition}>
								<li>
									{" "}
									<h3>Settings{settingsChevron}</h3>
								</li>
							</a>

							<li style={{ position: "relative" }}>
								<Settings
									visibility={settingsVisibility}
									listItems={navPages[navPages.length - 1].listItems}
								/>
							</li>
							<a
								href='https://github.com/ssama8'
								target='_blank'
								className='react-icon'>
								<li>
									<GoMarkGithub />
								</li>
							</a>
							<a
								href='https://www.linkedin.com/in/saket-sama-748526201/'
								target='_blank'
								className='react-icon linkedin'>
								<li>
									<BsLinkedin />
								</li>
							</a>
						</ul>
					</div>

					{/* Hamburger menu styling  */}
				</nav>
			</Wrapper>
			<div
				className='hamburger-menu'
				onClick={() => {
					setTimeout(changeMenuStyle(), 250);
					setIsSidebarOpen(!isSidebarOpen);
				}}>
				<div className='line-top' ref={lineTop}></div>
				<div className='line' ref={lineMiddle}></div>
				<div className='line-bottom' ref={lineBottom}></div>
			</div>
		</>
	);
};

const Wrapper = styled.div`
	.react-icon {
		position: absolute;
		font-size: 1.75rem;

		align-self: center;
	}
	.linkedin {
		margin-left: 3rem;
	}
	@media screen and (max-width: 1400px) {
		.nav-container {
			width: 70vw;
		}
		.settings {
			padding: 0rem;
			font-size: 0.75rem;
			background-color: none;
		}
		.settings li {
			padding: 1rem 0.5rem;
		}
		.settings li h3 {
			font-size: 1rem;
		}
		.settings p {
			margin-top: 0.25rem;
		}
		.pages h3 {
			font-size: 1rem;
		}
		img {
			height: 30px;
		}
	}

	@media screen and (max-width: 990px) {
		.pages h3 {
			font-size: 0.8rem;
		}
		.react-icon {
			position: absolute;
			font-size: 1.25rem;

			align-self: center;
		}
	}
`;
export default Navbar;
export { NavbarContext };
