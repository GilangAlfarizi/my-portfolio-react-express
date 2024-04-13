import logo from "../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
	const [activePage, setActivePage] = useState("");
	const location = useLocation();

	useEffect(() => {
		setActivePage(location.pathname);
	}, [location]);
	return (
		<header className="sticky top-0 z-50">
			<nav className="bg-neutral-800 navbar py-3">
				<div className="container mx-auto flex items-center justify-between">
					<Link to="/" className="flex items-center no-underline">
						<img src={logo} width="30" height="30" alt="" />
						<h5 className="ml-4 mt-2 text-white">
							Gilang Alfarizi&apos;s Portfolio
						</h5>
					</Link>
					<div className="flex items-center">
						<Link
							to="/"
							className={`text-white mr-4 no-underline ${
								activePage === "/" ? "font-bold" : ""
							}`}>
							Home
						</Link>
						<Link
							to="/works"
							className={`text-white mr-4 no-underline ${
								activePage === "/works" ? "font-bold" : ""
							}`}>
							Works
						</Link>
						<Link
							to="/about"
							className={`text-white mr-4 no-underline ${
								activePage === "/about" ? "font-bold" : ""
							}`}>
							About
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
