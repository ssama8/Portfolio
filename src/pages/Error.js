import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Error = () => {
	document.title = "Error";
	return (
		<Wrapper>
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
	height: calc(100vh - 10rem);
	margin-top: 5rem;
	text-align: center;
	background: red;
	h4 {
		margin-top: 4rem;
		font-size: 4rem;
	}
	button {
		background: black;
		cursor: pointer;
	}
	button:hover {
		background: #777;
	}
`;
