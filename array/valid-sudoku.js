// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/

const checkInvalidDigit = (arr) => {
  return arr.some((a) => parseInt(a) > 9 || parseInt(a) < 1);
};

const checkDuplicateDigit = (arr) => {
  const distinguishArr = new Set(arr);

  if (distinguishArr.size < arr.length) return true;

  return false;
};

const checkValidArray = (arr) => {
  const newArray = arr.filter((a) => a != '.');
  //check digit from 1- 9
  if (checkInvalidDigit(newArray)) return false;

  // check distinguish element
  if (checkDuplicateDigit(newArray)) return false;

  return true;
};

const checkRow = (sudokuBoard) => {
  let particleArray = [];
  for (let i = 0; i < 9; i++) {
    particleArray = sudokuBoard[i];
    if (!checkValidArray(particleArray)) {
      return false;
    }
  }

  return true;
};

const checkVertical = (sudokuBoard) => {
  let particleArray = [];
  for (let i = 0; i < 9; i++) {
    particleArray = [];
    for (let j = 0; j < 9; j++) {
      particleArray.push(sudokuBoard[j][i]);
    }
    if (!checkValidArray(particleArray)) return false;
  }

  return true;
};

const checkBoard3x3 = (sudokuBoard) => {
  let particleArray = [];

  // 0; 3; 6
  for (let v = 0; v < 9; v = v + 3) {
    for (let r = 0; r < 9; r = r + 3) {
      particleArray = [];
      // 0; 3; 6
      for (let i = r; i < r + 3; i++) {
        for (let j = v; j < v + 3; j++) {
          particleArray.push(sudokuBoard[j][i]);
        }
      }
      if (!checkValidArray(particleArray)) return false;
    }
  }

  return true;
};

const isValidSudoku = (sudokuBoard) => {
  if (
    checkRow(sudokuBoard) &&
    checkVertical(sudokuBoard) &&
    checkBoard3x3(sudokuBoard)
  )
    return true;
  return false;
};

const sudokuBoard = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

// const sudokuBoard = [
//   ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
//   ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
//   ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
//   ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
//   ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
//   ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
//   ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
//   ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
//   ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
// ];

console.log(isValidSudoku(sudokuBoard));
