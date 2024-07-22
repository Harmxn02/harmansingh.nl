/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import NAME from "../images/logos/NEW_512.png";
import robot from "./img/robot-purple-compressed.webp";
import CTA from "./CTA";

import "./styles.css";
import Image from "next/image";

const navigation = [
	{ name: "Projects", href: "#PROJECTS", id: "project" },
	{ name: "Skills", href: "#SKILLS", id: "skills" },
	{ name: "About", href: "#ABOUT", id: "about" },
	{ name: "Contact", href: "#CONTACT", id: "contact" },
];

const NavigationLink = ({ item }) => (
	<a
		key={item.name}
		href={item.href}
		id={item.id}
		className="font-medium text-white transition-all duration-500 hover:text-[#B799D5] hover:underline underline-offset-4"
	>
		{item.name}
	</a>
);

// bg-[#1d1d29]

export default function Intro(props) {
	return (
		<div
			id={props.section}
			className="relative lg:min-h-screen overflow-hidden"
		>
			<div className="mx-auto max-w-7xl">
				<div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
					<Popover>
						<div className="relative px-4 mt-6 py-6 sm:px-6 lg:px-8">
							<nav
								className="relative flex items-center justify-between sm:h-10 lg:justify-between"
								aria-label="Global"
							>
								<div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
									<div className="flex w-full items-center justify-between md:w-auto">
										<a href="#ABOUT">
											<Image 
											alt="Workflow" 
											className="h-8 w-8 sm:h-16 sm:w-16" 
											src={NAME} />
										</a>
										<div className="-mr-2 flex items-center md:hidden">
											<Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
												<span className="sr-only">
													Open main menu
												</span>
												<MenuIcon
													className="h-6 w-6"
													aria-hidden="true"
												/>
											</Popover.Button>
										</div>
									</div>
								</div>
								<div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
									{navigation.map((item) => (
										<NavigationLink
											key={item.name}
											item={item}
										/>
									))}
								</div>
							</nav>
						</div>

						<Transition
							as={Fragment}
							enter="duration-150 ease-out"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="duration-100 ease-in"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Popover.Panel
								focus
								className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
							>
								<div className="overflow-hidden rounded-lg bg-[#1d1d29] shadow-md ring-1 ring-black ring-opacity-5">
									<div className="flex items-center justify-between px-5 pt-4">
										<div>
											<Image
												className="h-8 w-auto"
												src={NAME}
												alt=""
											/>
										</div>
										<div className="-mr-2">
											<Popover.Button className="inline-flex items-center justify-center rounded-md bg-brandBackground] p-2 text-gray-400 hover:bg-slate-900 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
												<span className="sr-only">
													Close main menu
												</span>
												<XIcon
													className="h-6 w-6"
													aria-hidden="true"
												/>
											</Popover.Button>
										</div>
									</div>
									<div className="space-y-1 px-2 pt-2 pb-3">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="block rounded-md px-3 py-2 text-base font-medium text-white  hover:bg-slate-700"
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</Popover.Panel>
						</Transition>
					</Popover>

					<main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
						<div className="sm:text-center lg:text-left">
							<div
								data-aos="fade-up"
								className="flex flex-col gap-2 text-white"
							>
								<h1 className="block max-w-[16ch] font-bold sm:mx-auto text-4xl sm:text-5xl md:text-6xl lg:mx-0 xl:inline">
									Building the{" "}
									<span className="bg-[#7f7dd6]">future</span>{" "}
									with{" "}
									<span
										// data-tooltip="Software Engineering"
										className="bg-clip-text text-transparent bg-gradient-to-br from-[#A3469D] to-[#B799D5]"
									>
										code
									</span>{" "}
									&{" "}
									<span
										data-tooltip="Artificial Intelligence"
										className="bg-clip-text text-transparent bg-gradient-to-br from-[#3385FF] to-[#91B7F0]"
									>
										AI
									</span>
								</h1>
							</div>
							<div data-aos="fade-up">
								<p className="max-w-[60ch] my-6  text-base text-gray-300 sm:text-lg sm:mx-auto  md:text-xl lg:mx-0">
									Hi, I am Harman, and I am a Software
									Engineer / Data Scientist
								</p>
							</div>

							<div className="gap-4 sm:flex sm:justify-center lg:justify-start">
								<CTA
									colour="purple"
									content="My projects"
									href="#PROJECTS"
								/>
								<CTA
									colour=""
									content="Contact me"
									href="#CONTACT"
								/>
							</div>
						</div>
					</main>
				</div>
			</div>
			<div
				data-aos="fade-up"
				id="ROBOT"
				className="hidden lg:flex flex-col lg:absolute right-0  lg:top-36 justify-center"
			>
				<Image
					className="aspect-[0.99258] w-[28rem] xl:w-[36rem] 2xl:w-[42rem]"
					src={robot}
					alt="the arm of a robot holding up holograms of credit cards"
				/>
			</div>
		</div>
	);
}
