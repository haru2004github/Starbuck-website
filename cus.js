
let changeImg = document.querySelector(".img-container");
let cup1 = document.querySelector('.cup1');
let cup2 = document.querySelector('.cup2');
let cup3 = document.querySelector('.cup3');
let cup4 = document.querySelector('.cup4');
let img =document.querySelector('.innerImg');
let cancel= document.querySelector('.minus');
let addNum= document.querySelector('.add');
let result = document.querySelector('.result');
console.log(addNum)

changeImg.innerHTML=`<img class="" src="./img/pngegg (13).png" alt="">`

cup1.addEventListener('click',()=>{
    changeImg.innerHTML=`<img  src="./img/pngegg (13).png" alt="">`
    
})
cup2.addEventListener('click',()=>{
    changeImg.innerHTML=`<img  class="cup-2-size" src="./img/five.png" alt="">`
})
cup3.addEventListener('click',()=>{
    changeImg.innerHTML=`<img class="cup-3-size" src="./img/pngegg (15).png" alt="">`
    console.log("hsf")
})
cup4.addEventListener('click',()=>{
    changeImg.innerHTML=`<img  class="cup-4-size" src="./img/pngegg (17).png" alt="">`
    console.log("hsf")
})


