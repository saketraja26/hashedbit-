// Q1: Remove state names starting with vowels using array.filter

var states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];

console.log("Original States:");
console.log(states);
console.log("\n");

// Filter out states starting with vowels (A, E, I, O, U)
var filteredStates = states.filter(function(state) {
    var firstLetter = state[0].toLowerCase();
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return !vowels.includes(firstLetter);
});

console.log("States NOT starting with vowels:");
console.log(filteredStates);
console.log("\nTotal: " + filteredStates.length + " states");
