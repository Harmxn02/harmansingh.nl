import React from "react";

import Link from "next/link";

const formatDate = (dateString) => {
	const [day, month, year] = dateString.split("-");
	const parsedDate = new Date(`${year}-${month}-${day}T00:00:00Z`);

	const options = { year: "numeric", month: "short", day: "numeric" };
	const formattedDate = parsedDate.toLocaleDateString("en-US", options);
	return formattedDate;
};

const truncateDescription = (description) => {
	const maxLength = 250;
	if (description.length > maxLength) {
		return description.slice(0, maxLength) + " ...";
	}
	return description;
};

const Publication = ({ publication }) => {
	const formattedDate = formatDate(publication.date);
	const truncatedDescription = truncateDescription(publication.description);

	return (
		<div className="flex items-baseline gap-4">
			{/* Metadata - LEFT */} {/* shown after MD */}
			<div key={publication.key} className="hidden lg:block text-xs">
				<p>{formattedDate}</p>
				<p>{publication.author}</p>
			</div>

			{/* Article */}
			<Link href={publication.URL} legacyBehavior passHref>	
				<a target="_blank" rel="noopener noreferrer group">
					<div key={publication.key} className="border-b py-6">
						<h1 className="font-bold text-xl">
							{publication.title}
						</h1>
						<p className="font-serif max-w-prose">{truncatedDescription}</p>
						{/* Metadata - UNDER */} {/* shown before MD (mobile) */}
						<div key={publication.key} className="lg:hidden pt-4 text-xs">
							<p>{formattedDate}</p>
							<p>{publication.author}</p>
						</div>
						<ul className="flex gap-1 mt-4">
							{publication.themes.map((theme, index) => {
								return (
									<li
										key={`theme-${index}`}
										className="bg-slate-100 text-sm rounded-full px-2 py-1"
									>
										{theme}
									</li>
								);
							})}
						</ul>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default Publication;
