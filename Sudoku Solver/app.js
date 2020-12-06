/*
Write a function that will solve a 9x9 Sudoku puzzle. The function will take one argument consisting of the 2D puzzle array,
with the value 0 representing an unknown square.

The Sudokus tested against your function will be "easy" (i.e. determinable; there will be no need to assume and test possibilities on unknowns)
and can be solved with a brute-force approach.

For Sudoku rules, see the Wikipedia article.

var puzzle = [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]];

sudoku(puzzle);
/* Should return
[[5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]] 
*/

function sudoku(puzzle) {
  
    //Find Next Empty Position
    function nextEmptySpot(board) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === 0) return [i, j];
            }
        }
        return [-1, -1];
    }
    
    //Check the Row, Column, and 3x3 Square  
    function checkRow(board, row, value){
        for(let i = 0; i < board[row].length; i++) {
            if(board[row][i] === value) return false;
        }
        return true;
    }
    
    function checkColumn(board, column, value){
        for(let i = 0; i < board.length; i++) {
            if(board[i][column] === value) return false;
        }
        return true;
    }
    
    
    function checkSquare(board, row, column, value){
        let boxRow = Math.floor(row / 3) * 3;
        let boxCol = Math.floor(column / 3) * 3;
        
        for (let r = 0; r < 3; r++){
            for (let c = 0; c < 3; c++){
                if (board[boxRow + r][boxCol + c] === value) return false;
            }
        }
        return true;
    }
    
    //Testing all possible conflicts.  
    function checkValue(board, row, column, value) {
        if(checkRow(board, row, value) &&
          checkColumn(board, column, value) &&
          checkSquare(board, row, column, value)) {
            return true;
        }    
        return false; 
    };
    
    //Find the Solution - Backtracking
    function solve(board) {  
        let [row, col] = nextEmptySpot(board);
    
        // there is no more empty spots
        if (row === -1) return board;
    
        for(let num = 1; num<=9; num++){
            if (checkValue(board, row, col, num)){
                board[row][col] = num;
                solve(board);
            }
        }
    
        if (nextEmptySpot(board)[0] !== -1) board[row][col] = 0;
    
        return board;
    }
    
    return solve(puzzle):    
  }