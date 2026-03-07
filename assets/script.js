
(function(){
  const path = window.location.pathname.replace(/index\.html$/, '');
  document.querySelectorAll('nav a, .lang a').forEach(a=>{
    const href = a.getAttribute('href');
    if(!href) return;
    try{
      const norm = new URL(href, window.location.origin).pathname.replace(/index\.html$/, '');
      if(norm === path) a.classList.add('active');
    }catch(e){}
  });
})();
