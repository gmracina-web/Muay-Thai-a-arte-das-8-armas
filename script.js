const botaoMenu = document.querySelector('.menu-botao');
const menu = document.querySelector('.menu');

botaoMenu.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  botaoMenu.setAttribute('aria-expanded', aberto);
  botaoMenu.innerHTML = aberto ? 'Fechar <span>×</span>' : 'Menu <span>☰</span>';
});

menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('aberto');
  botaoMenu.setAttribute('aria-expanded', 'false');
  botaoMenu.innerHTML = 'Menu <span>☰</span>';
}));

const modal = document.querySelector('.modal');
const modalImagem = modal.querySelector('img');
const modalLegenda = modal.querySelector('p');

document.querySelectorAll('[data-imagem]').forEach((botao) => botao.addEventListener('click', () => {
  modalImagem.src = botao.dataset.imagem;
  modalImagem.alt = botao.querySelector('img').alt;
  modalLegenda.textContent = botao.dataset.legenda;
  modal.showModal();
}));

modal.querySelector('.modal__fechar').addEventListener('click', () => modal.close());
modal.addEventListener('click', (evento) => { if (evento.target === modal) modal.close(); });
