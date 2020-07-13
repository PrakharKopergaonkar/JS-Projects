//Try both ways of using slider by commenting out you don't want to use

const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const counter_var = document.getElementById('counter');
slides.forEach(function(slide,index){
    slide.style.left = `${index * 100}%`
})

let counter = 0
function caraouse() {
    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${counter*100}%)`
    })
}

//1st where next and prev both are present and slides are displayed in form of a loop

nextBtn.addEventListener('click',function() {
    counter++;
    if(counter==slides.length) {
        counter = 0
    }
    counter_var.textContent = counter+1
    caraouse()
})

prevBtn.addEventListener('click',function() {
    counter--;
    if(counter==-1) {
        counter = slides.length-1
    }
    counter_var.textContent = counter+1
    caraouse()
})

//2nd where prev is hidden at slide 0 and next is hidden at last

// function setinvisibility() { 
//     counter_var.textContent = counter+1
//     if(counter <= 0) { 
//         prevBtn.style.visibility = `hidden`;
//     }
//     else if(counter >= slides.length-1) {
//         nextBtn.style.visibility = `hidden`;
//     }
//     else{ 
//         prevBtn.style.visibility=`visible`;
//         nextBtn.style.visibility=`visible`;
//     }
// }
// setinvisibility()
// nextBtn.addEventListener('click',function() {
//     if(counter<slides.length-1) {
//         counter++;
//         setinvisibility()
//         caraouse()
//     }
// })

// prevBtn.addEventListener('click',function() {
//     if(counter>=1) { 
//         counter--;
//         setinvisibility()
//         caraouse()
//     }   
// })
