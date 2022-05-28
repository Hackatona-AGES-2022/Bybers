import React from "react";
import { Container, Image } from "./style";
import { useNavigate } from "react-router-dom";
import ConfigIcon from "../../Assets/imgs/Gear.svg";
import UserIcon from "../../Assets/imgs/User.svg";

interface Props {}
const Header: React.FC<Props> = ({ ...props }: Props) => {
	const navigate = useNavigate();

	return (
		<Container>
			<Image src={UserIcon} />
			<Image src={ConfigIcon} />
		</Container>
	);
};

export default Header;
