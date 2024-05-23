import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Works() {
	const [loading, setLoading] = useState(false);
	const [projects, setProjects] = useState([]);
	// const [hoveredId, setHoveredId] = useState(null);

	async function fetchData() {
		try {
			const result = await axios.get("http://localhost:3000/api/project");
			setProjects(result.data.data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		setLoading();
		fetchData();
	}, []);

	return (
		<div>
			<Header />
			<main>
				<div className="container grid grid-rows-1 m-auto p-10">
					{/* PROJECTS */}
					<h1 className="my-4 text-green-800 font-semibold text-4xl">
						Glimpse of My Works!
					</h1>
					<div className="m-10">
						{loading && <p>loading...</p>}

						{projects &&
							projects.map((pro) => (
								<Link key={pro.id} to={`/works/${pro.id}`}>
									<div className="mb-10 grid grid-cols-3 p-8 gap-10 border-2 border-success rounded-md shadow-md hover:bg-green-100 ease-in-out duration-300">
										<div className="col-span-2 flex flex-col justify-between">
											<div className="flex flex-col gap-6">
												<h3 className="text-2xl">{pro.title}</h3>
												<p className="text-gray-500">
													{pro.description.length > 300
														? pro.description.substring(0, 280) + "..."
														: pro.description}
												</p>
											</div>
											<div className="border-2 h-1 bg-green-700 border-green-700/40 my-4" />
										</div>
										<div>
											{pro.Image.map((image) => (
												<img
													key={image.id}
													src={image.image}
													alt="project-thumbnail"
													className="mb-3 rounded shadow-md shadow-zinc-700"
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
