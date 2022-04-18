import React, { useRef, useState } from "react";
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
	const { projectsList } = useGlobalContext();

	const pages = useRef(null);
	const [settingsVisibility, setSettingsVisibilty] = useState("none");

	const [settingsChevron, setSettingsChevron] = useState(<FiChevronDown />);

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

	return (
		<>
			<Wrapper>
				<nav>
					<div className='nav-container'>
						<img src={logo} alt='s logo' />
						<ul className='pages' ref={pages} style={{ position: "relative" }}>
							<li>
								<Link to='/'>
									<h3>Home</h3>
								</Link>
							</li>

							<li>
								<Link to={`/projects/${projectsList[0].id}`}>
									<h3>Projects</h3>
								</Link>
							</li>
							<li>
								<Link to='/about'>
									<h3>About</h3>
								</Link>
							</li>
							<li style={{ cursor: "pointer" }} onClick={setListPosition}>
								<h3>Settings{settingsChevron}</h3>
							</li>

							<li style={{ position: "relative" }}>
								<Settings
									visibility={settingsVisibility}
									listItems={navPages[navPages.length - 1].listItems}
								/>
							</li>
							<li>
								<a
									href='https://github.com/ssama8'
									rel='noreferrer'
									target='_blank'
									className='react-icon'
									aria-label='github icon'>
									<GoMarkGithub />
								</a>
							</li>
							<li>
								<a
									href='https://www.linkedin.com/in/saket-sama-748526201/'
									target='_blank'
									rel='noreferrer'
									className='react-icon linkedin'
									aria-label='linkedin icon'>
									<BsLinkedin />
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</Wrapper>
		</>
	);
};

const Wrapper = styled.div`
	.react-icon {
		font-size: 2rem;
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
			font-size: 1rem;
		}
		.react-icon {
			font-size: 1.Z5rem;
			 align-self: center;
		}
	
`;
export default Navbar;
export { NavbarContext };
