const Suffix = ({ href }) => {
	return (
		<span className="text-[#9f4fd9]">
			<a
				className="px-1 transition-colors duration-500 hover:text-white"
				href={href}
			>
				.
			</a>
		</span>
	);
};

function SectionHeader(props) {
	const sectionHref = `#${props.section}`;

	return (
		<div id={props.section} className="mx-auto max-w-[80vw]">
			<div data-aos="fade-up" className="flex flex-col pt-24">
				<h1 className="text-center text-4xl font-black text-white sm:mb-5 sm:text-5xl">
					{props.title}
					<Suffix href={sectionHref} />
				</h1>
				<h2 className="text-center text-sm text-white sm:text-lg">
					{props.desc}
				</h2>
			</div>
		</div>
	);
}

export default SectionHeader;
