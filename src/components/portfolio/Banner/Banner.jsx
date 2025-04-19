export default function Banner(props) {
	const colorStyles = {
		green: "bg-green-500",
		red: "bg-red-500",
		blue: "bg-blue-500",
		gradient: "bg-linear-to-r from-[#aa63b1] to-[#5396fa]",
	};

	const classStyle = `p-2 text-white font-semibold text-center text-xs lg:text-sm xl:text-base ${
		colorStyles[props.colour]
	}`;

	return (
		<div className={classStyle}>
			<div className="relative flex items-center justify-center">
				<p>{props.content}</p>
				<button
					className="absolute right-2 font-bold font-mono"
					onClick={props.onClose}
				>
					X
				</button>
			</div>
		</div>
	);
}
