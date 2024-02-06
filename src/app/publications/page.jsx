"use client";

import React, { useState } from "react";
import publications from "./publications.json";
import Publication from "./Publication";

import Header from "./Header";

const Page = () => {
	const [selectedCategory, setSelectedCategory] = useState("");
	const [activeSelection, setActiveSelection] = useState("");

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

		return categoryCount;
	};

	const articlesPerCategory = countArticlesPerCategory();

	const handleCategoryClick = (category) => {
		setSelectedCategory(category);
		setActiveSelection(category);
	};

	const filteredPublications = selectedCategory
		? publications.filter((publication) =>
				publication.themes.includes(selectedCategory)
		  )
		: publications;

	return (
		<div>
			<Header />
			<div className="flex flex-col-reverse md:flex-row m-10">
				<div className="max-w-3xl">
					{filteredPublications.map((publication) => {
						return (
							<Publication
								key={publication.id}
								publication={publication}
							/>
						);
					})}
				</div>

				<div className="md:ml-10 border md:border-none p-2 md:p-0">
					<p className="font-bold my-2 ">Categories:</p>
					<ul className="flex md:flex-col flex-wrap gap-3 md:gap-0">
						<li
							onClick={() => handleCategoryClick("")}
							className={
								activeSelection === "" ? "font-bold underline underline-offset-1" : ""
							}
						>
							All ({publications.length})
						</li>
						{Object.keys(articlesPerCategory).map((category) => (
							<li
								key={category}
								onClick={() => handleCategoryClick(category)}
								className={
									activeSelection === category
										? "font-bold underline underline-offset-1"
										: "cursor-pointer"
								}
							>
								{category} ({articlesPerCategory[category]})
							</li>
							
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Page;
