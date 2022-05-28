import React, { FC } from "react";
import { Container,Text,TextBold } from "./style";

interface Props {
  name: string,
  time:string,
  color:string

}
const Task: React.FC<Props> = ({name,time,color,  ...props }: Props) => {

  return (
    <Container color={color}>
      <TextBold >
        {name}
      </TextBold>
      <Text>
        {time}
      </Text>
    </Container>
  );
};

export default Task;