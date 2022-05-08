import gerdSolutions from "../images/gerdsolutions-site.png";
import ecommerce from "../images/eccomerce-screenshot.png";
import nba from "../images/nba-trivia-screenshot.png";

const projects = [
	{
		id: 1,
		link: "https://nft-collector.herokuapp.com/",
		heading: "NFT-COLLECTOR",
		image: ` url(https://assets.bwbx.io/images/users/iqjWHBFdfxIU/im1bC58uUhvM/v0/-1x-1.jpg)
		center center/cover no-repeat `,
		description:
			"Buy and Sell bathing nfts and even add your own custom nfts to your portfolio.",
	},
	{
		id: 2,
		link: "https://nba-quiz-app-2017-2018.netlify.app/",
		heading: "NBA Trivia (2017-2018)",
		image: `url(${nba}) center center/cover no-repeat`,
		description:
			"Create an account and track your progress as you put you NBA knowledge to the test",
	},
	// id: "7ed7a2b9-0318-4cb2-8ce6-b25e2ec0c6b7",
	// link: "https://nba-quiz-app-2017-2018.netlify.app/",
	// heading: "NBA Trivia (2017-2018)",
	// image: `${nbaTrivia}`,
	// description:
	// 	"Completed Full Stack NBA trivia app where users are able to create an account and take quizzes on all of the 30 teams, based on the 2017-2018 NBA season.",
	// description2:
	// 	"NBA Trivia (2017-2018) ia a full-stack app that uses React, Tailwind, and CSS on the frontend, and Node, Express, and MongoDB on the backend. It gets data on 400+ different players from the 2018 season and dynamically creates questions asking about...",
	// github: "https://github.com/ssama8/NBA-Quiz-App-",
	{
		id: 3,
		link: "https://nft-collector.herokuapp.com/",
		heading: "Samas Sporting Goods",
		image: `url(${ecommerce})
		center center/cover no-repeat`,
		description:
			" Full stack e-commerce app that has authentication with auth0 and is connected with Stripe to process payments. ",
	},
	{
		id: 4,
		link: "https://nft-collector.herokuapp.com/",
		heading: "WordPress Blog",
		image: `url(${gerdSolutions})
		top center/cover no-repeat`,
		description: "Wordpress blog with rich SEO content and information on GERD",
	},
];

const navPages = [
	{ heading: "Home", ul: false },
	{ heading: "Projects", ul: false },
	{ heading: "Videos", ul: false },
	{ heading: "Socials", ul: false },
	{
		heading: "Settings",
		ul: true,
		listItems: [
			{ heading: "Themes", ul: true, listItems: ["dark", "light", "laker"] },
			{ heading: "Slider-Speed" },
		],
	},
];

export default navPages;

export { projects };
