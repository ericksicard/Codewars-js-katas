/*
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line.
Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.
*/

function tickets(peopleInLine){
    let count25 = 0;
    let count50 = 0;
    let result = []
  
    result = [...peopleInLine].map( bill => {
      if ( bill == 25 ) count25++;
      if ( bill == 50 ) {
        if ( count25 == 0 ) return "NO"
        count50++;
        count25--      // one 25 bill as change
      }
      if ( bill == 100 ) {
        if ( (count50 >= 1 && count25 < 1) || (count50 < 1 && count25 < 3) ) return "NO"
        // one 50 bill and one 25 bill as change
        if  (count50 >= 1 && count25 >= 1) {
          count50 -= 1;
          count25 -= 1;
        }
        // three 25 bills as change
        if ((count50 < 1 && count25 >= 3)) {
          count25 -= 3;
        }
        
      }
      return "YES"
    })
  
    if ( result.includes("NO") ) return "NO"
    else return "YES"  
  }