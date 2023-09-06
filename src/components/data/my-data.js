import {
	BusinessCenterTwoTone,
	Code,
	DataObject,
	DesignServices,
	DevicesOutlined,
	Keyboard,
	PhoneIphoneOutlined,
	PhonelinkTwoTone,
} from "@mui/icons-material";

export const brandlink = [
	{
		url: "#home",
		// img: "../../../public/logo192.png",
		img: "./images/nav-logo.svg",
	},
];

export const navlink = [
	{
		url: "#about",
		text: "About",
	},
	{
		url: "#skills",
		text: "Skills",
	},
	{
		url: "#projects",
		text: "Projects",
	},
];

export const contactlink = [
	{
		url: "https://www.linkedin.com/in/michel-btompe-3a0bb3234",
		text: "LinkedIn",
		icon: "../images/icons/linkedin.svg",
	},
	{
		url: "https://github.com/Tom-michel",
		text: "GitHub",
		icon: "../images/icons/github.svg",
	},
	{
		url: "https://gitlab.com/Tom-michel",
		text: "GitLab",
		icon: "../images/icons/gitlab.svg",
	},

	{
		url: "#contact",
		text: "Contact me",
		icon: "../images/icons/contact-mail.svg",
	},
];

export const floatinglink = [
	{
		icon: "../images/icons/user.svg",
		color: "rgba(252, 163, 38, 0.19)",
		url: "#about",
	},
	{
		icon: "../images/icons/keyboard.svg",
		color: "rgba(112, 255, 0, 0.19)",
		url: "#skills",
	},
	{
		icon: "../images/icons/folder.svg",
		color: "rgba(0, 122, 204, 0.19)",
		url: "#projects",
	},
];

export const banner = [
	{
		hello: "Hello, i'am",
		name: ["< Michel Btompe />", "Full. Developer", "App Designer"],
		// name: "Michel Btompe",
		role: [
			{ text: "Full Stack Developer", icon: <Keyboard /> },
			{ text: "UI Designer", icon: <DesignServices /> },
		],
		done: [
			{
				exper_num: "5",
				exper_text: "years of \nexperience",
				project_num: "10+",
				project_text: "Projects \nCompleted",
			},
		],
		avatar: [
			{
				// img: "../images/avatar-img.png",
				img: "../images/tm-pro.jpg",
				tech1: "../images/tech/django.png",
				tech2: "../images/tech/flutter.png",
				tech3: "../images/tech/react.svg",
			},
		],
	},
];

const experiences = [
	{
		id: 1,
		year: 2021,
		exp: [
			{
				icon: <Code fontSize="small" />,
				title: "Fontend/Mobile Developer and Freelancer",
				dec: (
					<>
						Many projects (Web app, Mobile App, UI Design).{<br />}
						<a className="t-gr text-decoration-underline" href="#services">
							Services
						</a>
					</>
				),
			},
		],
	},
	{
		id: 2,
		year: 2022,
		exp: [
			{
				icon: <DataObject fontSize="small" />,
				title: "Backend Developer",
				dec: (
					<>
						In the{" "}
						<a
							className="t-gr text-decoration-underline"
							href="http://ubora-studios.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Ubora Studios
						</a>{" "}
						startup.
					</>
				),
			},
			{
				icon: <BusinessCenterTwoTone fontSize="small" />,
				title: "Freelancer",
				dec: (
					<>
						Many projects (Web app, Mobile App, UI Design).{<br />}
						<a className="t-gr text-decoration-underline" href="#services">
							Services
						</a>
					</>
				),
			},
		],
	},

	{
		id: 3,
		year: 2023,
		exp: [
			{
				icon: <PhonelinkTwoTone fontSize="small" />,
				title: "Fullstack Developer",
				dec: (
					<>
						In the{" "}
						<a
							className="t-gr text-decoration-underline"
							href="http://ubora-studios.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Ubora Studios
						</a>{" "}
						startup.
					</>
				),
			},
			{
				icon: <BusinessCenterTwoTone fontSize="small" />,
				title: "Freelancer",
				dec: (
					<>
						Many projects (Web app, Mobile App, UI Design).{<br />}
						<a className="t-gr text-decoration-underline" href="#services">
							Services
						</a>
					</>
				),
			},
		],
	},
];
export const about = [
	{
		text: "I am a user interface designer and a fullstack web/mobile developer. I like to build or improve innovative solutions to everyday problems in society. I have already participated in several professional and academic projects as a backend or frontend developer, freelancer, project manager.",
		user: "@Tom",
		role: "Fullstack Developer & Freelancer",
		cv: "../doc/CV_BTOMPE_TCHEUFFA_MICHEL_R.pdf",
		exp: experiences,
	},
];

