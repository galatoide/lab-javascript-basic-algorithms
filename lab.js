// Iteration 1
let hacker1 = 'Wilson';
console.log(hacker1);

let hacker2 = 'Diogo';
console.log(hacker2);

// Iteration 2
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, is has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3

    // 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let a= ''
for (let i = 0; i < hacker1.length; i++) {
    a += hacker1[i].toUpperCase() + ' ';
}
console.log(a);

    // 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
// let b= ''
// for (let i >= 0; i < hacker2.length; i--) {
//     b += hacker2[i];
// }
// console.log(b);  