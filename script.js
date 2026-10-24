const screens=[...document.querySelectorAll('.screen')];
const label=document.querySelector('#step-label');
let current=0;
function showScreen(index){screens[current].classList.remove('active');current=index;screens[current].classList.add('active');label.textContent=index===0?'UNA SORPRESA':index===4?'PARA SIEMPRE':`PARADA ${index} DE 3`;window.scrollTo({top:0,behavior:'smooth'});if(index===4)celebrate();}
document.querySelectorAll('[data-next]').forEach(button=>button.addEventListener('click',()=>showScreen(Math.min(current+1,screens.length-1))));
document.querySelector('#restart').addEventListener('click',()=>showScreen(0));
document.querySelectorAll('.memory-card .photo-frame img').forEach(image=>{const placeholder=document.getElementById(image.id==='wedding-photo'?'wedding-placeholder':'dating-placeholder');image.addEventListener('load',()=>{image.hidden=false;placeholder.hidden=true;});image.addEventListener('error',()=>{image.hidden=true;placeholder.hidden=false;});if(image.complete&&image.naturalWidth>0){image.hidden=false;placeholder.hidden=true;}});
const letterButton=document.querySelector('#letter-button');
letterButton.addEventListener('click',()=>{const letter=document.querySelector('#hidden-letter');letter.hidden=!letter.hidden;letterButton.setAttribute('aria-expanded',String(!letter.hidden));letterButton.textContent=letter.hidden?'💌 Abrir una última cartita':'💖 Guardar mi cartita'});
function updateCounter(){const start=new Date(Date.UTC(2007,9,23));const now=new Date();let years=now.getFullYear()-2007;let months=now.getMonth()-9;let days=now.getDate()-23;if(days<0){months--;days+=new Date(now.getFullYear(),now.getMonth(),0).getDate();}if(months<0){years--;months+=12;}document.querySelector('#love-counter').textContent=`${years} años · ${months} meses · ${days} días juntos`;}
updateCounter();setInterval(updateCounter,60000);
function celebrate(){for(let i=0;i<22;i++){setTimeout(()=>{const heart=document.createElement('span');heart.className='float-heart burst-heart';heart.textContent=['♥','♡','💖','✨'][Math.floor(Math.random()*4)];heart.style.left=`${10+Math.random()*80}%`;heart.style.fontSize=`${16+Math.random()*20}px`;heart.style.animationDuration=`${3+Math.random()*2}s`;heartLayer.append(heart);heart.addEventListener('animationend',()=>heart.remove());},i*85);}}
const heartLayer=document.querySelector('.hearts');
function floatHeart(){const heart=document.createElement('span');heart.className='float-heart';heart.textContent=Math.random()>.5?'♡':'♥';heart.style.left=`${Math.random()*100}%`;heart.style.fontSize=`${12+Math.random()*16}px`;heart.style.animationDuration=`${7+Math.random()*5}s`;heartLayer.append(heart);heart.addEventListener('animationend',()=>heart.remove());}
setInterval(floatHeart,900);
