//* Variables

//* task - 1

// let admin;
// let noun;

// noun = "John";

// admin = noun;

// alert(admin);

//* --------------------------

//* task - 2

// let ourPlanetName = "Earth";

// let currentUserName = "Niklaus";

//* --------------------------

//* task - 3

// const BIRTHDAY = "18.04.1982";

// const age = "someCode(BIRTHDAY)";

//* --------------------------

//* Data types

//* task - 1

// let noun = "Elijah";

// alert( `hello ${1}` ); -> Output: 'hello 1'

// alert( `hello ${"name"}` ); // Output -> 'hello name'

// alert( `hello ${noun}` ); // Output -> 'hello Elijah'

//* --------------------------

//* Interaction

//* task - 1

// let noun = prompt("What's your name?", '');
// alert(noun);

//* --------------------------

//* Basic operators

//* task - 1

// let a = 1, b = 1;

// let c = ++a; -> c = 2, a = 2
// let d = b++; -> d = 1, b = 2

//* --------------------------

//* task - 2

// let a = 2;

// let x = 1 + (a *= 2); -> a = 4, x = 5

//* --------------------------

//* task - 3

// "" + 1 + 0 -> '10' string
// "" - 1 + 0 -> -1 number
// true + false -> 1 number
// 6 / "3" -> 2 number
// "2" * "3" -> 6 number
// 4 + 5 + "px" -> '9px' string
// "$" + 4 + 5 -> '$45' string
// "4" - 2 -> 2 number
// "4px" - 2 -> NaN
// "  -9  " + 5 -> '  -9  5' string
// "  -9  " - 5 -> -14 number
// null + 1 -> 1 number
// undefined + 1 -> 1 number X //  NaN
// " \t \n" - 2 -> NaN X // -2

//* --------------------------

//* task - 4

// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(a + b); The result should be 3

// Using Number() or '+'

// alert(+a + +b); Output -> 3

//* --------------------------

//* Comparisons

//* task - 1

// 5 > 4 -> true
// "apple" > "pineapple" -> false
// "2" > "12" -> false X // true
// undefined == null -> true
// undefined === null -> false
// null == "\n0\n" -> false
// null === +"\n0\n" -> false