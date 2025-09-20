import{a as c,S as u,i as f}from"./assets/vendor-CZ5zj-u3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d="52357571-fe61b70f00f7342157d30cc5c";function p(s){return c("https://pixabay.com/api/",{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}const n=document.querySelector(".form"),m=document.querySelector(".form-input"),h=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});n.addEventListener("submit",s=>{s.preventDefault();const t=m.value.trim();l.classList.remove("hidden"),p(t).then(o=>{if(console.log(o.data.hits),o.data.hits.length===0){f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff"});return}h.innerHTML=y(o.data.hits),g.refresh(),n.reset()}).catch(o=>{console.log(o)}).finally(()=>{l.classList.add("hidden")})});function y(s){return s.map(t=>`
    <li class="gallery-item">
    <a class="gallery-link" href="${t.largeImageURL}">
      <img class="gallery-image"
           src="${t.webformatURL}"
           alt="${t.tags}"/>
      </a>
      <ul class="gallery-text">
         <li>
         <h3>Likes</h3>
         <p>${t.likes}</p>
         </li>
         <li>
         <h3>Views</h3>
         <p>${t.views}</p>
         </li>
         <li>
         <h3>Comments</h3>
         <p>${t.comments}</p>
         </li>
         <li>
         <h3>Downloads</h3>
         <p>${t.downloads}</p>
         </li>
      </ul>
    </li>
    `).join("")}
//# sourceMappingURL=index.js.map
