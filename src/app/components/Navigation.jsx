"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
	const [activeSection, setActiveSection] = useState("hero");

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
		<nav className="fixed bottom-8 left-1/2 z-50 hidden -translate-x-1/2 transform sm:block">
			<div className="flex items-center space-x-4 rounded-full border border-zinc-800 bg-zinc-900/80 px-6 py-3 backdrop-blur-md">
				<ul className="flex items-center space-x-8">
					<li>
						<button
							onClick={() => scrollToSection("hero")}
							className={`text-sm font-medium transition-colors ${
								activeSection === "hero"
									? "text-white"
									: "text-zinc-400 hover:text-zinc-200"
							}`}
						>
							Home
						</button>
					</li>
					<li>
						<button
							onClick={() => scrollToSection("projects")}
							className={`text-sm font-medium transition-colors ${
								activeSection === "projects"
									? "text-white"
									: "text-zinc-400 hover:text-zinc-200"
							}`}
						>
							Projects
						</button>
					</li>
					<li>
						<button
							onClick={() => scrollToSection("skills")}
							className={`text-sm font-medium transition-colors ${
								activeSection === "skills"
									? "text-white"
									: "text-zinc-400 hover:text-zinc-200"
							}`}
						>
							Skills
						</button>
					</li>{" "}
					<li>
						<button
							onClick={() => scrollToSection("about")}
							className={`text-sm font-medium transition-colors ${
								activeSection === "about"
									? "text-white"
									: "text-zinc-400 hover:text-zinc-200"
							}`}
						>
							About
						</button>
					</li>
					<li>
						<button
							onClick={() => scrollToSection("contact")}
							className={`text-sm font-medium transition-colors ${
								activeSection === "contact"
									? "text-white"
									: "text-zinc-400 hover:text-zinc-200"
							}`}
						>
							Contact
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
}
