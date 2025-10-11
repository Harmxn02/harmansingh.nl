"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navigation() {
	const [activeSection, setActiveSection] = useState("hero");

	const sections = {
		hero: ["Home", "hero"],
		projects: ["Projects", "projects"],
		skills: ["Skills", "skills"],
		about: ["About", "about"],
		contact: ["Contact", "contact"],
	};

	// Initialize AOS
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
			easing: "ease-in-out",
		});
	}, []);

	// Update active section based on scroll position
	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll("section");
			const scrollPosition = window.scrollY + window.innerHeight / 2;

			sections.forEach((section) => {
				const top = section.offsetTop;
				const height = section.offsetHeight;

				if (scrollPosition >= top && scrollPosition <= top + height) {
					setActiveSection(section.id);
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		// to hide the navigation bar on mobile put `hidden` in the className right below this comment`
		<nav
			className="fixed bottom-8 left-1/2 z-50 hidden -translate-x-1/2 transform sm:block"
			data-aos="fade-up"
			data-aos-offset="0"
			data-aos-delay="800"
		>
			<div className="flex items-center space-x-4 rounded-full border border-zinc-800 bg-zinc-900/80 px-6 py-3 backdrop-blur-md">
				<ul className="flex items-center space-x-8">
					{sections &&
						Object.keys(sections).map((key) => (
							<li key={key}>
								<button
									onClick={() =>
										scrollToSection(sections[key][1])
									}
									className={`text-sm font-medium transition-colors ${
										activeSection === sections[key][1]
											? "cursor-pointer text-white"
											: "cursor-pointer text-zinc-400 hover:text-zinc-200"
									}`}
								>
									{sections[key][0]}
								</button>
							</li>
						))}
				</ul>
			</div>
		</nav>
	);
}
