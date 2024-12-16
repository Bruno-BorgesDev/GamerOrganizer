    document.addEventListener('DOMContentLoaded', function() {
    
    const lista = document.getElementById('lista-jogos'); // Elemento onde os jogos serão exibidos
    const jogos = JSON.parse(localStorage.getItem('jogos')) || [];
    
    if (jogos.length === 0){
        const linhaVazia = document.createElement('tr');
        const colunaVazia = document.createElement('td');
        colunaVazia.colSpan = 5; // Une as três colunas
        colunaVazia.textContent = 'Nenhum jogo encontrado'
        linhaVazia.appendChild(colunaVazia);
        lista.appendChild(linhaVazia);
        return;
    }

    jogos.forEach(jogo => {
        const linha = document.createElement('tr');

        // Cria células para título, gênero e status
        const colunaCodigo = document.createElement('td')
        colunaCodigo.textContent = jogo.codigo;
        linha.appendChild(colunaCodigo);

        const colunaTitulo = document.createElement('td')
        colunaTitulo.textContent = jogo.titulo;
        linha.appendChild(colunaTitulo);

        const colunaGenero = document.createElement('td')
        colunaGenero.textContent = jogo.genero;
        linha.appendChild(colunaGenero);

        const colunaStatus = document.createElement('td')
        colunaStatus.textContent = jogo.status;
        linha.appendChild(colunaStatus);

        const colunaDetalhes = document.createElement('td')
        colunaDetalhes.textContent = jogo.detalhes;
        linha.appendChild(colunaDetalhes);
    
        lista.appendChild(linha); //Adiciona a linha a tabela

        //limpar
        document.getElementById('limpar').addEventListener('click', function() {
            localStorage.clear();                     
            alert('Listagem limpa com sucesso !');
            window.location.reload();
        });        
    });
});
