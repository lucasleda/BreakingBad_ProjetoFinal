
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

// Cortes: Script subscribe
let subs = [];

let inputEmail = document.getElementById("inputEmail");
let buttonInputEmail = document.getElementById("buttonInputEmail");

buttonInputVideo.onclick = () => {
  subs.push(inputEmail.value);
  inputEmail.value = "";

  let emailsJson = JSON.stringify(subs);
  localStorage.setItem("emails", emailsJson);
  alert("Sua solicitação de subscribe foi recebida, obrigado!");
};