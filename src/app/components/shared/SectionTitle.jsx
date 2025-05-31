import React from "react";

const HeadingUnderline = () => {
	return <div className="bg-purple-light mt-2 h-1 w-24"></div>;
};

const SectionTitle = ({ ...props }) => {
	return (
		<div className="mb-8" data-aos="fade-up">
			<h2 className="text-4xl font-semibold tracking-tight">
				{props.content || "Section Title"}
			</h2>
			<HeadingUnderline />
		</div>
	);
};

export default SectionTitle;
