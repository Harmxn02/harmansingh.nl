import React from "react";
import Timeline from "./Timeline";
import SectionTitle from "./shared/SectionTitle";

const Experience = () => {
	return (
		<section
			id="experience"
			className="mx-auto max-w-(--breakpoint-2xl) px-8 py-24 text-white 2xl:px-1"
			data-aos="fade-up"
		>
			<SectionTitle content="Experience" />
			<ol className="relative ml-4 border-l border-zinc-800/90 pl-6">
				<Timeline
					dates="Sep 2026 – Present"
					title="Data Engineer"
					company="Lighthouse"
					image="/assets/lighthouse_logo.webp"
				/>
				<Timeline
					dates="Feb 2025 – May 2025"
					title="Research Assistant"
					company="Howest University of Applied Sciences"
					image="/assets/howest_logo.webp"
				/>
			</ol>
		</section>
	);
};

export default Experience;
