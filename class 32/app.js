let h1Ele = document.createElement("H1");

let bodyEle = document.querySelectorAll('body')[0];

console.log(bodyEle.childNodes);

console.log(h1Ele);

let textNode = document.createTextNode("Hello World!")

h1Ele.appendChild(textNode)

h1Ele.setAttribute("id", "heading")

bodyEle.insertBefore(h1Ele, bodyEle[2])

let h2Ele = document.querySelectorAll('h2')

let target = bodyEle.childNodes[1]

bodyEle.removeChild(target)



let plan1 = {
    planName : "fat lose",
    fee : 2000,
    admosionFee : 1000,
    excercise : "strngth",
    calculatePrice : function (noOfMonths){
        let totalBill = (this.fee + this.admosionFee) * noOfMonths
        if(noOfMonths < 3){
            console.log(totalBill);
        }else{
            console.log(totalBill * 100 / 80);
        }
    }
}



plan1.calculatePrice("4")
plan1.calculatePrice("2")

console.log(plan1["fee"]);
console.log(plan1.fee);

for(let prop in plan1){
    //console.log(plan1.prop);
    console.log(prop, ":", plan1[prop]);
}