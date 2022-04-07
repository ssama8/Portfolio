import React from "react";
import { useGlobalContext } from "../context/context";
const Hamburger = () => {
	const { isSidebarOpen, setIsSidebarOpen, projectsList, changeMenuStyle } =
		useGlobalContext();

	const handleClick = () => {
		if (isSidebarOpen) {
			setIsSidebarOpen(false);
		} else {
			setIsSidebarOpen(true);
		}
	};
	return (
		<div
			className='hamburger-menu'
			onClick={() => {
				handleClick();
				changeMenuStyle();
			}}>
			<div className='line-top'></div>
			<div className='line'></div>
			<div className='line-bottom'></div>
		</div>
	);
};

export default Hamburger;
