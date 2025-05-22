"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import IntroAnimation from "./components/IntroAnimation";
import Navigation from "./components/Navigation";

import { useState } from "react";

export default function Home() {
	const [showIntro, setShowIntro] = useState(true);
	const [showHero, setShowHero] = useState(false);

	// Callback to remove the intro animation from the DOM
	const handleIntroEnd = () => {
		setShowIntro(false);
		setShowHero(true);
	};

	return (
		<div className="bg-black font-[family-name:var(--font-geist-sans)] text-white selection:bg-purple-300/40">
			{showIntro && <IntroAnimation onEnd={handleIntroEnd} />}
			{showHero && (
				<>
					<Hero />
					<Projects />
					<Skills />
					<About />
					<Navigation />
				</>
			)}
		</div>
	);
}
