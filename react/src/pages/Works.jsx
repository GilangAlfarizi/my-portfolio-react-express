import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Spinner } from "flowbite-react";

export default function Works() {
	const [loading, setLoading] = useState(false);
	const [projects, setProjects] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [truncatedDescriptions, setTruncatedDescriptions] = useState({});

	async function fetchData() {
		try {
			const result = await axios.get(
				`${import.meta.env.VITE_API_BASE_URL}/project`,
				{ params: { search: searchQuery } }
			);
			setProjects(result.data.data);
			setLoading(false);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
	};

	const handleSearchSubmit = (e) => {
		e.preventDefault(); // Prevent the form from refreshing the page
		fetchData(searchQuery); // Fetch data with the current search query
	};

	useEffect(() => {
		fetchData();
		setLoading(true);
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
			<main className="min-h-screen">
				<div className="container grid grid-rows-1 m-auto p-10">
					{/* PROJECTS */}
					<div className="grid grid-cols-2 items-center">
						<h1 className="my-4 text-green-800 font-semibold text-4xl">
							Glimpse of My Works!
						</h1>
						<div className="flex lg:my-4 my-12 flex-row-reverse">
							<a href="/">
								<Button
									size="lg"
									color="success"
									pill
									type="submit"
									className="bg-green-500 text-white">
									Return
								</Button>
							</a>
						</div>
					</div>
					<div className="m-4 lg:m-10">
						<form
							onSubmit={handleSearchSubmit}
							className="flex lg:flex-wrap gap-4 align-middle items-center">
							<input
								type="text"
								value={searchQuery}
								onChange={handleSearchChange}
								placeholder="Search projects..."
								className="my-4 p-2 border rounded-lg"
							/>
							<Button
								color="success"
								pill
								type="submit"
								className="bg-green-500 text-white">
								Search
							</Button>
						</form>
						{loading && (
							<Spinner
								color="success"
								aria-label="Success spinner example"
								size="xl"
								className="flex max-w-screen justify-center items-center align-middle mx-auto lg:mt-20 mt-8"
							/>
						)}
						{projects &&
							projects.map((pro) => (
								<Link key={pro.id} to={`/works/${pro.id}`}>
									<div className="mt-8 mb-10 lg:p-8 p-6 gap-10 lg:grid lg:grid-cols-3 border-2 border-success rounded-md shadow-md hover:bg-green-100 ease-in-out duration-300">
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
