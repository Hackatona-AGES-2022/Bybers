import React, { Dispatch, SetStateAction } from "react";
import Input from "./TaskInputComponent";
import { OutterContainer } from "./style";

interface Props {
	color: string;
	taskTitle: string;
	initialDate: string;
	taskDuration: string;
	setTaskTitle: Dispatch<SetStateAction<string>>;
	setInitialDate: Dispatch<SetStateAction<string>>;
	setTaskDuration: Dispatch<SetStateAction<string>>;
}
const TaskInfoInput: React.FC<Props> = ({
	color,
	initialDate,
	taskTitle,
	taskDuration,
	setTaskTitle,
	setInitialDate,
	setTaskDuration,
}: Props) => {
	return (
		<OutterContainer color={color}>
			<Input
				title="Titulo da Tarefa"
				value={taskTitle}
				onChange={setTaskTitle}
			/>
			<Input
				title="Horario inicial"
				value={initialDate}
				onChange={setInitialDate}
			/>
			<Input
				title="Duração"
				value={taskDuration}
				onChange={setTaskDuration}
			/>
		</OutterContainer>
	);
};

export default TaskInfoInput;
