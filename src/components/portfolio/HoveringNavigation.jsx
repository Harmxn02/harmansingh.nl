import React, { useEffect, useState } from "react";

const navigation = [
	{ name: "Projects", href: "#PROJECTS", id: "project" },
	{ name: "Skills", href: "#SKILLS", id: "skills" },
	{ name: "About", href: "#ABOUT", id: "about" },
	{ name: "Contact", href: "#CONTACT", id: "contact" },
];

const HoveringNavigation = () => {
	return (
		<div className="fixed z-50 top-0 left-0 hidden ml-16 min-h-screen 2xl:flex justify-center items-center">
			<ul className="flex flex-col space-y-4">
				{navigation.map((item) => (
					<a
						key={item.name}
						href={item.href}
						id={item.id}
						className="text-4xl list-item font-black text-white transition-all duration-500 hover:text-[#B799D5]"
					>
						{item.name}
					</a>
				))}
			</ul>
		</div>
	);
};

export default HoveringNavigation;
