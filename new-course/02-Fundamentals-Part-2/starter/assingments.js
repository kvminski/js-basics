/////////////////////////
// functions

// function describeCountry(country, population, capitalCity) {
//     const countryLog = `${country} has ${population} milion people and its capital city is ${capitalCity}.`;
//     return countryLog;
// }

// const countryPoland = describeCountry('Poland', 38, 'Warszawa');
// console.log(countryPoland);
// const countryFinland = describeCountry('Finland', 6, 'Helsinki');
// console.log(countryFinland);
// const countryGermany = describeCountry('Germany', 83, 'Berlin');
// console.log(countryGermany);
/*
//better one

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} milion people and its capital city is ${capitalCity}.`;
}

const descPoland = describeCountry('Poland', 38, 'Warszawa');
const descFinland = describeCountry('Finland', 6, 'Helsinki');
const descGermany = describeCountry('Germany', 83, 'Berlin');
console.log(descPoland, descFinland, descGermany);

//function declarations vs expressions

function percentageOfWorld1(population) {
    //const popPercentage = (population / 7900) * 100;
    //return popPercentage;
    return (population / 7900) * 100;
}

const popPercentageChina = percentageOfWorld1(1393);
const popPercentagePoland = percentageOfWorld1(38);
const popPercentageUSA = percentageOfWorld1(328);

console.log(popPercentageChina, popPercentagePoland, popPercentageUSA);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const popChina = percentageOfWorld2(1393);
const popPoland = percentageOfWorld2(38);
const popUSA = percentageOfWorld2(328);

console.log(popChina, popPoland, popUSA);

//arrow functions

const percentageOfWorld3 = population => (population / 7900) * 100;

const popChina2 = percentageOfWorld3(1393);
const popPoland2 = percentageOfWorld3(38);
const popUSA2 = percentageOfWorld3(328);

console.log(popChina2, popPoland2, popUSA2);

//Functions calling other functions

function percentageOfWorld1(population) {
    const perMathRound = (population / 7900) * 100;

    return Math.round((perMathRound + Number.EPSILON) * 100) / 100
}

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} milion people, which is about ${percentage}% of the world.`;
    console.log(description);
}

describePopulation('China', 1393);
describePopulation('Poland', 38);
describePopulation('USA', 328);



////////////////////////
// CODING CHALLENGE #1
////////////////////////

const calcAverage = (a, b, c) => (a + b + c) / 3;

//test 1
const scoreDolphins2 = calcAverage(44, 23, 71);
const scoreKoalas2 = calcAverage(65, 54, 49);

//test 2
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);


const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win! (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win! (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`Dolphis got ${avgDolphins}, Koalas got ${avgKoalas}. Nobody wins!`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins2, scoreKoalas2);

//introduction to arrays

const populations = [1393, 38, 328, 67];

console.log(populations.length === 4);

const percentageOfWorld1 = function (population) {
    return (population / 7900) * 100;
}

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];

console.log(percentages);

//basic array operations

const neighbours = ['Germany', 'Czech Republic', 'Slovakia', 'Lithuania', 'Ukraine', 'Russia', 'Belarus'];
console.log(neighbours);
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

// 23 > 32 ? console.log('xD') : console.log('dX');
// neighbours.includes('Germany') === false ? console.log('Probably not a central European country :D') : console.log(); //was just checking something xD, ignore

if (neighbours.includes('Germany') === false) { //could use ! - knew it :P
    console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('Russia')] = 'Russian Federation';
console.log(neighbours);

*/

const calcTip = function (bill) {
    const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
    return tip;
}

console.log(calcTip(100));

const bills = [125, 555, 44];
console.log(bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);