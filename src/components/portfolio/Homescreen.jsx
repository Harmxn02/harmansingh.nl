"use client";

import React, { useEffect } from "react";

import Banner from "@/components/portfolio/Banner/Banner";
import Intro from "@/components/portfolio/Intro/Intro";
import ProjectsSection from "@/components/portfolio/Projects/ProjectsSection";

import SkillsCards from "./Skills/Cards";
import Experience from "./About/Experience";
import Contact from "./Contact/Form";

import FooterSection from "./Footer/Footer";



import AOS from "aos";
import "aos/dist/aos.css";

const Homescreen = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);

	return (
		<div className="App selection:bg-[#7e7dd680]">
			<Banner
				colour="gradient"
				content="I'm available for SWE, Data Science & AI Internships 💪"
			/>
			<Intro section="INTRO"></Intro>

			<div id="BODY">
				<ProjectsSection />
				<SkillsCards />
				<Experience />
				<Contact />
			</div>

			<FooterSection />
		</div>
	);
};

export default Homescreen;
