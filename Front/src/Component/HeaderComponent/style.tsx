import styled from "styled-components";

export const Container = styled("div")`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: auto;
	flex-direction: row;
	padding: 25px;
	position: absolute;
	top: 0px;
	width: -webkit-fill-available;
	height: 5vh;
	box-shadow: 0px -5px 10px black;
`;

export const Image = styled("img")`
	max-width: 10vw;
`;
