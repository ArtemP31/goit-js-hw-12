import{a as L,S as B,i as n}from"./assets/vendor-Rdv7LHNr.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const g of s.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&t(g)}).observe(document,{childList:!0,subtree:!0});function c(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(o){if(o.ep)return;o.ep=!0;const s=c(o);fetch(o.href,s)}})();const v="46288557-8df3a9c87285fab012222dbba",O="https://pixabay.com/api/";async function p(e,r=1){const c={key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15};try{return(await L.get(O,{params:c})).data}catch(t){throw console.error("Error fetching images:",t),t}}let m;function w(){m=new B(".gallery a",{captionsData:"alt",captionDelay:250})}function S(){m&&m.refresh()}function y(e,r){const c=e.map(t=>`
    <li class="gallery-item">
      <div class="photo-card">
        <a href="${t.largeImageURL}" class="link">
          <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b class="name-info">Likes</b> ${t.likes}</p>
          <p class="info-item"><b class="name-info">Views</b> ${t.views}</p>
          <p class="info-item"><b class="name-info">Comments</b> ${t.comments}</p>
          <p class="info-item"><b class="name-info">Downloads</b> ${t.downloads}</p>
        </div>
      </div>
    </li>
  `).join("");r.insertAdjacentHTML("beforeend",c),S()}function I(e){e.innerHTML=""}function b(e){e.classList.remove("hidden"),e.style.display="block"}function u(e){e.classList.add("hidden"),e.style.display="none"}function C(e){e.classList.remove("hidden"),e.style.display="block"}function d(e){e.classList.add("hidden"),e.style.display="none"}const k=document.querySelector("#search-form"),l=document.querySelector(".gallery"),a=document.querySelector("#loading-indicator"),i=document.querySelector("#load-more");w();d(i);let f="";k.addEventListener("submit",q);i.addEventListener("click",x);a.classList.add("visible");a.classList.remove("visible");let h=1;async function q(e){if(e.preventDefault(),f=e.currentTarget.elements.searchQuery.value.trim(),h=1,f===""){n.error({message:"Sorry, there are no images matching your search query. Please, try again!",titleColor:"#fafafb",color:"#fafafb",backgroundColor:"#ef4040",messageColor:"#fafafb",progressBar:!0,progressBarColor:"#B51B1B",iconColor:"#fafafb",timeout:5e3,close:!0,closeOnClick:!0,zindex:9999,transitionIn:"fadeIn",transitionOut:"fadeOut",pauseOnHover:!0,position:"topRight"});return}I(l),d(i),b(a);try{const r=await p(f,h);if(u(a),r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please, try again!",titleColor:"#fafafb",color:"#fafafb",backgroundColor:"#ef4040",messageColor:"#fafafb",progressBar:!0,progressBarColor:"#B51B1B",iconColor:"#fafafb",timeout:5e3,close:!0,closeOnClick:!0,zindex:9999,transitionIn:"fadeIn",transitionOut:"fadeOut",pauseOnHover:!0,position:"topRight"});return}y(r.hits,l),r.totalHits>l.children.length&&C(i)}catch(r){u(a),n.error({message:"Sorry, there are no images matching your search query. Please, try again!",titleColor:"#fafafb",color:"#fafafb",backgroundColor:"#ef4040",messageColor:"#fafafb",progressBar:!0,progressBarColor:"#B51B1B",iconColor:"#fafafb",timeout:5e3,close:!0,closeOnClick:!0,zindex:9999,transitionIn:"fadeIn",transitionOut:"fadeOut",pauseOnHover:!0,position:"topRight"}),console.error(r)}}async function x(){b(a),d(i);try{h+=1;const e=await p(f,h);if(u(a),e.hits.length===0){n.info({title:"End of results",message:"We're sorry, but you've reached the end of search results."});return}y(e.hits,l),e.totalHits>l.children.length?C(i):(d(i),n.info({title:"End of results",message:"We're sorry, but you've reached the end of search results."}));const{height:r}=l.firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}catch(e){u(a),n.error({message:"Sorry, there are no images matching your search query. Please, try again!",titleColor:"#fafafb",color:"#fafafb",backgroundColor:"#ef4040",messageColor:"#fafafb",progressBar:!0,progressBarColor:"#B51B1B",iconColor:"#fafafb",timeout:5e3,close:!0,closeOnClick:!0,zindex:9999,transitionIn:"fadeIn",transitionOut:"fadeOut",pauseOnHover:!0,position:"topRight"}),console.error(e)}}
//# sourceMappingURL=index.js.map
