let cur=0, lang='en';
const sls = document.querySelectorAll('.sl');
const tot = sls.length;

function go(d){
  const p = cur;
  cur = Math.max(0, Math.min(tot-1, cur+d));
  if(cur===p) return;
  sls[p].classList.remove('on');
  sls[p].classList.add('ex');
  setTimeout(()=>sls[p].classList.remove('ex'), 450);
  sls[cur].classList.add('on');
  document.getElementById('ctr').textContent = (cur+1)+' / '+tot;
  document.getElementById('pf').style.width = ((cur+1)/tot*100)+'%';
  document.getElementById('pv').style.opacity = cur===0 ? '0.3' : '1';
  document.getElementById('nx').style.opacity = cur===tot-1 ? '0.3' : '1';
}

function sL(l){
  lang = l;
  document.getElementById('be').classList.toggle('on', l==='en');
  document.getElementById('bt').classList.toggle('on', l==='th');
  document.querySelectorAll('[data-en]').forEach(el=>{
    const v = el.getAttribute('data-'+l);
    if(v !== null && v !== '') el.textContent = v;
  });
}

document.addEventListener('keydown', e=>{
  if(e.key==='ArrowRight'||e.key==='ArrowDown') go(1);
  if(e.key==='ArrowLeft'||e.key==='ArrowUp') go(-1);
});

// init
document.getElementById('pf').style.width = (1/tot*100)+'%';
document.getElementById('pv').style.opacity = '0.3';
