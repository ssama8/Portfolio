import React, { useState } from "react";
import featuredProjects from "../../images/sporting-goods-images/featured-products.png";
import singleProduct from "../../images/sporting-goods-images/single-product.png";
import checkout from "../../images/sporting-goods-images/cart-page.png";
import styled from "styled-components";
import { MdOutlineClose } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

const SportingGoods = () => {
	const [showcaseVisibility, setShowcaseVisibility] = useState("none");
	const [showcaseSrc, setShowcaseSrc] = useState("");
	return (
		<Wrapper>
			<h2>Samas Sporting Goods</h2>

			<div className='showcase-post' style={{ display: showcaseVisibility }}>
				<div className='inside'>
					<MdOutlineClose
						className='icon'
						onClick={() => setShowcaseVisibility("none")}
					/>
					<img src={showcaseSrc} alt='' />
				</div>
			</div>
			<iframe
				className='video'
				src='https://www.youtube.com/embed/ao6imr02_5w'
				title='Samas Sporting Goods Project Walkthrough'>
				<a
					href='https://www.youtube.com/watch?v=ao6imr02_5w'
					target='_blank'
					rel='noreferrer'>
					Watch Walkthrough
				</a>
			</iframe>

			<div className='external-link-container'>
				<a
					href='https://samas-sporting-goods-store.netlify.app/'
					target='_blank'
					rel='noreferrer'
					className='external-link'>
					Go To Project
				</a>
				<a
					href='https://github.com/ssama8/react-ecommerce-project'
					target='_blank'
					className='external-link'
					rel='noreferrer'
					id='github-btn'>
					<BsGithub />
					View Github Repo
				</a>
			</div>

			<h3>Overview</h3>
			<div className='content-section'>
				<div className='container'>
					<img
						className='image'
						src={featuredProjects}
						onClick={(e) => {
							setShowcaseSrc(e.target.src);
							setShowcaseVisibility("block");
						}}
						alt='Featured Projects'
					/>
					<p className='top-p'>
						Samas Sporting Goods is a frontend application that uses a rest api
						to get data to populate the products.It uses react-router to
						navigate between the different pages of the site. There are paths to
						the home page, about page, products page, cart page, and the single
						product page. The checkout page however is a private route hidden to
						anybody that has not been authenticated or logged in, which prevents
						them from paying. The navbar and footer are on every page. There is
						also an error page if someone navigates to a url not specified in
						the router. Every page also has a section below the navbar that has
						links to past pages.
					</p>
				</div>

				<p className='bottom-p'>
					The home page is a hub for everything in the app, and doesn't have
					much logic. When the page loads a Showcase or Hero props up with a
					link to the product page to shop. There's a featured products
					component that maps through the array of products received by the get
					request and finds the ones that have a feautered key. If there are
					more than 3 feautured products, then it picks any random 3 from the
					list of products. There's a services component that shows off some
					cool styles, as the little boxes scale and change color on hover.
					Theres also a newsletter that users can subscribe to.
				</p>
			</div>

			<h3>Products</h3>

			<div className='content-section'>
				<div className='container reverse-grid'>
					<img
						className='image'
						src={singleProduct}
						alt='Product Page'
						onClick={(e) => {
							setShowcaseSrc(e.target.src);
							setShowcaseVisibility("block");
						}}
					/>
					<p className='top-p'>
						The products page has a lot of logic and a plethora of components.
						It takes the data fetched on-mount and organizes it in a grid or
						list view depending on what the user chooses. There are also filters
						that the user can use to find the products they are looking for. On
						the very right of the page, there's a sort by dropdown that allows
						the user to sort by the price and name. This is done by using
						useContext and useReducer to dispatch certain actions when a
						different sort is selected. The filtering is completely dynamic so
						you can integrate any API with the app as long as you have category
						and company keys. The Unique Values in the utils folder gets all the
						different categories and companies from the API. There's also a neat
						price slider that shows products below a certain price.
					</p>
				</div>

				<p className='bottom-p'>
					The single product page shows if the item is in stock, the customer
					reviews, the brand, SKU, colors, and has a toggle functionality where
					you can add and subtract the amount as long as the numbers are not
					greater than the stock. All of this data is received from the API
					on-mount using useEffect and stored in the context so that the props
					are passed down the component tree. If there are no items in stock you
					can't add them to the cart.
				</p>
			</div>

			<h3>Checkout </h3>

			<div className='content-section'>
				<div className='container'>
					<img
						className='image'
						src={checkout}
						alt='checkout section'
						onClick={(e) => {
							setShowcaseSrc(e.target.src);
							setShowcaseVisibility("block");
						}}
					/>
					<p className='top-p'>
						The cart page displays the color and the amount of a certain item.
						You can toggle the quantity or delete a certain item. Thee is also a
						cart totals component that displays the total price passed down from
						the products context and a dynamic button that either navigates you
						to the login page if you aren't already logged in or to the checkout
						page where you purchase the item.
					</p>
				</div>

				<p className='bottom-p'>
					Integrated with Stripe the checkout page also has the cartItem
					component to display the amount of a certain item but also has a card
					component where the user can submit their credit card info. The button
					will only be clickable if the card is valid and that's when the
					serverless netlify function communicates with stripe as a middleman to
					make the app more secure. If there is a client secret in the token
					then the payment goes through if not then there's an error and no
					payment is made.
				</p>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	max-width: 1400px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	h2 {
		margin: 1.5rem 0;
		font-size: 3rem;
	}

	.video {
		margin-top: 2rem;
		width: 60vw;
		max-width: 1000px;
		height: 30vh;
	}
	.showcase-post {
		position: fixed;
		top: 5em;
		align-self: center;
		// margin-top: 10vh;
		height: 100vh;
		width: 100vw;
		z-index: 100;
		display: flex;

		.inside {
			width: 70vw;
			top: calc(20vh);
			max-width: 1400px;
			position: relative;
			margin: 0 auto;
			height: 800px;
			justify-content: center;
			display: flex;
			background-color: #999;

			padding: 3rem;
			padding-top: 4rem;
			.icon {
				position: absolute;
				top: 0px;
				font-size: 4rem;
				color: red;
				right: 10px;
			}
			img {
				align-self: center;
				height: 50%;
				width: 60%;
				text-align: center;
				transform: scale(1.75);
			}
		}
	}

	.showcase-post:before {
		content: "";
		position: absolute;
		background-color: #eee;
		opacity: 0.5;
		width: 100%;
		height: 100vh;
	}
	h3 {
		font-size: 2rem;
		margin: 2rem 0;
	}
	img {
		width: 100%;
		height: 90%;
		max-width: 400px;
		border-radius: 10px;
		border: 1px solid #aaa;
	}
	p {
		font-size: 1.5rem;
		line-height: 1.6;
	}
	img {
		margin: 0 auto;
	}
	.image-container {
		grid-area: image;
	}
	.top-p {
		grid-area: desc;
		align-self: center;
	}

	.content-section {
		width: 80vw;

		max-width: 1200px;
		margin: 2rem auto;
		.container {
			display: grid;
			grid-gap: 3rem;
			grid-template-areas: "image desc";
		}
		display: flex;
		flex-direction: column;
		.reverse-grid {
			grid-template-areas: "desc image";
		}
	}

	.conclusion {
		max-width: 1200px;
		margin-bottom: 2rem;
	}

	@media screen and (max-width: 1200px) {
		.content-section {
			width: 80vw;
		}
		img {
			width: 100%;
			height: 80%;
		}
		p {
			font-size: 1.1rem;
		}
		.conclusion {
			width: 80vw;
		}
	}

	@media screen and (max-width: 850px) {
		p {
			font-size: 0.85rem;
			font-weight: bold;
		}
		h3 {
			font-size: 1.5rem;
			margin: 0rem 0;
		}
	}
	@media screen and (max-width: 768px) {
		.showcase-post:before {
			margin-top: -5rem;
		}
		.content-section {
			width: 80vw;

			max-width: 1200px;
			.container {
				display: grid;
				grid-gap: 0rem;
				grid-template-areas: "image" "desc";
			}
			display: flex;
			flex-direction: column;
			.reverse-grid {
				grid-gap: 1rem;
				grid-template-areas: "desc" "image";
				text-align: center;
				img {
					margin-bottom: -5rem;
				}
			}
		}
		.showcase-post .inside {
			padding: 1rem;
			width: 100%;
		}
		.showcase-post .inside img {
			height: 30%;
			width: 90%;
			transform: scale(1.1);
		}
		.showcase-post .inside .icon {
			font-size: 2rem;
		}
	}
	@media screen and (max-width: 400px) {
		text-align: center;
	}
`;
export default SportingGoods;
