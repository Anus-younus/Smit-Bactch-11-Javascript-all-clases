let capCity = ["Karachi", "Lahore", "Peshawar", "Quetta", "Skardu"]

let userCity = prompt("Enter your city name")
let isCapcity = false
for (let i = 0; i < capCity.length; i++) {
    const element = capCity[i];
    console.log(element);
    if (userCity.toLowerCase() === element.toLowerCase()) {
        console.log("You live in capital city");
        isCapcity = true
        break;
    }
}

if (isCapcity === false) {
    console.log("You do not lived in a capital city");
    let doTYouWant = confirm("Do you want to move")
    if (doTYouWant) {
        console.log("Vist zammen.com");
    }
}

let firstNames = ["Akram", "Abdullah", "Aadil", "Noman"] 
let lastNames = ["Khan", "Ansari", "Qureshi", "Tanoli"]
let possibleName = []
for (let i = 0; i < firstNames.length; i++) {
    const firstName = firstNames[i];
    for (let j = 0; j < lastNames.length; j++) {
        const lastName = lastNames[j];
        // console.log(firstName + " " + lastName);
        let fulName = firstName + " " + lastName;
        console.log(fulName);
        possibleName.push(fulName)
    }
}

console.log(possibleName);