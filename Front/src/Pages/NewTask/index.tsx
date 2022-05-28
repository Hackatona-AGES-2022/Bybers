import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import Header from "../../Component/HeaderComponent";
import Subtitle from "../../Component/Subtitle";
import Title from "../../Component/Title";
import { Container, TextAlign } from "./style";
import { getDailyActivities } from "../../Service/Activity";
import CategoryGroup from "../../Component/CategoryGroups";
import TaskInfoInput from "../../Component/TaskInfoInputComponent";
import Bottom from "../../Component/BottomComponent";

function NewTask() {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	//const { category, setCategory } = useState();

	useEffect(() => {
		console.log(fetch());
	}, []);

	async function fetch() {
		return await getDailyActivities();
	}

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
				<TaskInfoInput color={"#fadcc2"} />
				<Bottom />
			</Container>
		</>
	);
}
export default NewTask;
