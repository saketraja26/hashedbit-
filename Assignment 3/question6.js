// Q6: Filter numbers greater than 5 using array.filter

var inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];

console.log("Input Array:");
console.log(inputArr);

var answer = inputArr.filter(function(num) {
    return num > 5;
});

console.log("\nNumbers greater than 5:");
console.log(answer);
// Expected output: [9, 10, 7]
