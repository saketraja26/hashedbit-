// Question 3: Tax calculator based on salary

function findTax(salary) {
    var tax;
    var taxRate;
    
    switch(true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0;
            tax = salary * taxRate;
            break;
        
        case (salary > 500000 && salary <= 1000000):
            taxRate = 0.10;
            tax = salary * taxRate;
            break;
        
        case (salary > 1000000 && salary <= 1500000):
            taxRate = 0.20;
            tax = salary * taxRate;
            break;
        
        case (salary > 1500000):
            taxRate = 0.30;
            tax = salary * taxRate;
            break;
        
        default:
            console.log("Error: Invalid salary");
            return null;
    }
    
    console.log("Salary: ₹" + salary);
    console.log("Tax Rate: " + (taxRate * 100) + "%");
    console.log("Tax Amount: ₹" + tax);
    console.log("Net Salary: ₹" + (salary - tax));
    console.log("---");
    
    return tax;
}

// Test cases
console.log("Tax Calculator Tests:");
console.log("=====================");
findTax(400000);
findTax(750000);
findTax(1200000);
findTax(2000000);
