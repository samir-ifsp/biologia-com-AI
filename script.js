// Seleciona o cabeçalho
const header = document.getElementById('header');

// Escuta o evento de rolagem (scroll) da página
window.addEventListener('scroll', () => {
    // Se a página for rolada mais de 50 pixels para baixo
    if (window.scrollY > 50) {
        // Adiciona a classe 'scrolled' que altera o CSS do cabeçalho
        header.classList.add('scrolled');
    } else {
        // Remove a classe se voltar pro topo
        header.classList.remove('scrolled');
    }
});