// liste des technologies

export const javascript = {
	name: "JavaScript",
	img: "../images/tech/javascript.svg",
	dots: "#F0DB4F",
	starred: false,
};
export const typescript = {
	name: "TypeScript",
	img: "../images/tech/typescript.svg",
	dots: "#007ACC",
	starred: false,
};
export const html = {
	name: "HTML5",
	img: "../images/tech/html5.svg",
	dots: "#E44D26",
	starred: false,
};
export const css = {
	name: "CSS3",
	img: "../images/tech/css3.svg",
	dots: "#1572B6",
	starred: false,
};
export const bootstrap = {
	name: "Bootstrap",
	img: "../images/tech/bootstrap.png",
	dots: "#694FB8",
	starred: true,
};
export const react = {
	name: "ReactJS",
	img: "../images/tech/react.svg",
	dots: "#61DAFB",
	starred: false,
};
export const flutter = {
	name: "Flutter",
	img: "../images/tech/flutter.png",
	dots: "#1572B6",
	starred: true,
};
export const github = {
	name: "GitHub",
	img: "../images/tech/github.png",
	dots: "#FFFFFF",
	starred: true,
};
export const gitlab = {
	name: "GitLab",
	img: "../images/tech/gitlab.svg",
	dots: "#FCA326",
	starred: true,
};
export const django = {
	name: "Django",
	img: "../images/tech/django.png",
	dots: "#147155",
	starred: true,
};
export const djangorest = {
	name: "DRF",
	img: "../images/tech/drf.png",
	dots: "#FFFFFF",
	starred: true,
};
export const python = {
	name: "Python",
	img: "../images/tech/python.png",
	dots: "#F0DB4F",
	starred: false,
};
export const figma = {
	name: "Figma",
	img: "../images/tech/figma.png",
	dots: "#BB00FF",
	starred: true,
};
export const tensorflow = {
	name: "TensorFlow",
	img: "../images/tech/Tensorflow_logo.svg.png",
	dots: "#FCA326",
	starred: false,
};
export const sqlite = {
	name: "SqLite",
	img: "../images/tech/sqlite.svg.png",
	dots: "#043659",
	starred: true,
};
export const mysql = {
	name: "MySQL",
	img: "../images/tech/mysql.svg.png",
	dots: "#FF7000",
	starred: true,
};
export const mongodb = {
	name: "MongoDB",
	img: "../images/tech/mongodb.png",
	dots: "#00B84E",
	starred: false,
};

// autres techno
export const node = {
	name: "NodeJS",
	img: "../images/tech/nodejs.png",
	dots: "#8CC84B",
	starred: false,
};
export const nest = {
	name: "NestJs",
	img: "../images/tech/nestjs.jpg",
	dots: "#E10058",
	starred: false,
};
export const codeigniter = {
	name: "CodeIgniter",
	img: "../images/tech/codeigniter.png",
	dots: "#F34423",
	starred: false,
};
export const php = {
	name: "PHP",
	img: "../images/tech/php.png",
	dots: "#4F5B93",
	starred: false,
};
export const redis = {
	name: "Redis",
	img: "../images/tech/redis.png",
	dots: "#D93C21",
	starred: false,
};

export const skills = [
	{
		text: "I’am specialized in UI Design and web/mobile development. I do frontend and backend using many languages and technologies ",
		technos: [
			javascript,
			// typescript,
			html,
			css,
			bootstrap,
			react,
			flutter,
			github,
			gitlab,
			django,
			djangorest,
			python,
			figma,
			// tensorflow,
			sqlite,
			mysql,
			mongodb,
			redis,
		],
	},
];

// projects

