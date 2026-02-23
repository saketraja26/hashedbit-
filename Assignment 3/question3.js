// Q3: Transform 'INDIA' to 'INDONESIA' using array.splice

var string = 'INDIA';

console.log("Original String:");
console.log(string);

// Convert string to array to use splice
var arr = string.split('');

// Insert 'ONES' after 'IND' (at index 3)
// splice(index, deleteCount, item1, item2, ...)
arr.splice(3, 0, 'O', 'N', 'E', 'S');

// Convert back to string
var output = arr.join('');

console.log("\nAfter using splice:");
console.log(output);
// Expected output: 'INDONESIA'
