"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import IntroAnimation from "./components/IntroAnimation";
import Navigation from "./components/Navigation";
import Form from "./components/Form";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
	const [showIntro, setShowIntro] = useState(false);
	const [showHero, setShowHero] = useState(true);

	// Initialize AOS globally
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
			easing: "ease-in-out",
			offset: 100,
		});
	}, []);

	// Callback to remove the intro animation from the DOM
	const handleIntroEnd = () => {
		setShowIntro(false);
		setShowHero(true);
	};

	return (
		<div className="bg-[#08000b] font-[family-name:var(--font-geist-sans)] text-white selection:bg-purple-300/40 md:px-8">
			{showIntro && <IntroAnimation onEnd={handleIntroEnd} />}
			{showHero && (
				<>
					<Hero />
					<Projects />
					<Skills />
					<About />
					<Form />
					<Navigation />
				</>
			)}
		</div>
	);
}
