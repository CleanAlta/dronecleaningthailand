(function(){
  var k='ca_consent';
  function has(){try{return localStorage.getItem(k)==='1'}catch(e){return false}}
  if(has())return;
  var b=document.createElement('div');
  b.id='cookie-banner';
  b.style.cssText='position:fixed;bottom:0;left:0;right:0;background:#1A355C;color:rgba(255,255,255,.8);padding:14px 20px;display:flex;align-items:center;justify-content:space-between;gap:12px;z-index:9999;font-family:Montserrat,sans-serif;font-size:13px;flex-wrap:wrap';
  var lang=document.documentElement.lang||'en';
  var txt={en:'We use cookies for analytics.',th:'เราใช้คุกกี้เพื่อวิเคราะห์',fr:'Nous utilisons des cookies analytiques.',de:'Wir verwenden Analyse-Cookies.'};
  var atxt={en:'Accept',th:'ยอมรับ',fr:'Accepter',de:'Akzeptieren'};
  var rtxt={en:'Reject',th:'ปฏิเสธ',fr:'Refuser',de:'Ablehnen'};
  b.innerHTML='<span>'+(txt[lang]||txt.en)+'</span><div style="display:flex;gap:8px"><button id="cb-ok" style="background:#008D9E;color:#fff;border:none;padding:8px 16px;border-radius:6px;cursor:pointer;font-weight:600;font-size:12px">'+(atxt[lang]||atxt.en)+'</button><button id="cb-no" style="background:transparent;color:rgba(255,255,255,.5);border:1px solid rgba(255,255,255,.2);padding:8px 16px;border-radius:6px;cursor:pointer;font-size:12px">'+(rtxt[lang]||rtxt.en)+'</button></div>';
  document.body.appendChild(b);
  document.getElementById('cb-ok').onclick=function(){try{localStorage.setItem(k,'1')}catch(e){}b.remove()};
  document.getElementById('cb-no').onclick=function(){try{localStorage.setItem(k,'0')}catch(e){}b.remove()};
})();
