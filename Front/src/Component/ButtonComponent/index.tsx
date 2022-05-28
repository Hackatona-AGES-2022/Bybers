import React, { FC } from "react";
import { ButtonStyle } from "./style";
import { Text } from "./style";

interface Props {
  text: string;
  onClick?: any;
}
const Button: React.FC<Props> = ({ onClick, text, ...props }: Props) => {
  return (
    <ButtonStyle onClick={onClick}>
      <Text>{text}</Text>
    </ButtonStyle>
  );
};

export default Button;
