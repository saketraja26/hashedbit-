// Q10: Reverse a string

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Test cases
console.log("String Reversal Function:\n");

var input1 = "Hello";
console.log("Input: " + input1);
console.log("Output: " + reverseString(input1) + "\n");

var input2 = "JavaScript";
console.log("Input: " + input2);
console.log("Output: " + reverseString(input2) + "\n");

var input3 = "Programming";
console.log("Input: " + input3);
console.log("Output: " + reverseString(input3) + "\n");

var input4 = "12345";
console.log("Input: " + input4);
console.log("Output: " + reverseString(input4));
