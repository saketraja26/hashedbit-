// Question 2: Calculator function with switch statement

function calculator(num1, num2, operation) {
    var result;
    
    switch(operation) {
        case 'add':
        case '+':
            result = num1 + num2;
            console.log(num1 + " + " + num2 + " = " + result);
            break;
        
        case 'subtract':
        case '-':
            result = num1 - num2;
            console.log(num1 + " - " + num2 + " = " + result);
            break;
        
        case 'multiply':
        case '*':
            result = num1 * num2;
            console.log(num1 + " * " + num2 + " = " + result);
            break;
        
        case 'divide':
        case '/':
            if (num2 === 0) {
                console.log("Error: Cannot divide by zero");
                result = null;
            } else {
                result = num1 / num2;
                console.log(num1 + " / " + num2 + " = " + result);
            }
            break;
        
        default:
            console.log("Error: Invalid operation");
            result = null;
    }
    
    return result;
}

// Test cases
console.log("Calculator Function Tests:");
console.log("==========================");
calculator(10, 5, 'add');
calculator(10, 5, 'subtract');
calculator(10, 5, 'multiply');
calculator(10, 5, 'divide');
calculator(20, 4, '+');
calculator(100, 25, '/');
