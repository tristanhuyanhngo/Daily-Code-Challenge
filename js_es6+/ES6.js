// https://adrianmejia.com/overview-of-javascript-es6-features-a-k-a-ecmascript-6-and-es2015/#JavaScript-History
// Core ES6 Features
// Firstly, you can test all these code snippets on your browser console!

/*_____________________________________________________________________________________________________*/
// Block scope variables

//  With ES6, we went from declaring variables with "var" to use "let" or "const"
//  The issue with "var" is the variable leaks into other code block such as for loops or if blocks.

var x = 'outer';
function test(inner) {
  if (inner) {
    var x = 'inner'; // scope whole function
    return x;
  }
  return x; // gets redefined because line 13 declaration is hoisted
}

console.log(test(false)); // undefined 
console.log(test(true)); // inner
console.log(x);
// => For test(false) you would expect to return 'outer', BUT NO, you get undefined.
// Because even though the if-block is not executed, the expression var x in line 4 is hoisted.
// This code equilavent to
// var x = "outer";
// function test(inner) {
//   var x; // HOISTED DECLARATION
//   if (inner) {
//     x = "inner"; // INITIALIZATION NOT HOISTED
//     return x;
//   }
//   return x;
// }

/*_____________________________________________________________________________________________________*/