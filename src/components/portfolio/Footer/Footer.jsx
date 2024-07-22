import LinkedInIcon from "./icons/LinkedInIcon";
import GitHubIcon from "./icons/GitHubIcon";
import MailIcon from "./icons/MailIcon";

function getCurrentYear() {
	return new Date().getFullYear().toString();
}


const socialMediaLinks = [
	{
		icon: <LinkedInIcon />,
		link: "https://www.linkedin.com/in/harmanpnahal/",
	},
	{
		icon: <GitHubIcon />,
		link: "https://github.com/Harmxn02/",
	},
	{
		icon: <MailIcon />,
		link: "mailto:harman.pnahal@gmail.com",
	},
];

export default function FooterSection(props) {
	return (
		<footer className="relative" id={props.section}>
			<div className="w-full">
				<div className="w-full bg-[#050716] py-6 px-4 sm:flex sm:items-center sm:justify-between">
					<p className="text-gray-400 text-sm font-medium">
						© {getCurrentYear()} Harman Singh Nahal
					</p>
					<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
						{socialMediaLinks.map((socialMedia, index) => (
							<a
								key={index}
								href={socialMedia.link}
								target="_blank"
								rel="noreferrer"
							>
								{socialMedia.icon}
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
