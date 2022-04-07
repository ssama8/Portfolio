import Home from "./pages/Home";
import { useGlobalContext } from "./context/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

import Footer from "./Components/Footer";
import Error from "./pages/Error";
import ProjectsShowcase from "./pages/ProjectsShowcase";
import About from "./pages/About";
import HamburgerMenu from "./Components/Hamburger";
function App() {
	const { theme } = useGlobalContext();
	const htmlObj = document.documentElement;
	htmlObj.className = theme;
	return (
		<Router>
			<Navbar />
			<Sidebar />
			<HamburgerMenu />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/projects/:id' element={<ProjectsShowcase />}></Route>
				<Route path='/about' element={<About />} />
				<Route path='*' element={<Error />}></Route>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