// const contextDpretty = require.context(
//   "../../captures/dolphpretty/",
//   false,
//   /\.(png|jpe?g|svg)$/
// );
// const imagesDp = contextDpretty.keys().map(contextDpretty);
// const imagesDpretty = [];
// imagesDp.forEach((img, index) => {
//   imagesDpretty.push({
//     img: img,
//     text: "image " + index,
//   });
// });

const getImageList = (imgeContext) => {
	const images = imgeContext.keys().map(imgeContext);
	const imageList = [];
	images.forEach((img, index) => {
		imageList.push({
			img: img,
			text: "image " + index,
		});
	});

	return { img: imageList[0].img, images: imageList };
};

// context des images des projets

const contextDpretty = require.context(
	"../../captures/dolphpretty/",
	false,
	/\.(png|jpe?g|svg)$/
);
const contextKb = require.context(
	"../../captures/kennerbridge/",
	false,
	/\.(png|jpe?g|svg)$/
);

const contextFI = require.context(
	"../../captures/findinvest/",
	false,
	/\.(png|jpe?g|svg)$/
);
const contextFR = require.context(
	"../../captures/findrepeater/",
	false,
	/\.(png|jpe?g|svg)$/
);
const contextIta = require.context(
	"../../captures/itaConsulting/",
	false,
	/\.(png|jpe?g|svg)$/
);
const contextJerry = require.context(
	"../../captures/jerry/",
	false,
	/\.(png|jpe?g|svg)$/
);
const contextSA = require.context(
	"../../captures/simenAcademy/",
	false,
	/\.(png|jpe?g|svg)$/
);
const contextSP = require.context(
	"../../captures/splanning/",
	false,
	/\.(png|jpe?g|svg)$/
);
const contextUmo = require.context(
	"../../captures/umonety/",
	false,
	/\.(png|jpe?g|svg)$/
);
const contextDpW = require.context(
	"../../captures/dolphprintW/",
	false,
	/\.(png|jpe?g|svg)$/
);
const contextSTC = require.context(
	"../../captures/stcUY1/",
	false,
	/\.(png|jpe?g|svg)$/
);
const contextEasyP = require.context(
	"../../captures/easypass/",
	false,
	/\.(png|jpe?g|svg)$/
);
const contextDpM = require.context(
	"../../captures/dolphprintM/",
	false,
	/\.(png|jpe?g|svg)$/
);
const contextCNIC = require.context(
	"../../captures/cnic/",
	false,
	/\.(png|jpe?g|svg)$/
);
const contextWassup = require.context(
	"../../captures/wassup/",
	false,
	/\.(png|jpe?g|svg)$/
);

const contextFoodAg = require.context(
	"../../captures/foodagenda/",
	false,
	/\.(png|jpe?g|svg)$/
);
const contextZP = require.context(
	"../../captures/zeit_planen/",
	false,
	/\.(png|jpe?g|svg)$/
);

