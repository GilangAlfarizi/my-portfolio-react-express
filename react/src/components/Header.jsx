import logo from "../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
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
			<Navbar.Brand as={Link} href="https://flowbite-react.com">
				<img src={logo} className="mr-3 h-6 sm:h-9" alt="Gilang Portfolio" />
				<span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">
					Gilang Alfarizi&apos;s Portfolio
				</span>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<Navbar.Link
					href="/"
					className={`text-gray-400 text-lg lg:hover:text-white hover:bg-stone-900 mr-4 ${
						activePage === "/" ? "text-white" : ""
					}`}>
					Home
				</Navbar.Link>
				<Navbar.Link
					href="/works"
					className={`text-gray-400 text-lg lg:hover:text-white hover:bg-stone-900 mr-4 ${
						activePage === "/works" ? "text-white" : ""
					}`}>
					Works
				</Navbar.Link>
				<Navbar.Link
					href="/about"
					className={`text-gray-400 text-lg lg:hover:text-white hover:bg-stone-900 mr-4 ${
						activePage === "/about" ? "text-white" : ""
					}`}>
					About
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
}
// <header className="sticky top-0 z-50">
// 	<Navbar className="bg-neutral-800 navbar py-3">
// 		<div className="container mx-auto flex items-center justify-between">
// 			<Link to="/" className="flex items-center">
// 				<img src={logo} width="30" height="30" alt="" />
// 				<h5 className="ml-4 text-white">
// 					Gilang Alfarizi&apos;s Portfolio
// 				</h5>
// 			</Link>
// 			<div className="flex items-center md:order-2">
// 				<Navbar.Link
// 					to="/"
// 					className={`text-white mr-8 no-underline ${
// 						activePage === "/" ? "font-bold" : ""
// 					}`}>
// 					Home
// 				</Navbar.Link>
// 				<Navbar.Link
// 					to="/works"
// 					className={`text-white mr-8 no-underline ${
// 						activePage === "/works" ? "font-bold" : ""
// 					}`}>
// 					Works
// 				</Navbar.Link>
// 				<Navbar.Link
// 					to="/about"
// 					className={`text-white mr-8 no-underline ${
// 						activePage === "/about" ? "font-bold" : ""
// 					}`}>
// 					About
// 				</Navbar.Link>
// 				<Navbar.Toggle />
// 			</div>
// 		</div>
// 		<Navbar.Collapse>
// 			<Navbar.Link href="#" active>
// 				Home
// 			</Navbar.Link>
// 			<Navbar.Link href="#">About</Navbar.Link>
// 			<Navbar.Link href="#">Services</Navbar.Link>
// 			<Navbar.Link href="#">Pricing</Navbar.Link>
// 			<Navbar.Link href="#">Contact</Navbar.Link>
// 		</Navbar.Collapse>
// 	</Navbar>
// </header>

// <Navbar fluid rounded>
// 	<div className="container mx-auto flex items-center justify-between">
// 		<Navbar.Brand href="https://flowbite-react.com">
// 			<img
// 				src={logo}
// 				className="mr-3 h-6 sm:h-9"
// 				alt="Flowbite React Logo"
// 			/>
// 			<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
// 				Gilang Alfarizi&apos;s Portfolio
// 			</span>
// 		</Navbar.Brand>
// 		<div className="flex md:order-2">
// 			<Navbar.Toggle />
// 		</div>
// <Navbar.Collapse>
// 	<Navbar.Link href="#" active>
// 		Home
// 	</Navbar.Link>
// 	<Navbar.Link href="#">Works</Navbar.Link>
// 	<Navbar.Link href="#">About</Navbar.Link>
// </Navbar.Collapse>
// 	</div>
// </Navbar>
export default Header;
