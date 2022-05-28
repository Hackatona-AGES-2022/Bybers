import React from "react";
import { Container, Text, Input } from "./style";

interface Props {
	title: string;
	type?: string;
}
const TaskInput: React.FC<Props> = ({
	title,
	type = "text",
	...props
}: Props) => {
	return (
		<Container>
			<Text>{title}: </Text>
			<Input type={type} />
		</Container>
	);
};

export default TaskInput;
