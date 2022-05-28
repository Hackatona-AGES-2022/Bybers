import { flexbox } from "@mui/system";
import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  width: 100vw;
  height: 75px;
  flex-direction: column;
  align-items: center;
`;

export const GapContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const TextAlign = styled("span")`
  text-align: left;
  width: 90%;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Bottom = styled("div")`
  position: absolute;
  bottom: 0;
  margin-bottom: 15px;
`;
export const WeekDayContainer = styled("div")`
  height: 300px;
  display: flex;
  gap: 10px;
`;

export const Image = styled("img")`
  width: 100%;
  border-color: #ffffff;
  position: absolute;
  top: 400px;
`;

export const ContainerSlider = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 75px;
`;

export const p = styled("p")`
  weight: 30;
`;
