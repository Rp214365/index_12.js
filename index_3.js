const userEmail = [55,215,14555,78 u76];

if (userEmail) {
    console.log("Got user email");
}

else{
    console.log("Don't have user email");
}

/*

[1]falsy values 

false,0,-0,bigInt 0n,"", null , undefined, NaN


[2] true values 

"0","fals"," ",[],{},function(){}
 */

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyobj  = {}


if (Object.keys(emptyobj).length===0) {
    console.log(`obj is empty`);
}



// Nullish coalescing  Operator (??): Null undefined

let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 12

val1 = undefined ?? 90;
val1 = null ?? undefined ?? 50

console.log(val1);

// Terinary operator

// condition ? true : false 

const iceTePrice = 100;
iceTePrice <= 80 ? console.log("less than 80") : console.log("more than 80") 