import './style.css';

const $=s=>document.querySelector(s),A=$('#app'),R=n=>Math.floor(Math.random()*n);
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=R(i+1);[a[i],a[j]]=[a[j],a[i]]}return a};
const svg=(d,n=24)=>`<svg viewBox="0 0 24 24" width="${n}" height="${n}" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`;
const CS=["M5 19H19M12 19V5","M5 19L12 5L19 19","M12 5V19M5 12H19","M5 5L19 19M19 5L5 19","M5 9H19M5 15H19","M18 5H7V19H18","M12 4L20 12L12 20L4 12Z","M5 19V13A7 7 0 0 1 19 13V19","M7 5V19M17 5V19"];
const SP=["M4 4H20V20H4Z M4 4L20 20","M12 3L21 20H3Z M12 3V20","M19 5A9 9 0 1 0 19 19","M3 12H8L11 5L14 19L17 12H21","M4 20V4H20M4 12H14","M12 3V21M3 12H21M6 6L18 18","M4 8H20M4 16H20M8 4V20M16 4V20","M5 20L12 4L19 20M8 14H16","M4 4H16V12H8V20H20","M12 3A9 9 0 1 1 12 21A9 9 0 1 1 12 3M7 12H17","M4 12A8 8 0 0 1 20 12M4 12H20","M4 4H20L12 20Z","M4 12L12 4L20 12L12 20ZM12 4V20","M4 20H20M7 20V10M12 20V4M17 20V13","M18 5H8A3 3 0 0 0 8 11H16A3 3 0 0 1 16 17H6","M5 5H19V19H5Z M9 9H15V15H9Z","M4 4H20V20H4Z M20 4L4 20","M12 3L21 20H3Z M7.5 11.5H16.5","M5 5A9 9 0 1 1 5 19","M3 12H8L11 19L14 5L17 12H21","M4 4V20H20M4 12H14","M12 3V21M3 12H21M18 6L6 18","M4 8H20M4 16H20M8 4V20","M5 20L12 4L19 20M8 17H16","M20 4H8V12H16V20H4","M12 3A9 9 0 1 1 12 21A9 9 0 1 1 12 3M12 3V21","M4 12A8 8 0 0 0 20 12M4 12H20","M4 4H20L12 20Z M12 4V12","M4 12L12 4L20 12L12 20ZM4 12H20","M4 20H20M7 20V13M12 20V4M17 20V10","M6 5H16A3 3 0 0 1 16 11H8A3 3 0 0 0 8 17H18","M5 5H19V19H5Z M12 8A4 4 0 1 1 12 16A4 4 0 1 1 12 8"];
SP.push(
 "M5 4H19L22 12L19 20H5L2 12Z M5 12H19","M12 3L21 8V16L12 21L3 16V8Z M12 3V21",
 "M12 3L21 9L18 20H6L3 9Z M7 12H17","M12 3L21 9L18 20H6L3 9Z M12 3V20",
 "M6 4H18L21 20H3Z M12 4V20","M6 4H18L21 20H3Z M4 12H20",
 "M4 5H20V19H4Z M4 5L20 19M20 5L4 19","M4 5H20V19H4Z M12 5V19M4 12H20",
 "M12 3L20 7V17L12 21L4 17V7Z M8 9L16 15","M12 3L20 7V17L12 21L4 17V7Z M16 9L8 15",
 "M4 4H20V20H4Z M8 8H16V16H8Z M4 12H8","M4 4H20V20H4Z M8 8H16V16H8Z M16 12H20",
 "M3 7H21V17H3Z M3 7L12 13L21 7","M3 7H21V17H3Z M3 17L12 11L21 17",
 "M5 4H19V20H5Z M9 4V20M15 4V20","M5 4H19V20H5Z M5 9H19M5 15H19",
 "M12 3L20 12L12 21L4 12Z M8 12H16","M12 3L20 12L12 21L4 12Z M12 7V17",
 "M4 4H20L16 20H8Z M8 12H16","M4 4H20L16 20H8Z M12 4L10 20",
 "M4 5H20V19H4Z M7 9H17M7 15H17","M4 5H20V19H4Z M8 5V19M16 5V19",
 "M5 4H19V20H5Z M5 4L19 20","M5 4H19V20H5Z M19 4L5 20",
 "M12 3L21 20H3Z M8 15H16","M12 3L21 20H3Z M12 8V17",
 "M4 6H20V18H4Z M8 6V18M16 6V18","M4 6H20V18H4Z M4 12H20",
 "M4 4H20V20H4Z M12 4L4 20","M4 4H20V20H4Z M12 4L20 20",
 "M6 4H18V20H6Z M6 9H18M6 15H18","M6 4H18V20H6Z M12 4V20"
);
const N={
 c:{n:'기호쓰기',e:'Coding',max:135,d:'위쪽 기호표에는 숫자 1부터 9까지 서로 다른 기호가 하나씩 짝지어져 있습니다. 아래 줄의 숫자마다 짝지어진 기호를 찾아 기호판에서 눌러 채우세요. 순서대로, 건너뛰지 말고, 빠르고 정확하게 하세요.',s:'연습 7칸 후 본 검사 135칸, 제한시간 120초. 점수는 맞게 채운 칸 수입니다.'},
 s:{n:'동형모형찾기',e:'Symbol Search',max:100,d:'왼쪽 목표 기호 2개 중 하나라도 오른쪽 5개 기호 안에 있으면 “예”, 하나도 없으면 “아니오”를 고르세요. 순서대로, 건너뛰지 말고, 빠르고 정확하게 하세요. 틀리면 점수가 깎이고, 비슷하게 생긴 도형이 섞여 있으니 모양을 정확히 비교해야 합니다.',s:'연습 3문항 후 본 검사 100문항, 제한시간 120초 안에 최대한 많이 풉니다. 점수는 맞은 수에서 틀린 수를 뺀 값입니다.'}
};
const best=k=>{try{return+localStorage.getItem((k=='s'?'ps2_':'ps_')+k)||0}catch(e){return 0}};
const setBest=(k,v)=>{try{localStorage.setItem((k=='s'?'ps2_':'ps_')+k,v)}catch(e){}};
let G={},T,keyOrd=shuf([...CS.keys()]),pal=shuf([...CS.keys()]);
const mkDig=n=>{const a=[];let p=0;while(a.length<n){const d=1+R(9);if(d!=p)a.push(p=d)}return a};
const SPPAIRS=[...Array.from({length:16},(_,i)=>[i,i+16]),...Array.from({length:16},(_,i)=>[i+32,i+48])];
[
 ["M7 3H17L21 7V17L17 21H7L3 17V7Z M7 12H17","M7 3H17L21 7V17L17 21H7L3 17V7Z M12 7V17"],
 ["M12 3L21 9L18 20H6L3 9Z M12 8V17","M12 3L21 9L18 20H6L3 9Z M7 12H17"],
 ["M7 4H20L17 20H4Z M8 12H18","M7 4H20L17 20H4Z M12 5L10 19"],
 ["M3 11L12 3L21 11V20H3Z M9 20V13H15V20","M3 11L12 3L21 11V20H3Z M7 11H17M12 6V16"],
 ["M4 5H20L14 12L20 19H4L10 12Z M10 12H14","M4 5H20L14 12L20 19H4L10 12Z M7 8H17M7 16H17"],
 ["M12 3A9 9 0 1 1 12 21A9 9 0 1 1 12 3M6 6L18 18","M12 3A9 9 0 1 1 12 21A9 9 0 1 1 12 3M18 6L6 18"],
 ["M4 12A8 8 0 1 0 20 12A8 8 0 1 0 4 12M4 12H20","M4 12A8 8 0 1 0 20 12A8 8 0 1 0 4 12M12 4V20"],
 ["M4 20V12A8 8 0 0 1 20 12V20M4 16H20","M4 20V12A8 8 0 0 1 20 12V20M12 5V20"],
 ["M12 3L14.5 9L21 9.5L16 14L17.5 21L12 17.5L6.5 21L8 14L3 9.5L9.5 9Z M7 12H17","M12 3L14.5 9L21 9.5L16 14L17.5 21L12 17.5L6.5 21L8 14L3 9.5L9.5 9Z M12 7V17"],
 ["M12 3A9 9 0 1 1 12 21A9 9 0 1 1 12 3M7 7L17 17M17 7L7 17","M12 3A9 9 0 1 1 12 21A9 9 0 1 1 12 3M12 4V20M4 12H20"],
 ["M5 20V11A7 7 0 0 1 19 11V20M5 15H19","M5 20V11A7 7 0 0 1 19 11V20M12 5V20"],
 ["M4 5H20L17 19H7Z M7 9L17 15","M4 5H20L17 19H7Z M17 9L7 15"],
 ["M12 3L21 12L12 21L3 12Z M6 12L12 6L18 12","M12 3L21 12L12 21L3 12Z M12 6V18"],
 ["M5 4H19V20H5Z M5 4L19 20M19 4L5 20","M5 4H19V20H5Z M12 4V20M5 12H19"],
 ["M4 6L12 3L20 6V18L12 21L4 18Z M4 12L12 9L20 12","M4 6L12 3L20 6V18L12 21L4 18Z M12 3V21"],
 ["M4 4H20V20H4Z M7 8H17V12H7ZM7 16H17","M4 4H20V20H4Z M8 7V17M12 7V17M16 7V17"],
 ["M4 6A4 4 0 0 1 12 6A4 4 0 0 1 20 6V18H4Z M4 12H20","M4 6A4 4 0 0 1 12 6A4 4 0 0 1 20 6V18H4Z M8 8V18M16 8V18"],
 ["M4 4H20L17 20H7Z M4 12L20 12M8 5L16 19","M4 4H20L17 20H7Z M12 4L12 20M6 9L18 15"],
 ["M12 3L21 20H3Z M7 16L17 9","M12 3L21 20H3Z M7 9L17 16"],
 ["M4 4H20V20H4Z M4 10H13V20M13 4V10H20","M4 4H20V20H4Z M4 8H16V20M8 4V16H20"],
 ["M4 12A4 4 0 1 1 12 12A4 4 0 1 1 4 12M12 12A4 4 0 1 1 20 12A4 4 0 1 1 12 12","M4 12A4 4 0 1 1 12 12A4 4 0 1 1 4 12M12 12V8A4 4 0 1 1 20 12A4 4 0 1 1 12 12"],
 ["M4 5H20V19H4Z M4 5L20 19M4 19L20 5M12 5V19","M4 5H20V19H4Z M4 12H20M8 5V19M16 5V19"],
 ["M3 8L8 4L12 8L16 4L21 8V20H3Z M3 13H21","M3 8L8 4L12 8L16 4L21 8V20H3Z M8 9V20M16 9V20"],
 ["M4 4H20V20H4Z M4 4L20 20M12 4V20","M4 4H20V20H4Z M20 4L4 20M4 12H20"],
 ["M12 3L20 8V16L12 21L4 16V8Z M4 8L20 16","M12 3L20 8V16L12 21L4 16V8Z M20 8L4 16"],
 ["M4 4H20V20H4Z M7 7H17V17H7Z M7 12H17","M4 4H20V20H4Z M7 7H17V17H7Z M12 7V17"],
 ["M5 4H19V20H5Z M5 4L12 12L19 4M12 12V20","M5 4H19V20H5Z M5 20L12 12L19 20M12 4V12"],
 ["M4 7H20V17H4Z M4 7L12 12L20 7M8 17V12","M4 7H20V17H4Z M4 17L12 12L20 17M16 7V12"],
 ["M12 3L21 12L12 21L3 12Z M3 12H12V3","M12 3L21 12L12 21L3 12Z M12 21V12H21"],
 ["M5 4H19V20H5Z M5 9H19M5 15H19M9 4V20","M5 4H19V20H5Z M5 9H19M5 15H19M15 4V20"],
 ["M4 20V4H20V20M4 12H14L20 6","M4 20V4H20V20M4 12H14L20 18"],
 ["M4 4H20V20H4Z M4 10H20M4 15H14","M4 4H20V20H4Z M4 10H20M10 10V20"]
].forEach(pair=>{SPPAIRS.push([SP.length,SP.length+1]);SP.push(...pair)});
const mkSS=n=>{
 const seen=new Set(),items=[],yesCount=Math.floor(n/2);
 while(items.length<n){
  const y=items.length<yesCount,ids=shuf([...SPPAIRS.keys()]),choose=id=>{const pair=SPPAIRS[id],i=R(2);return{shown:pair[i],alt:pair[1-i]}},targets=ids.slice(0,2).map(choose),t=targets.map(x=>x.shown),s=shuf([targets[0].alt,targets[1].alt,...ids.slice(2,5).map(id=>SPPAIRS[id][R(2)])]);
  if(y)s[R(5)]=t[R(2)];
  const signature=`${t.join(',')}|${s.join(',')}|${y}`;
  if(!seen.has(signature)){seen.add(signature);items.push({t,s,y})}
 }
 return shuf(items);
};
const keyH=()=>`<div class="key">${keyOrd.map((s,d)=>`<div><b>${d+1}</b><span>${svg(CS[s])}</span></div>`).join('')}</div>`;
const rowH=(it,i)=>`<div class="row" id="e${i}"><div class="tg">${it.t.map(s=>svg(SP[s])).join('')}</div><div class="sg">${it.s.map(s=>svg(SP[s])).join('')}</div><div class="yn"><span>예</span><span>아니오</span></div></div>`;

