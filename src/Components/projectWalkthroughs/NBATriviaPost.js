import React, { useState } from "react";
import nftaddnft from "../../images/nft-collector-images/nft-collector-add-nft.png";
import nbaQuiz from "../../images/nba-images/Quiz-Example.png";
import nbaForm from "../../images/nba-images/NBA-Trivia-Form.png";
import styled from "styled-components";
import { MdOutlineClose } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

const NFTCollectorPost = () => {
	const [showcaseVisibility, setShowcaseVisibility] = useState("none");
	const [showcaseSrc, setShowcaseSrc] = useState("");
	return (
		<Wrapper>
			<h2>NBA Trivia (2017-2018)</h2>

			<div className='showcase-post' style={{ display: showcaseVisibility }}>
				<div className='inside'>
					<MdOutlineClose
						className='icon'
						onClick={() => setShowcaseVisibility("none")}
					/>
					<img src={showcaseSrc} alt='' />
				</div>
			</div>
			{/* <iframe
				className='video'
				src='https://www.youtube.com/embed/HZwRwOPMf5U'
				title='nft-collector project walkthrough'>
				<a href='https://www.youtube.com/watch?v=HZwRwOPMf5U'>
					Watch Walkthrough
				</a>
			</iframe> */}
			<div className='external-link-container'>
				<a
					href='https://nba-quiz-app-2017-2018.netlify.app/'
					target='_blank'
					className='external-link'
					rel='noreferrer'>
					Go To Project
				</a>
				<a
					href='https://github.com/ssama8/NBA-Quiz-App-'
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
						src={nbaForm}
						alt='NBA Trivia Signup Form'
						onClick={(e) => {
							setShowcaseSrc(e.target.src);
							setShowcaseVisibility("block");
						}}
					/>
					<p className='top-p'>
						NBA Trivia (2017-2018) is a full-stack application where you can
						create an account and take quizzes on different NBA teams based on
						the 2017-2018 NBA season. The frontend is built with React and the
						backend is built with NodeJs with Express, and connected to MongoDB.
						It uses an external API to get data on 400+ players that played
						during the 2017-2018 season. Having a 4-10 question quiz based on so
						many players however, doesn't seem practical and I wanted to make it
						so that you can take a quiz for each team with roughly 10-15 players
						based on the team. Luckily the API accepts requests with the team
						abbreviation as the parameter and it returns an array of all of the
						players on that team as objects with the stats as keys.
					</p>
				</div>

				<p className='bottom-p'>
					To start, you need to make an account with a username and password.
					The username and password need to have at least one number and be
					longer than 6 characters. The form fields are created using reusable
					components with Tailwind CSS that passes values back up the component
					tree to be validated. If the values are valid and you chose a username
					that hasn't been selected already by another user, an account is
					created for you. Once you successfully created your account, you can
					log in and start taking quizzes.
				</p>
			</div>
			<h3>How do the Quizzes work?</h3>
			{/* <img src={nftCollectorLogin} alt='Login State' /> */}
			<div className='content-section'>
				<div className='container reverse-grid'>
					<div className='image-container'>
						<img
							src={nbaQuiz}
							alt='Example Quiz'
							onClick={(e) => {
								setShowcaseSrc(e.target.src);
								setShowcaseVisibility("block");
							}}
						/>
					</div>
					<p>
						Once you successfully login you will be able to start taking quizzes
						and track your progress. To start, you click on the team that you
						want to be quizzed on, and select how many questions you want to be
						asked. The range of questions is between 4 and 10 and if you get the
						same score but answered more questions, the quiz with more questions
						will be the better score and saved to your account. You will be
						asked a question like Who Averaged 15.3 ppg? and have 4 different
						options of players with images that you can click on to answer. If
						the image can't be found then it will default to a blank profile
						photo. If you get the answer right, you get a green background and
						if you get it wrong you get a red background and can see which
						answer was the right one.
					</p>
				</div>

				<p>
					After you take a quiz, it is saved to your account, and you can see
					the result in the history tab. The history tab has a dropdown that
					allows you to sort all of your quizzes by the date, score, and team
					name. You have a choice of seeing your data in card components or in a
					graph. The graph is dynamically made with Chartfusion. and also has
					two tables of both conferences where you can see the data by
					conference. If you get a better score than the first time you've taken
					the quiz, it will override that result in your account and the new
					score will be displayed. If for example, you got a 75 the first time
					you took the quiz on the Lakers and you take it again and get a 60,
					your 75 will stay and the 60 will be thrown out like it never happened
				</p>
			</div>

			<h3>What are the colors around the logos?</h3>
			<p className='conclusion'>
				If you have already taken quizzes you will notice the home page with all
				of the team logos will look different. There's a legend in the bottom
				right that helps you understand what's going on but for all teams you've
				completed a quiz on, you get a border of a certain color around that
				team. Red means you failed and got under a 50%. 50-74 means that you
				have passed and you get a yellow border and green means you exceeded and
				is from 75-100. You can also click on the view result button to get a
				modal of the details of that quiz including the number of questions, how
				many you got right, your score, and how long it's been since you've
				taken the quiz.
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
