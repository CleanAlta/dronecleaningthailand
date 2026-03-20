// ============================================
// CLEANALTA — Component Injection System v2
// Detects language, injects header + footer
// ============================================
(function(){
'use strict';
var path=window.location.pathname;
var L=path.startsWith('/fr/')?'fr':path.startsWith('/th/')?'th':path.startsWith('/de/')?'de':'en';

var T={
en:{home:'Home',services:'Services',projects:'Projects',locations:'Locations',industries:'Industries',blog:'Insights',invest:'Invest',contact:'Contact',quote:'Request Quote →',ready:'Ready to clean your building smarter?',free:'Free quote within 24h. No scaffolding. No risk.',wa:'WhatsApp',line:'LINE',desc:'Corporate drone cleaning for facades, glass, roofs. CAAT compliant. Subsidiary of TELEPILOTE SAS — European drone operator since 2014.',ftr_svc:'Services',ftr_loc:'Locations',ftr_co:'Company',facade:'Facade & Roof',glass:'Glass Cleaning',pure:'Pure Water',high:'High-Pressure',low:'Low-Pressure',inspect:'Inspection',model:'3D Modeling',bkk:'Bangkok',pkt:'Phuket',smui:'Koh Samui',cnx:'Chiang Mai',krbi:'Krabi',copy:'© 2026 CleanAlta Thailand — Subsidiary of',legal:'Legal',privacy:'Privacy',cookies:'Cookies'},
fr:{home:'Accueil',services:'Services',projects:'Projets',locations:'Zones',industries:'Secteurs',blog:'Blog',invest:'Investir',contact:'Contact',quote:'Devis gratuit →',ready:'Nettoyez votre immeuble plus intelligemment',free:'Devis gratuit sous 24h. Sans echafaudage.',wa:'WhatsApp',line:'LINE',desc:'Nettoyage drone professionnel facades, vitres, toitures. Conforme CAAT. Filiale TELEPILOTE SAS.',ftr_svc:'Services',ftr_loc:'Zones',ftr_co:'Entreprise',facade:'Facades & Toitures',glass:'Nettoyage Vitres',pure:'Eau Osmosee',high:'Haute Pression',low:'Basse Pression',inspect:'Inspection',model:'Modelisation 3D',bkk:'Bangkok',pkt:'Phuket',smui:'Koh Samui',cnx:'Chiang Mai',krbi:'Krabi',copy:'© 2026 CleanAlta Thailand — Filiale de',legal:'Mentions legales',privacy:'Confidentialite',cookies:'Cookies'},
th:{home:'\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01',services:'\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23',projects:'\u0E42\u0E04\u0E23\u0E07\u0E01\u0E32\u0E23',locations:'\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48',industries:'\u0E2D\u0E38\u0E15\u0E2A\u0E32\u0E2B\u0E01\u0E23\u0E23\u0E21',blog:'\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21',invest:'\u0E25\u0E07\u0E17\u0E38\u0E19',contact:'\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D',quote:'\u0E02\u0E2D\u0E23\u0E32\u0E04\u0E32 →',ready:'\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E17\u0E33\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E30\u0E2D\u0E32\u0E14\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E0A\u0E32\u0E0D\u0E09\u0E25\u0E32\u0E14?',free:'\u0E43\u0E1A\u0E40\u0E2A\u0E19\u0E2D\u0E23\u0E32\u0E04\u0E32\u0E1F\u0E23\u0E35 24 \u0E0A\u0E21.',wa:'WhatsApp',line:'LINE',desc:'\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E17\u0E33\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E30\u0E2D\u0E32\u0E14\u0E42\u0E14\u0E22\u0E42\u0E14\u0E23\u0E19',ftr_svc:'\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23',ftr_loc:'\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48',ftr_co:'\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17',facade:'\u0E1C\u0E19\u0E31\u0E07 & \u0E2B\u0E25\u0E31\u0E07\u0E04\u0E32',glass:'\u0E01\u0E23\u0E30\u0E08\u0E01',pure:'\u0E19\u0E49\u0E33\u0E1A\u0E23\u0E34\u0E2A\u0E38\u0E17\u0E18\u0E34\u0E4C',high:'\u0E41\u0E23\u0E07\u0E14\u0E31\u0E19\u0E2A\u0E39\u0E07',low:'\u0E41\u0E23\u0E07\u0E14\u0E31\u0E19\u0E15\u0E48\u0E33',inspect:'\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A',model:'3D',bkk:'Bangkok',pkt:'Phuket',smui:'Koh Samui',cnx:'Chiang Mai',krbi:'Krabi',copy:'© 2026 CleanAlta Thailand',legal:'Legal',privacy:'Privacy',cookies:'Cookies'},
de:{home:'Startseite',services:'Leistungen',projects:'Projekte',locations:'Standorte',industries:'Branchen',blog:'Blog',invest:'Investieren',contact:'Kontakt',quote:'Angebot anfordern →',ready:'Bereit fuer smartere Reinigung?',free:'Kostenloses Angebot in 24h. Ohne Geruest.',wa:'WhatsApp',line:'LINE',desc:'Professionelle Drohnenreinigung. Fassaden, Glas, Daecher. CAAT-konform. Tochter TELEPILOTE SAS.',ftr_svc:'Leistungen',ftr_loc:'Standorte',ftr_co:'Unternehmen',facade:'Fassaden & Daecher',glass:'Glasreinigung',pure:'Reinwasser',high:'Hochdruck',low:'Niederdruck',inspect:'Inspektion',model:'3D-Modellierung',bkk:'Bangkok',pkt:'Phuket',smui:'Koh Samui',cnx:'Chiang Mai',krbi:'Krabi',copy:'© 2026 CleanAlta Thailand — Tochter von',legal:'Impressum',privacy:'Datenschutz',cookies:'Cookies'}
};

var U={
en:{home:'/',services:'/services/',projects:'/projects/',locations:'/locations/',industries:'/industries/',blog:'/blog/',invest:'/invest/',contact:'/contact/',sf:'/services/facade-roof-cleaning/',sg:'/services/glass-cleaning/',sp:'/services/pure-water-cleaning/',sh:'/services/high-pressure-cleaning/',sl:'/services/low-pressure-cleaning/',si:'/services/drone-inspection/',sm:'/services/3d-modeling/',lb:'/locations/bangkok/',lp:'/locations/phuket/',ls:'/locations/koh-samui/',lc:'/locations/chiang-mai/',lk:'/locations/krabi/',legal:'/legal/',privacy:'/privacy/',cookies:'/cookies/'},
fr:{home:'/',services:'/services/',projects:'/projets/',locations:'/zones/',industries:'/secteurs/',blog:'/blog/',invest:'/investir/',contact:'/contact/',sf:'/services/nettoyage-facade/',sg:'/services/nettoyage-vitres/',sp:'/services/eau-pure/',sh:'/services/haute-pression/',sl:'/services/basse-pression/',si:'/services/inspection/',sm:'/services/modelisation-3d/',lb:'/zones/bangkok/',lp:'/zones/phuket/',ls:'/zones/koh-samui/',lc:'/zones/chiang-mai/',lk:'/zones/krabi/',legal:'/mentions-legales/',privacy:'/confidentialite/',cookies:'/cookies/'},
th:{home:'/',services:'/services/',projects:'/projects/',locations:'/locations/',industries:'/industries/',blog:'/blog/',invest:'/invest/',contact:'/contact/',sf:'/services/facade-roof-cleaning/',sg:'/services/glass-cleaning/',sp:'/services/pure-water-cleaning/',sh:'/services/high-pressure-cleaning/',sl:'/services/low-pressure-cleaning/',si:'/services/drone-inspection/',sm:'/services/3d-modeling/',lb:'/locations/bangkok/',lp:'/locations/phuket/',ls:'/locations/koh-samui/',lc:'/locations/chiang-mai/',lk:'/locations/krabi/',legal:'/legal/',privacy:'/privacy/',cookies:'/cookies/'},
de:{home:'/',services:'/dienstleistungen/',projects:'/projekte/',locations:'/standorte/',industries:'/branchen/',blog:'/blog/',invest:'/investieren/',contact:'/kontakt/',sf:'/dienstleistungen/fassadenreinigung/',sg:'/dienstleistungen/glasreinigung/',sp:'/dienstleistungen/reinwasser/',sh:'/dienstleistungen/hochdruck/',sl:'/dienstleistungen/niederdruck/',si:'/dienstleistungen/inspektion/',sm:'/dienstleistungen/3d-modellierung/',lb:'/standorte/bangkok/',lp:'/standorte/phuket/',ls:'/standorte/koh-samui/',lc:'/standorte/chiang-mai/',lk:'/standorte/krabi/',legal:'/impressum/',privacy:'/datenschutz/',cookies:'/cookies/'}
};

var t=T[L]||T.en;
var u=U[L]||U.en;
var p='/'+L;
var WA='33686505571';

function injectHeader(){
var el=document.getElementById('ca-header');
if(!el)return;
var langs=['en','fr','th','de'];
var lnk=langs.map(function(lg){
  var cls=lg===L?' ca-lang-active':'';
  var label=lg==='th'?'ไทย':lg.toUpperCase();
  return '<a href="/'+lg+'/" class="ca-lang-link'+cls+'">'+label+'</a>';
}).join('');

el.innerHTML='<div class="ca-announce"><div class="ca-container"><span>'+
(L==='fr'?'Nettoyage par drone · Filiale TELEPILOTE SAS · EASA · Certibiocide':
L==='de'?'Drohnenreinigung · Tochter TELEPILOTE SAS · EASA · Certibiocide':
L==='th'?'บริการทำความสะอาดด้วยโดรน · TELEPILOTE SAS · EASA · Certibiocide':
'Corporate drone cleaning · TELEPILOTE SAS subsidiary · EASA · Certibiocide')+
'</span></div></div>'+
'<header class="ca-header" id="ca-header-sticky"><div class="ca-container ca-header-inner">'+
'<a href="'+p+'/" class="ca-logo"><img src="/assets/images/logo-cleanalta-white.png" alt="CleanAlta Thailand" width="160" height="42" loading="eager"></a>'+
'<nav class="ca-nav" id="ca-nav">'+
'<a href="'+p+u.home+'">'+t.home+'</a>'+
'<a href="'+p+u.services+'">'+t.services+'</a>'+
'<a href="'+p+u.projects+'">'+t.projects+'</a>'+
'<a href="'+p+u.locations+'">'+t.locations+'</a>'+
'<a href="'+p+u.industries+'">'+t.industries+'</a>'+
'<a href="'+p+u.blog+'">'+t.blog+'</a>'+
'<a href="'+p+u.invest+'">'+t.invest+'</a>'+
'<a href="'+p+u.contact+'">'+t.contact+'</a>'+
'</nav>'+
'<div class="ca-header-actions">'+
'<div class="ca-lang-switcher">'+lnk+'</div>'+
'<a href="'+p+u.contact+'" class="ca-btn-primary ca-btn-hdr">'+t.quote+'</a>'+
'</div>'+
'<button class="ca-hamburger" id="ca-hamburger" aria-label="Menu"><span></span><span></span><span></span></button>'+
'</div></header>';

// Highlight current nav link
var navLinks=el.querySelectorAll('.ca-nav a');
for(var i=0;i<navLinks.length;i++){
  if(path===navLinks[i].getAttribute('href')||path.startsWith(navLinks[i].getAttribute('href'))&&navLinks[i].getAttribute('href')!==p+'/'){
    navLinks[i].classList.add('ca-nav-active');
  }
}
}

function injectFooter(){
var el=document.getElementById('ca-footer');
if(!el)return;

el.innerHTML='<section class="ca-cta-band"><div class="ca-container">'+
'<h2>'+t.ready+'</h2><p>'+t.free+'</p>'+
'<div class="ca-cta-row">'+
'<a href="'+p+u.contact+'" class="ca-btn-primary">'+t.quote+'</a>'+
'<a href="https://wa.me/'+WA+'" class="ca-btn-wa" target="_blank" rel="noopener">'+t.wa+'</a>'+
'<a href="https://line.me/ti/p/cleanalta" class="ca-btn-line" target="_blank" rel="noopener">'+t.line+'</a>'+
'</div></div></section>'+
'<footer class="ca-footer-main"><div class="ca-container ca-footer-grid">'+
'<div class="ca-footer-brand"><img src="/assets/images/logo-cleanalta-white.png" alt="CleanAlta" width="140" height="36" loading="lazy"><p>'+t.desc+'</p><p class="ca-footer-legal">SIREN: 938 788 510 · SIRET: 938 788 510 00015<br>TVA: FR30 938 788 510 · NAF: 81.21Z · SAS<br>2 Ruelle du Presbytere, 78580 Maule, France</p></div>'+
'<div class="ca-footer-col"><h4>'+t.ftr_svc+'</h4>'+
'<a href="'+p+u.sf+'">'+t.facade+'</a>'+
'<a href="'+p+u.sg+'">'+t.glass+'</a>'+
'<a href="'+p+u.sp+'">'+t.pure+'</a>'+
'<a href="'+p+u.sh+'">'+t.high+'</a>'+
'<a href="'+p+u.sl+'">'+t.low+'</a>'+
'<a href="'+p+u.si+'">'+t.inspect+'</a>'+
'<a href="'+p+u.sm+'">'+t.model+'</a></div>'+
'<div class="ca-footer-col"><h4>'+t.ftr_loc+'</h4>'+
'<a href="'+p+u.lb+'">'+t.bkk+'</a>'+
'<a href="'+p+u.lp+'">'+t.pkt+'</a>'+
'<a href="'+p+u.ls+'">'+t.smui+'</a>'+
'<a href="'+p+u.lc+'">'+t.cnx+'</a>'+
'<a href="'+p+u.lk+'">'+t.krbi+'</a></div>'+
'<div class="ca-footer-col"><h4>'+t.ftr_co+'</h4>'+
'<a href="'+p+u.invest+'">'+t.invest+'</a>'+
'<a href="'+p+'/telepilote/">TELEPILOTE SAS</a>'+
'<a href="'+p+'/compliance/">Compliance</a>'+
'<a href="'+p+u.contact+'">'+t.contact+'</a>'+
'<div style="margin-top:10px;padding-top:8px;border-top:1px solid rgba(255,255,255,.06)">'+
'<a href="'+p+u.legal+'">'+t.legal+'</a>'+
'<a href="'+p+u.privacy+'">'+t.privacy+'</a>'+
'<a href="'+p+u.cookies+'">'+t.cookies+'</a>'+
'</div></div>'+
'</div><div class="ca-footer-bottom"><div class="ca-container"><p>'+t.copy+' <a href="https://www.telepilote.org" target="_blank" rel="noopener">TELEPILOTE SAS</a> · <a href="https://www.cleanalta.com" target="_blank" rel="noopener">CleanAlta Group</a> · CAAT Compliant · 4.9/5 Google (63+)</p></div></div></footer>'+
'<a href="https://wa.me/'+WA+'" class="ca-fab ca-fab-wa" target="_blank" rel="noopener" aria-label="WhatsApp">💬</a>'+
'<a href="https://line.me/ti/p/cleanalta" class="ca-fab ca-fab-line" target="_blank" rel="noopener" aria-label="LINE">LINE</a>';
}

document.addEventListener('DOMContentLoaded',function(){
injectHeader();
injectFooter();
var hdr=document.getElementById('ca-header-sticky');
if(hdr){var ticking=false;window.addEventListener('scroll',function(){if(!ticking){requestAnimationFrame(function(){hdr.classList.toggle('scrolled',window.scrollY>50);ticking=false});ticking=true}},{passive:true})}
var burger=document.getElementById('ca-hamburger');
var nav=document.getElementById('ca-nav');
if(burger&&nav){burger.addEventListener('click',function(){nav.classList.toggle('open');burger.classList.toggle('open');document.body.style.overflow=nav.classList.contains('open')?'hidden':''})}
// FAQ accordions
document.querySelectorAll('.ca-faq-q').forEach(function(btn){
btn.addEventListener('click',function(){
var item=btn.closest('.ca-faq-item');
var ans=item.querySelector('.ca-faq-a');
var isOpen=item.classList.contains('open');
document.querySelectorAll('.ca-faq-item.open').forEach(function(x){x.classList.remove('open');x.querySelector('.ca-faq-a').style.maxHeight='0'});
if(!isOpen){item.classList.add('open');ans.style.maxHeight=ans.scrollHeight+'px'}
})});
// Counter animation
var cObs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){animateCounter(e.target);cObs.unobserve(e.target)}})},{threshold:0.5});
document.querySelectorAll('[data-count]').forEach(function(el){cObs.observe(el)});
function animateCounter(el){var tgt=parseFloat(el.dataset.count),sf=el.dataset.suffix||'',pf=el.dataset.prefix||'',dur=1800,st=performance.now();(function up(now){var pr=Math.min((now-st)/dur,1),ea=1-Math.pow(1-pr,3),cur=Math.floor(ea*tgt);el.textContent=pf+cur.toLocaleString()+sf;if(pr<1)requestAnimationFrame(up)})(performance.now())}
// Scroll reveal
var rObs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)';rObs.unobserve(e.target)}})},{threshold:0.06,rootMargin:'0px 0px -30px 0px'});
document.querySelectorAll('.ca-reveal').forEach(function(el,i){el.style.opacity='0';el.style.transform='translateY(20px)';el.style.transition='opacity .6s ease '+(i*.05)+'s, transform .6s ease '+(i*.05)+'s';rObs.observe(el)});
});
})();
