import React, { useContext, useState } from "react";
import navPages from "./navbarContext.js";
import { projects } from "./navbarContext.js";
import projectsList from "../utils/projectListData.js";
const PortfolioContext = React.createContext();

const PortfolioProvider = ({ children }) => {
	const [theme, setTheme] = useState("dark");
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const changeTheme = (newTheme) => {
		setTheme(newTheme);
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
