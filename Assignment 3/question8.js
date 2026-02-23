// Q8: Find repeated sum of digits until single digit remains

function repeatedSumOfDigits(num) {
    console.log("Starting with: " + num);

    while (num >= 10) {
        var sum = 0;
        var temp = num;

        // Calculate sum of digits
        while (temp > 0) {
            sum += temp % 10;
            temp = Math.floor(temp / 10);
        }

        console.log(num + " -> Sum of digits = " + sum);
        num = sum;
    }

    console.log("Final single digit: " + num + "\n");
    return num;
}

// Test cases
console.log("Repeated Sum of Digits:\n");

repeatedSumOfDigits(456);
repeatedSumOfDigits(9999);
repeatedSumOfDigits(12345);
repeatedSumOfDigits(789);