function home(){
 clearInterval(T);G={};
 A.innerHTML=`<h1>처리속도 훈련</h1><p class="mut">웩슬러 성인지능검사(WAIS-IV)의 처리속도 소검사 두 가지를 같은 구성으로 연습합니다.</p>`+
 ['c','s'].map(k=>`<div class="sec"><h2>${N[k].n} <small>${N[k].e}</small></h2>${k=='c'?keyH():`<div class="rows">${rowH(mkSS(2)[0],'x')}</div>`}<p class="mut">${N[k].s}<br>최고 기록 ${best(k)||'없음'}<br>적응형 반응 한계 ${ab(k)?ab(k)+'초':'없음'}</p><button class="pri" data-a="intro" data-v="${k}">시작하기</button></div>`).join('')+
 `<p class="mut" style="margin-top:20px">훈련용 도구라서 공식 검사의 환산점수와 규준은 제공하지 않습니다. 기호와 도형은 원본 문항이 아니라 직접 만든 것입니다.</p>`;
}
function intro(k){
 clearInterval(T);G={t:k};
 A.innerHTML=`<h1>${N[k].n}</h1><div class="sec"><p>${N[k].d}</p><p class="mut">${N[k].s}<br>먼저 연습 문항으로 방법을 익힙니다.</p><div class="btns"><button data-a="home">뒤로</button><button class="pri" data-a="prac">연습 시작</button></div><div class="sec"><h2>적응형 훈련</h2><p class="mut">문항마다 반응 제한시간이 있습니다. 3문항 연속으로 맞히면 제한시간이 짧아지고, 틀리거나 시간이 지나면 길어집니다. 120초 동안 가능한 한 짧은 반응 한계에 도달하는 것이 목표입니다.</p><div class="btns"><button class="pri" data-a="ad">적응형 훈련 시작</button></div></div></div>`;
}
function begin(ph){
 const k=G.t,t=ph=='t';
 G={t:k,ph,i:0,ans:[],items:k=='c'?mkDig(t?135:7):mkSS(t?100:3),ad:AD&&t,d:k=='c'?4:6,st:0,ds:[]};
 if(k=='c'&&!t)pal=shuf(pal);
 view();
 if(t)run(120);
}
function view(){
 const g=G,k=g.t,t=g.ph=='t';
 const hud=`<div class="hud"><span>${N[k].n} <small>${g.ad?'적응형':t?'본 검사':'연습'}</small></span><span><span id="tm">${t?120:''}</span><button data-a="exit">나가기</button></span></div><div class="bar"><i id="bf"></i></div>${g.ad?'<div class="bar"><i id="ib" style="background:var(--ink)"></i></div>':''}`;
 A.innerHTML=hud+(k=='c'?
  `${keyH()}<div class="cells" id="w">${g.items.map((d,i)=>`<div class="cell" id="e${i}"><b>${d}</b><i class="bx"></i></div>`).join('')}</div><div class="msg" id="msg"></div><div class="pal">${pal.map(s=>`<button data-a="pick" data-v="${s}" aria-label="기호">${svg(CS[s],30)}</button>`).join('')}</div>`:
  `<div class="rows" id="w">${g.items.map(rowH).join('')}</div><div class="msg" id="msg"></div><div class="btns"><button class="pri" data-a="ans" data-v="1">← 예</button><button class="pri" data-a="ans" data-v="0">아니오 →</button></div>`);
 mark();
}
function revealAnswers(){
 const g=G;
 if(!g.items||!['p','t'].includes(g.ph)){console.info('진행 중인 문항에서만 사용할 수 있습니다.');return}
 g.items.forEach((item,i)=>{
    const row=$('#e'+i);if(!row)return;
    if(g.t=='c'){
     const box=row.querySelector('.bx');box.innerHTML=svg(CS[keyOrd[item-1]],22);box.classList.add('revealed');
    }else row.querySelectorAll('.yn span')[item.y?0:1].classList.add('revealed');
 });
 console.info('현재 라운드의 정답을 표시했습니다.');
}
window.revealAnswers=revealAnswers;
function mark(){
 const e=$('#e'+G.i);if(!e)return;
 document.querySelectorAll('.cur').forEach(x=>x.classList.remove('cur'));
 e.classList.add('cur');$('#w').scrollTop=e.offsetTop-2;$('#msg').textContent='';lim();
}
function pick(s){
 const g=G;if(g.ph!='p'&&g.ph!='t')return;
 const ok=s==keyOrd[g.items[g.i]-1];
 if(g.ph=='p'&&!ok){$('#msg').textContent='아니에요. 위쪽 기호표를 다시 확인하세요.';return}
 $('#e'+g.i+' .bx').innerHTML=svg(CS[s],22);
 g.ans.push(ok);stair(ok);adv();
}
function ans(v){
 const g=G;if((g.ph!='p'&&g.ph!='t')||g.lock)return;
 const it=g.items[g.i],ok=(v==1)==it.y;
 $('#e'+g.i+' .yn').children[v==1?0:1].classList.add('pk');
 g.ans.push(ok);
 if(g.ph=='t'){stair(ok);return adv()}
 g.lock=1;$('#msg').textContent=ok?'정답입니다.':`오답입니다. 정답은 “${it.y?'예':'아니오'}”입니다.`;
 setTimeout(()=>{g.lock=0;if(G===g)adv()},1300);
}
function adv(){
 const g=G;g.i++;
 if(g.i<g.items.length)return mark();
 if(g.ph=='t')return end();
 g.ph='r';
 A.innerHTML=`<h1>연습 완료</h1><div class="sec"><p>이제 본 검사입니다. 제한시간은 120초입니다. 순서대로, 건너뛰지 말고, 빠르고 정확하게 진행하세요. 시작을 누르면 3초 뒤에 시작됩니다.</p><div class="btns"><button data-a="prac">연습 다시</button><button class="pri" data-a="go">시작</button></div></div>`;
}
function go(){
 let n=3;clearInterval(T);
 A.innerHTML=`<div class="cd" id="cd">3</div>`;
 T=setInterval(()=>{if(--n<1){clearInterval(T);begin('t')}else $('#cd').textContent=n},1000);
}
function run(sec){
 const t0=performance.now();clearInterval(T);
 T=setInterval(()=>{const l=Math.max(0,sec-(performance.now()-t0)/1000);$('#tm').textContent=Math.ceil(l);$('#bf').style.width=l/sec*100+'%';if(l<=0)end()},100);
}
function end(){
 const g=G;if(g.ph!='t')return;g.ph='x';clearInterval(T);clearTimeout(IT);if(g.ad)return endAd(g);
 const k=g.t,c=g.ans.filter(Boolean).length,w=g.ans.length-c,sc=k=='c'?c:Math.max(0,c-w),prev=best(k),nb=sc>prev;
 if(nb)setBest(k,sc);
 A.innerHTML=`<h1>${N[k].n} 결과</h1><div class="sec"><div class="big">${sc}<small> / ${N[k].max}</small></div><p>맞은 수 ${c}, 틀린 수 ${w}, 시도 ${g.ans.length}</p><p class="mut">${nb?'최고 기록을 갱신했습니다.':'최고 기록 '+prev}</p><div class="btns"><button data-a="home">처음으로</button><button class="pri" data-a="go">다시 하기</button></div></div><p class="mut">연령별 환산점수가 아닌 원점수입니다. ${k=='s'?'오답은 점수를 깎으니 속도와 정확도를 함께 챙기세요.':'기호표를 외울수록 시선이 표를 덜 오가서 점수가 오릅니다.'}</p>`;
}
let IT,AD=0;
const ab=k=>{try{return+localStorage.getItem('psa_'+k)||0}catch(e){return 0}};
const setAb=(k,v)=>{try{localStorage.setItem('psa_'+k,v)}catch(e){}};
function stair(ok){
 const g=G;if(!g.ad)return;
 g.ds.push(g.d);
 if(ok){if(++g.st>=3){g.st=0;g.d=Math.max(g.t=='c'?.8:1,g.d*.85)}}
 else{g.st=0;g.d=Math.min(g.t=='c'?6:8,g.d*1.25)}
}
function lim(){
 clearTimeout(IT);
 const g=G,b=$('#ib');if(!g.ad||g.ph!='t'||!b)return;
 b.style.transition='none';b.style.width='100%';void b.offsetWidth;
 b.style.transition='width '+g.d+'s linear';b.style.width='0%';
 $('#msg').textContent='반응 제한 '+g.d.toFixed(2)+'초';
 const i=g.i;
 IT=setTimeout(()=>{if(G===g&&g.ph=='t'&&g.i==i)miss()},g.d*1000+150);
}
function miss(){const g=G;g.ans.push(false);stair(false);adv()}
function endAd(g){
 const k=g.t,n=g.ans.length,c=g.ans.filter(Boolean).length,l=g.ds.slice(-10),m=+((l.length?l.reduce((a,b)=>a+b)/l.length:g.d).toFixed(2)),p=ab(k),nb=n>0&&(!p||m<p);
 if(nb)setAb(k,m);
 A.innerHTML=`<h1>${N[k].n} 적응형 결과</h1><div class="sec"><div class="big">${m}<small> 초</small></div><p>마지막 10문항의 평균 반응 한계입니다. 낮을수록 빠른 반응을 유지했다는 뜻이에요.</p><p>맞은 수 ${c}, 시도 ${n}</p><p class="mut">${nb?'최고 기록을 갱신했습니다.':'최고 기록 '+(p?p+'초':'없음')}</p><div class="btns"><button data-a="home">처음으로</button><button class="pri" data-a="go">다시 하기</button></div></div><p class="mut">정답률이 떨어지면 반응 한계가 다시 늘어나니, 빠르기만이 아니라 정확도도 함께 올려야 합니다.</p>`;
}
const act={home:()=>{AD=0;home()},intro:k=>{AD=0;intro(k)},prac:()=>begin('p'),ad:()=>{AD=1;go()},exit:()=>{clearTimeout(IT);clearInterval(T);AD=0;intro(G.t)},go,pick:v=>pick(+v),ans:v=>ans(+v)};
document.addEventListener('click',e=>{const b=e.target.closest('[data-a]');if(b)act[b.dataset.a](b.dataset.v)});
document.addEventListener('keydown',e=>{if(G.t=='s'){if(e.key=='ArrowLeft'){e.preventDefault();ans(1)}else if(e.key=='ArrowRight'){e.preventDefault();ans(0)}}});
home();