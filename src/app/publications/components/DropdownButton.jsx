import React, { useState } from 'react'

import publications from "../data/publications.json"

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
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
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

export default DropdownButton