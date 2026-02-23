// Q2: Reverse the order of words in a string

var str = 'I love my India';

console.log("Original String:");
console.log(str);

// Split the string into words, reverse the array, then join back
var output = str.split(' ').reverse().join(' ');

console.log("\nReversed String:");
console.log(output);
// Expected output: 'India my love I'
