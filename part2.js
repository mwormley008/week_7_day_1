console.log('This is part 2');

// Basic Math Operations

// Addition
let sum = 5 + 5;
console.log(sum);
sum += 5; // sum = sum + 5
console.log(sum);
sum++; // sum += 1 // sum = sum + 1
console.log(sum);

// Subtraction
let diff = 20 - 5;
diff -= 10; // diff = diff - 10
console.log(diff)
diff--; // diff -= 1 // diff = diff - 1
console.log(diff);

// Multiplication
let prod = 8 * 5;
console.log(prod);
prod *= 5; // prod = prod * 5;
console.log(prod);

// Division
let quotient = 40 / 5;
console.log(quotient);
quotient /= 2; // quotient = quotient / 2
console.log(quotient);

// Floor division - use the .floor method from the built-in Math module
let floor = Math.floor(13/2);
console.log(floor);

// Exponents
let square = 5**2;
console.log(square);
square **= 2; // square = square ** 2
console.log(square);

// Modulo
let remainder = 19 % 4;
console.log(remainder);
remainder %= 2; // remainder = remainder % 2
console.log(remainder);

let myString = "My age is ";
let myRealAge = 54;

let addedString = myString + myRealAge;
console.log(addedString);
console.log(typeof addedString);

console.log(square);

let popQuiz = square + '4'
console.log(popQuiz);

console.clear()

// Javascript Comparisons
console.log(5 == 5);
console.log( 5 == 5.0);
console.log(5 == '5');
console.log( 5 === '5');
// == check for equality while allowing for type conversion
// === check for equality but does not allow for type conversion

console.log('1' == true);

// Greater than >, greater than or equal to >=, less than <, less than or equal to <=
// Equal allow type conversion == equal no type conversion ===
// Not equal with conversion !=, Not equal no conversion !==

console.log('5' != 5);
console.log('5' !== 5);

// Greater than, less than, etc convert to same type
console.log('10' > 9);

// Be careful with type conversion
console.log('100' > '9'); // Both values are already strings, no conversion needed - compare alphabetically

// When JavaScript compores objects, it looks for REFERENCE ONLY!
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];

/* 
    control flow
*/

// If condition
// Syntax if (condition expression) {code to execute if true}

let randomDigit = 34;

if (randomDigit > 10){
    console.log('The condition was true!');
    console.log('This is still part of the true');
}

console.log('This is not in the if block');

// If, Else

let randomInt = 205

if (randomInt % 100 ===0){
    console.log('Number is divisible by 100')
} else if (randomInt % 10 === 0){
    console.log('Number is not divisible by 100 but is divisible by 10')
} else {
    console.log('Number is not divisible by 100 nor 10')
}

// T && T = T
// T && F = F
// F && T = F
// F && F = F
// T || T = T
// T || F = T
// F || T = T
// F || F = F

let customerAge = 30

if (customerAge >= 18 && customerAge <= 40){
    console.log("Young Adult")
};

if (customerAge < 18 || customerAge > 65){
    console.log("You get a discount!");
};

