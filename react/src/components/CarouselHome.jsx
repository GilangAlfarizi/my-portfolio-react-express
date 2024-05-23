import image1 from "../assets/carousel-1.png";
import image2 from "../assets/carousel-2.jpg";
import image3 from "../assets/carousel-3.jpg";
import { Carousel } from "flowbite-react";
import CarouselImage from "./CarouselImage";

function CarouselHome() {
	return (
		<div className="m-auto bg-neutral-900">
			<Carousel slideInterval={5000}>
				<CarouselImage src={image1} alt="carousel-1" style="max">
					<p className="mb-8 text-lg">This is the description for slide 1.</p>
				</CarouselImage>
				<CarouselImage src={image2} alt="carousel-2">
					<p className="mb-8 text-lg">This is the description for slide 2.</p>
				</CarouselImage>
				<CarouselImage src={image3} alt="carousel-3">
					<p className="mb-8 text-lg">This is the description for slide 3.</p>
				</CarouselImage>
			</Carousel>
		</div>
	);
}

export default CarouselHome;
