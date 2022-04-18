import React from "react";
import { useGlobalContext } from "./context/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Navbar = React.lazy(() => import("./Components/Navbar"));
const Sidebar = React.lazy(() => import("././Components/Sidebar"));
const Footer = React.lazy(() => import("./Components/Footer"));
const Error = React.lazy(() => import("./pages/Error"));
const Home = React.lazy(() => import("./pages/Home"));
const ProjectsShowcase = React.lazy(() => import("./pages/ProjectsShowcase"));
const About = React.lazy(() => import("./pages/About"));
const HamburgerMenu = React.lazy(() => import("./Components/Hamburger"));
function App() {
	const { theme } = useGlobalContext();
	const htmlObj = document.documentElement;
	htmlObj.className = theme;
	return (
		<Router>
			<React.Suspense fallback={<>...</>}>
				<Navbar />
			</React.Suspense>
			<React.Suspense fallback={<>...</>}>
				<Sidebar />
			</React.Suspense>
			<React.Suspense fallback={<>...</>}>
				<HamburgerMenu />
			</React.Suspense>
			<Routes>
				<Route
					path='/'
					element={
						<React.Suspense fallback={<>...</>}>
							<Home />
						</React.Suspense>
					}
				/>
				<Route
					path='/projects/:id'
					element={
						<React.Suspense fallback={<>...</>}>
							<ProjectsShowcase />
						</React.Suspense>
					}></Route>
				<Route
					path='/projects/:id'
					element={
						<React.Suspense fallback={<>...</>}>
							<About />
						</React.Suspense>
					}></Route>
				<Route
					path='/projects/:id'
					element={
						<React.Suspense fallback={<>...</>}>
							<Error />
						</React.Suspense>
					}></Route>
			</Routes>
			<React.Suspense fallback={<>...</>}>
				<Footer />
			</React.Suspense>
		</Router>
	);
}

export default App;
