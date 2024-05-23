function CarouselImage(props) {
	// eslint-disable-next-line react/prop-types
	const { src, alt, children } = props;
	return (
		<div className="flex justify-center items-center my-2 ">
			<img
				src={src}
				alt={alt}
				style={{ filter: "brightness(70%)", maxHeight: "600px" }}
			/>
			{children && (
				<div className="absolute inset-0 flex flex-end items-end p-12  justify-center text-white">
					{children}
				</div>
			)}
		</div>
	);
}

export default CarouselImage;
