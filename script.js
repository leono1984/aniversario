const screens=[...document.querySelectorAll('.screen')];
const label=document.querySelector('#step-label');
let current=0;
const gate=document.querySelector('#gate-screen');
const gateForm=document.querySelector('#gate-form');
const gateCode=document.querySelector('#gate-code');
const gateMessage=document.querySelector('#gate-message');
const backgroundMusic=document.querySelector('#background-music');
const musicToggle=document.querySelector('#music-toggle');
let wrongAttempts=0;
const clues=[
  'Pista 1: La clave reúne tres números, uno por cada uno de nuestros hijos.',
  'Pista 2: No busques meses ni años; piensa solo en el día en que nació cada uno.',
  'Pista 3: Escribe cada día con dos cifras, uno detrás de otro, en el orden en que llegaron a nuestra familia.',
  'Pista 4: Son los días de nacimiento de Luis, Liam y Liani, en ese orden. 💕'
];
gateForm.addEventListener('submit',event=>{event.preventDefault();if(gateCode.value==='090516'){gateMessage.textContent='¿Y pensaste que no te iba a sorprender con nada? Pues te equivocaste. 💖';gateForm.querySelector('button').disabled=true;gateCode.disabled=true;musicToggle.hidden=false;playMusic();celebrateEntry();gate.classList.add('gate-open');document.querySelector('.journey').inert=false;setTimeout(()=>{gate.hidden=true;document.querySelector('[data-screen="0"] [data-next]').focus();},8000);return;}wrongAttempts++;gateMessage.textContent=clues[Math.min(wrongAttempts-1,clues.length-1)];gateMessage.classList.remove('gate-error');void gateMessage.offsetWidth;gateMessage.classList.add('gate-error');gateCode.value='';gateCode.focus();});
function updateMusicButton(){const playing=!backgroundMusic.paused;musicToggle.textContent=playing?'♫ Pausar música':'♫ Activar música';musicToggle.setAttribute('aria-pressed',String(playing));}
function playMusic(){backgroundMusic.play().then(updateMusicButton).catch(()=>{musicToggle.textContent='♫ No se encontró audio/fondo.mp3';musicToggle.setAttribute('aria-pressed','false');});}
musicToggle.addEventListener('click',()=>{if(backgroundMusic.paused)playMusic();else{backgroundMusic.pause();updateMusicButton();}});
backgroundMusic.addEventListener('ended',updateMusicButton);
function celebrateEntry(){const symbols=['♥','♡','💖','💗','💕'];for(let i=0;i<60;i++){const heart=document.createElement('span');heart.className='entry-heart';heart.textContent=symbols[Math.floor(Math.random()*symbols.length)];heart.style.left=`${Math.random()*100}vw`;heart.style.fontSize=`${18+Math.random()*27}px`;heart.style.animationDuration=`${2.8+Math.random()*2.7}s`;heart.style.animationDelay=`${Math.random()*.8}s`;document.body.append(heart);heart.addEventListener('animationend',()=>heart.remove());}}
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
