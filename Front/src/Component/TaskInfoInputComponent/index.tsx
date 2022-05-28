import React from "react";
import Input from "./InputComponent";
import { OutterContainer, InnerContainer } from "./style";

interface Props {
	color: string;
}
const TaskInfoInput: React.FC<Props> = ({ color }: Props) => {
	return (
		<OutterContainer color={color}>
			<Input title="Titulo da Tarefa" />
			<InnerContainer>
				<Input type="datetime-local" title="Data inicial" />
				<Input type="time" title="Duração" />
			</InnerContainer>
		</OutterContainer>
	);
};

export default TaskInfoInput;
