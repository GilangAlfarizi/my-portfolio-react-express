import Header from "./components/Header";
import Footer from "./components/Footer";
import arrow from "./assets/arrow.svg";
import cardImage1 from "./assets/cardImage-1.jpg";
import cardImage2 from "./assets/cardImage-2.jpg";
import cardImage3 from "./assets/cardImage-3.jpeg";
import jumbotron from "./assets/jumbotron-edit.jpg";
import { Card, Button } from "flowbite-react";
import CarouselHome from "./components/CarouselHome";
import "./App.css";

function App() {
	return (
		<>
			<div>
				<Header />
				<main>
					<div>
						<CarouselHome />
					</div>
					<div className="flex justify-center items-center mt-4">
						<img src={arrow} alt="test" style={{ width: "80px" }} />
					</div>
					<h1 className="m-4 text-3xl text-center font-bold">FIND OUT MORE</h1>

					{/* CARD PART */}
					<div className="flex flex-col lg:flex-row py-20 my-8 justify-center items-center bg-neutral-800 gap-8">
						<Card
							className="lg:max-w-96 max-w-80 text-center bg-neutral-900 border-green-700 my-4"
							imgAlt="cardImage1"
							imgSrc={cardImage1}>
							<h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
								Portfolio
							</h5>
							<p className="font-normal text-white">
								Check out my track record of success. Explore a variety of
								projects, programming languages and frameworks I&apos;ve worked
								on.
							</p>
							<div className="flex justify-center">
								<a href="/works">
									<Button color="success" pill className="px-4">
										Visit
									</Button>
								</a>
							</div>
						</Card>
						<Card
							className="lg:max-w-96 max-w-80 text-center bg-neutral-900 border-green-700 my-4"
							imgAlt="cardImage2"
							imgSrc={cardImage2}>
							<h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
								About
							</h5>
							<p className="font-normal text-white">
								I&apos;m more than just a line of codes. Learn more about my
								background, my approach to work, and my interests.
							</p>
							<div className="flex justify-center">
								<a href="/about">
									<Button color="success" pill className="px-4">
										Visit
									</Button>
								</a>
							</div>
						</Card>
						<Card
							className="lg:max-w-96 max-w-80 text-center bg-neutral-900 border-green-700 my-4"
							imgAlt="cardImage3"
							imgSrc={cardImage3}>
							<h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
								Contact
							</h5>
							<p className="font-normal text-white">
								Feel free to reach out to me through my social media platforms
								or contact form. I&apos;m always interested in hearing from new
								people.
							</p>
							<div className="flex justify-center">
								<a href="http://localhost:5173/about/#contact">
									<Button color="success" pill className="px-4">
										Visit
									</Button>
								</a>
							</div>
						</Card>
					</div>

					<div className="bg-success rounded-lg grid lg:grid-cols-3 m-12 p-8 items-center">
						<div className="lg:mx-8 my-4 lg:px-4 lg:py-4 text-green-800 lg:text-6xl text-lg col-span-2">
							<p className="leading-tight">
								Let&apos;s build captivating and engaging website. Bring your
								vision to life!
							</p>
						</div>
						<div className="text-white">
							<img
								className="w-full lg:w-[500px]"
								src={jumbotron}
								alt="dance"
							/>
						</div>
					</div>
				</main>
				<Footer />
			</div>
			<script src="../path/to/flowbite/dist/flowbite.min.js"></script>
		</>
	);
}

export default App;
