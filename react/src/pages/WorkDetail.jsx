import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function WorkDetail() {
	const { id } = useParams();
	const [projects, setProjects] = useState([]);
	const [selectedImage, setSelectedImage] = useState(null);

	async function fetchData() {
		try {
			const result = await axios.get(`http://localhost:3000/api/project/${id}`);
			setProjects(result.data.data);
			if (result.data.data.Image.length > 0) {
				setSelectedImage(result.data.data.Image[0].image);
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchData();
	}, [id]);

	return (
		<div>
			<Header />
			<div className="container mx-auto min-h-screen p-8">
				{projects && (
					<div className="mx-auto">
						<div className="text-center m-8 text-4xl font-bold">
							<h1>{projects.title}</h1>
						</div>
						<div className="p-4 grid grid-rows-2">
							<div className="text-lg grid lg:grid-cols-2 gap-8 mb-12">
								<div className="flex justify-center items-center lg:pr-8 max-h-100">
									<img
										src={selectedImage}
										alt="Selected"
										className="lg:h-96 w-auto object-cover rounded-md shadow-md "
									/>
								</div>
								<div className="my-auto">
									<p>{projects.description}</p>
								</div>
							</div>
							<div className="flex items-center overflow-x-scroll h-64 bg-green-100 rounded-md px-8 gap-4">
								{projects.Image &&
									projects.Image.map((image) => (
										<img
											key={image.id}
											src={image.image}
											alt={`Image ${image.id}`}
											className="h-40 w-64 object-cover cursor-pointer shadow-md rounded-md hover:brightness-50 hover:duration-300"
											onClick={() => setSelectedImage(image.image)}
										/>
									))}
							</div>
						</div>
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
}

export default WorkDetail;
