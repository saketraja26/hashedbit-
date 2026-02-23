// Q11: Calculate average for each student using array and object methods

var input = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

console.log("Input:");
console.log(JSON.stringify(input, null, 2));
console.log("\n");

// Process each student object
var output = input.map(function(studentObj) {
    // Get the student key (student1, student2, etc.)
    var studentKey = Object.keys(studentObj)[0];
    var subjects = studentObj[studentKey];

    // Get all subject scores as an array
    var scores = Object.values(subjects);

    // Calculate average
    var sum = scores.reduce(function(acc, score) {
        return acc + score;
    }, 0);
    var average = sum / scores.length;

    // Return new object with average
    var result = {};
    result[studentKey] = {
        average: average
    };
    return result;
});

console.log("Output:");
console.log(JSON.stringify(output, null, 2));

// Display in readable format
console.log("\nReadable Format:");
output.forEach(function(studentObj) {
    var studentKey = Object.keys(studentObj)[0];
    var average = studentObj[studentKey].average;
    console.log(studentKey + ": " + average);
});
