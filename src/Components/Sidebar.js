import React, { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context/context";
import navPages from "../context/navbarContext";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
const Sidebar = () => {
	const { isSidebarOpen, setIsSidebarOpen, projectsList } = useGlobalContext();
	const header = useRef(null);
	const handleClick = () => {
		setIsSidebarOpen(false);
	};
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
				<Link to='/' onClick={handleClick}>
					<li className='sidebar-menu-item'>
						<h3 className='nav-links'>Home</h3>
					</li>
				</Link>

				<Link to={`/projects/${projectsList[0].id}`} onClick={handleClick}>
					<li>
						<h3 className='nav-links'>Projects</h3>
					</li>
				</Link>

				{/* <a href=''>
							
							</a> */}
				<Link to='/about' onClick={handleClick}>
					<li>
						<h3 className='nav-links'>About</h3>
					</li>
				</Link>
			</ul>
		</section>
	);
};

export default Sidebar;
