import image1 from "../assets/carousel-1.png";
import image2 from "../assets/carousel-2.jpg";
import image3 from "../assets/carousel-3.jpg";
import { Carousel } from "flowbite-react";
import CarouselImage from "./CarouselImage";

function CarouselHome() {
	return (
		<div className="m-auto bg-neutral-900">
			<Carousel slideInterval={5000}>
				<CarouselImage src={image1} alt="carousel-1" style="max" />
				<CarouselImage src={image2} alt="carousel-2" />
				<CarouselImage src={image3} alt="carousel-3" />
			</Carousel>
			s
		</div>
	);
}

export default CarouselHome;
