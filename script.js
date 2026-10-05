const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
$("#tagline").textContent=SITE.tagline;$("#about").textContent=SITE.about;$("#location").textContent=SITE.location;$("#hours").textContent=SITE.hours;
$("#instagram").href=SITE.instagramUrl;$("#googleReviews").href=SITE.googleReviewsUrl;$("#googleReview").href=SITE.googleReviewUrl;$("#maps").href=SITE.mapsUrl;
$("#phone").href="tel:"+SITE.phoneDial;$("#phone").textContent="CALL "+SITE.phoneDisplay;$("#year").textContent=new Date().getFullYear();$$(".book-link").forEach(a=>a.href=SITE.bookingUrl);
$("#rewardNote").textContent=SITE.rewardNote;$("#rewardGrid").innerHTML=SITE.rewards.map((r,i)=>`<article class="reward"><span class="num">0${i+1}</span><h3>${r.title}</h3><p>${r.text}</p><strong>${r.reward} →</strong></article>`).join("");
$("#reviewGrid").innerHTML=SITE.reviews.map(r=>`<article class="review"><div class="stars">★★★★★</div><blockquote>“${r.text}”</blockquote><b>— ${r.name}</b></article>`).join("");
const tabs=$("#serviceTabs"),panel=$("#servicePanel");function showGroup(i){$$(".tab").forEach((b,x)=>b.classList.toggle("active",x===i));const g=SITE.serviceGroups[i];panel.innerHTML=`<div class="service-list">${g.services.map(s=>`<article class="service-row"><div><h3>${s.name}</h3><p>${s.note}</p></div><span class="duration">${s.duration}</span><span class="price">${s.price}</span><a class="mini-book" href="${SITE.bookingUrl}">BOOK →</a></article>`).join("")}</div>`}SITE.serviceGroups.forEach((g,i)=>{const b=document.createElement("button");b.className="tab"+(i===0?" active":"");b.textContent=g.name;b.onclick=()=>showGroup(i);tabs.appendChild(b)});showGroup(0);
$(".menu").onclick=()=>$("nav").classList.toggle("open");$$("nav a").forEach(a=>a.onclick=()=>$("nav").classList.remove("open"));
const track=$("#galleryTrack"),imgs=[...track.querySelectorAll("img")];let current=0,timer,interacting=false;
function focusNearest(){const c=track.getBoundingClientRect().left+track.clientWidth/2;let best=0,dist=Infinity;imgs.forEach((im,i)=>{const r=im.getBoundingClientRect(),d=Math.abs((r.left+r.width/2)-c);if(d<dist){dist=d;best=i}});current=best;imgs.forEach((im,i)=>im.classList.toggle("focused",i===best))}
function go(i){current=(i+imgs.length)%imgs.length;const im=imgs[current];const target=im.offsetLeft-(track.clientWidth-im.clientWidth)/2;track.scrollTo({left:target,behavior:"smooth"});setTimeout(focusNearest,450)}
function autoplay(){clearInterval(timer);timer=setInterval(()=>{if(!interacting)go(current+1)},3200)}
$(".next").onclick=()=>{go(current+1);autoplay()};$(".prev").onclick=()=>{go(current-1);autoplay()};
track.addEventListener("scroll",()=>requestAnimationFrame(focusNearest),{passive:true});track.addEventListener("pointerdown",()=>interacting=true);window.addEventListener("pointerup",()=>{interacting=false;autoplay()});window.addEventListener("load",()=>{focusNearest();autoplay()});

