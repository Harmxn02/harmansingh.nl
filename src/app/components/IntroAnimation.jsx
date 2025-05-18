"use client";

import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const IntroAnimation = ({ onEnd }) => {
	const [shrinkText, setShrinkText] = useState(false);
	const [moveOut, setMoveOut] = useState(false);

	useEffect(() => {
		const shrinkText = setTimeout(() => {
			setShrinkText(true); // Shrink the text
		}, 1500);

		const moveOffScreen = setTimeout(() => {
			setMoveOut(true); // Move the text off screen
		}, 2500);

		const removeFromDOM = setTimeout(() => {
			onEnd(); // Remove the intro animation from the DOM
		}, 3500);

		return () => {
			clearTimeout(shrinkText);
			clearTimeout(moveOffScreen);
			clearTimeout(removeFromDOM);
		};
	}, [onEnd]);

	return (
		<div>
			<div
				className={`flex min-h-screen items-center justify-center bg-black transition-all duration-1000 ${moveOut ? "-translate-y-full" : "items-center"}`}
			>
				<div
					className={`absolute flex items-end space-x-1 transition-all duration-1000 md:space-x-2 ${shrinkText ? "scale-50 transform" : ""}`}
				>
					<h1 className="text-5xl font-semibold tracking-tighter text-white md:text-9xl md:tracking-tight">
						<Typewriter
							words={["Harman."]}
							loop={false}
							cursor={false}
							cursorStyle="_"
							typeSpeed={100}
							deleteSpeed={100}
							delaySpeed={1000}
						/>
					</h1>
				</div>
			</div>
		</div>
	);
};

export default IntroAnimation;
