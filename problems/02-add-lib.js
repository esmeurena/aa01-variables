/*
Use string interpolation to set the `addLib` variable a new wacky string using
the three string variables:
"I shall <verb> to the <adjective> <noun>?"
*/

let verb = "swim";
let adjective = "sparkly";
let noun = "rainbow";

let addLib = `I shall ${verb} to the ${adjective} ${noun}?`;

console.log(addLib); // => "I shall swim to the sparkly rainbow?" test passed <3

verb = "RUN";
adjective = "FANCY";
noun = "ParK";

addLib = `I shall ${verb} to the ${adjective} ${noun}?`;

console.log(addLib); // => "I shall RUN to the FANCY ParK?" test passed <3
