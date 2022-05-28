import React from "react";
import CategoryBox from "./CategoryBoxComponent";
import { Container } from "./style";

const CategoryGroup: React.FC = () => {
	return (
		<Container>
			<CategoryBox title="Rotineiras" color="#FADCC2" />
			<CategoryBox title="Estudos" color="#C3F2A5" />
			<CategoryBox title="Trabalho" color="#A0E3E2" />
			<CategoryBox title="Lazer" color="#AEAFF7" />
		</Container>
	);
};

export default CategoryGroup;
