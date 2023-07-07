window.addEventListener('scroll', function () { //background parallax
  var parallax = document.querySelector('.akame');
  var scrollTop = window.pageYOffset;
  parallax.style.backgroundPositionY = scrollTop * 0.7 + 'px'; //ajustar
});

const key01 = document.querySelector('.key01'); //primeiro botão
const container02 = document.querySelector('.container02');

key01.addEventListener('click', function () {
  container02.scrollIntoView({ behavior: 'smooth' });
});

const key02 = document.querySelector('.key02'); //segundo botão
const container03 = document.querySelector('.container03');

key02.addEventListener('click', function () {
  container03.scrollIntoView({ behavior: 'smooth' });
});

const key03 = document.querySelector('.key03'); //terceiro botão
const container04 = document.querySelector('.container04');

key03.addEventListener('click', function () {
  container04.scrollIntoView({ behavior: 'smooth' });
});

window.sr = ScrollReveal({ reset: true });
const sr = ScrollReveal(); //scrollreveal 

const config = { //Menor tempo
  origin: 'left',
  distance: '40px',
  duration: 500,
  delay: 0,
  easing: 'ease',
  reset: false,
  viewFactor: 0.2,
};
const config2 = { //Maior tempo
  origin: 'left',
  distance: '40px',
  duration: 1000,
  delay: 0,
  easing: 'ease',
  reset: false,
  viewFactor: 0.2,
};
const config3 = { //de baixo
  origin: 'bottom',
  distance: '40px',
  duration: 700,
  delay: 0,
  easing: 'ease',
  reset: false,
  viewFactor: 0.2,
}




const animado1 = document.querySelector('.nome');
const animado2 = document.querySelector('.titulo');
const animado3 = document.querySelector('.frame');

sr.reveal(animado1, config); //exibe animações iniciais
sr.reveal(animado2, config2);
sr.reveal(animado3, config3);

//adicionar no resto

