import input from './text.json';
let i = 0;
const body = document.querySelector('body');
const text = document.getElementById('text');
body.addEventListener('touchstart', function (e) {
    text.innerHTML = input.text[i];
    if(i===input.text.length-1){
        const button = document.querySelector('button');
        button.setAttribute('onclick', 'redirect()');
    }
    else{
        i++;
    }   

}
);
