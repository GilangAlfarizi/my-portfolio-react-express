import { Button, Card } from "flowbite-react";

function CardHome(props) {
	const { title, body, imageSrc, imageAlt } = props;

	return (
		<div className="flex justify-center">
			<Card
				className="max-w-96 text-center"
				imgAlt={imageAlt}
				imgSrc={imageSrc}>
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{title}
				</h5>
				<p className="font-normal text-gray-700 dark:text-gray-400">{body}</p>
				<div className="flex justify-center">
					<Button color="success" pill>
						Success
					</Button>
				</div>
			</Card>
		</div>
	);
}

export default CardHome;
