let plus = document.querySelector('.plus')
let input = document.querySelector('.input')

plus.addEventListener('click', function(){
    if (Number(input.value) + 1 < 5 ){
        input.value = Number(input.value) + 1;
         minus.style.cursor = "pointer"
    }else{
        plus.style.cursor = "not-allowed"
    }
   
})


let minus = document.querySelector('.minus')

minus.addEventListener('click', function(){
    if (Number(input.value) > 1){
        input.value = Number(input.value) - 1;
        plus.style.cursor = "pointer"
    }else{
        minus.style.cursor = "not-allowed"
    }
})


let sun = document.querySelector('.sun')
let moon = document.querySelector('.moon')
let heading = document.querySelector('.heading')

sun.addEventListener('click', function(){
    sun.classList.add('warm')
    moon.classList.add('cold')
    heading.style.color = "black"
})

moon.addEventListener('click', function(){
    sun.classList.remove('warm')
    moon.classList.remove('cold')
    heading.style.color = "white"
})