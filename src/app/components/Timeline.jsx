import Image from "next/image";
import React from "react";

const Timeline = ({ dates, title, company, image }) => {
	return (
		<li className="relative mb-8 last:mb-0">
			<div className="border-purple-light absolute top-9 -left-[1.9rem] h-3.5 w-3.5 rounded-full border bg-[#08000b] shadow-[0_0_0_4px_rgba(153,125,182,0.18)] sm:top-11" />
			<div className="flex items-center-safe gap-4 pl-1 transition-transform duration-300 sm:gap-5">
				{image && (
					<Image
						src={image}
						alt={title}
						width={64}
						height={64}
						className="h-14 w-14 flex-shrink-0 rounded-md border border-zinc-700 object-cover sm:h-20 sm:w-20"
					/>
				)}
				<div className="min-w-0">
					<h3 className="text-md mt-3 truncate font-semibold text-white sm:text-xl">
						{title}
					</h3>
					<p className="text-textPrimary truncate text-sm leading-relaxed sm:mb-1 sm:text-base">
						{company}
					</p>

					<time className="bg-pillPrimary text-textPrimary mt-1 -ml-1 inline-block rounded-md px-1.5 py-1 text-xs font-medium tracking-wide uppercase">
						{dates}
					</time>
				</div>
			</div>
		</li>
	);
};

export default Timeline;
