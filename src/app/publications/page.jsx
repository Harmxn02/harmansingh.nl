"use client";

import React, { useState } from "react";
import publications from "./publications.json";
import Publication from "./Publication";

import Header from "./Header";

const DropdownButton = ({
	activeSelection,
	handleCategoryClick,
	articlesPerCategory,
	text,
}) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<div className="relative inline-block text-left">
			<button
				type="button"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				onClick={toggleDropdown}
			>
				{text}{" "}
				<svg
					className="w-2.5 h-2.5 ms-3"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m1 1 4 4 4-4"
					/>
				</svg>
			</button>

			{/* Dropdown menu */}
			{isDropdownOpen && (
				<div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 mt-2">
					<ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
						<li>
							<a
								href="#"
								onClick={() => {
									handleCategoryClick("");
									toggleDropdown();
								}}
								className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
									activeSelection === "" ? "font-bold" : ""
								}`}
							>
								All ({publications.length})
							</a>
						</li>
						{Object.keys(articlesPerCategory).map((category) => (
							<li key={category}>
								<a
									href="#"
									onClick={() => {
										handleCategoryClick(category);
										toggleDropdown();
									}}
									className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
										activeSelection === category
											? "font-bold"
											: ""
									}`}
								>
									{category} ({articlesPerCategory[category]})
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

//prettier-ignore
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

				<div className="md:hidden">
					<DropdownButton
						
						// change this to change what the button says
						text="Select category"
						
						activeSelection={activeSelection}
						handleCategoryClick={handleCategoryClick}
						articlesPerCategory={articlesPerCategory}
					/>
				</div>

				<div className="md:ml-10 hidden md:block">
					<p className="font-bold my-2 ">Categories:</p>
					<ul>
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
