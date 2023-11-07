// Script troca de imagens 

    let imagens = [
        "imagens/capawj3.jpg",
        "imagens/capawj.jpg",
        "imagens/capacozinha.jpg",
        "imagens/capajesse.png",
        "imagens/capawalter.jpg",
        "imagens/money.jpg",
        "imagens/todos.jpg"
    ];

    let indiceAtual = 0;

    function avancarImagem() {
        indiceAtual = (indiceAtual + 1) % imagens.length;
        document.querySelector('.header-image').src = imagens[indiceAtual];
    }

    function retrocederImagem() {
        indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
        document.querySelector('.header-image').src = imagens[indiceAtual];
    }


 // Script para mostrar o botão de voltar ao topo da página 

    window.onscroll = function () {
        var btn = document.querySelector('.back-to-top');
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    };

    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

