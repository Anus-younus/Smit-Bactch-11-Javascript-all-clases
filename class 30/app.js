let h1Ele = document.querySelectorAll('h1');

console.log(h1Ele);

h1Ele[0].innerHTML = "Hello mars"

let specialEle = document.getElementsByClassName('special')

console.log(specialEle);

specialEle[0].innerHTML = "My name is mars"

let uniSpecialEle = document.getElementById('special');

console.log(uniSpecialEle);

uniSpecialEle.innerHTML = "Hello earth my neighborhod"

let buttonEle = document.getElementsByTagName('button');

console.log(buttonEle);

buttonEle[0].addEventListener('click', () => {
    let changeText = document.childNodes[1].childNodes[2].childNodes[1]
    changeText.innerHTML = "Hello earth"
    let changePara = h1Ele[0].parentNode.childNodes[3]
    changePara.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nam alias dicta temporibus. Deleniti impedit voluptatem earum debitis dolor ipsam, dolores, neque placeat corrupti repellat tempore rem. Dolor, minima possimus!"
    // let nextPara = specialEle[0].nextSibling.nextSibling
    // nextPara.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur fuga saepe quia amet vitae aliquam necessitatibus inventore nesciunt? Aperiam reprehenderit praesentium ipsam iusto repellendus quibusdam sunt debitis omnis ducimus!"
    let previousPara = buttonEle[0].previousSibling.previousSibling.previousSibling.previousSibling
    previousPara.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur fuga saepe quia amet vitae aliquam necessitatibus inventore nesciunt? Aperiam reprehenderit praesentium ipsam iusto repellendus quibusdam sunt debitis omnis ducimus!"
})


let olEle = document.querySelectorAll('ol');

let liEle = olEle[0].childNodes;

for (let i = 0; i < liEle.length; i++) {
    if(liEle[i].nodeName === "LI" && liEle[i].nodeType === 1){
        liEle[i].innerHTML += " namaz"
    }
}