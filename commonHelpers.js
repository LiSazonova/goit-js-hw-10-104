import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as y,i as p}from"./assets/vendor-77e16229.js";const r=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]"),D=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]"),g=document.querySelector("[data-days]");let d=null,i=null;o.disabled=!0;const q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){d=t[0];const e=Date.now();d<=e?(o.disabled=!0,p.error({message:"Please choose a date in the future",position:"topRight",color:"#EF4040",messageColor:"#fff"})):o.disabled=!1}};y("input#datetime-picker",q);o.addEventListener("click",C);function C(){o.disabled=!0,r.disabled=!0,i=setInterval(()=>{const e=new Date(r.value)-Date.now();if(e<=0){clearInterval(i),u({days:0,hours:0,minutes:0,seconds:0}),o.disabled=!1,r.disabled=!1;return}const n=s(e);u(n)},1e3)}function a(t){return String(t).padStart(2,"0")}const u=({days:t,hours:e,minutes:n,seconds:c})=>{g.textContent=a(t),D.textContent=a(e),S.textContent=a(n),b.textContent=a(c)};function s(t){const l=Math.floor(t/864e5),m=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:f,seconds:h}}console.log(s(2e3));console.log(s(14e4));console.log(s(2414e4));
//# sourceMappingURL=commonHelpers.js.map
