/*
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   50 + 2 * 100 = 250
 1 1 1 3 1   1000 + 100 = 1100
 2 4 4 5 4   400 + 50 = 450
In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.
*/

function score( dice ) {
  let arr = [...dice];
  let res = [0,0,0,0,0,0];
  let total = 0;
    
  arr.map( el => res[el-1] ++ );
  res.map( (el,id) => {
    if ( el >= 3 && id == 0 ) total += ( 1000 + (el%3)*100 );
    if ( el < 3 && id == 0 ) total += (el%3)*100 ;
    if ( el >= 3 && id == 1 ) total += 200 ;
    if ( el >= 3 && id == 2 ) total += 300 ;
    if ( el >= 3 && id == 3 ) total += 400 ;
    if ( el >= 3 && id == 4 ) total += ( 500 + (el%3)*50 );
    if ( el < 3 && id == 4 ) total += (el%3)*50 ;
    if ( el >= 3 && id == 5 ) total += 600 ;  
  } );
  
  return total;
}

//Solucion using reduce()

function score( dice ) {
  let arrScore = [0,0,0,0,0,0];
  let finalScore;
 
  dice.map( num => arrScore[num - 1] ++);

  finalScore = arrScore.reduce( (acc, cur, idx) => {
    if ( cur >= 3 ) {
      if ( idx == 0 )  return acc + ( 1000 + (cur % 3)*100 );
      if ( idx == 1 )  return acc + 200;
      if ( idx == 2 )  return acc + 300;
      if ( idx == 3 )  return acc + 400;
      if ( idx == 4 )  return acc + ( 500 + (cur % 3)*50 );
      if ( idx == 5 )  return acc + 600;
    }
    if ( cur < 3 ) {
      if ( idx == 0 )  return acc + ( (cur % 3)*100 );
      if ( idx == 4 )  return acc + ( (cur % 3)*50 );
    }
    return acc
  }, 0)

  return finalScore;
}