import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import Button from '../../Component/ButtonComponent';
import Header from '../../Component/HeaderComponent';
import Subtitle from '../../Component/Subtitle';
import Task from '../../Component/TaskComponent';
import Title from '../../Component/Title';
import WeekDayComponentButton from '../../Component/WeekDayComponent';
import { Bottom, Container, GapContainer, TextAlign, WeekDayContainer } from './style';
import {getDailyActivities} from '../../Service/Activity'

function MainPage() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  useEffect(   () => {
    console.log(fetch() );


  }, [])

  async function fetch(){
return await getDailyActivities();
  }
  return (
    <>
    <Header />
      <Container>
        <TextAlign>
          <Title title='Bom dia, Vinícius!' />
        </TextAlign>
        <TextAlign>
          <Subtitle title='Minha semana' />
        </TextAlign>
        <WeekDayContainer>
        <WeekDayComponentButton text='Segunda' />
        <WeekDayComponentButton text='Terça' />
        <WeekDayComponentButton text='Quarta' />


        </WeekDayContainer>
        <TextAlign>
          <Subtitle title='Tarefas do dia' />
        </TextAlign>

        <GapContainer>
          <Task color='#fadcc2' name='Fazer café da manhã' time='07:30 AM' />
          <Task color='#d9f2f2' name='Organizar tarefas' time='07:30 AM' />
          <Task color='#d9f2f2' name='Reunião do Projeto 03' time='07:30 AM' />
        </GapContainer>

        <Bottom>
          <Button text='Finalizar o dia' onClick={null}></Button>
        </Bottom>
      </Container>
    </>
  );
}
export default MainPage;
