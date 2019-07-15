var chandlerHeight = prompt("What is Chandler's height?", 1.65);
var chandlerWeight = prompt("What is Chandler's Weight?", 70);

var joeyHeight = prompt("What is Joey's height?", 1.65);
var joeyrWeight = prompt("What is Joey's Weight?", 70);

var chandlerBmi = chandlerWeight / (chandlerHeight * chandlerHeight);

var joeyBmi = joeyrWeight / (joeyHeight * joeyHeight);

if(joeyBmi > chandlerBmi) {
    alert("Joey has a higher BMI");
} else if(joeyBmi < chandlerBmi) {
    alert("Chandler has a higher BMI");
} else {
    alert("Wow they have the same BMI");
}
