const links = document.querySelectorAll("header li a");

function pegarPagina(link) {
  const url = document.location.href;
  let href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(pegarPagina);

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const opcao = document.getElementById(parametro);

  if (opcao) {
    opcao.checked = true;
  }
}

parametros.forEach(ativarProduto);
