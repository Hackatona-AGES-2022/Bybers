import React from 'react';
import Button from '../../Component/ButtonComponent';
import Task from '../../Component/TaskComponent';
import Title from '../../Component/Title';
import { Container, GapContainer, Bottom} from './style';

function RoutineDefinition() {
  const nextPage = () => {
    console.log("a");
  }
  return (
    <>
      <Container>
        <Title title='Como é a sua rotina?' />


        <GapContainer>
          <Task name='Trabalho' time='8 horas' color='#A0E3E25E' />
          <Task name='Trabalho' time='8 horas' color='#A0E3E25E' />
        </GapContainer>
        <Bottom>
          <Button text='Continuar' onClick={nextPage}></Button>
        </Bottom>
      </Container>
    </>

  );
}
export default RoutineDefinition;