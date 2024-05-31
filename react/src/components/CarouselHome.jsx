import image1 from "../assets/carousel-1.png";
import image2 from "../assets/carousel-2.jpg";
import image3 from "../assets/carousel-3.jpg";
import { Carousel } from "flowbite-react";
import CarouselImage from "./CarouselImage";

function CarouselHome() {
	return (
		<div className="m-auto bg-neutral-900 text-center">
			<Carousel slideInterval={5000}>
				<CarouselImage src={image1} alt="carousel-1" style="max">
					{/* <h3></h3> */}
					<p className="mb-8 text-lg">
						<b>Node JS Back End</b> <br />
						Seamless, scalable, and efficient back-end solutions, tailored to
						elevate your digital presence.
					</p>
				</CarouselImage>
				<CarouselImage src={image2} alt="carousel-2">
					<p className="mb-8 text-lg">
						<b>Golang Back End</b> <br />
						Explore high-performance, concurrent operations for a smarter,
						faster backend.
					</p>
				</CarouselImage>
				<CarouselImage src={image3} alt="carousel-3">
					<p className="mb-8 text-lg">
						<b>Laravel Fullstack</b> <br />
						An all-in-one, robust framework providing an elegant, end-to-end
						solution for your digital ambitions.
					</p>
				</CarouselImage>
			</Carousel>
		</div>
	);
}

export default CarouselHome;
