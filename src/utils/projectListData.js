import ecommerce from "../images/eccomerce-screenshot.png";
import gerdSolutions from "../images/gerdsolutions-site.png";

const projects = [
	{
		id: "225bd004-dbfa-41ad-9902-9ec9a5d82297",
		link: "https://nft-collector.herokuapp.com/",
		heading: "NFT-COLLECTOR",
		image: `https://assets.bwbx.io/images/users/iqjWHBFdfxIU/im1bC58uUhvM/v0/-1x-1.jpg`,
		description:
			"Built with express, nodejs, vanilla js, css, and html, you can buy and sell bathing nfts and even add your own custom nfts to your portfolio.",
		description2: `NFT Collector uses node and express on the backend and plain old javascript on the front end. It has user authentication using a rest api that stores users as well as different nfts the user can dynamically add. It has all of the CRUD functionalities as you can create, update and delete your account and...`,
	},

	{
		id: "a47cf179-35c8-4921-b347-fb98e8309f12",
		link: "https://samas-sporting-goods-store.netlify.app/",
		heading: "Samas Sporting Goods",
		image: `${ecommerce}`,
		description:
			"Built with React and using NETLIFY serverless functions on  the backend, Samas Sporting Goods is a full stack e-commerce app that has authentication with auth 0  and is connected with Stripe to process payments. ",
		description2:
			"Samas Sporting Goods is built with React and a rest api built with netlify serverless functions to provide data for the different products of the store. It uses react router to navigate between the different pages and has user authenticantion with auth0. The app relies on context and reducer to manage state of...",
	},
	{
		id: "4703da7c-fa33-424f-ba57-44cf4a81bb1e",
		link: "https://gerdsolutions.com/",
		heading: "WordPress Blog",
		image: `${gerdSolutions} `,
		description:
			"Built with Wordpress and using a plethora of seo plugins and techniques, gerd solutions is blog with rich seo content for people who suffer from GERD.",
		description2:
			"This project is very close to me as I have been suffering from chronic gerd for the past 3 years or so. After countless hours of research and trial and error I've managed to keep my symptoms tolerable. It uses Wordpress and host gator to host the site and is connected with aweber which sgives anyone who signs up a free.... ",
	},
];

export default projects;
