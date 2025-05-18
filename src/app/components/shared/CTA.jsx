import React from "react";

const CTA = ({ content, url, children }) => {
	return (
		<button className="bg-buttonSecondary hover:bg-buttonSecondaryHover flex items-center gap-2 rounded-full px-5 py-3 font-medium text-black transition-colors duration-500">
			<a href={url} target="_blank" rel="noreferrer" className="text-sm md:text-base">
				{content}
			</a>
			{children}
		</button>
	);
};

export default CTA;
