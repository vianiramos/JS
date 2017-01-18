//Lecture: Variables 1
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/


// Lecture: variables 2
/*
var name = 'John';
var age = 26;

console.log(name + age);
console.log(age + name);

var job, isMarried;

console.log(job);

job = 'teacher';

isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married?  ' + isMarried + '. ');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married?  ' + isMarried + '. ');

var lastName = prompt('What is the last name?');
console.log(lastName);
*/
/*
//Lecture: operators
var now = 2016;
var birthYear = now - 24;
birthYear = now - 24 * 2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark  = (5 + 3) * 4 -6;

ageJohn++;
ageMark *=2;
ageMark = ageMark * 2;

console.log(ageJohn);
console.log(ageMark);
*/
// Lecture: if/else statements

/*
var name = 'John';
var age = 26;
var isMarried = 'no';

if(isMarried === 'yes'){
    console.log(name + 'is married!');
}
else{
    console.log(name + 'will hopefully marry soon :) ');
}

isMarried = true;
if(isMarried){
    console.log('YES!');
}

if(23 === "23"){
    console.log('Something to print ... ');
}
*/
//Lecture: boolean logic and switch
/*var age = 25;

if(age <= 20){
    console.log('John is a teenager');
}else if (age > 20 && age <30){
    console.log('John is a young man');
}
else{
    console.log('Jonh  ');
}


var job = 'teacher';
switch(job) {
    case 'teacher':
        console.log('John teaches kids');
        break;
    case 'driver':
        console.log('John drives a cab in Lisbon ');
        break;
    case 'cop':
        console.log('John hepls fight crime');
        break;
    default:
        console.log('John does something else');
}
*/
//Coding Challenge
/*
var heightJohn = 172;
var heightMike = 165;
var ageJohn = 26;
var ageMike = 29;

var scoreJohn = heightJohn + 5 * ageJohn;
var scoreMike = heightMike + 5 * ageMike;
/*
if(scoreJohn > scoreMike){
    console.log('John wins the game with ' + scoreJohn + ' points!');
} else if(scoreMike > scoreJohn){
    console.log('Mike wins the game with ' +scoreMike + 'points!')
}else{
    conosle.log('There is a draw');
}*/
/*
var heightMary = 158;
var ageMary = 31;
var scoreMary = heightMary + 5 * ageMary;

if(scoreJohn > scoreMike && scoreJohn > scoreMary){
    console.log('John wins the game with ' + scoreJohn + ' points!');
}else if(scoreMike > scoreJohn && scoreMike > scoreMary){
     console.log('Mike wins the game with ' +scoreMike + ' points!')
}else if(scoreMary > scoreJohn && scoreMary > scoreMike){
     console.log('Mary wins the game with ' +scoreMary + ' points!')
}else{
     console.log('It\'s a draw');
}
*/

//Lecture: functions
/*function calculateAge(yearOfBirth){
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
console.log(ageMary);

function yearsUntilRetirement(name, yearOfBirth){
    var age = calculateAge(yearOfBirth);
    var retirement = 65 - age;
    if (retirement >= 0){
        console.log(name + ' retires in ' + retirement + ' years.');
    }else{
        console.log(name + ' is already retired');
    }
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1951);
*/

//Lecture: Stattements and expressions/

/*function someFun(par){
    //code
}

var someFun = function(par){
    //code
}


//Expressions

3+4;
var x = 3;

//Statements

if(x === 5){
    //Do something
}

*/

//Lecture: Arrays

/*var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);


var john = ['John', 'Smith', 1990, 'desginer', false];
john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

if(john.indexOf('teacher') === -1){
    console.log('John is NOT a teacher');
}*/

///////////////////////////////////////////
//Lecture: Objects

//v1.0
/*var john = {
    name:   'John',
    lastName: 'Smith',
    yearOFBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(){
        return 2016 - this.yearOfBirth;
    }
};

var age = john.calculateAge();
john.age = age;


console.log(john);*/


//v2.0
/*

var john = {
    name:   'John',
    lastName: 'Smith',
    yearOFBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(){
        this.age = 2016 - this.yearOFBirth;
    }
};

john.calculateAge();
console.log(john);



var mike = {
    yearOFBirth: 1950,
    calculateAge: function() {
        this.age = 2016- this.yearOFBirth;
    }
}


mike.calculateAge();
console.log(mike);

*/
//////////////////////////////////////////////
//Lecture: Loops

/*for (var i = 0; i < 10; i++){
    console.log(i);
}*/

//////////////////////////////



function printFullAges(years){
    var ages = [];
    var fullAges = [];

for (var i=0; i<years.length;i++){
    ages[i] = 2016 - years[i];
}

for (i=0;i<ages.length; i++ ){
    if(ages[i] >=18){
        console.log('Person ' + (i+1) + ' is ' + ages[i] + ' years old, and is of full ages.');
        fullAges.push(true);
    }else{
        console.log('Person ' + (i+1) + ' is ' + ages[i] + ' years old, and is NOT full ages.');
        fullAges.push(false);
    }

}
    return fullAges;
}

var years = [2001, 1985, 1994, 2014, 1973];

var full_1 = printFullAges(years);
var full_2 = printFullAges([2012, 1915, 1999]);











































