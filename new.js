let box1 =document.querySelector(`.box1`)
let box2 =document.querySelector(`.box2`)
let box3 =document.querySelector(`.box3`)
let big =document.querySelector(`.big`)
let btn1=document.querySelector(`.btn1`)
let btn2=document.querySelector(`.btn2`)
let btn3=document.querySelector(`.btn3`)
  
btn1.addEventListener(`click`,()=> {
 box1.classList.add(`new1`)
 box2.classList.remove(`new2`)
 box3.classList.remove(`new3`)
})

btn2.addEventListener(`click`,()=> {
    box2.classList.add(`new2`)
    box1.classList.remove(`new1`)
    box3.classList.remove(`new3`)
   })

   btn3.addEventListener(`click`,()=> {
    box2.classList.remove(`new2`)
    box1.classList.remove(`new1`)
    box3.classList.add(`new3`)
   }) 