import React, { useEffect, useState } from "react";

const navigation = [
	{ name: "Projects", href: "#PROJECTS", id: "project" },
	{ name: "Skills", href: "#SKILLS", id: "skills" },
	{ name: "About", href: "#ABOUT", id: "about" },
	{ name: "Contact", href: "#CONTACT", id: "contact" },
];

const HoveringNavigation = () => {
	return (
		<div className="fixed top-0 left-0 z-50 ml-16 hidden min-h-screen items-center justify-center 2xl:flex">
			<ul className="flex flex-col space-y-4">
				{navigation.map((item) => (
					<a
						key={item.name}
						href={item.href}
						id={item.id}
						className="list-item text-4xl font-black text-white transition-all duration-500 hover:text-[#B799D5]"
					>
						{item.name}
					</a>
				))}
			</ul>
		</div>
	);
};

export default HoveringNavigation;
