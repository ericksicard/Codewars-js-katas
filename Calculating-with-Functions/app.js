/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Divison should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

function zero( cb ) { 
    if ( typeof cb === 'function' ) return cb(0);
    return 0;
  }
  function one( cb ) {
    if ( typeof cb === 'function' ) return cb(1);
    return 1;
  }
  function two( cb ) {
    if ( typeof cb === 'function' ) return cb(2);
    return 2;
  }
  function three( cb ) {
    if ( typeof cb === 'function' ) return cb(3);
    return 3;
  }
  function four( cb ) {
    if ( typeof cb === 'function' ) return cb(4);
    return 4;
  }
  function five( cb ) {
    if ( typeof cb === 'function' ) return cb(5);
    return 5;
  }
  function six( cb ) {
    if ( typeof cb === 'function' ) return cb(6);
    return 6;
  }
  function seven( cb ) {
    if ( typeof cb === 'function' ) return cb(7);
    return 7;
  }
  function eight( cb ) {
    if ( typeof cb === 'function' ) return cb(8);
    return 8;
  }
  function nine( cb ) {
    if ( typeof cb === 'function' ) return cb(9);
    return 9;
  }
  
  function plus( n1 ) {  
    return function( n2 ) {
      return n2 + n1;  
    }
  }
  function minus( n1 ) {
    return function( n2 ) {
      return n2 - n1;  
    }
  }
  function times( n1 ) {
    return function( n2 ) {
      return n2 * n1;  
    }
  }
  function dividedBy( n1 ) {
    return function( n2 ) {
      return Math.floor( n2 / n1 );  
    }
  }