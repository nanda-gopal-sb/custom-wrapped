import input from './text.json';
let i = 0;
const body = document.querySelector('body');
const text = document.getElementById('text');
body.addEventListener('touchstart', function (e) {
    text.innerHTML = input.text[i];
    if (i === (input.text.length - 1)) {
        i = 0;
    }
    else {
        i++;
    }
});