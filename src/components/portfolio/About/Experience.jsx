// import LinkedIn from "./img/LinkedIn.png"

import SectionHeader from "../SectionHeader";

export default function Experience() {
	function getAge() {
		const birthDate = new Date("2002-07-28");
		let today = new Date();

		let age = today.getFullYear() - birthDate.getFullYear();
		let monthDiff = today.getMonth() - birthDate.getMonth();

		if (
			monthDiff < 0 ||
			(monthDiff === 0 && today.getDate() < birthDate.getDate())
		) {
			age--;
		}

		return age;
	}

	return (
		<div className="flex min-h-screen flex-col flex-wrap justify-center px-4 pt-12 pb-64">
			<SectionHeader
				section="ABOUT"
				type=""
				title="About"
				// desc="Curious, motivated, proactive."
			/>
			<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-16">
				<div data-aos="fade-up">
					<div className="h-fit max-w-5xl space-y-4 rounded-md px-4 py-8 text-white">
						{/* Code WHO AM I */}
						{/* <div className="bg-[#282a3a] max-w-fit rounded-md px-4">
							<div className="flex gap-1 lg:gap-2 pt-4">
								<div className="h-3 lg:h-4 aspect-1 bg-red-500 rounded-full"></div>
								<div className="h-3 lg:h-4 aspect-1 bg-yellow-500 rounded-full"></div>
								<div className="h-3 lg:h-4 aspect-1 bg-green-500 rounded-full"></div>
							</div>
							<h2
								data-aos="fade-up"
								className="py-4 max-h-fit text-lg bg-linear-to-r from-[#aa63b1] to-bg-brand-purple text-transparent bg-clip-text font-bold sm:text-xl md:text-2xl"
							>
								{" "}
								<code>C:\Users\Harman{">"} <span className="text-white">whoami</span> </code> {" "}
							</h2>
						</div> */}
						<p
							data-aos="fade-up"
							className="max-w-[55ch] pb-4 text-lg md:text-3xl md:font-light"
						>
							My name is Harman and I am a {getAge()}-year-old
							Software Engineer / Data Scientist.
							{/* I started my programming journey in 2020
							after discovering Harvard&apos;s CS50 course. */}
						</p>

						<p
							data-aos="fade-up"
							className="max-w-[55ch] pb-4 text-lg md:text-3xl md:font-light"
						>
							I&apos;m currently pursuing a Bachelor&apos;s degree
							in Applied Computer Science with a specialization in
							AI.
							{/* Additionally, I
							am taking Finance and Statistics courses to prepare
							for a career in quantitative analysis and data
							science. */}
							{/* I am excited to see
							where my career in the field of Computer Science and
							AI will take me. */}
						</p>
						{/* <p data-aos="fade-up" className="pb-4">I have an (for the time being) empty blog on Dev Community, which you can visit by clicking <a className="text-[#D94F70] hover:text-[#f0587c] hover:underline underline-offset-2 font-semibold" href="https://dev.to/harmxn" target="_blank" rel="noreferrer">here</a>.</p> */}
						<div data-aos="fade-up">
							<a
								href="https://www.linkedin.com/in/harmanpnahal/"
								target="_blank"
								rel="noreferrer"
								className="bg-brand-purple hover:bg-brand-purpleFade mt-2 flex w-fit items-center justify-center rounded-md px-6 py-5 text-base font-medium text-white transition-colors duration-300 md:px-6 md:py-4 md:text-lg"
							>
								<svg
									className="mr-4 h-6 w-6"
									fill="white"
									role="img"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>Find out more on my LinkedIn!</title>
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
								</svg>
								<span className="hidden md:block">
									Find out more on my LinkedIn!
								</span>
								<span className="md:hidden">
									More on my LinkedIn
								</span>
							</a>
						</div>
					</div>
				</div>
				{/* <div
					data-aos="fade-up"
					className="hidden xl:inline mx-auto sm:w-3/6  xl:mr-12 xl:w-5/5"
				>
					<img
						src={LinkedIn}
						alt="person showing their skills"
					></img>
				</div> */}
			</div>
		</div>
	);
}
