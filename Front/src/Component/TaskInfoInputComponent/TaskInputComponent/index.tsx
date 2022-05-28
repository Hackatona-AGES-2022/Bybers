import React, { Dispatch, SetStateAction } from "react";
import { Container, Text, Input } from "./style";

interface Props {
	title: string;
	type?: string;
	value?: string;
	onChange?: Dispatch<SetStateAction<string>>;
}
const TaskInput: React.FC<Props> = ({
	title,
	type = "text",
	onChange,
	value,
	...props
}: Props) => {
	return (
		<Container>
			<Text>{title}</Text>
			<Input
				type={type}
				onChange={(e) => onChange?.(e.target.value)}
				value={value}
			/>
		</Container>
	);
};

export default TaskInput;
