/*
If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we?
Our goal is to create a function that will check that for us!
Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X",
or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe
*/

function isSolved(board) {
    let b = [...board];
    let bT = [];
    let digR = [];
    let digL = [];
    let resArr = [];
    let last = b.length
    
    // matrix transpose and diagonals right and left
    for ( let i = 0; i < b.length; i++ ) {
      
      digR.push( b[i][i] );   // build giagonal right
      digL.push( b[i][last] ); // build giagonal left
      last--;
      
      if (bT.length < b.length) bT.push([]); 
      for ( let j = 0; j < b.length; j++ ) {
        bT[i].push( b[j][i] );  // build trasponsed matrix
      }    
    }

    // row checker
    function checkByArr( row ) {
      if( row.includes(0) ) return -1;
      
      let winX = row.filter( el => el == 1 );
      let winO = row.filter( el => el == 2 );
      
      if ( winX.length == row.length ) return 1;
      else if ( winO.length == row.length ) return 2;
      else return 0;    
    }
    
    //check rows
    b.map( row => resArr.push( checkByArr(row) ));
    //check columns
    bT.map( col => resArr.push( checkByArr(col) ));
    //check diagonals
    [digR, digL].map( row => resArr.push( checkByArr(row) ));
    
    
    if ( resArr.includes( 1 ) ) return 1;
    else if ( resArr.includes( 2 ) ) return 2;
    else if ( !resArr.includes( -1 ) ) return 0;
    else return -1;    
}