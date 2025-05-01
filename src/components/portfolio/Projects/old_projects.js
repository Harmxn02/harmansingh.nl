const projects = [
	{
		id: 1,
		highlighted: false,
		name: "Hotel client screening",
		imageSrc: AlphaPreview,
		imageAlt: "Preview of project Alpha",
		domain: "ML/AI",
		technologies: ["Python", "pandas", "scikit-learn"],
		description:
			"I applied supervised learning techniques to screen the 500 optimal clients for an exclusive (imaginary) hotel.",
		repository: "https://github.com/Harmxn02/ML-Project",
		deployment:
			"https://drive.google.com/file/d/1L3vT-fNBQ-yBKA0TwXJN-ProcwJ8PSmc/view?usp=sharing",
		button_text: ["Code Repository", "Report"],
	},
	{
		id: 2,
		highlighted: false,
		name: "AI learns to drive",
		imageSrc: BetaPreview,
		imageAlt: "Preview of project Beta.",
		domain: "ML/AI",
		technologies: ["Python", "Stable-Baselines3", "TensorFlow"],
		description:
			"I used several Stable-Baselines3 models to teach an AI to drive on a simulated highway environment.",
		repository: "https://github.com/Harmxn02/RL-Project-highway",
		button_text: ["Code Repository"],
		// this one only has the code repository available, so you only put 1 element in the 'button_text' array
	},
	{
		id: 5,
		highlighted: false,
		name: "Art Style Transfer Model",
		imageSrc: EpsilonPreview,
		imageAlt: "Preview of project Epsilon",
		domain: "ML/AI",
		technologies: ["Python", "TensorFlow"],
		description:
			"Used the pre-trained VGG19 model to transfer the style of one painting to another.",
		repository: "https://github.com/Harmxn02/Art-Style-Transfer-Model",
		button_text: ["Code Repository"],
	},
	{
		id: 6,
		highlighted: false,
		name: "Animal Detection using YOLOv5",
		imageSrc: ZetaPreview,
		imageAlt: "Preview of project Zeta",
		domain: "ML/AI",
		technologies: ["Python", "YOLOv5", "OpenCV", "PyTorch"],
		description:
			"Used YOLOv5 to detect and classify animals using video footage from National Geographic.",
		repository: "https://github.com/Harmxn02/Animal-Detection-using-YOLOv5",
		deployment: "https://www.youtube.com/watch?v=b7o9Njpe0Lw",
		button_text: ["Code Repository", "YouTube Video"],
	},
	{
		id: 7,
		highlighted: false,
		name: "NSL-KDD Intrusion Detection",
		imageSrc: EtaPreview,
		imageAlt: "Preview of project Eta",
		domain: "ML/AI",
		technologies: ["Python", "Deep Learning", "PyTorch"],
		description:
			"Trained a model on the NSL-KDD dataset to detect and classifiy cyber security attacks.",
		repository: "https://github.com/Harmxn02/NSL-KDD-IntrusionDectection",
		button_text: ["Code Repository"],
	},
	{
		id: 8,
		highlighted: false,
		name: "Text Classification using Transformers",
		imageSrc: ThetaPreview,
		imageAlt: "Preview of project Theta",
		domain: "ML/AI",
		technologies: [
			"Python",
			"Transformers",
			"NLP",
			"Hugging Face",
			"PyTorch",
		],
		description:
			"Compared several pre-trained models to classify text data.",
		repository:
			"https://github.com/Harmxn02/Text-Classification-with-Transformer-Models",
		button_text: ["Code Repository"],
	},
];
