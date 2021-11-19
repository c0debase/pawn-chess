// create a representation of the chessboard in an array
// 1 marks a white pawn, -1 marks a black pawn
// 0 indicates an empty square

export const newBoard = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [-1, -1, -1, -1, -1, -1, -1, -1],
];

export const isOdd = (number: number) => {
  if (number % 2 === 0) {
    return false;
  }
  if (number % 2 === 1) {
    return true;
  }
};
