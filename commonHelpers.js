import{S as c,i as l}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function d(s){const o="https://pixabay.com",r="/api/",n=new URLSearchParams({key:"44411867-7607aa296582669a38968dfd5",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${o}${r}?${n}`;try{const t=await fetch(e);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return await t.json()}catch(t){return{error:t.message}}}function u(s){const o=s.map(r=>`<li class="gallery-item"
      <a class="gallery-link" href="${r.largeImageURL}">
    <img
      width=360;
      height=200;
      class="gallery-image"
      src="${r.webformatURL}"
      alt="${r.tags} " />
          <div class="image-info">
               <p>LIKES: ${r.likes}</p>
                    <p>VIEWS: ${r.views}</p>
                    <p>COMMENTS: ${r.comments}</p>
                    <p>DOWNLOADS: ${r.downloads}</p>
                </div>
            </a>
            </li>
        `).join("");a.gallery.innerHTML=o,f.refresh()}const f=new c(".gallery li",{captionsData:"alt",captionDelay:250});function p(){a.loader.classList.remove("hidden")}function m(){a.loader.classList.add("hidden")}const a={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};a.form.addEventListener("submit",s=>{a.gallery.innerHTML="",s.preventDefault();const o=s.target.elements.search.value.trim();if(o==="")return l.warning({title:"warning",message:"Enter a word for the query, please.",position:"topRight",displayMode:"once"});p(),d(o).then(r=>{r.hits.length===0&&l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",displayMode:"once"}),u(r.hits)}).catch(()=>{}).finally(()=>{m(),a.form.reset()})});
//# sourceMappingURL=commonHelpers.js.map
