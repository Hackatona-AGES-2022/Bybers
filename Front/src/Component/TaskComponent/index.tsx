import React, { FC } from "react";
import { Container,Text } from "./style";

interface Props {
  name: string,
  time:string,
  color:string

}
const Task: React.FC<Props> = ({name,time,color,  ...props }: Props) => {

  return (
    <Container color={color}>
      <Text >
        {name}
      </Text>
      <Text>
        {time}
      </Text>
    </Container>
  );
};

export default Task;