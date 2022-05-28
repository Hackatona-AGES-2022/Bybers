import { useSnackbar } from "notistack";
import Button from "../../Component/ButtonComponent";
import Header from "../../Component/HeaderComponent";
import SliderComponent from "../../Component/SliderComponent";
import Subtitle from "../../Component/Subtitle";
import Task from "../../Component/TaskComponent";
import Title from "../../Component/Title";
import WeekDayComponentButton from "../../Component/WeekDayComponent";
import TaskInput from "../../Component/TaskInfoInputComponent/TaskInputComponent";
import {
  Bottom,
  Container,
  GapContainer,
  TextAlign,
  WeekDayContainer,
  Image,
  ContainerSlider,
  p,
} from "./style";
import emoticons from "../../Assets/imgs/emoticon.svg";
function DayReport() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return (
    <>
      <Header />
      <Container>
        <Title title="Muito bem, Vinícius!" />

        <TextAlign>
          <Subtitle title="Você realizou 8 horas de atividades" />
        </TextAlign>

        <TextAlign>
          <Subtitle title="Você descansou 2 horas hoje! Muito bem. Descanso é essencial" />
        </TextAlign>
        <GapContainer></GapContainer>
        <h2>Como foi seu dia?</h2>
        <Image src={emoticons}></Image>
        <ContainerSlider>
          <SliderComponent />
        </ContainerSlider>

        <TaskInput title="O que aconteceu de importante hoje?" />
        <Bottom>
          <Button text="Salvar relatório" onClick={null}></Button>
        </Bottom>
      </Container>
    </>
  );
}
export default DayReport;
