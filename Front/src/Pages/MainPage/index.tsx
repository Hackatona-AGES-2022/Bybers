import { useSnackbar } from 'notistack';
import Subtitle from '../../Component/Subtitle';
import Task from '../../Component/TaskComponent';
import Title from '../../Component/Title';
import  {Container}  from './style';

function MainPage() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();


  return (
<>
    <Container>
        <Title title='Bom dia, Vinícius!'/>
        <Subtitle title='Minha semana'/>

        <Subtitle title='Tarefas do dia'/>

        <Task color='#F09E54' name='Fazer café da manhã' time='07:30 AM'/>
        <Task color='#F09E54' name='Fazer café da manhã' time='07:30 AM'/>
        <Task color='#F09E54' name='Fazer café da manhã' time='07:30 AM'/>
    </Container>
</>
  );
  }
export default MainPage;
