/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing.
The first word within the output should be capitalized only if the original word was capitalized
(known as Upper Camel Case, also often referred to as Pascal case).

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

function toCamelCase(str){
    let separator = '';
    
    if ( str.length > 0 ) {
        // finding the separator used
        if ( str.includes('-') ) separator = '-';
        else if ( str.includes('_') ) separator = '_';
        
        // new array from the string passed
        let arr = str.split(separator);

        // converting to camel case
        let result = arr.reduce( (acc, cur) => {
          acc = acc + (cur[0].toUpperCase() + cur.slice(1));
          return acc;
          });

        return result;
    }
    else return str;    
}