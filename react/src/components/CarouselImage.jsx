function CarouselImage(props) {
	// eslint-disable-next-line react/prop-types
	const { src, alt } = props;
	return (
		<div className="flex justify-center items-center my-2 ">
			<img
				src={src}
				alt={alt}
				style={{ filter: "brightness(70%)", maxHeight: "600px" }}
			/>
		</div>
	);
}

export default CarouselImage;
