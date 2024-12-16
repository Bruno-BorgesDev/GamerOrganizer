document.getElementById('form-jogo').addEventListener('submit', function(e){
    e.preventDefault(); //Evita o recarregamento da página

    function gerarCodigo() {
        const jogos = JSON.parse(localStorage.getItem('jogos')) || [];
        const maxCode = jogos.reduce((max, jogo) => Math.max(max,jogo.codigo), 0);
        return maxCode + 1;

    }

    const codigo = gerarCodigo();
    const titulo = document.getElementById('titulo').value;
    const genero = document.getElementById('genero').value;
    const status = document.getElementById('status').value;
    const detalhes = document.getElementById('detalhes').value;

    // Obtém os jogos existentes ou cria um array vazio
    const jogos = JSON.parse(localStorage.getItem('jogos')) || [];

    // Adiciona o novo jogo
    jogos.push({codigo, titulo, genero, status, detalhes});

    //Salva no LocalStorage
    localStorage.setItem('jogos', JSON.stringify(jogos));

    alert('Jogo adicionado com sucesso !')
    document.getElementById('form-jogo').reset(); // Limpa o forumulário
});
