let headEle = document.querySelectorAll('.heading')
function changeWord(){
   headEle[0].innerHTML = "Hello javascript"
   location = "https://www.google.com"
}

function changeImage(el){
    el.src = "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/320400/320448.png"
}

function replaceimage(el){
    el.src = "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQgALb5iruHTeq27Dokk_ubu0jllv4a-7PhkCnAr1rfFin8b6vtdG06XGPXd87DfoeQiqlxUqZ7wg6fE1CbeJ-9gAl0v261u5rnlfhqvaU5uxb745sEMXza1nPaxU6oYPtYZRtqzpXz-Q"
}


let provinceEle = document.querySelectorAll('.province-input')
let paraEle = document.querySelectorAll('p')

function checkValue(el){
    el.value = "Karachi"
}

function swithProvince(el){
    let city = el.value.toLowerCase()
    let province;
    switch(city){
        case "karachi":
        province = "Sindh"
        break;
        case "lahore":
        province = "Punjab"
        break;
        case "peshawar":
        province = "KPK"
        break;
        case "quetta":
        province = "Balochistan"
        break;
        case "skardo":
        province = "Gilgit Baltistan"
        break;
        default:
        province = "Capital"
    }
    provinceEle[0].value = province
}

// setTimeout(function (){
//     console.log(1);
// }, 1000)

// setInterval(function (){
//     let i = 0
//     console.log("hello" + i++);
// }, 1000)