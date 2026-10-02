const collections=[
{name:"People",description:"Contributors documented across the 2024 and 2025 Riyadh editions, with recorded STEAM fields.",type:"Directory",keywords:["Contributors","STEAM","Riyadh"],count:"60 records",url:"people.html"},
{name:"Talks",description:"Session titles, formats, themes, and descriptions from the 2024 and 2025 editions.",type:"Sessions",keywords:["Talks","Panels","Keynotes"],count:"17 records",url:"talks.html"},
{name:"Editions",description:"Dates, locations, themes, and summaries for the 2024, 2025, and 2026 Riyadh editions.",type:"Editions",keywords:["Riyadh","2024","2025","2026"],count:"3 records",url:"editions.html"},
{name:"Advisory",description:"Rukun Advisory Circle members with documented roles, biographies, affiliations, and research records.",type:"Advisory",keywords:["Advisory","Industry","Research"],count:"2 records",url:"advisory.html"},
{name:"Research",description:"Published research, industry insights, open research questions, publications, frameworks, and weak signals.",type:"Research",keywords:["Publications","Signals","Frameworks","Research sessions"],count:"33 records",url:"research.html"},
{name:"Global",description:"SXSW London, panel records, workshop partners, and related global activity.",type:"Global",keywords:["SXSW London","Workshops","Partnerships"],count:"8 records",url:"archive.html"}
];
const els={search:document.querySelector("#search"),type:document.querySelector("#type"),keyword:document.querySelector("#keyword"),list:document.querySelector("#list"),count:document.querySelector("#resultCount"),empty:document.querySelector("#empty"),clear:document.querySelector("#clear")};
const esc=s=>String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
const uniq=a=>[...new Set(a)].sort((x,y)=>x.localeCompare(y));
function addOption(el,v){const o=document.createElement("option");o.value=v;o.textContent=v;el.appendChild(o)}
uniq(collections.map(x=>x.type)).forEach(v=>addOption(els.type,v));
uniq(collections.flatMap(x=>x.keywords)).forEach(v=>addOption(els.keyword,v));
function render(){
 const q=els.search.value.trim().toLowerCase(),type=els.type.value,keyword=els.keyword.value;
 const rows=collections.filter(r=>{
   const hay=[r.name,r.description,r.type,...r.keywords].join(" ").toLowerCase();
   return(!q||hay.includes(q))&&(!type||r.type===type)&&(!keyword||r.keywords.includes(keyword));
 });
 els.list.innerHTML=rows.map(r=>`<article class="kod-resource">
   <h2>${esc(r.name)}</h2>
   <p class="kod-description">${esc(r.description)}</p>
   <div class="kod-taxonomy"><span><strong>${esc(r.type)}</strong></span><span>${esc(r.count)}</span><span>${esc(r.keywords.join(" · "))}</span></div>
   <a class="kod-visit" href="${esc(r.url)}" aria-label="Open ${esc(r.name)}">↗</a>
 </article>`).join("");
 els.count.textContent=`${rows.length} of ${collections.length} collections`;
 els.empty.hidden=rows.length!==0;
}
[els.search,els.type,els.keyword].forEach(el=>el.addEventListener("input",render));
els.clear.addEventListener("click",()=>{els.search.value="";els.type.value="";els.keyword.value="";render();els.search.focus()});
render();