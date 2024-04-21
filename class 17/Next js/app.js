let imageEle = document.querySelectorAll('img');

let alertEl = document.querySelectorAll('div')

alertEl[0].style.display = "none"
alertEl[1].style.display = "none"


function showKing(){
    let random = Math.ceil(Math.random() * 3)
    let myFlag = false;
    if(random === 1){
        imageEle[0].src = "https://thumbs.dreamstime.com/b/king-spades-illustration-playing-card-23685328.jpg"
        imageEle[1].src  = "https://www.shutterstock.com/image-vector/queen-hearts-playing-card-classic-600w-2224891339.jpg"
        imageEle[2].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8vrR_3jkx7k2OUzgSOk2oJlxWw_l0cH2WJ8Lxw9Tww&s"
       alertEl[0].style.display = "block"
    }
    else if(random === 2){
        imageEle[2].src = "https://thumbs.dreamstime.com/b/king-spades-illustration-playing-card-23685328.jpg"
        imageEle[1].src  = "https://www.shutterstock.com/image-vector/queen-hearts-playing-card-classic-600w-2224891339.jpg"
        imageEle[0].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8vrR_3jkx7k2OUzgSOk2oJlxWw_l0cH2WJ8Lxw9Tww&s"
        alertEl[1].style.display = "block"
        
    }
    else if(random === 3){
        imageEle[1].src = "https://thumbs.dreamstime.com/b/king-spades-illustration-playing-card-23685328.jpg"
        imageEle[0].src  = "https://www.shutterstock.com/image-vector/queen-hearts-playing-card-classic-600w-2224891339.jpg"
        imageEle[2].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8vrR_3jkx7k2OUzgSOk2oJlxWw_l0cH2WJ8Lxw9Tww&s"
        alertEl[1].style.display = "block" 
    }

}

function showQueen(){
    let random = Math.ceil(Math.random() * 3)
    if(random === 1){
        imageEle[1].src = "https://thumbs.dreamstime.com/b/king-spades-illustration-playing-card-23685328.jpg"
        imageEle[0].src  = "https://www.shutterstock.com/image-vector/queen-hearts-playing-card-classic-600w-2224891339.jpg"
        imageEle[2].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8vrR_3jkx7k2OUzgSOk2oJlxWw_l0cH2WJ8Lxw9Tww&s"
        alertEl[0].style.display = "block"
}
else if(random === 2){
    imageEle[2].src = "https://thumbs.dreamstime.com/b/king-spades-illustration-playing-card-23685328.jpg"
    imageEle[0].src  = "https://www.shutterstock.com/image-vector/queen-hearts-playing-card-classic-600w-2224891339.jpg"
    imageEle[1].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8vrR_3jkx7k2OUzgSOk2oJlxWw_l0cH2WJ8Lxw9Tww&s"
        alertEl[1].style.display = "block"
    }
    else if(random === 3){
        imageEle[0].src = "https://thumbs.dreamstime.com/b/king-spades-illustration-playing-card-23685328.jpg"
        imageEle[1].src  = "https://www.shutterstock.com/image-vector/queen-hearts-playing-card-classic-600w-2224891339.jpg"
        imageEle[2].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8vrR_3jkx7k2OUzgSOk2oJlxWw_l0cH2WJ8Lxw9Tww&s"
        alertEl[1].style.display = "block"
    }

}

function showJack(){
    let random = Math.ceil(Math.random() * 3)
    if(random === 1){
        imageEle[2].src = "https://thumbs.dreamstime.com/b/king-spades-illustration-playing-card-23685328.jpg"
        imageEle[1].src  = "https://www.shutterstock.com/image-vector/queen-hearts-playing-card-classic-600w-2224891339.jpg"
        imageEle[0].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8vrR_3jkx7k2OUzgSOk2oJlxWw_l0cH2WJ8Lxw9Tww&s"
        alertEl[0].style.display = "block"
}
else if(random === 2){
    imageEle[0].src = "https://thumbs.dreamstime.com/b/king-spades-illustration-playing-card-23685328.jpg"
    imageEle[2].src  = "https://www.shutterstock.com/image-vector/queen-hearts-playing-card-classic-600w-2224891339.jpg"
    imageEle[1].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8vrR_3jkx7k2OUzgSOk2oJlxWw_l0cH2WJ8Lxw9Tww&s"
        alertEl[1].style.display = "block"

    
}
else if(random === 3){
    imageEle[1].src = "https://thumbs.dreamstime.com/b/king-spades-illustration-playing-card-23685328.jpg"
    imageEle[0].src  = "https://www.shutterstock.com/image-vector/queen-hearts-playing-card-classic-600w-2224891339.jpg"
    imageEle[2].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8vrR_3jkx7k2OUzgSOk2oJlxWw_l0cH2WJ8Lxw9Tww&s"
        alertEl[1].style.display = "block"

    }

}