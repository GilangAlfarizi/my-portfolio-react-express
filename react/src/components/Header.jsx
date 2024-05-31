import logo from "../assets/logo.svg";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navbar } from "flowbite-react";

function Header() {
	const [activePage, setActivePage] = useState("");
	const location = useLocation();

	useEffect(() => {
		setActivePage(location.pathname);
	}, [location]);
	return (
		<Navbar className="bg-neutral-800 text-white sticky top-0 z-50 py-4">
			<Navbar.Brand href="/">
				<img src={logo} className="mr-3 h-6 sm:h-9" alt="Gilang Portfolio" />
				<span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">
					Gilang Alfarizi&apos;s Portfolio
				</span>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse className="mr-4">
				<Navbar.Link
					href="/"
					className={`text-gray-400 text-lg lg:hover:text-white hover:bg-stone-900 ${
						activePage === "/" ? "text-white" : ""
					}`}>
					Home
				</Navbar.Link>
				<Navbar.Link
					href="/works"
					className={`text-gray-400 text-lg lg:hover:text-white hover:bg-stone-900 ${
						activePage === "/works" ? "text-white" : ""
					}`}>
					Works
				</Navbar.Link>
				<Navbar.Link
					href="/about"
					className={`text-gray-400 text-lg lg:hover:text-white hover:bg-stone-900 ${
						activePage === "/about" ? "text-white" : ""
					}`}>
					About
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Header;
