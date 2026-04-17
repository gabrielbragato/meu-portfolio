// Funcionalidade 1: Alerta ao enviar formulário
document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita recarregar a página
    
    let nome = document.getElementById('nome').value;
    let mensagem = document.getElementById('mensagem').value;
    
    alert(`Obrigado ${nome}! Sua mensagem foi enviada com sucesso.`);
    
    // Limpa o formulário
    document.getElementById('formContato').reset();
});

// Funcionalidade 2: Mensagem de boas-vindas
window.addEventListener('load', function() {
    alert('Bem-vindo ao meu portfólio! Fique à vontade para conhecer meus projetos.');
});

// Funcionalidade 3: Botão que muda cor (adicional - bônus)
// Para testar, você pode adicionar um botão extra no HTML
// Este exemplo muda a cor do cabeçalho ao clicar nele
document.querySelector('header').addEventListener('click', function() {
    let cores = ['#2c3e50', '#e74c3c', '#27ae60', '#f39c12'];
    let corAtual = this.style.backgroundColor;
    let novaCor = cores[Math.floor(Math.random() * cores.length)];
    this.style.backgroundColor = novaCor;
});