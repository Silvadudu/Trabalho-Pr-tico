var r = document.querySelector(':root');

function myFunction_get() {
  var rs = getComputedStyle(r);
}

function vermelho() {
  r.style.setProperty('--azulClaro', '#e76464');
  r.style.setProperty('--azulMedio', '#ecafaf');
  r.style.setProperty('--azulEscuro', '#504343');
}

function roxo() {
    r.style.setProperty('--azulClaro', '#6a31b0');
    r.style.setProperty('--azulMedio', '#9147ec');
    r.style.setProperty('--azulEscuro', '#070707');
  }

function azul() {
    r.style.setProperty('--azulClaro', '#67a8cd');
    r.style.setProperty('--azulMedio', '#4292bf');
    r.style.setProperty('--azulEscuro', '#295278');
}

function escuro() {
    r.style.setProperty('--azulClaro', '#555456');
    r.style.setProperty('--azulMedio', '#302929');
    r.style.setProperty('--azulEscuro', '#070707');
}

function verde() {
    r.style.setProperty('--azulClaro', '#7eeb6b');
    r.style.setProperty('--azulMedio', '#aaef9e');
    r.style.setProperty('--azulEscuro', '#084309');
}

function amarelo() {
  r.style.setProperty('--azulClaro', '#e0ef59');
  r.style.setProperty('--azulMedio', '#e6f27c');
  r.style.setProperty('--azulEscuro', '#3f3f3f');
}