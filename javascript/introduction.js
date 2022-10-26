// primitive data types
//string
/* var courseName = 'MERN';
console.log(courseName); */

/* // Number integer
var century = 100;
console.log(century); */

/* // float
var costOfMango = 14.5;
console.log(costOfMango); */

/* // Boolean
var isValidUser = true; // false
console.log(isValidUser); */

/* var emptyBox = null;
console.log(emptyBox); */

/* var earthIn2050;
console.log(earthIn2050); */
/* 
var name = 'Virat';
var score = 59;
var isPlaying = true;

// non-primitive data type
var virat = {
  name: 'Virat',
  score: 59,
  isPlaying: true,
  sport: 'Cricket',
};
var sachin = {
  name: 'Sachin',
  score: 100,
  isPlaying: false,
  sport: 'Cricket',
};

var indianTeam = [virat, sachin];
console.log(indianTeam);

console.log([10, 20, 40, 15]); */

// Big Integer
// Faulty result
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1000);

// Faulty result
var bigNumber = BigInt(Number.MAX_SAFE_INTEGER);
var anotherBigNumber = 1000n;
// console.log(bigNumber + 1000);
console.log(bigNumber + anotherBigNumber);
