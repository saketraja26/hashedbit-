// Q4: Count vowels and consonants in a string (minimum 20 characters)

var string = "JavaScript is an amazing programming language";

console.log("String:");
console.log(string);
console.log("Length: " + string.length + " characters\n");

var vowelCount = 0;
var consonantCount = 0;

var vowels = ['a', 'e', 'i', 'o', 'u'];

for (var i = 0; i < string.length; i++) {
    var char = string[i].toLowerCase();
    // Check if character is a letter
    if (char >= 'a' && char <= 'z') {
        if (vowels.includes(char)) {
            vowelCount++;
        } else {
            consonantCount++;
        }
    }
}

console.log("Results:");
console.log("Vowels: " + vowelCount);
console.log("Consonants: " + consonantCount);
console.log("Total Letters: " + (vowelCount + consonantCount));
