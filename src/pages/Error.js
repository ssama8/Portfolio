import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Error = () => {
	document.title = "Error";
	return (
		<Wrapper id='error-container'>
			<div className='error-container'>
				<h4>404 PAGE NOT FOUND....</h4>
				<Link to='/'>
					<button className='btn'> Go Back Home</button>
				</Link>
			</div>
		</Wrapper>
	);
};

export default Error;

const Wrapper = styled.div`
	height: calc(100vh - 5rem);
	// margin-top: 5rem;
	background-color: white;

	text-align: center;
	background: red;
	.error-container {
		padding-top: 10rem;
	}
	h4 {
		margin: 4rem 0;
		font-size: 4rem;
	}
	button {
		background: black;
		cursor: pointer;
		padding: 1rem 2rem;
		font-size: 1.5rem;
	}
	button:hover {
		background: #777;
	}
`;
