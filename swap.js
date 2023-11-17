let test2id = document.getElementById('test2id')
let test2childid = document.getElementById('test2-childid')
let card =  test2childid.getElementsByTagName('li')

let test2childidWidth = test2childid.clientWidth;


let elementstoshows = 4;

let cardsWidth = test2childidWidth/elementstoshows;

test2childid.style.width = card.length*cardsWidth+'px';
test2childid.style.transition='margin';
test2childid.style.transitionDuration='2s';

for (let index = 0; index < card.length; index++) {
    const element = card[index];
    element.style.width = cardsWidth+'px';
}

function prevs() {
    if(+test2childid.style.marginLeft.slice(0,-2)!= -cardsWidth*(card.length-elementstoshows))
    test2childid.style.marginLeft = ((+test2childid.style.marginLeft.slice(0,-2))-cardsWidth)+'px';
}
function nexts() {
    if (+test2childid.style.marginLeft.slice(0,-2)!= 0)
        test2childid.style.marginLeft = ((+test2childid.style.marginLeft.slice(0,-2))+cardsWidth)+'px';
}
function autoPlays() {
    prevs()
    if(+test2childid.style.marginLeft.slice(0,-2) === -cardsWidth*(card.length-elementstoshows)){
        test2childid.style.marginLeft='0px'; 
    }
     setTimeout(() => {
        autoPlays();
     }, 5000);
}
setTimeout(() => {
    autoPlays();
}, 5000);