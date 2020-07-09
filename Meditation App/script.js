const container = document.querySelector('.container');
const text = document.querySelector('#text')


//Variables that holds value
const totalTime = 7500
const breathTime = (totalTime/5)*2
const holdTime = totalTime/5

breatheAnimation()

//Function that does animation
function breatheAnimation () {
    text.innerHTML = "Breathe In!"
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'Hold'
        setTimeout(() => {
            text.innerText = 'Breath Out!'
            container.className = 'container shrink'
        },holdTime)
    }, breathTime)
}

//Call functions in every Total_time seconds
setInterval(breatheAnimation, totalTime)



//background: #224941 url('./img/bg.jpg') no-repeat center center/cover;