import React from "react";

const CTA = ({ icon, redirect, content, url, children, ...props }) => {
	let target;
	let rel;

	if (redirect) {
		target = "_blank";
		rel = "noreferrer";
	} else {
		target = "_self";
		rel = "noopener";
	}

	return (
		<a
			href={url}
			{...props}
			target={target}
			rel={rel}
			className="bg-buttonSecondary hover:bg-buttonSecondaryHover flex w-fit items-center gap-2 rounded-md py-3 pr-5 pl-5 text-sm font-medium text-black transition-colors duration-500 md:text-base"
		>
			{icon && <span className="text-2xl">{icon}</span>}
			{content}
			{children}
		</a>
	);
};

export default CTA;
