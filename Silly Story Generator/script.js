//Story strings

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day. Willy the Goblin";
const insertx = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const inserty = ["the soup kitchen", "Disneyland", "the White House"];
const insertz = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];

const paragraph = document.querySelectorAll(".story");
const name_input = document.getElementById("customname");


const uk_check = document.getElementById("uk");
function getRandomNumber(length) {
    return Math.floor(Math.random()*length)
}


function getRandomText() {
    return {":insertx:":insertx[getRandomNumber(insertx.length)], ":inserty:":inserty[getRandomNumber(inserty.length)], ":insertz:":insertz[getRandomNumber(insertz.length)]}
}


function generateParagraph() {
    let text = getRandomText();
    if(name_input.value!="") {
        text["Bob"] = name_input.value;
    }
    
    else {
        text["Bob"] = "Bob";
    }

    if(uk_check.checked) {
        let weight = Math.round(300*0.071429) + ' stone';
        let temperature =  Math.round((94-32)*5/9)+ ' centigrade';
        text['94 fahrenheit'] = temperature;
        text['300 pounds'] = weight;     
    }
    else {
        text['94 fahrenheit'] = '94 farenheit';
        text['300 pounds'] = '300 pounds';
    }
    
    let storyText_replaced = storyText.replace(/:insertx:|:inserty:|:insertz:|Bob|94 fahrenheit|300\spounds/g, function a(matched){
        return text[matched];
    });

    paragraph[0].textContent = storyText_replaced;
    paragraph[0].style.visibility = "visible";
}

