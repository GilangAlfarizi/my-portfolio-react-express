import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className="bg-neutral-800 py-2">
			<div className="flex justify-center">
				<Link
					to="/home"
					className="text-white mx-4 underline hover:no-underline">
					Instagram
				</Link>
				<Link
					to="/whatsapp"
					className="text-white mx-4 underline hover:no-underline">
					Whatsapp
				</Link>
				<Link
					to="/github"
					className="text-white mx-4 underline hover:no-underline">
					Github
				</Link>
			</div>
		</footer>
	);
}

export default Footer;
