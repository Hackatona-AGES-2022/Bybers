import React from "react";
import Input from "./TaskInputComponent";
import { OutterContainer } from "./style";

interface Props {
	color: string;
}
const TaskInfoInput: React.FC<Props> = ({ color }: Props) => {
	return (
		<OutterContainer color={color}>
			<Input title="Titulo da Tarefa" />
			<Input title="Data inicial" />
			<Input title="Duração" />
		</OutterContainer>
	);
};

export default TaskInfoInput;
