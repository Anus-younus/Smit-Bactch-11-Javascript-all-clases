

// function calulater(num1, num2, operater){
    //     if(operater === "+"){
        //         console.log(num1 + num2);
        //     }
//     else if(operater === "-"){
    //         console.log(num1 - num2);
    //     }
    //     else if(operater === "/"){
        //         console.log(num1 / num2);
        //     }
        //     else if(operater === "*"){
            //         console.log(num1 * num2);
            //     }
            //     else if(operater === "%"){
                //         console.log(num1 % num2);
                //     }
                // }

// let q1 = prompt("Enter your num 1")
// let q2 = prompt("Enter your num 2")
// let calulate = prompt("Enter your operater");

// calulater(Number(q1), Number(q2), calulate);

// function tittle(firstName, lastName){
    //     let word1 = firstName[0].toUpperCase()
    //     let word2 = firstName.slice(1).toLowerCase()
    //     let wordl1 = lastName[0].toUpperCase()
    //     let wordl2 = lastName.slice(1).toLowerCase()
    //     let tittleCase = word1 + word2 + " " + wordl1 + wordl2
    //     console.log(tittleCase);
    // }
    // tittle("aNUS", "yOunUs")
    
    let str = "22777998898"
    let targetText = ""
    
    for(let i = 0; i < str.length; i++){
        if(parseInt(str[i]) % 2 !== 0 && i !== 0){
            targetText += "-" + str[i]
        }
        else{
            targetText += str[i]
        }
    }
    console.log(targetText);
    
    function checkChr(chr, lastIndex){
        
    }
    
    