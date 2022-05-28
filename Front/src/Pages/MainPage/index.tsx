import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import Button from "../../Component/ButtonComponent";
import Header from "../../Component/HeaderComponent";
import Subtitle from "../../Component/Subtitle";
import Task from "../../Component/TaskComponent";
import Title from "../../Component/Title";
import WeekDayComponentButton from "../../Component/WeekDayComponent";
import {
  Bottom,
  Container,
  GapContainer,
  TextAlign,
  WeekDayContainer,
} from "./style";
import { getDailyActivities } from "../../Service/Activity";

function MainPage() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [activities, setActivities] = useState<any>();
  function addTask() {
    return null;
  }

  useEffect(() => {
    async function fetch() {
      let result = await getDailyActivities();
      const values = result.data[0].activities.map((activity: any) => ({
        description: activity.description,
        start: activity.time_start,
      }));
      console.log(values);

      setActivities(values);
    }
    fetch();
  }, []);

  function toTime(seconds: number) {
    var date = new Date();
    date.setSeconds(seconds);
    console.log(seconds);
    return date.toISOString().substr(11, 5);
  }

  return (
    <>
      <Header />
      <Container>
        <TextAlign>
          <Title title="Bom dia, Vinícius!" />
        </TextAlign>
        <TextAlign>
          <Subtitle title="Minha semana" />
        </TextAlign>
        <WeekDayContainer>
          <WeekDayComponentButton text="Segunda" />
          <WeekDayComponentButton text="Terça" />
          <WeekDayComponentButton text="Quarta" />
        </WeekDayContainer>
        <TextAlign>
          <Subtitle title="Tarefas do dia" />
        </TextAlign>

        <GapContainer>
          {activities
            ? activities.map((activity: any) => (
                <Task
                  color="#fadcc2"
                  name={activity.description}
                  time={toTime(activity.start)}
                />
              ))
            : null}
        </GapContainer>
        <Circle onClick={addTask}>+</Circle>

        <Bottom>
          <Button text="Finalizar o dia" onClick={null}></Button>
        </Bottom>
      </Container>
    </>
  );
}
export default MainPage;
