import Header from "../components/Header";
import Footer from "../components/Footer";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaBirthdayCake } from "react-icons/fa";
import { RiPhoneFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import selfie2 from "../assets/about/selfie-2.png";
import arrow from "../assets/arrow.svg";

export default function About() {
	return (
		<div>
			<Header />

			<div className="py-8 min-h-screen">
				{/* LANDING */}
				<div className="grid grid-cols-2 p-4">
					<div className="mx-auto">
						<img
							className="border-2 border-green-700 rounded shadow"
							src={selfie2}
							alt=""
							style={{ width: "350px" }}
						/>
					</div>
					<div className="flex flex-col items-start">
						<h1 className="text-4xl font-bold mb-4">Meet Gilang Alfarizi!</h1>
						<div className="border-4 w-3/5 h-1 border-green-700/40 my-4"></div>
						<p className="mt-4 mr-24">
							Gilang Alfarizi is an adept back-end web developer with a strong
							foundation in utilizing Node.js, demonstrating a commendable level
							of proficiency in this technology. His experience includes working
							with Golang and Laravel Fullstack, where he showcases a competent
							understanding, particularly in Golang and Laravel Fullstack,
							altough in a relatively early stage. With a primary focus on
							Node.js, Gilang brings robust skills and expertise in crafting
							efficient and scalable back-end solutions, showing promising
							potential in Golang and Laravel Fullstack as well.
						</p>
						<div className="flex-end items-end justify-end mt-4">
							<img
								src={arrow}
								alt=""
								style={{ width: "100px", opacity: "30%" }}
							/>
						</div>
					</div>
				</div>

				{/* CONTACT */}
				<div className="grid grid-cols-1 bg-zinc-800 my-4">
					<h1 className="text-center text-white mt-8 pt-4 text-3xl font-bold">
						C O N T A C T
					</h1>
					<div className="grid grid-cols-3 justify-center p-4 m-4 ">
						<div className="flex justify-center">
							<div
								className="card bg-black text-center text-white border-green-700 border-1 p-2 mb-4"
								style={{ width: "18rem" }}>
								<AiFillInstagram
									size={80}
									className="text-lightgreen mx-auto m-4"
								/>
								<div className="card-body items-center p-2">
									<p className="card-title">Instagram</p>
									<p className="mx-4">
										Get to know me from my personal Instagram.
									</p>
									<div className="card-actions">
										<button className="btn btn-success rounded-full my-2">
											Visit Site
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="flex justify-center">
							<div
								className="card bg-black text-center text-white border-green-700 border-1 p-2 mb-4"
								style={{ width: "18rem" }}>
								<IoLogoWhatsapp
									size={80}
									className="text-lightgreen mx-auto m-4"
								/>
								<div className="card-body items-center p-2">
									<h5 className="card-title">Whatsapp</h5>
									<p>Get in touch and contact my personal Whatsapp directly.</p>
									<div className="card-actions">
										<button className="btn btn-success rounded-full my-2">
											Visit Site
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="flex justify-center">
							<div
								className="card bg-black text-center text-white border-green-700 border-1 p-2 mb-4"
								style={{ width: "18rem" }}>
								<AiFillGithub
									size={80}
									className="text-lightgreen mx-auto m-4"
								/>
								<div className="card-body items-center p-2 mx-6">
									<h5 className="card-title">Github</h5>
									<p>
										Review my finished projects from my public repositories.
									</p>
									<div className="card-actions">
										<button className="btn btn-success rounded-full my-2">
											Visit Site
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* OTHER INFORMATIONS */}
				<div className="grid grid-cols-2">
					<div className="ml-14 px-12">
						<div className="flex items-center m-4">
							<FaBirthdayCake className="mr-2" size={30} color="green" />
							<span>Jakarta, 16 November 2002</span>
						</div>
						<hr className="border-success mx-4 my-2" />
						<div className="flex items-center m-4">
							<RiPhoneFill className="mr-2" size={30} color="green" />
							<span>+62 878 8876 0035</span>
						</div>
						<hr className="border-success mx-4 my-2" />
						<div className="flex items-center m-4">
							<MdEmail className="mr-2" size={30} color="green" />
							<span>alfarizigilang666@gmail.com</span>
						</div>
						<hr className="border-success mx-4 my-2" />
						<div className="flex items-center m-4">
							<AiFillInstagram className="mr-2" size={30} color="green" />
							<span>@alfarizigilang</span>
						</div>
						<hr className="border-success mx-4 my-2" />
						<div className="flex items-center m-4">
							<AiFillGithub className="mr-2" size={30} color="green" />
							<span>github.com/GilangAlfarizi</span>
						</div>
						<hr className="border-success mx-4 my-2" />
					</div>
					<div className="my-4">
						<h1 className="text-4xl font-bold">My Address</h1>
						<iframe
							className="mt-4"
							width="600"
							height="400"
							loading="lazy"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d376.18887466292273!2d110.39411933811121!3d-7.05361928623373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708bfee13d614d%3A0xb5e32d15a50e439e!2sKos%20Shafa%20Putra!5e0!3m2!1sen!2sid!4v1699436090207!5m2!1sen!2sid"></iframe>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
