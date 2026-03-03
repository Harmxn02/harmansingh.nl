import React from "react";

const CTA = ({ icon, redirect, content, style, url, children, ...props }) => {
	let target;
	let rel;
	let styles = "flex w-fit items-center gap-2 rounded-md py-3 px-5 text-sm font-medium transition-colors duration-500 md:text-base";

	if (redirect) {
		target = "_blank";
		rel = "noreferrer";
	} else {
		target = "_self";
		rel = "noopener";
	}


	if (style === "white") {
		styles += " bg-buttonSecondary hover:bg-buttonSecondaryHover text-black";
	} else {
		styles += " bg-pillPrimary hover:bg-pillSecondary";
	}



	return (
		<a
			href={url}
			{...props}
			target={target}
			rel={rel}
			className={styles}
		>
			{icon && <span className="text-2xl">{icon}</span>}
			{content}
			{children}
		</a>
	);
};

export default CTA;
