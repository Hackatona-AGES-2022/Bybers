import React, { FC } from "react";
import { useNavigationType } from "react-router-dom";
import { WeekDayComponentButtonStyle } from "./style";
import { Text } from "./style";
import { useNavigate } from "react-router-dom";

interface Props {
  text: string;
  onClick?: any;
}
const WeekDayComponentButton: React.FC<Props> = ({
  onClick,
  text,
  ...props
}: Props) => {
  const navigate = useNavigate();
  return (
    <WeekDayComponentButtonStyle onClick={onClick}>
      <Text>{text}</Text>
    </WeekDayComponentButtonStyle>
  );
};

export default WeekDayComponentButton;
