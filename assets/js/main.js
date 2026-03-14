
document.addEventListener('DOMContentLoaded',()=>{
const h=document.querySelector('.ham'),mn=document.querySelector('.mob-nav'),mo=document.querySelector('.mob-ov'),b=document.body;
function toggle(){h.classList.toggle('on');mn.classList.toggle('on');mo.classList.toggle('on');b.style.overflow=mn.classList.contains('on')?'hidden':''}
if(h){h.addEventListener('click',toggle);mo.addEventListener('click',toggle);mn.querySelectorAll('a:not(.mob-lang a)').forEach(l=>l.addEventListener('click',()=>{if(mn.classList.contains('on'))toggle()}))}
const hdr=document.querySelector('.hdr');
window.addEventListener('scroll',()=>{hdr.classList.toggle('scrolled',window.scrollY>50)},{passive:true});
document.querySelectorAll('.faq-q').forEach(btn=>{btn.addEventListener('click',()=>{const i=btn.closest('.faq-i'),a=i.querySelector('.faq-a'),o=i.classList.contains('on');document.querySelectorAll('.faq-i.on').forEach(x=>{x.classList.remove('on');x.querySelector('.faq-a').style.maxHeight='0'});if(!o){i.classList.add('on');a.style.maxHeight=a.scrollHeight+'px'}})});
const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('vis');obs.unobserve(x.target)}})},{threshold:.1,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.anim').forEach(e=>obs.observe(e));
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',function(e){e.preventDefault();const t=document.querySelector(this.getAttribute('href'));if(t)t.scrollIntoView({behavior:'smooth',block:'start'})})});
});
