/*
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
*/

// First approach, more imperative
function snail(array) {
    let arr = [...array];
    let arrSnail = [];
    while( arr.length > 0 ) {
      // first row
      arrSnail.push( ...arr.shift() )
      
      //last column
      let last  = arr.length - 1;
      for( let i = 0; i < arr.length; i++ ) {
        arrSnail.push( arr[i].pop() )
      }
      
      //last row
      arrSnail.push( ...(arr.pop() || []).reverse() )
      
      //first column & reduced matrix for the next loop of the while loop
      for( let i = arr.length - 1; i >= 0; i-- ) {
        arrSnail.push( arr[i].shift() )
      }
      
    }
    return arrSnail;
}


// Second approach, more declarative 
function snail(array) {
  
    const arr = [...array];
    const snail = [];
    
    while (arr.length) {    
      //first row
      snail.push(...arr.shift());
      //last column
      arr.map(row => snail.push(row.pop()));      
      //re-ordered the matrix for the next loop
      arr.reverse().map(row => row.reverse());
    }
    
    return snail;
  }