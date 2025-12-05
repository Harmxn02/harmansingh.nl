import React, { useState } from "react";
import SectionTitle from "../../components/shared/SectionTitle";
import Image from "next/image";

// import images
import HowestLogo from "../../../../public/assets/howest_logo.webp";
import OULogo from "../../../../public/assets/ou_logo.webp";

const page = () => {
	return (
		<div className="bg-[#08000b] font-[family-name:var(--font-geist-sans)] text-white selection:bg-purple-300/40 md:px-8">
			<section
				id="about"
				className="mx-auto max-w-(--breakpoint-2xl) px-8 py-24 text-white 2xl:px-1"
				data-aos="fade-up"
			>
				<SectionTitle content="Education" />

				<div>
					{/* Master of Science in Artificial Intelligence */}
					<div
						className="mt-12"
						data-aos="fade-up"
						data-aos-delay="100"
					>
						<h3 className="mb-4 text-xl font-medium">
							<Image
								src={OULogo}
								alt="Open Universiteit logo"
								width={32}
								height={32}
								className="mr-4 mb-1 inline-block"
							/>
							Master of Science in Artificial Intelligence{" "}
							<span className="text-purple-light">
								@ Open Universiteit
							</span>
						</h3>
						<div className="space-y-6">
							<div>
								<h4 className="mb-2 underline underline-offset-2">
									Completed coursework
								</h4>
								<ul>
									<li>
										- IB0602: Linear algebra and stochastics
									</li>
									<li>- IB0402: Logic, sets and relations</li>
									<li>
										- IB3702: Mathematics for Machine
										Learning
									</li>
								</ul>
							</div>
							<p className="font-bold">
								Thesis title:{" "}
								<span className="font-normal">
									Not done yet
								</span>
							</p>
						</div>
					</div>

					<div
						className="mt-12"
						data-aos="fade-up"
						data-aos-delay="100"
					>
						<h3 className="mb-4 text-xl font-medium">
							<Image
								src={HowestLogo}
								alt="Open Universiteit logo"
								width={32}
								height={32}
								className="mr-4 mb-1 inline-block"
							/>
							Bachelor in Applied Computer Science{" "}
							<span className="text-purple-light">
								@ Howest University of Applied Sciences
							</span>
						</h3>
						<div className="space-y-6">
							<div>
								<h4 className="mb-2 underline underline-offset-2">
									Completed coursework
								</h4>
								<ul>
									<li>- Machine Learning</li>
									<li>- Neural Networks and Deep Learning</li>
									<li>- Reinforcement Learning</li>
									<li>- ...</li>
									<p className="text-white/50 italic">
										{" "}
										and many more courses (180 ECTS total,
										all Computer Science related)
									</p>
								</ul>
							</div>
							<h4 className="font-bold">
								Thesis title:{" "}
								<span className="font-normal">
									"Enhancing Cybersecurity with Artificial
									Intelligence: Researching the Implementation
									of Generalised Artificial Intelligence in
									Intrusion Detection Systems"
								</span>
							</h4>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default page;
