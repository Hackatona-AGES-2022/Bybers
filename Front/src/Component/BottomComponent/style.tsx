import styled from "styled-components";

export const Container = styled("div")`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: white;
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 10vh;
	box-shadow: 0px 5px 10px black;
`;

export const Divider = styled("div")`
	display: flex;
	height: 2px;
	position: absolute;
	top: 0px;
	width: 100%;
`;
