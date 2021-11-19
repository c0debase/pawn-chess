import { useState } from "react";
import { Box, ChessBoardContainer, ColumnContainer } from "./ChessBoard.styles";
import whitePawn from "../../assets/whitePawn.png";
import blackPawn from "../../assets/blackPawn.png";
import { isOdd, newBoard } from "./ChessBoard.service";

export const ChessBoard = () => {
  const [board, setBoard] = useState(newBoard); // the entire chessboard
  const [currentSquare, setCurrentSquare] = useState({
    // the currently selected (highlighted) square
    active: false,
    colIdx: 20,
    rowIdx: 20,
    rowItem: 0,
    lastMove: 5,
  });

  // determine which of the 3 possible states the square is in
  // 1 white, 2 black, 3 selected

  const getSquareColor = (colIdx: number, rowIdx: number) => {
    if (
      currentSquare.active &&
      colIdx === currentSquare.colIdx &&
      rowIdx === currentSquare.rowIdx
    ) {
      return "#0d9fb738";
    }
    if (isOdd(colIdx) === isOdd(rowIdx)) {
      return "white";
    } else {
      return "rgb(107, 146, 155)";
    }
  };

  // handling of a click when there is currently an active selected square
  const activeSquareCase = (
    rowItem: number,
    colIdx: number,
    rowIdx: number
  ) => {
    // ensure the pieces only move "forward"
    if (currentSquare.rowItem === -1) {
      if (colIdx > currentSquare.colIdx) {
        return;
      }
    }
    if (currentSquare.rowItem === 1) {
      if (colIdx < currentSquare.colIdx) {
        return;
      }
    }
    // checking for attempted moves exceeding one square jump or in volation of game rules (destinations with different columns)
    if (
      rowItem ||
      rowIdx !== currentSquare.rowIdx ||
      Math.abs(currentSquare.colIdx - colIdx) > 1
    ) {
      setCurrentSquare({ ...currentSquare, active: false });
    } else {
      // successfully complete the piece move by removing it from the old
      // location and placing it in the new one followed by clearing currentSquare state
      let boardB = [...board];
      boardB[currentSquare.colIdx][currentSquare.rowIdx] = 0;
      boardB[colIdx][rowIdx] = currentSquare.rowItem;
      setBoard(boardB);
      setCurrentSquare({
        ...currentSquare,
        lastMove: currentSquare.rowItem,
        active: false,
      });
    }
  };

  // handling of all clicks on squares
  const handleSquareClick = (
    rowItem: number,
    colIdx: number,
    rowIdx: number
  ) => {
    // checking for repeated moves by the same side
    if (rowItem === currentSquare.lastMove) {
      return;
    }
    // if there is an active square, handle the click in the activeSquareCase function
    if (currentSquare.active) {
      activeSquareCase(rowItem, colIdx, rowIdx);
    } else {
      // if the square doesn't have pieces ignore the click
      if (!rowItem) {
        return;
      }
      setCurrentSquare({
        ...currentSquare,
        active: true,
        colIdx,
        rowIdx,
        rowItem,
      });
    }
  };

  return (
    <ChessBoardContainer>
      {board.map((column, colIdx) => {
        return (
          <ColumnContainer key={colIdx}>
            {column.map((rowItem, rowIdx) => {
              return (
                <Box
                  key={rowIdx}
                  onClick={() => handleSquareClick(rowItem, colIdx, rowIdx)}
                  style={{
                    backgroundColor: getSquareColor(colIdx, rowIdx),
                  }}
                >
                  {rowItem === 1 ? <img src={whitePawn} width="70px" /> : ""}
                  {rowItem === -1 ? <img src={blackPawn} width="70px" /> : ""}
                </Box>
              );
            })}
          </ColumnContainer>
        );
      })}
    </ChessBoardContainer>
  );
};
