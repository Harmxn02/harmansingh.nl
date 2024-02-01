import React from "react";
import publications from "./publications.json";
import Publication from "./Publication";

const page = () => {
	return (
		<div className="max-w-2xl m-10">
			<div>
				{publications.map((publication) => {
					return (
						<Publication
							key={publication.key}
							publication={publication}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default page;
