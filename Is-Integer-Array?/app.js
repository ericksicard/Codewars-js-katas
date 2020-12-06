/*
Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}
returns true / True if every element in an array is an integer or a float with no decimals.
returns true / True if array is empty.
returns false / False for every other input.
*/

function isIntArray(arr) {
    if ( Array.isArray( arr) ) {
      if ( arr.length == 0 ) return true
      if ( arr.filter( num => Number.isInteger(num) &&
                      num - Math.floor(num) == 0 
                     ).length == arr.length ) return true
    }
    return false;
  }

// More declarative solution

function isIntArray(arr) {
    return Array.isArray(arr) && arr.every( elm => Math.floor(elm) === elm );
  }