import input from '../public/text.json';

let i = 0 ;
const text = document.getElementById('text');
const body = document.getElementById('container');
body.addEventListener('touchstart', function(e) {
    text.innerHTML = input.text[i];
    if(i === 1) {
        i = 0;
    }
    else{
        i++;
    }
});