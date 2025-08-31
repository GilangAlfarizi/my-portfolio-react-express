import Header from "../components/Header";
import Footer from "../components/Footer";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaBirthdayCake } from "react-icons/fa";
import { RiPhoneFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import selfie2 from "../assets/about/selfie-2.png";
import arrow from "../assets/arrow.svg";
import { Card, Button } from "flowbite-react";

export default function About() {
	return (
		<div>
			<Header />

			<div className="py-8 min-h-screen">
				{/* LANDING */}
				<div className="grid lg:grid-cols-2 p-4">
					<div className="mx-auto">
						<img
							className="border-2 border-green-700 rounded shadow"
							src={selfie2}
							alt=""
							style={{ width: "350px" }}
						/>
					</div>
					<div className="flex flex-col lg:items-start items-center text-center lg:text-start">
						<h1 className="text-4xl font-bold my-8">Meet Gilang Alfarizi!</h1>
						<div className="border-4 w-3/5 h-1 border-green-700/40 mb-4"></div>
						<p className="mt-4 lg:mr-24 mx-11 lg:mx-0 text-start">
							I am a versatile web developer with a strong focus on backend
							systems. My primary expertise lies in JavaScript and TypeScript
							using NestJS and Express. I also have hands-on experience in
							Golang development, leveraging Gin and GORM for efficient data
							management. I am comfortable with a range of databases like MySQL,
							PostgreSQL, and MongoDB. For frontend development, my skills
							include HTML, CSS, and JavaScript, along with practical experience
							using React, Bootstrap, and Tailwind CSS. I have a solid
							foundation in PHP Laravel, including implementing authentication
							systems and using Blade views.
							{/* An adept back-end web developer with a strong foundation in
							utilizing Node.js, demonstrating a commendable level of
							proficiency in this technology. His experience includes working
							with Golang and Laravel Fullstack, where he showcases a competent
							understanding, particularly in Golang and Laravel Fullstack,
							altough in a relatively early stage. With a primary focus on
							Node.js, Gilang brings robust skills and expertise in crafting
							efficient and scalable back-end solutions, showing promising
							potential in Golang and Laravel Fullstack as well. */}
						</p>
						<div className="lg:mt-8 mt-4">
							<img
								src={arrow}
								alt="arrow"
								style={{ width: "100px", opacity: "30%" }}
							/>
						</div>
					</div>
				</div>

				{/* CONTACT */}
				<div className="grid grid-cols-1 bg-zinc-800 my-4" id="contact">
					<h1 className="text-center text-white mt-8 pt-4 text-3xl font-bold">
						C O N T A C T
					</h1>

					<div className="flex lg:flex-row flex-col py-4 my-8 justify-center items-center gap-12">
						<Card className="max-w-72 max-h-80 text-center bg-neutral-900 border-green-700">
							<AiFillInstagram size={80} className="text-green-400 mx-auto" />
							<h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
								Instagram
							</h5>
							<p className="font-normal text-white">
								Get to know me from my personal Instagram.
							</p>
							<div className="flex justify-center">
								<a
									href="https://www.instagram.com/alfarizigilang/"
									target="_blank"
									rel="noopener noreferrer">
									<Button color="success" pill className="px-4">
										Visit
									</Button>
								</a>
							</div>
						</Card>
						<Card className="max-w-72 max-h-80 text-center bg-neutral-900 border-green-700">
							<IoLogoWhatsapp size={80} className="text-green-400 mx-auto" />
							<h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
								Whatsapp
							</h5>
							<p className="font-normal text-white">
								Get in touch and contact my personal Whatsapp directly.
							</p>
							<div className="flex justify-center">
								<a
									href="https://wa.me/+6287888760035"
									target="_blank"
									rel="noopener noreferrer">
									<Button color="success" pill className="px-4">
										Visit
									</Button>
								</a>
							</div>
						</Card>
						<Card className="max-w-72 max-h-80 text-center bg-neutral-900 border-green-700">
							<AiFillGithub size={80} className="text-green-400 mx-auto" />
							<h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
								Github
							</h5>
							<p className="font-normal text-white">
								Review my finished projects from my public repositories.
							</p>
							<div className="flex justify-center">
								<a
									href="https://github.com/GilangAlfarizi"
									target="_blank"
									rel="noopener noreferrer">
									<Button color="success" pill className="px-4">
										Visit
									</Button>
								</a>
							</div>
						</Card>
					</div>
				</div>

				{/* OTHER INFORMATIONS */}
				<div className="grid lg:grid-cols-2 place-content-center">
					<div className="lg:ml-14 px-12">
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
					<div className="my-4 flex flex-col justify-center px-12">
						<p className="text-4xl font-bold mb-4">My Address</p>
						<iframe
							className="w-full h-64 lg:w-[500px] lg:h-[300px] lg:px-0 px-10"
							loading="lazy"
							// src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d376.18887466292273!2d110.39411933811121!3d-7.05361928623373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708bfee13d614d%3A0xb5e32d15a50e439e!2sKos%20Shafa%20Putra!5e0!3m2!1sen!2sid!4v1699436090207!5m2!1sen!2sid">
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.92301134833116!2d106.64645954648087!3d-6.16179363756052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8c75680b0e5%3A0x6881634d636bd7ad!2sGg.%20Masjid%20Al-Barkah%20No.45%2C%20RT.003%2FRW.002%2C%20Karang%20Anyar%2C%20Kec.%20Neglasari%2C%20Kota%20Tangerang%2C%20Banten%2015121!5e0!3m2!1sen!2sid!4v1756455616837!5m2!1sen!2sid"></iframe>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
