"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import IntroAnimation from "./components/IntroAnimation";
import Navigation from "./components/Navigation";
import Form from "./components/Form";

import toast, { Toaster } from "react-hot-toast";

import { useState, useEffect } from "react";

export default function Home() {
	const [showIntro, setShowIntro] = useState(false);
	const [showHero, setShowHero] = useState(true);

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
					<Toaster
						position="top-center"
						toastOptions={{
							duration: 4000,
							style: {
								background: "#27272a",
								color: "#fafafa",
								border: "1px solid #3f3f46",
								borderRadius: "1rem",
								padding: "12px 16px",
								fontSize: "14px",
							},
							success: {
								iconTheme: {
									// primary: "#997db6", // purple
									primary: "#61d345",
									secondary: "#27272a",
								},
							},
						}}
					/>{" "}
					<Navigation />
				</>
			)}
		</div>
	);
}
