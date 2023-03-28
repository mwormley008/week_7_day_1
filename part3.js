// JavaScript Loops
// for, for...in, for...of, while, do while

// Standard for loop
// Syntax: for(counter; expression/condition; increment/decrement the counter){ code to execute for each loop }

console.log('Before Loop');

for(let i = 0; i < 20; i++){
    console.log('Hello', i)
}

console.log('After log');

let rainbow = ['red', 'orange', 'yellow', 'greet', 'blue', 'indigo', 'violet'];

console.log(rainbow);

for (let x=0; x < rainbow.length; x++){
    console.log(x, rainbow[x]);
};

// for ... in - used to loop over the properties of an object

let chiTeams = {
    mlb: 'White Sox',
    nba: 'Bulls',
    nfl: 'Bears',
    nhl: 'Blackhawks'
};

// Syntax: for (let variableName in object){ code to execute for each property in object }

for(let team in chiTeams){
    console.log(team);
    console.log(chiTeams[team])
    console.log('---------------')
}

let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

// if you use the for... in with an array, it will loop through the indices!
for (let p in planets){
    console.log(p, planets[p]);
}

// for...of - used to loop over the elements in an iterable (Array, String, etc.)
// Syntax - for (let varName of iterable){ code to execute for each element in iterable }

for (let p of planets){
    console.log(p)
};

let aRandomString = 'This is a random string';

for (let char of aRandomString){
    console.log(char);
};

// While loop - loop while a condition is true
// Syntax: while (condition expression){ code to execute while condition is true }

console.log('While Loop:');
let startingNumber = 0;

console.log('Before:', startingNumber);

while (startingNumber < 500){
    console.log(startingNumber);
    startingNumber += Math.floor(Math.random() * 100);
}

console.log('After:', startingNumber);

// Do While Loop - DO the first part AT LEAST ONCE
// If the condition is still true, continue the while loop

// Syntax: do { code to execute } while { condition }

let x;
do {
    x = Math.floor(Math.random() * 55)
    console.log(x)
} while (x < 50);

console.log("Do While Finished. X is ", x);