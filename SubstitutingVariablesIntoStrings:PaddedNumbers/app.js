//Imperative solution
function solution(value){
    let arrN = value.toString().split("")
    console.log(arrN.length)
    let result = [];
  
    for ( let i = 0; i < 5; i++ ) {
      if ( i >= arrN.length ) result.unshift('0')
      else result.push(arrN[i])
    }
  
    return `Value is ${result.join("")}` 
  }

// Declarative Solution
function solution(value){
    return "Value is " + ("00000" + value).slice(-5);
  }