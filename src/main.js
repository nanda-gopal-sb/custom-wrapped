import './style.css'
let i = 0;
function is_touch_enabled() {
  return ( 'ontouchstart' in window ) || 
         ( navigator.maxTouchPoints > 0 ) ||
         ( navigator.msMaxTouchPoints > 0 );
}
const dialouge = [
  "Press any key to start the conversation.",
  "Sparky: Huh, Where am I?",
  "Snaky-Boi : ...Sparky, is that you....?",
  "Sparky: Who tf are you, and how do you know my name?",
  "Snaky-Boi: Dude..Its me Snaky-Boi",
  "Sparky: Snaky-Boi? I don't know any Snaky-Boi. Ridiculous name btw. Who named you?",
  "Snaky-Boi: Dude, did you forget everything? We are best friends. We used to play together in the park.",
];
let strAppend = embedStringInDiv(dialouge[i]);
i++;
let dontAdd = false;
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
    console.log(i);
    console.log(dialouge[i]);
    document.querySelector('#app').innerHTML = strAppend;
    const img = document.createElement('img');
    img.id = `${i}`;
    if (i == 1) {
      img.src = "../sparky-confused.png";
      img.style.transform = "scaleX(-1)";
    }
    if (i == 2) {
      img.src = "../snaky-shocked.png";
    }
    if (i == 3) {
      const sparky = document.getElementById('1');
      const snaky = document.getElementById('2');
      sparky.src = "../sparky-angry.png";
      sparky.style.transform = "scaleX(-1)";
      snaky.src = "../snaky-afraid.png";
      dontAdd = true;
    }
    if (i == 4) {
      const snaky = document.getElementById('2');
      snaky.src = "../snaky-sad.png";
    }
    if (i == 5) {
      const sparky = document.getElementById('1');
      const snaky = document.getElementById('2');
      sparky.src = "../sparky-meh.png";
      sparky.style.transform = "scaleX(-1)";
      snaky.src = "../snaky-angry.png";
      dontAdd = true;
    } 
    if (!dontAdd) document.body.appendChild(img);
    i++;
  }
}