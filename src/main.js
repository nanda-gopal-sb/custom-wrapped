import './style.css'
let i = 0;
const dialouge = [
  "Sparky: Snaky boi that you",
  "I am fine, thank you.",
  "What are you doing?",
  "I am learning JavaScript.",
  "Why are you learning JavaScript?",
  "Because I want to become a web developer."
];
let strAppend = embedStringInDiv(dialouge[i]);
i++;

document.querySelector('#app').innerHTML = strAppend
function embedStringInDiv(inputString) {
  return `
    <div>
      <p>${inputString}</p>
    </div>
  `;
}
document.body.onkeyup = function (e) {
  if (i < dialouge.length) {
    let strAppend = embedStringInDiv(dialouge[i]);
    i++;
    document.querySelector('#app').innerHTML = strAppend
    const img = document.createElement('img');
    img.src="/make-sum-happy/public/pics/sparky-d.png"
    document.body.appendChild(img);
  }
}