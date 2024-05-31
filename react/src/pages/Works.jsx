import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Spinner } from "flowbite-react";

export default function Works() {
	const [loading, setLoading] = useState(false);
	const [projects, setProjects] = useState([]);
	const [truncatedDescriptions, setTruncatedDescriptions] = useState({});

	async function fetchData() {
		try {
			const result = await axios.get(
				`${import.meta.env.VITE_API_BASE_URL}/project`
			);
			setProjects(result.data.data);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		setLoading(true);
		fetchData();
	}, []);

	useEffect(() => {
		const updateDescriptions = () => {
			const newDescriptions = {};
			projects.forEach((pro) => {
				const description = pro.description;
				if (window.innerWidth >= 1024) {
					newDescriptions[pro.id] =
						description.length > 300
							? description.substring(0, 280) + "..."
							: description;
				} else {
					newDescriptions[pro.id] =
						description.length > 150
							? description.substring(0, 130) + "..."
							: description;
				}
			});
			setTruncatedDescriptions(newDescriptions);
		};

		updateDescriptions(); // Call on initial render

		window.addEventListener("resize", updateDescriptions); // Add event listener for window resize
		return () => window.removeEventListener("resize", updateDescriptions); // Cleanup event listener
	}, [projects]);

	return (
		<div>
			<Header />
			<main>
				<div className="container grid grid-rows-1 m-auto p-10">
					{/* PROJECTS */}
					<div className="grid grid-cols-2 items-center">
						<h1 className="my-4 text-green-800 font-semibold text-4xl">
							Glimpse of My Works!
						</h1>
						<div className="flex lg:my-4 my-12 flex-row-reverse">
							<a href="/">
								<Button gradientDuoTone="greenToBlue" size="lg">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										style={{ fill: "#FFFFFF", marginRight: "6px" }}>
										<g>
											<polygon points="13.707 4.707 12.293 3.293 3.586 12 12.293 20.707 13.707 19.293 6.414 12 13.707 4.707" />
											<polygon points="19.707 4.707 18.293 3.293 9.586 12 18.293 20.707 19.707 19.293 12.414 12 19.707 4.707" />
										</g>
									</svg>
									<p>Return</p>
								</Button>
							</a>
						</div>
					</div>
					{loading && (
						<Spinner
							color="success"
							aria-label="Success spinner example"
							size="xl"
							className="flex max-w-screen justify-center items-center align-middle mx-auto"
						/>
					)}
					<div className="m-4 lg:m-10">
						{projects &&
							projects.map((pro) => (
								<Link key={pro.id} to={`/works/${pro.id}`}>
									<div className="mb-10 lg:p-8 p-6 gap-10 lg:grid lg:grid-cols-3 border-2 border-success rounded-md shadow-md hover:bg-green-100 ease-in-out duration-300">
										<div className="col-span-2 flex flex-col justify-between">
											<div className="flex flex-col lg:gap-6 gap-2">
												<h3 className="text-2xl">{pro.title}</h3>
												<p className="text-gray-500">
													{truncatedDescriptions[pro.id] || pro.description}
												</p>
											</div>
											<div className="border-2 h-1 bg-green-700 border-green-700/40 my-4 rounded-lg" />
										</div>
										<div className="flex items-center justify-center">
											{pro.Image.map((image) => (
												<img
													key={image.id}
													src={image.image}
													alt="project-thumbnail"
													className="mb-3 rounded border-2 border-green-700"
													style={{
														maxHeight: "200px",
													}}
												/>
											))}
										</div>
									</div>
								</Link>
							))}
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
