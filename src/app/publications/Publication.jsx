import React from "react";

const Publication = ({ publication }) => {
	return (
		<div key={publication.key} className="border-b  py-6">
			<h1 className="font-bold text-xl">{publication.title}</h1>
			<p className="font-serif max-w-prose">{publication.description}</p>

			<ul className="flex gap-1 mt-4">
                {publication.themes.map((theme) => {
                    return (
                        <li key={theme.key} className="bg-slate-100 text-sm rounded-full px-2 py-1">{theme}</li>
                    )
                } )}
            </ul>
		</div>
	);
};

export default Publication;
