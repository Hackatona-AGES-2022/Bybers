import React from "react";
import { Container, TextBold } from "./style";

interface Props {
	title: string;
	color: string;
}
const CategoryBox: React.FC<Props> = ({ title, color, ...props }: Props) => {
	return (
		<Container color={color}>
			<TextBold>{title}</TextBold>
		</Container>
	);
};

export default CategoryBox;
