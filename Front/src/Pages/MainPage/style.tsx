import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  width: 85vw;
  height: 75px;
  flex-direction:column;
  padding:10px 0px;
  text-indent: 18px;
`;
