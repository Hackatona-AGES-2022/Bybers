import styled from "styled-components";

export const Container = styled("div")<{ color: string }>`
	display: flex;
	background-color: ${(props) => props.color};
	border-radius: 10px;
	min-width: 45vw;
	height: 60px;
	flex-direction: column;
	padding: 10px 0px;
	text-indent: 18px;
	justify-content: space-evenly;
`;

export const TextBold = styled("p")`
	font-size: 16px;
	font-weight: bold;
	margin: 5px 0px;
`;
