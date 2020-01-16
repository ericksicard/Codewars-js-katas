/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:
Given an input string of:
apples, pears # and bananas
grapes
bananas !apples

The output expected would be:
apples, pears
grapes
bananas

The code would be called like so:
var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/

function solution(input, markers) {
    let str = input.slice();
    let arr = [];
    
    if( str.includes('\n') ) arr = str.split('\n');
    
    // cleaning the array
    for( let elm of arr ) {
      for( let marker of markers ) {
        if ( elm.includes(marker) ) {
          arr.splice(arr.indexOf(elm),1,elm.slice(0, elm.indexOf(marker)).trim());
        }
      }
    }
    
    return arr.join('\n');    
  };


  // OTHER SOLUTION
  function solution(input, markers) {
    return input.split('\n').map(
      line => markers.reduce(
        (line, marker) => line.split(marker)[0].trim(), line
      )
    ).join('\n')
  }