import React from "react";

import Link from "next/link";
import truncate from "../util/truncate";
import formatDate from "../util/formatDate";

import _CONFIG from "../config/config.json";

const Publication = ({ publication }) => {
	const formattedDate = formatDate(publication.date);

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
						<p className="font-serif max-w-prose">{truncate(publication.description, _CONFIG.DESC_MAX_LENGTH)}</p>
						{/* Metadata - UNDER */} {/* shown before MD (mobile) */}
						<div key={publication.key} className="lg:hidden pt-4 text-xs">
							<p>{formattedDate}</p>
							<p>{publication.author}</p>
						</div>
						<ul className="flex flex-wrap gap-1 mt-4">
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
