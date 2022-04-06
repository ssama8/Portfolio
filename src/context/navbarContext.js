import gerdSolutions from "../images/gerdsolutions-site.png";
import ecommerce from "../images/eccomerce-screenshot.png";
const projects = [
	{
		id: 1,
		link: "https://nft-collector.herokuapp.com/",
		heading: "NFT-COLLECTOR",
		image: ` url(https://assets.bwbx.io/images/users/iqjWHBFdfxIU/im1bC58uUhvM/v0/-1x-1.jpg)
		center center/cover no-repeat `,
		description:
			"Built with express, nodejs, vanilla js, css, and html, you can buy and sell bathing nfts and even add your own custom nfts to your portfolio.",
	},
	{
		id: 2,
		link: "https://nft-collector.herokuapp.com/",
		heading: "Samas Sporting Goods",
		image: `url(${ecommerce})
		center center/cover no-repeat`,
		description:
			"Built with React and using NETLIFY serverless functions on  the backend, Samas Sporting Goods is a full stack e-commerce app that has authentication with auth0 and is connected with Stripe to process payments. ",
	},
	{
		id: 3,
		link: "https://nft-collector.herokuapp.com/",
		heading: "WordPress Blog",
		image: `url(${gerdSolutions})
		top center/cover no-repeat`,
		description:
			"Built with express, nodejs, vanilla js, css, and html, you can buy and sell bathing nfts and even add your own custom nfts to your portfolio.",
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
