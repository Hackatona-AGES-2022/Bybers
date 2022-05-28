import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  text-indent: 5px;
  justify-content: space-evenly;
`;

export const Text = styled("h3")`
  font-size: 16px;
  display: flex;
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const Input = styled("input")`
  height: 50px;
  font-size: 16px;
  display: flex;
  border: none;
  border-radius: 15px;
  box-shadow: 4px 4px 5px 0px #cccccc;
`;
