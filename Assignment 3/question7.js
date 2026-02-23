// Q7: Calculate average scores for students using array.map and array.reduce

var students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

console.log("Input:");
console.log(students);
console.log("\n");

// Use map to transform each student object
var output = students.map(function(student) {
    // Use reduce to calculate sum of scores
    var sum = student.scores.reduce(function(acc, score) {
        return acc + score;
    }, 0);
    var average = sum / student.scores.length;

    return {
        name: student.name,
        average: average
    };
});

console.log("Output:");
console.log(output);

// Display in formatted way
console.log("\nFormatted Output:");
output.forEach(function(student) {
    console.log(student.name + ": " + student.average);
});
