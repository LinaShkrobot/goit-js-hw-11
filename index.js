import{a as u,S as f,i as d}from"./assets/vendor-D8hBcPQM.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="52357571-fe61b70f00f7342157d30cc5c";function p(a){return u("https://pixabay.com/api/",{params:{key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(o=>o.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function h(a){const o=a.map(r=>`
    <li class="gallery-item">
    <a class="gallery-link" href="${r.largeImageURL}">
      <img class="gallery-image"
           src="${r.webformatURL}"
           alt="${r.tags}"/>
      </a>
      <ul class="gallery-text">
         <li>
         <h3>Likes</h3>
         <p>${r.likes}</p>
         </li>
         <li>
         <h3>Views</h3>
         <p>${r.views}</p>
         </li>
         <li>
         <h3>Comments</h3>
         <p>${r.comments}</p>
         </li>
         <li>
         <h3>Downloads</h3>
         <p>${r.downloads}</p>
         </li>
      </ul>
    </li>
    `).join("");l.innerHTML=o,g.refresh()}function y(){l.innerHTML=""}function L(){c.classList.remove("hidden")}function b(){c.classList.add("hidden")}const v=document.querySelector(".form"),n=document.querySelector(".form-input");v.addEventListener("submit",a=>{a.preventDefault(),y();const o=n.value.trim();L(),p(o).then(r=>{const i=r.hits;if(i.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff",iconUrl:"/img/bi_x-octagon.svg"}),n.value="";return}h(i),n.value=""}).catch(r=>{console.log(r)}).finally(()=>{b()})});
//# sourceMappingURL=index.js.map
