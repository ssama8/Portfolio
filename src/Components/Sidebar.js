import React, { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context/context";
import navPages from "../context/navbarContext";
import logo from "../images/logo.png";
import Settings from "./dropdowns/Settings";
const Sidebar = () => {
	const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();
	const header = useRef(null);

	return (
		<section className={isSidebarOpen ? "sidebar sidebar-open" : "sidebar"}>
			<div className='sidebar-header'>
				<img src={logo} alt='' className='logo' />
				<div
					className='close-btn'
					onClick={() => {
						setIsSidebarOpen(false);
					}}></div>
			</div>

			<ul className='pages-small'>
				{navPages.map((page, index) => {
					const { heading } = page;
					return (
						<li
							key={index}
							className='sidebar-menu-item'
							//	onMouseOver={(e) => transformHeader(e)}
							//onMouseLeave={(e) => slideBackHeader(e)}
						>
							<h3 ref={header} className='nav-links'>
								{heading}
							</h3>
						</li>
					);
				})}
				{/* <Settings /> */}
			</ul>
		</section>
	);
};

export default Sidebar;
