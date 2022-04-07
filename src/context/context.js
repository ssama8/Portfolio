import React, { useContext, useState } from "react";
import navPages from "./navbarContext.js";
import { projects } from "./navbarContext.js";
import projectsList from "../utils/projectListData.js";
const PortfolioContext = React.createContext();

const PortfolioProvider = ({ children }) => {
	const [theme, setTheme] = useState("dark");
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [menuStyle, setMenuStyle] = useState("hamburger-menu");

	const changeTheme = (newTheme) => {
		setTheme(newTheme);
	};
	const changeMenuStyle = () => {
		const top = document.querySelector(".line-top");

		const middle = document.querySelector(".line");
		const bottom = document.querySelector(".line-bottom");
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

	const [sliderValue, setSliderValues] = useState({
		min: 3,
		max: 10,
		value: 6,
	});
	return (
		<PortfolioContext.Provider
			value={{
				navPages,
				projects,
				theme,
				changeTheme,
				sliderValue,
				isSidebarOpen,
				setIsSidebarOpen,
				setSliderValues,
				changeMenuStyle,
				projectsList,
			}}>
			{children}
		</PortfolioContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(PortfolioContext);
};

export { PortfolioProvider, useGlobalContext };
