import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function WorkDetail() {
	const { id } = useParams();
	const [projects, setProjects] = useState([]);

	async function fetchData() {
		try {
			const result = await axios.get(`http://localhost:3000/api/project/${id}`);
			setProjects(result.data.data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		fetchData();
	}, [id]);

	return (
		<div>
			{projects && (
				<div>
					<h1>{projects.title}</h1>
					<p>{projects.description}</p>
				</div>
			)}
		</div>
	);
}

export default WorkDetail;
