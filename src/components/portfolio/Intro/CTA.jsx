export default function CTA({ colour, href, content }) {
	const colorStyles = {
		pink: "bg-[#D94F70] text-white hover:bg-[#D94F70da]",
		purple: "bg-brand-purple text-white hover:bg-brand-purple-fade",
		white: "bg-white",
		default:
			"text-white border border-[#ffffff33] hover:border-[#ffffff59]",
	};

	const color = colorStyles[colour] || colorStyles.default;

	const classStyle = `mt-2 w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md ${color} md:py-4 md:text-lg md:px-10 transition duration-300`;

	return (
		<div data-aos="fade-up" className="rounded-md">
			<a href={href} className={classStyle}>
				{content}
			</a>
		</div>
	);
}
