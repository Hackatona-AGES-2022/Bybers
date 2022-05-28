import { useSnackbar } from 'notistack';
import Button from '../../Component/ButtonComponent';
import Subtitle from '../../Component/Subtitle';
import Task from '../../Component/TaskComponent';
import Title from '../../Component/Title';
import  {Bottom, Container, GapContainer, TextAlign}  from './style';

function MainPage() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();


  return (
<>
    <Container>
      <TextAlign>
        <Title title='Bom dia, Vinícius!'/>
        <Subtitle title='Minha semana'/>
        <Subtitle title='Tarefas do dia'/>
      </TextAlign>

      <GapContainer>
        <Task color='#F09E54' name='Fazer café da manhã' time='07:30 AM'/>
        <Task color='#F09E54' name='Fazer café da manhã' time='07:30 AM'/>
        <Task color='#F09E54' name='Fazer café da manhã' time='07:30 AM'/>
        </GapContainer>
        
        <Bottom>
          <Button text='Finalizar o dia' onClick={null}></Button>
        </Bottom>
    </Container>
</>
  );
  }
export default MainPage;
