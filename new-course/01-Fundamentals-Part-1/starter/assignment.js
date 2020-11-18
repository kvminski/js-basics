//////////////////////////////
// Assignments
/*
const country = 'Poland';
const continent = 'Europe'
let population = 38;
console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = 'Polish';
// isIsland = true;

let halfPopulation = population / 2;
console.log(halfPopulation);

halfPopulation++;
console.log(halfPopulation);

const populationFinland = 6;
const avgPopulationCountry = 33;

const isPolandMorePopulatedThanFinland = population > populationFinland;

console.log(populationFinland);
console.log(avgPopulationCountry);
console.log(isPolandMorePopulatedThanFinland);

const description = country + ' is in ' + continent + ', and its ' + population + ' milion people speak ' + language + '.';
console.log(description);

const descriptionNew = `${country} is in ${continent}, and its ${population} milion people speak ${language}.`
console.log(descriptionNew);

if (population > avgPopulationCountry) {
    console.log(`Population of ${country} is above average.`);
} else {
    console.log(`Population of ${country} is ${avgPopulationCountry - population} milion below average.`)
}

console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143


// Equality operators assignments

const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border!');
} else {
    console.log('No borders');
}


// Logical operators

const language2 = 'english';
const population2 = 49;
const isIsland2 = false;
const country = 'Poland';

if (language2 === 'english' && population2 < 50 && !isIsland2) {
    console.log(`You should live in ${country}!`);
} else {
    console.log(`${country} does not meet you criteria :(`);
}

*/

/*
//////////////////////////////
// Coding challenge #1

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const bmiMark = markMass / markHeight ** 2;
const bmiJohn = johnMass / johnHeight ** 2;

const markHigherBMI = bmiMark > bmiJohn;

console.log(markMass, markHeight, bmiMark);
console.log(johnMass, johnHeight, bmiJohn);
console.log(markHigherBMI);

//////////////////////////////
// Coding challenge #2

if (bmiMark > bmiJohn) {
    console.log("Mark's BMI is higher than John's!")
} else {
    console.log("John's BMI is higher than Mark's!")
}

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`)
}


//////////////////////////////
// Coding challenge #3

// task 1
console.log("// Task 1");

const teamDolphins = (96 + 108 + 89) / 3;
const teamKoalas = (88 + 91 + 110) / 3;
console.log(teamDolphins, teamKoalas);

if (teamDolphins > teamKoalas) {
    console.log("Team Dolphins has higher score and is the winner!");
} else if (teamDolphins < teamKoalas) {
    console.log("Team Koalas has higher score and is the winner!");
} else {
    console.log("It is a draw!");
}

console.log("// Bonus 1");

const teamDolphinsBonus1 = (97 + 112 + 101) / 3;
const teamKoalasBonus1 = (109 + 95 + 123) / 3;
console.log(teamDolphinsBonus1, teamKoalasBonus1);

if (teamDolphinsBonus1 > teamKoalasBonus1 && teamDolphinsBonus1 > 100) {
    console.log("Team Dolphins has higher score, it is higher than 100 so is the winner!");
} else if (teamKoalasBonus1 > teamDolphinsBonus1 && teamKoalasBonus1 >= 100) {
    console.log("Team Koalas has higher score, it is higher than 100 so is the winner!");
} else if (teamDolphinsBonus1 === teamKoalasBonus1) {
    console.log("It is a draw!")
} else {
    console.log("It seems that no any team has score higher than 100!")
}

console.log("// Bonus 2");

const teamDolphinsBonus2 = (97 + 112 + 101) / 3;
const teamKoalasBonus2 = (109 + 95 + 106) / 3;
console.log(teamDolphinsBonus2, teamKoalasBonus2);

if (teamDolphinsBonus2 > teamKoalasBonus2 && teamDolphinsBonus2 > 100) {
    console.log("Team Dolphins has higher score, it is higher than 100 so is the winner!");
} else if (teamKoalasBonus2 > teamDolphinsBonus2 && teamKoalasBonus2 >= 100) {
    console.log("Team Koalas has higher score, it is higher than 100 so is the winner!");
} else if (teamDolphinsBonus2 === teamKoalasBonus2 && teamKoalasBonus2 >= 100 && teamDolphinsBonus2 >= 100) {
    console.log("It is a draw! And both teams have score higher than 100!")
} else if (teamDolphinsBonus2 === teamKoalasBonus2 && teamKoalasBonus2 <= 100 && teamDolphinsBonus2 <= 100) {
    console.log("It is a draw, but both teams have score lower than 100!");
} else {
    console.log("It seems that no any team has score higher than 100!")
}
*/