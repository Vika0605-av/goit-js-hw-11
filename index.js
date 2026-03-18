import{a as l,S as u,i as n}from"./assets/vendor-BkC4bTqC.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();async function d(a){return(await l.get("https://pixabay.com/api/",{params:{key:"55065193-391623a3c41ad24a1105f24d8",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data}const m=response.data.hits;f(m);function f(a){const t=a.map(e=>`
  <img src="${e.webformatURL}" alt="${e.tags}" />`).join(" ");gallery.innerHTML=t}let y=new u(".gallery-item",{captionDelay:250});const c=document.querySelector("#gallery");function p(a){const t=a.map(e=>`
  <a href="${e.largeImageURL}" class="gallery-item">
    <img src="${e.webformatURL}" alt="${e.tags}" />
    <div class="info">
      <p><b>Likes:</b> ${e.likes}</p>
      <p><b>Views:</b> ${e.views}</p>
      <p><b>Comments:</b> ${e.comments}</p>
      <p><b>Downloads:</b> ${e.downloads}</p>
    </div>
  </a>
`).join("");c.innerHTML=t,y.refresh()}function g(){c.innerHTML=""}function h(){document.querySelector(".loader").classList.remove("hidden")}function b(){document.querySelector(".loader").classList.add("hidden")}const L=document.querySelector(".search-form");document.querySelector(".gallery");L.addEventListener("submit",w);async function w(a){a.preventDefault();const t=a.target.elements.searchText.value.trim();if(!t){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}g(),h();try{const e=await d(t);if(!e||e.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}p(e)}catch(e){console.error("Error fetching images:",e),n.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}finally{b()}}
//# sourceMappingURL=index.js.map
