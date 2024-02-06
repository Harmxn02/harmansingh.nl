"use client";

import React from "react";
import publications from "./publications.json";
import Publication from "./Publication";

const page = () => {
	const countArticlesPerCategory = () => {
		const categoryCount = {};

		publications.forEach((publication) => {
			const categories = publication.themes;

			categories.forEach((category) => {
				if (categoryCount[category]) {
					categoryCount[category]++;
				} else {
					categoryCount[category] = 1;
				}
			});
		});

		console.log(categoryCount);
		return categoryCount;
	};

	const articlesPerCategory = countArticlesPerCategory();

	return (
		<div>
			<div className="min-h-[15vh] bg-[#2c3e50] text-white p-10">
				<h2 className="text-3xl">Harman Singh</h2>
				<h1 className="text-lg">Me geeking out over numbers</h1>
				<p className="text-xs italic">
					if you&apos;ve found this page somehow, the articles were
					just dummy ones made for the development of this page-route
				</p>
			</div>
			<div className="flex m-10">
				<div className="max-w-2xl">
					{publications.map((publication) => {
						return (
							<Publication
								key={publication.key}
								publication={publication}
							/>
						);
					})}
				</div>

				<div className="ml-10">
					<p className="font-bold my-2">Categories:</p>
					<ul className="">
						<li>All &#40;{publications.length}&#41;</li>
						{Object.keys(articlesPerCategory).map((category) => (
							<li key={category}>
								{category} &#40;{articlesPerCategory[category]}
								&#41;
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default page;