export const portfolio = [
	{
		name: "Student Card UY1",
		img: getImageList(contextSTC).img,
		images: getImageList(contextSTC).images,
		// img: "../images/...",
		// images: [
		//   {
		//     img: "../images/...",
		//     text: "",
		//   },
		//   {
		//     img: "../images/...",
		//     text: "",
		//   },
		// ],
		desc: "Applicaton mobile permettant la dématérialisation des cartes d'étudiant à l'université de yaoundé 1",
		date: "en cours",
		tech: [flutter],
		tags: ["...", "...", "..."],
		category: "design",

		link: "",
	},
	{
		name: "DolphPrint W.",
		img: getImageList(contextDpW).img,
		images: getImageList(contextDpW).images,
		desc: "Application web de chat permettant la gestion des commandes de services de photographie, entre les clients et les 'labo photo' de DolphGroup",
		date: "...",
		tech: [django, djangorest, bootstrap, redis, mysql],
		tags: ["...", "...", "..."],
		category: "web",

		link: "",
	},
	{
		name: "Zeit Planen",
		img: getImageList(contextZP).img,
		images: getImageList(contextZP).images,
		desc: "'Gestion des plannings scolaires de l'Université de Yaoundé 1': Presque similaire à google calendar ou outlook calendar, c'est une plateforme qui permet aux étudiants et aux enseignants de consulter facilement et rapidement des emplois de temps d'enseignement de l'université",
		date: "...",
		tech: [django, djangorest, bootstrap, redis, mysql],
		tags: ["...", "...", "..."],
		category: "web",

		link: "",
	},
	{
		name: "EasyPass",
		img: getImageList(contextEasyP).img,
		images: getImageList(contextEasyP).images,
		desc: "Application mobile permettant l'achat des tickets de voyage en ligne, ainsi que des tickets d'accès pour des évèments publics et/ou privés",
		date: "...",
		tech: [flutter, django, djangorest, mongodb],
		tags: ["...", "...", "..."],
		category: "mobile",

		link: "",
	},
	{
		name: "DolphPrint M.",
		img: getImageList(contextDpM).img,
		images: getImageList(contextDpM).images,
		desc: "Application mobile permettant la gestion des commandes de services de photographie, entre les clients et les 'labo photo' de DolphGroup",
		date: "...",
		tech: [flutter, djangorest, mysql],
		tags: ["...", "...", "..."],
		category: "mobile",

		link: "",
	},
	{
		name: "CNIC",
		img: getImageList(contextCNIC).img,
		images: getImageList(contextCNIC).images,
		desc: "Application mobile proposant la dématérialisation de la délivrance des CNI au Cameroun",
		date: "...",
		tech: [flutter, nest, mongodb, figma],
		tags: ["...", "...", "..."],
		category: "mobile",

		link: "",
	},
	{
		name: "Wassup",
		img: getImageList(contextWassup).img,
		images: getImageList(contextWassup).images,
		desc: "Apllication de chat (WhatsApp Clone). Réalisée dans le cadre d'un TP de MicroService à l'université de Yaoundé 1. L'application n'a malheureusement pas été terminée (Délais court)",
		date: "...",
		tech: [flutter, django, node, sqlite, figma],
		tags: ["...", "...", "..."],
		category: "mobile",

		link: "",
	},
	{
		name: "Food Agenda",
		img: getImageList(contextFoodAg).img,
		images: getImageList(contextFoodAg).images,
		desc: "Application mobile constituant un adgenda nutritionnel. Elle permet de repertorier tout ce que l'on mange quotidiennement ainsi que les éventuels problèmes de santé ou gastriques provoqués par l'un des aliments. A fin d'être informé sur les aliments à risque pour notre santé",
		date: "...",
		tech: [flutter, sqlite],
		tags: ["...", "...", "..."],
		category: "mobile",

		link: "",
	},
	{
		name: "DolphPretty",
		img: getImageList(contextDpretty).img,
		images: getImageList(contextDpretty).images,
		desc: "'Le digital au coeur de l'automatisation de la femme': Vendez et Découvrez des produits de beauté qui vous aident à briler",
		date: "...",
		tech: [django, python, bootstrap, mysql],
		tags: ["...", "...", "..."],
		category: "web",

		link: "",
	},
	{
		name: "KennerBrige",
		img: getImageList(contextKb).img,
		images: getImageList(contextKb).images,
		desc: "'Kennerbridge - Mentoring platform between kenners (experts, professionals) and aspirants': Help an aspirant connect with kenners (experts) in his or her fields of interest in order to be guided or assisted according to his or her needs",
		date: "...",
		tech: [django, python, bootstrap, mysql],
		tags: ["...", "...", "..."],
		category: "web",

		link: "",
	},
	{
		name: "Jerry",
		img: getImageList(contextJerry).img,
		images: getImageList(contextJerry).images,
		desc: "Collaborez, gérez des projets et atteignez de nouveaux sommets de productivité. Managez et Suivez l'avancement de votre travail où que vous soyez.",
		date: "...",
		tech: [django, python, bootstrap, mysql],
		tags: ["...", "...", "..."],
		category: "web",

		link: "",
	},
	{
		name: "FindInvest",
		img: getImageList(contextFI).img,
		images: getImageList(contextFI).images,
		desc: "FindInvest est une plateforme qui permet aux étudiants de présenter leurs projets ou idées de projets à des investisseurs présents sur la plateforme afin de retenir leurs attention",
		date: "...",
		tech: [django, python, bootstrap, sqlite],
		tags: ["...", "...", "..."],
		category: "web",

		link: "",
	},
	{
		name: "FindRepater",
		img: getImageList(contextFR).img,
		images: getImageList(contextFR).images,
		desc: "'Améliorez votre niveau avec des professeurs sur mesure': FindRepeater vous permet de touver facilement et rapidement des professeurs sur mesure, proches de chez vous et sélectionnés en fonction de vos exigences",
		date: "...",
		tech: [django, python, bootstrap, sqlite],
		tags: ["...", "...", "..."],
		category: "web",

		link: "",
	},
	{
		name: "Itta Consulting",
		img: getImageList(contextIta).img,
		images: getImageList(contextIta).images,
		desc: "Site vitrine d'un agence de consultance en transport ferrovaire",
		date: "...",
		tech: [codeigniter, php, bootstrap, mysql],
		tags: ["...", "...", "..."],
		category: "web",

		link: "",
	},
	{
		name: "Simen Academy",
		img: getImageList(contextSA).img,
		images: getImageList(contextSA).images,
		desc: "Plateforme de formation en ligne 'Become Master': Learn New Skills Online Find Best Courses",
		date: "...",
		tech: [codeigniter, php, bootstrap, mysql],
		tags: ["...", "...", "..."],
		category: "web",

		link: "",
	},
	{
		name: "Umonety",
		img: getImageList(contextUmo).img,
		images: getImageList(contextUmo).images,
		desc: "Vitrine d'une plateform de E-Com: Absolument tout ce qui est frais est sur UMONETY, Commandez vos produits et faites vous livrer rapidement",
		date: "...",
		tech: [bootstrap, html, css, figma],
		tags: ["...", "...", "..."],
		category: "web",

		link: "",
	},
	{
		name: "SPlanning",
		img: getImageList(contextSP).img,
		images: getImageList(contextSP).images,
		desc: "'Gestion des plannings scolaires de l'Université de Yaoundé 1': plateforme qui permet aux étudiants et aux enseignants de consulter facilement et rapidement des emplois de temps d'enseignement de l'université",
		date: "...",
		tech: [django, python, bootstrap, sqlite],
		tags: ["...", "...", "..."],
		category: "web",

		link: "",
	},
];

