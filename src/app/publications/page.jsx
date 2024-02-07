"use client";

import React, { useState } from "react";
import publications from "./data/publications.json";
import Publication from "./components/Publication";

import Header from "./components/Header";
import DropdownButton from "./components/DropdownButton";

import _CONFIG from "./config/config.json";

import truncate from "./util/truncate";


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

		// Remove categories with less than 2 articles from the sorting options
		Object.keys(categoryCount).forEach((category) => {
			if (categoryCount[category] < _CONFIG.MIN_ARTICLES_FOR_CATEGORY) {
				delete categoryCount[category];
			}
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
			<div className="flex flex-col-reverse md:flex-row m-10 ">
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

				<div className="md:hidden">
					<DropdownButton
						// change this to change what the button says
						text="Select category"
						activeSelection={activeSelection}
						handleCategoryClick={handleCategoryClick}
						articlesPerCategory={articlesPerCategory}
					/>
				</div>

				<div className="md:ml-10 hidden md:block min-w-fit">
					<p className="font-bold my-2 ">Categories:</p>
					<ul>
						<li
							onClick={() => handleCategoryClick("")}
							className={
								activeSelection === ""
									? "font-bold underline underline-offset-1"
									: ""
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
								{truncate(
									category,
									_CONFIG.CATEGORY_MAX_LENGTH
								)}{" "}
								({articlesPerCategory[category]})
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Page;
