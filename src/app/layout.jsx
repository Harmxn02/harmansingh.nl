import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata = {
	title: "Harman.",
	description: "Harman Singh's personal website.",
	openGraph: {
		title: "Harman.",
		description: "Harman Singh's personal website.",
		url: "https://harmansingh.nl",
		siteName: "Harman Singh",
		images: [
			{
				url: "/cooler-og-image.png",
				width: 1200,
				height: 628,
				alt: "Harman Singh's personal website",
			},
		],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<script
					defer
					src="https://cloud.umami.is/script.js"
					data-website-id="38d6c1fc-985d-4b7e-8bdc-bc2ac9d0a055"
				></script>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
