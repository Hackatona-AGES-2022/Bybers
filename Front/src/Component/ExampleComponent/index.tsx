import React, { FC } from "react";
import { Container, Pane } from "./style";

interface Props {
  children: React.ReactNode[];
  leftWeight: number;
  rightWeight: number;
}
const Example: React.FC<Props> = ({ children, ...props }: Props) => {
  const { leftWeight, rightWeight } = props;

  const [left, right] = children;

  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
};

export default Example;