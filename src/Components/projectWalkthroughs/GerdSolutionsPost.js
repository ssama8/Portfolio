import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineClose } from "react-icons/md";
import nftSignUpForm from "../../images/nft-collector-images/Signup-Form.png";
import featuredProjects from "../../images/sporting-goods-images/featured-products.png";
import singleProduct from "../../images/sporting-goods-images/single-product.png";
import checkout from "../../images/sporting-goods-images/cart-page.png";
import lowStomachAcid from "../../images/gerdsolutions-site.png";
const GerdSolutions = () => {
	const [showcaseVisibility, setShowcaseVisibility] = useState("none");
	const [showcaseSrc, setShowcaseSrc] = useState("");
	return (
		<Wrapper>
			<h2>Gerd Solutions</h2>
			<div className='showcase-post' style={{ display: showcaseVisibility }}>
				<div className='inside'>
					<MdOutlineClose
						className='icon'
						onClick={() => setShowcaseVisibility("none")}
					/>
					<img src={showcaseSrc} alt='' />
				</div>
			</div>

			<a
				href='https://gerdsolutions.com/'
				target='_blank'
				className='external-link'>
				Go To Project
			</a>
			<h3>Overview</h3>
			<div className='content-section'>
				<div className='container'>
					<img
						className='image'
						src={lowStomachAcid}
						onClick={(e) => {
							setShowcaseSrc(e.target.src);
							setShowcaseVisibility("block");
						}}
						// src='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/im1bC58uUhvM/v0/-1x-1.jpg'
						alt='Featured Projects'
					/>
					<p className='top-p'>
						Gerd Solutions is an SEO Optimized blog that talks about GERD and
						ways to relieve the symptoms. I personally have struggled with GERD
						for the past couple of years and none of the medication doctors
						prescribed for me worked. After many days of pain, and trial and
						error, I've managed to manage my symptoms and go back to living my
						life.
						<br />
						It's a WordPress site that uses many SEO plugins like Yoast SEO,
						Traffic Travis, Monster Insights, etc... I also used tools like
						Screaming Frog and SemRush to find longer-tailed keywords that are
						easier to rank for. It's extremely hard and may take years to
						decades to get your site to rank for keywords like "pizza" or
						"sports" but ranking for a keyword like "treating low stomach acid"
						is much easier and you know that it's very likely that if someone
						clicks on your page they will spend time on it because their search
						is so specific. I also made sure that all of the titles were
						relevant to the articles, the images all had alt text, and the site
						was well structured and easy to navigate. A common mistake is to
						pick the header tags based on the size of the text you want. In
						reality, search engines look at these header tags and you want your
						h1 and h2 tags to be related to keywords you want to rank for and
						you can make the text as big as you want with CSS.
					</p>
				</div>

				<p className='bottom-p'>
					I've also connected external tools like Google Analytics and Google
					Search Console to track traffic and look at how long people are
					spending on different areas of the site. Metrics like bounce rate in
					analytics helped fix things on different pages. If I saw that there
					was only one or a couple of pages that had a bounce rate much higher
					than the others then I would know that either the content wasn't
					engaging or there was a problem with the site speed. Google Search The
					console also helped me see where my site was ranking for different
					keywords. I could see how many impressions I was getting meaning how
					many times did Google recognize my website, and what page my site was
					appearing on in the SERP results. A newsletter form is also present on
					every page connected to Aweber, where is you sign up you get an
					exclusive article for free on exactly what I did to help relieve my
					symptoms.
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
			// border-radius: 10px;
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
	@media screen and (max-width: 750px) {
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

export default GerdSolutions;
