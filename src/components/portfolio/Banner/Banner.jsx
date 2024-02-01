export default function Banner(props) {
	const colorStyles = {
		green: "bg-green-500",
		red: "bg-red-500",
		blue: "bg-blue-500",
		gradient: "bg-gradient-to-r from-[#aa63b1] to-[#5396fa]",
	};

	const classStyle = `p-2 text-white font-semibold text-center text-xs lg:text-sm xl:text-base ${
		colorStyles[props.colour]
	}`;

	return (
		<div className={classStyle}>
			<p>{props.content}</p>
		</div>
	);
}
