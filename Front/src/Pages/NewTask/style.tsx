import styled from "styled-components";

export const Container = styled("div")`
	display: flex !important;
	background-color: ${(props) => props.color};
	border-radius: 16px;
	width: 100vw;
	height: 100vh;
	flex-direction: column;
	padding: 5px 0px 10px;
	text-indent: 18px;
	align-items: center;
`;

export const TextAlign = styled("span")`
	text-align: left;
	width: 100%;
`;
