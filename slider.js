let slider2id = document.getElementById('.slider2id')
let slider2childid = document.getElementById('slider2-childid')
let cards =  slider2childid.getElementsByTagName('li')

let slider2childidWidth = slider2childid.clientWidth;


let elementstoshow = 4;

let cardWidth = slider2childidWidth/elementstoshow;

slider2childid.style.width = cards.length*cardWidth+'px';
slider2childid.style.transition='margin';
slider2childid.style.transitionDuration='3s';

for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    element.style.width = cardWidth+'px';
}

function prev() {
    if(+slider2childid.style.marginLeft.slice(0,-2)!= -cardWidth*(cards.length-elementstoshow))
    slider2childid.style.marginLeft = ((+slider2childid.style.marginLeft.slice(0,-2))-cardWidth)+'px';
}
function next() {
    if (+slider2childid.style.marginLeft.slice(0,-2)!= 0)
        slider2childid.style.marginLeft = ((+slider2childid.style.marginLeft.slice(0,-2))+cardWidth)+'px';
}
function autoPlay() {
    prev()
    if(+slider2childid.style.marginLeft.slice(0,-2) === -cardWidth*(cards.length-elementstoshow)){
        slider2childid.style.marginLeft='0px'; 
    }
     setTimeout(() => {
        autoPlay();
     }, 4000);
}
setTimeout(() => {
    autoPlay();
}, 4000);