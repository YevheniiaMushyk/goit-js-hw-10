import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as y,i as f}from"./assets/vendor-651d7991.js";let o="";const r=document.querySelector("[data-start]"),s=document.querySelector("[data-days]"),d=document.querySelector("[data-hours]"),c=document.querySelector("[data-minutes]"),i=document.querySelector("[data-seconds]");r.setAttribute("disabled","disabled");const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){o=t[0],o.getTime()>Date.now()?r.removeAttribute("disabled"):(f.error({title:"Error",message:"Please choose a date in the future",position:"topCenter"}),s.textContent="00",d.textContent="00",c.textContent="00",i.textContent="00")}};y("#datetime-picker",C);const b=()=>{r.setAttribute("disabled","disabled");const t=setInterval(()=>{const a=o.getTime()-Date.now();if(a<=0)return clearInterval(t),o="";const e=p(a);s.textContent=n(e.days),d.textContent=n(e.hours),c.textContent=n(e.minutes),i.textContent=n(e.seconds)},1e3)};r.addEventListener("click",b);function p(t){const u=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:l,minutes:m,seconds:h}}function n(t){return t<10?String(t).padStart(2,"0"):t}
//# sourceMappingURL=commonHelpers.js.map
