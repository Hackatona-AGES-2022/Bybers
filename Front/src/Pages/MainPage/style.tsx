import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  background-color: ${(props) => props.color};
  border-radius: 16px;
  width: 100vw;
  height: 75px;
  flex-direction: column;
  padding: 5px 0px 10px;
  text-indent: 18px;
  align-items: center;
`;

export const GapContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const Circle = styled("div")`
  width: 50px;
  height: 50px;
  border-radius: 180px;

  background-color: #bcbccc;
  margin-top: 24px;
`;

export const TextAlign = styled("span")`
  text-align: left;
  width: 100%;
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
