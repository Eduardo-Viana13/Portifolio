const cidade = document.querySelector('.fundo');   // a div que envolve tudo
const relogio = document.getElementById('btnRelogio');

if (localStorage.getItem('modo') === 'noite') {
  cidade.classList.add('noite');
}

relogio.addEventListener('click', () => {
  const ficouNoite = cidade.classList.toggle('noite');
  localStorage.setItem('modo', ficouNoite ? 'noite' : 'dia');
});