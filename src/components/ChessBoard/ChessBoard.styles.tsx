import styled from "styled-components";

export const ChessBoardContainer = styled.div`
  border: 11px solid #59606e;
`;

export const ColumnContainer = styled.div`
  width: 800px;
  height: 100px;
  display: flex;
  flex-direction: row;
  background-color: red;
`;

export const Box = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
