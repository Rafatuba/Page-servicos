const botao = document.querySelector('.botao-dark')
const corpo = document.querySelector('body')


  botao.addEventListener('click', () => {
    corpo.classList.toggle('dark');
  })