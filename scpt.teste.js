// Função para abrir o menu
function toggleMenu() {
    var menu = document.getElementById("side-menu");
    var menuWidth = window.getComputedStyle(menu).width;
    if (menuWidth === "250px") {
        closeMenu();
    } else {
        openMenu();
    }
}

// Função para abrir o menu
function openMenu() {
    document.getElementById("side-menu").style.width = "250px";
    document.body.style.overflow = "hidden"; // Impede o scroll do corpo
}

// Função para fechar o menu
function closeMenu() {
    document.getElementById("side-menu").style.width = "0";
    document.body.style.overflow = "auto"; // Permite o scroll do corpo
}

// Função para o efeito de máquina de escrever
function typeWriter() {
    const descriptionElement = document.getElementById('description');
    const text = descriptionElement.textContent;
    const speed = 40;  // Velocidade em milissegundos
    let i = 0;

    descriptionElement.textContent = '';  // Limpa o texto original

    function type() {
        // Adiciona o próximo caractere ao conteúdo da descrição
        descriptionElement.innerHTML += text.charAt(i);

        // Verifica se o caractere atual é uma quebra de linha
        if (text.charAt(i) === '\n') {
            descriptionElement.innerHTML += '<br>'; // Adiciona uma quebra de linha no HTML
        }

        i++;
        if (i < text.length) {
            setTimeout(type, speed);
        }
    }

    type();  // Inicia a função de digitação
}

// Inicia o efeito de máquina de escrever ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    typeWriter();
});
