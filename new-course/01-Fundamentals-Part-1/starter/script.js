/*
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1996;
// birthYear = 1995;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Kaminski';
console.log(lastName);

////////////////////////////////////
// basic operators

// math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// assingment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

////////////////////////////////////
// operator precedence

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const avgAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, avgAge);

////////////////////////////////////
// string and template literals

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const currentYear = 2037;

const jonas = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '.';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}.`;
console.log(jonasNew);

console.log(`Just a regular string`);
console.log('String with \n\ multiple \n\ lines.');

console.log(`String with
multiple
lines`);

////////////////////////////////////
// if/else statements

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license. 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young to start driving license. She needs to wait ${yearsLeft} more years.`);
}

const birthYear = 1998;

let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

////////////////////////////////////
// type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' > '18');

let n = '1' + 1; // 11
console.log(n);
n = n - 1; // 10
console.log(n);


////////////////////////////////////
// truthy and falsy values

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean(''));

const money = 0;

if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job");
}

let height;

if (height) {
    console.log("Yay! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}


////////////////////////////////////
// equality operators

const age = 18;

if (age === 18) console.log('You just became an adult (strict)');
if (age == 18) console.log('You just became an adult (loose)');

const favorite = Number(prompt("What is your favorite number?"));

console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) { // 23 === 23
    console.log('Cool! 23 is an amazing number!');
} else if (favorite === 7) {
    console.log('7 is also a cool number');
} else if (favorite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23, 7 or 9');
}

if (favorite !== 23) {
    console.log("why not 23?")
}



////////////////////////////////////
// logical operators

const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

//const shouldDrive = hasDriverLicense && hasGoodVision;

// if (hasDriverLicense && hasGoodVision) {
//     console.log("Sarah is able to drive");
// } else {
//     console.log("Someone else should drive");
// }

const isTired = false; // C
console.log(hasDriverLicense || hasGoodVision || isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive");
}

*/