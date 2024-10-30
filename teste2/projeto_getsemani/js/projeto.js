
 const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Mostrar/ocultar o botão baseado na rolagem
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block"; // mostra o botão
        } else {
            scrollToTopBtn.style.display = "none"; // esconde o botão
        }
    };

    // Função para rolar para o topo
    scrollToTopBtn.onclick = function() {
        window.scrollTo({top: 0, behavior: 'smooth'}); // rolar suavemente
        return false; // evita o comportamento padrão do link
    };


    /* Abrir menu */
const botaoMenu = document.querySelector(".titulo-menu a"); 

const listaDeLinks = document.querySelector(".links-menu");

botaoMenu.addEventListener("click", function( event ){

    event.preventDefault();

    listaDeLinks.classList.toggle("aberto");

    if(listaDeLinks.classList.contains("aberto")){
        botaoMenu.innerHTML = "Fechar X";
    }else{
        botaoMenu.innerHTML = "Menu &equiv;"
    }
});

