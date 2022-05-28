import React from "react";
import TaskInput from "./TaskInputComponent";
import { OutterContainer, InnerContainer } from "./style";

interface Props {
	color: string;
}
const TaskInfoInput: React.FC<Props> = ({ color }: Props) => {
	return (
		<OutterContainer color={color}>
			<TaskInput title="Titulo da Tarefa: " />
			<InnerContainer>
				<TaskInput type="datetime-local" title="Data inicial: " />
				<TaskInput type="time" title="Duração: " />
			</InnerContainer>
		</OutterContainer>
	);
};

export default TaskInfoInput;
