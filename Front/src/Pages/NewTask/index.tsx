import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../Component/HeaderComponent";
import Subtitle from "../../Component/Subtitle";
import Title from "../../Component/Title";
import { Container, TextAlign } from "./style";
import { getDailyActivities } from "../../Service/Activity";
import CategoryGroup from "../../Component/CategoryGroups";
import TaskInfoInput from "../../Component/TaskInfoInputComponent";
import Bottom from "../../Component/BottomComponent";
import Button from "../../Component/ButtonComponent";
import { useNavigate } from "react-router-dom";

function NewTask() {
	const navigate = useNavigate();
	const [taskTitle, setTaskTitle] = useState("");
	const [initialDate, setInitialDate] = useState("");
	const [taskDuration, setTaskDuration] = useState("");

	const userId = "6291f52a5e055e42d43c7fa4";

	const submitForm = async () => {
		const objToSend = {
			date: "2022-05-28",
			activity: {
				category: "Trabalho",
				description: taskTitle,
				time_start: parseInt(initialDate) * 3600,
				time_end: "10000",
			},
		};
		console.log(objToSend);
		const rs = await axios.post(
			`http://54.202.232.17:5000/api/activities/create/${userId}`,
			objToSend
		);
		console.log({ rs });
		navigate(-1);
	};
	//const { category, setCategory } = useState();
	/*
	useEffect(() => {
		async function fetch() {
			return await getDailyActivities();
		}

		let result = await getDailyActivities();
		const values = result.data[0].activities.map((activity: any) => ({
			description: activity.description,
			start: activity.time_start,
		}));
		console.log(values);

		setActivities(values);
	}, []);
*/
	return (
		<>
			<Container>
				<Header />
				<TextAlign>
					<Title title="Criar tarefa" />
				</TextAlign>
				<TextAlign>
					<Subtitle title="Categoria da Tarefa" />
				</TextAlign>
				<CategoryGroup />
				<TextAlign>
					<Subtitle title="Tarefa" />
				</TextAlign>
				<TaskInfoInput
					taskTitle={taskTitle}
					setTaskTitle={setTaskTitle}
					initialDate={initialDate}
					setInitialDate={setInitialDate}
					taskDuration={taskDuration}
					setTaskDuration={setTaskDuration}
					color={"#fadcc2"}
				/>
				<Button text={"Adicionar"} onClick={submitForm} />
				{/* <Bottom /> */}
			</Container>
		</>
	);
}
export default NewTask;
