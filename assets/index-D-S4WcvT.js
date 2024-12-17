(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=(n,r,s,o)=>{const e={titre:n,auteur:r,resume:s,estLu:o,id:crypto.randomUUID(),createdAt:new Date().toDateString()};JSON.stringify(e);const t=localStorage.getItem("livres"),i=t?JSON.parse(t):[];i.push(e),localStorage.setItem("livres",JSON.stringify(i))},m=()=>{const n=localStorage.getItem("livres");return n?JSON.parse(n):[]},g=n=>{const r=localStorage.getItem("livres"),o=(r?JSON.parse(r):[]).filter(e=>e.id!==n);localStorage.setItem("livres",JSON.stringify(o))},f=n=>{const r=localStorage.getItem("livres"),s=r?JSON.parse(r):[];localStorage.setItem("livres",JSON.stringify(s))},l=()=>{const n=document.querySelector("#booksList"),r=m();n.innerHTML=r.map(s=>{const o=new Date(s.createdAt).toLocaleDateString("fr-FR");return`
               <div class="col-md-6 col-lg-4" id="book-${s.id}">
                     <div class="card h-100">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start mb-2">
                                <h5 class="card-title mb-0">${s.titre}</h5>
                                <span class= "  badge ${s.estLu?"bg-success":"bg-secondary"} toggle-read-btn" 
                                        style="cursor: pointer;" data-id='${s.id}' >
                                    ${s.estLu?'<i class="bi bi-check-circle me-1"></i>Lu':'<i class="bi bi-circle me-1"></i>Non lu'}
                                </span>
                                </div>
                                <h6 class="card-subtitle mb-2">
                                <i class="bi bi-person me-1"></i>${s.auteur}
                                </h6>
                                <p class="card-text small">${s.resume}</p>
                                <div class="d-flex justify-content-between align-items-center mt-3">
                                <small class="text-muted">
                                    <i class="bi bi-calendar3 me-1"></i>${o}
                                </small>
                                <button class="btn btn-outline-danger btn-sm delete-btn" data-id='${s.id}' >
                                    <i class="bi bi-trash me-1"></i>Supprimer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

    `}).join("")},v=()=>{const n=document.querySelector("#toggleFormBtn"),r=document.querySelector("#formSection"),s=new bootstrap.Collapse(r,{toogle:!1}),o=document.querySelector("#bookForm");n.addEventListener("click",()=>{s.toggle()}),r.addEventListener("hidden.bs.collapse",t=>{o.reset()}),o.addEventListener("submit",t=>{t.preventDefault(),console.log(t.target);const i=o.title.value,c=o.author.value,a=o.summary.value,d=o.isRead.checked;u(i,c,a,d),s.hide(),l()}),document.querySelector("#booksList").addEventListener("click",t=>{const i=t.target.closest(".delete-btn,.toggle-read-btn");if(i===null)return;const c=i.dataset.id;i.classList.contains("delete-btn")?(console.log("Livre supprimé !"),g(c),l()):i.classList.contains("toggle-read-btn")&&(console.log("Bouton changé !"),f())})};v();l();
