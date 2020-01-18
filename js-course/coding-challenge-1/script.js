var markHeight = 1.79;
var markMass = 80;

var johnHeight = 1.87;
var johnMass = 89;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

console.log("Mark's BMI: " + markBMI);
console.log("John's BMI: " + johnBMI);

var markHigherThanJohn = Boolean(markBMI > johnBMI);
console.log("Does Mark have higher BMI than John? " + markHigherThanJohn);
