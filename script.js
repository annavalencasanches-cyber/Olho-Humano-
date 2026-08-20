const partes = document.querySelectorAll('.parte-olho');
const titulo = document.getElementById('titulo');
const descricao = document.getElementById('descricao');

partes.forEach(parte => {
  parte.addEventListener('click', () => {
    const nomeEstrutura = parte.getAttribute('data-nome');
    const descricaoEstrutura = parte.getAttribute('data-desc');

    titulo.innerText = nomeEstrutura;
    descricao.innerText = descricaoEstrutura;
  });
});
