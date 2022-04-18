import React, { useState } from "react";
import nftSignUpForm from "../../images/nft-collector-images/Signup-Form.png";
import nftaddnft from "../../images/nft-collector-images/nft-collector-add-nft.png";
import styled from "styled-components";
import { MdOutlineClose } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

const NFTCollectorPost = () => {
	const [showcaseVisibility, setShowcaseVisibility] = useState("none");
	const [showcaseSrc, setShowcaseSrc] = useState("");
	return (
		<Wrapper>
			<h2>NFT Collector</h2>

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
				src='https://www.youtube.com/embed/HZwRwOPMf5U'
				title='nft-collector project walkthrough'>
				<a href='https://www.youtube.com/watch?v=HZwRwOPMf5U'>
					Watch Walkthrough
				</a>
			</iframe>
			<div className='external-link-container'>
				<a
					href='https://nft-collector.herokuapp.com/'
					target='_blank'
					className='external-link'
					rel='noreferrer'>
					Go To Project
				</a>
				<a
					href='https://github.com/ssama8/NFT-Collector'
					target='_blank'
					rel='noreferrer'
					className='external-link'
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
						src={nftSignUpForm}
						alt='Sign Up Form'
						onClick={(e) => {
							setShowcaseSrc(e.target.src);
							setShowcaseVisibility("block");
						}}
					/>
					<p className='top-p'>
						NFT Collector is a fun, fullstack application that uses node and
						express on the backend and plain old javascript on the front end.
						You can create buy and sell different nfts and watch your net worth
						on paper skyrocket. It also has user authentication using a rest api
						that stores users as well as different default nfts the user can
						dynamically add to their portfolio. The api on the backend has has
						all of the CRUD functionalities as you can create, update and delete
						your account. You can also make a get request to get the users or
						nfts.
					</p>
				</div>

				<p className='bottom-p'>
					There's a sign up page that has a form where you are required to make
					a username and password. The passwords both need to match and there
					needs to be atleast 6 characters in the username with atleast one
					number and 8 characters and at least one number in the password which
					is done through regular expressions. You can also toggle the
					visibility of the password as you please. Once you made a username and
					password, a list of profile pictures appear that you can pick from as
					your own profile picture. Don't worry if you change your mind later,
					you can always go back and change your username, password, and profile
					picture.
				</p>
			</div>
			<h3>Features and Functionality</h3>
			{/* <img src={nftCollectorLogin} alt='Login State' /> */}
			<div className='content-section'>
				<div className='container reverse-grid'>
					<div className='image-container'>
						<img
							src={nftaddnft}
							alt='Add NFT Page'
							onClick={(e) => {
								setShowcaseSrc(e.target.src);
								setShowcaseVisibility("block");
							}}
						/>
					</div>
					<p>
						After you login you are now able to use all of the different
						features. When you buy nfts from the gallery, you can order 10 at a
						time. Once you select the quantity to get redirected to a checkout
						screen where you can double click the image to screenshot it and add
						it to your portfolio. On your portfolio page, you can view all of
						your nfts and view the total worth of your portfolio on paper. This
						is all fun and games after all as screenshoting a ranodom image
						doesn't make you money if you're notfamous or have some sort of
						following. From the portfolio, you can sell the nfts back but you
						don't get any money becuase all of the value is on paper. Whats
						crazy about the default nfts though is that the rediculus prices
						like 1.91 million was actually the amount that someone paid for that
						specific nft and you get to have it in your portfolio for free.
					</p>
				</div>

				<p>
					You can also add a nft with a custom name, price, and image. The image
					must be the image address because of cors bugs that don't allow for a
					image url to be submitted. There is a check for this where if the
					image isn't valid then it shows the error. Once you submit the custom
					values you get a preview of what the NFT will look like. If you decide
					that it doesn't look the way you wanted. You can always go back and
					change your values
				</p>
			</div>

			<h3>TakeAways</h3>
			<p className='conclusion'>
				NFT collector was definitely my favorite project to build. It was a lot
				of fun and I learned a lot form it. It was actually my first experience
				awith node js and express. THe repo was initially going to be a node
				tutorial sandbox but It ended up being a dull stack functioning
				application. At the time however, I hadn't learned React yet so it was a
				lot of repition and ended up being a bunch of lines of code. If I had
				the knowledge I have now I would definitely have had components for the
				different pages and had some sort of context for the login so that I
				didn't need to make a get request on every single page.
			</p>
		</Wrapper>
	);
};
const Wrapper = styled.section`
	max-width: 1400px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	.content-section img {
		width: 100%;
		height: 90%;
		max-width: 400px;
		border-radius: 10px;
	}
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
			justify-content: center;
			display: flex;
			background-color: white;
			padding: 3rem;
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
	}
	@media screen and (max-width: 400px) {
		text-align: center;
	}
`;
export default NFTCollectorPost;
