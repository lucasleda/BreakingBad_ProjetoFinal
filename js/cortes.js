
// Cortes: Script input de recomendações
let recomendacoes = [];

let inputVideo = document.getElementById("inputVideo");
let buttonInputVideo = document.getElementById("buttonInputVideo");

buttonInputVideo.onclick = () => {
  recomendacoes.push(inputVideo.value);
  inputVideo.value = "";

  let recomendacoesJson = JSON.stringify(recomendacoes);
  localStorage.setItem("itens", recomendacoesJson);
  alert("Sua recomendação foi enviada, obrigado!");
};

// Script para mostrar o botão voltar ao topo da página
window.onscroll = function () {
  var btn = document.querySelector('.back-to-top');
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      btn.style.display = "block";
  } else {
      btn.style.display = "none";
  }
};

// Script voltar ao topo da página
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}