export const project = [
	{
		github: "https://github.com/Tom-michel",
		gitlab: "https://gitlab.com/Tom-michel",
		portfolio,
	},
];

export const services = [
	{
		icon: <DevicesOutlined sx={{ color: "#FCA326", fontSize: 40 + "px" }} />,
		title: "Web Development",
		desc: "I design and build professional and responsives web sites and web applications by using some of the technologies listed above.",
		colorTitle: "#FCA326",
		colorBg: "rgba(252, 163, 38, 0.05)",
		colorBtn: "rgba(252, 163, 38, 0.19)",
	},
	{
		icon: (
			<PhoneIphoneOutlined sx={{ color: "#70FF00", fontSize: 40 + "px" }} />
		),
		title: "Mobile Development",
		desc: "I design and build professional and responsives mobile applications by using some of the technologies listed above.",
		colorTitle: "#70FF00",
		colorBg: "rgba(112, 255, 0, 0.05)",
		colorBtn: "rgba(112, 255, 0, 0.19)",
	},
	{
		icon: <img width="30px" src="../images/icons/figma.svg" alt="" />,
		title: "UI Design",
		desc: "I design web and mobile appalications mock-ups, typographies and graphic charters",
		colorTitle: "#F7C30A",
		colorBg: "rgba(246, 195, 10, 0.05)",
		colorBtn: "rgba(246, 195, 10, 0.19)",
	},
];

export const contacts = [
	{
		text: "You can contact me WhatsApp, LinkedIn an twitter or directly write your message with the form below and choose a way to send.",
		zap: "../images/social/whatsapp.png",
		mail: "../images/social/gmail.png",
		urls: [
			{
				url: "https://wa.me/237656789174",
				text: "WhatsApp",
				icon: "../images/social/whatsapp.png",
			},
			{
				url: "https://www.linkedin.com/in/michel-btompe-3a0bb3234/",
				text: "@Michel BTOMPE",
				icon: "../images/social/linkedin.svg",
			},
			{
				url: "https://twitter.com/michelbtompe",
				text: "@MichelBTOMPE",
				icon: "../images/social/twitter.png",
			},
		],
	},
];
