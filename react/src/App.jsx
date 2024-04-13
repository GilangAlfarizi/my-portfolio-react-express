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
					<div className="flex py-20 my-8 justify-center gap-8 bg-neutral-800">
						<Card
							className="max-w-96 text-center bg-neutral-900 border-green-700"
							imgAlt="cardImage1"
							imgSrc={cardImage1}>
							<h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
								Portfolio
							</h5>
							<p className="font-normal text-white">
								Some quick example text to build on the card title and make up
								the bulk of the card&apos;s content.
							</p>
							<div className="flex justify-center">
								<Button color="success" pill className="px-4">
									Visit
								</Button>
							</div>
						</Card>
						<Card
							className="max-w-96 text-center bg-neutral-900 border-green-700"
							imgAlt="cardImage2"
							imgSrc={cardImage2}>
							<h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
								About
							</h5>
							<p className="font-normal text-white">
								Some quick example text to build on the card title and make up
								the bulk of the card&apos;s content.
							</p>
							<div className="flex justify-center">
								<Button color="success" pill className="px-4">
									Visit
								</Button>
							</div>
						</Card>
						<Card
							className="max-w-96 text-center bg-neutral-900 border-green-700"
							imgAlt="cardImage3"
							imgSrc={cardImage3}>
							<h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
								Contact
							</h5>
							<p className="font-normal text-white">
								Sme quick example text to build on the card title and make up
								the bulk of the card&apos;s content.
							</p>
							<div className="flex justify-center">
								<Button color="success" pill className="px-4">
									Visit
								</Button>
							</div>
						</Card>
					</div>

					<div className="bg-success rounded-lg grid grid-cols-3 m-12 p-8 items-center">
						<div className="m-8 p-4 text-green-800 text-6xl col-span-2">
							<p className="leading-tight">
								Let&apos;s build captivating and engaging website. Bring your
								vision to life!
							</p>
						</div>
						<div className="text-white">
							<img
								className=""
								src={jumbotron}
								alt="dance"
								style={{ width: "500px" }}
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
