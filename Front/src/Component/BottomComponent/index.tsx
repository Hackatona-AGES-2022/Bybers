import React from "react";
import { Container, Divider } from "./style";
import { useNavigate } from "react-router-dom";
import HomeIcon from "../../Assets/imgs/Shape.svg";

interface Props {}
const Bottom: React.FC<Props> = ({ ...props }: Props) => {
	const navigate = useNavigate();

	return (
		<Container>
			<Divider />
			<img
				onClick={() => {
					navigate("/");
				}}
				src={HomeIcon}
			/>
		</Container>
	);
};

export default Bottom;
