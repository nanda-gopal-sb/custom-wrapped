(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();let t=0;const i=["Press any key to start the conversation.","Sparky: Huh, Where am I?","Snaky-Boi : ...Sparky, is that you....?","Sparky: Who tf are you, and how do you know my name?","Snaky-Boi: Dude..Its me Snaky-Boi","Sparky: Snaky-Boi? I don't know any Snaky-Boi. Ridiculous name btw. Who named you?","Snaky-Boi: Dude, did you forget everything? We are best friends. We used to play together in the park."];let d=u(i[t]);t++;let p=!1;document.querySelector("#app").innerHTML=d;function u(c){return`
    <div>
      <p>${c}</p>
    </div>
  `}document.body.onkeyup=function(c){if(t<i.length){let s=u(i[t]);console.log(t),console.log(i[t]),document.querySelector("#app").innerHTML=s;const r=document.createElement("img");if(r.id=`${t}`,t==1&&(r.src="/make-sum-happy/public/pics/sparky-confused.png",r.style.transform="scaleX(-1)"),t==2&&(r.src="/make-sum-happy/public/pics/snaky-shocked.png"),t==3){const o=document.getElementById("1"),e=document.getElementById("2");o.src="/make-sum-happy/public/pics/sparky-angry.png",o.style.transform="scaleX(-1)",e.src="/make-sum-happy/public/pics/snaky-afraid.png",p=!0}if(t==4){const o=document.getElementById("2");o.src="/make-sum-happy/public/pics/snaky-sad.png"}if(t==5){const o=document.getElementById("1"),e=document.getElementById("2");o.src="/make-sum-happy/public/pics/sparky-meh.png",o.style.transform="scaleX(-1)",e.src="/make-sum-happy/public/pics/snaky-angry.png",p=!0}p||document.body.appendChild(r),t++}};
