import styled from "styled-components";

export const OutterContainer = styled("div")<{ color: string }>`
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.color};
	width: 85vw;
	padding: 15px;
	border: none;
	border-radius: 15px;
	margin-bottom: 3vh;
`;
export const InnerContainer = styled("div")`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-inline: 5px;
`;
