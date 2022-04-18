import React, { useRef, useState } from "react";
import { useGlobalContext } from "../../context/context.js";
import Slider from "../Slider.js";

import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import styled from "styled-components";
const Settings = ({ visibility, listItems }) => {
	const { changeTheme } = useGlobalContext();
	const themeButton = useRef(null);
	const [position, setPosition] = useState({ top: 100, left: 0 });
	const [themeVisibility, setThemeVisibility] = useState("none");
	const [themeChevron, setThemeChevron] = useState(<FiChevronDown />);

	const handleClick = (e) => {
		e.preventDefault();
		setPosition({
			...position,
			top: 10,
			left: 100,
		});
		if (themeVisibility === "none") {
			setThemeVisibility("block");
			setThemeChevron(<FiChevronUp />);
		} else {
			setThemeVisibility("none");
			setThemeChevron(<FiChevronDown />);
		}
	};

	return (
		<Wrapper>
			<ul
				className='settings'
				id='settings-dropdown'
				style={{
					display: visibility,
					position: "absolute",
					top: 50,
					left: -120,
					// top: settingsPosition.top,
					// left: settingsPosition.left,
				}}>
				<li onClick={(e) => handleClick(e)}>Themes {themeChevron}</li>

				<ul
					className='settings themes'
					ref={themeButton}
					style={{
						display: themeVisibility,
						position: "absolute",
						top: 30,
						right: -70,
					}}>
					<li onClick={(e) => changeTheme(e.target.textContent)}>dark</li>
					<li onClick={(e) => changeTheme(e.target.textContent)}>light </li>
					<li onClick={(e) => changeTheme(e.target.textContent)}> laker</li>
				</ul>
				<li>
					Slider-Speed
					<p>
						<Slider />
					</p>
				</li>
			</ul>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	li {
		cursor: pointer;
	}
	@media screen and (max-width: 1400px) {
		.themes {
			margin: 20px;
			margin-top: -20px;
		}
		.themes li {
			padding: 1rem;
		}
	}
	@media screen and (max-width: 1000px) {
		.settings {
			li {
				padding: 0.5rem 0.25rem;
			}
		}
	}
	@media screen and (max-width: 814px) {
		.settings {
			margin-top: -10px;
			margin-left: 10px;
			li {
				padding: 0.5rem 0.25rem;
			}
		}
	}
	@media screen and (max-width: 784px) {
		.settings {
			margin-top: -40px;
			margin-left: 200px;
			li {
				padding: 0.5rem 0.25rem;
			}
		}
	}
`;
export default Settings;
