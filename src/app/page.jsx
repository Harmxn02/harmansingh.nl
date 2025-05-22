"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import IntroAnimation from "./components/IntroAnimation";

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
		<div className="selection:bg-purple-300/40 bg-black font-[family-name:var(--font-geist-sans)] text-white">
			{showIntro && <IntroAnimation onEnd={handleIntroEnd} />}
			{showHero && (
				<>
					<Hero />
					<Projects />
					<Skills />
					<About />
				</>
			)}
		</div>
	);
}
