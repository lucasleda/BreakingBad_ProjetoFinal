
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