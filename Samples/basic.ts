                                                                                                                                                                                                                                                                                                                                                                                          
/*
Basic GLS Syntax
Version 0.1
Josh Goldberg
*/

// Basic Usage
console.log("Hello world!"); // Basic printing here...

// Variables
var a: string = "Hello world!";
var b: int = 7;
var c: double = 11.7;
var d: boolean = true;

// Operations
var e: int = 1 + 2;
var f: int = b < c;

// If Statements
if (d) {
    console.log("d is true!");
}
if (c < 14) {
    console.log("c is less than 14!");
}

// While Loops
while (d) {
    console.log("d is", d);
    d = false
}
while (c > 3) {
    console.log("c is", c);
    c -= 1
}

// For Loops
for (var i: int = 0; i < 7; i += 1) {
    console.log("i plus one is", i + 1);
}

// Function Definitions
function sayHello() {
    console.log("Hello world!");
}
function combineStrings(string a, string b) {
    return a + b;
}

// Calling Functions
sayHello();
combineStrings("hello", "world");
combineStrings("hello" + " ", "world");
combineStrings(combineStrings("hello", "world"), "world");

// fin
