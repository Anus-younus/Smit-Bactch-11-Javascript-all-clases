let arr = [1, 2, 3, 4, 5, 6.7, 8];

// Array.splice(indexNumber, deleteItemCount, add,Item,Count)

let primeNumber = arr.splice(2, 3, 3, 2, 1);

// Array.slice(indexNumber, copyItems)

primeNumber.slice(3, 5);

let cricketers = [
  "afridi",
  "misbah",
  "shohaib akhtar",
  "mohammad asif",
  "yuvraj",
  "dhoni",
  "tendulkar",
  "shwag",
  "saeed anwar",
  "amir sohail",
];

let favCricketers = cricketers.slice(2, 4);

// console.log(favCricketers);

let str = ["h", "a", "i", "d", "e", "r"];

let Arr = str.reverse().join("");

// console.log(Arr);

// Array Methods
// indexOf()
// includes()
// push
// pop
// shift
// unShift
// splice()
// slice()
// reverse
// join
// concat

let user = ["m", "a", "m"];

let ans1 = user.slice(0);

let ans2 = user.reverse().join("");

// console.log(ans2);

let Str = "Anus younus";

// console.log(Str[6]);

// console.log(Str.length);

// console.log(Str.slice(0,2))

let firstName = "hAIDeR";

// let nameAnwar = firstName.toLocaleLowerCase()
let nameAnwar = firstName.toLocaleUpperCase();

// console.log(nameAnwar);

// let city = "KaRAcHi";

// // let userCity = prompt("Enter your city name");

// if (city.toUpperCase() == userCity.toUpperCase()) {
//   console.log("You lived in Karachi");
// } else {
// //   console.log("Sorry!");
// }

let userName = prompt("Enter your name");

let uerArray = (userName = [""]);

console.log(u);
