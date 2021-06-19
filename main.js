function additem(nome, status) {
    var tb = document.getElementById("games");
    var qtLinhas = tb.rows.length;
    var linha = tb.insertRow(qtLinhas);      

    var cellCodigo  = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellStatus = linha.insertCell(2);     

    cellCodigo.innerHTML = qtLinhas;    
    cellNome.innerHTML = nome;  
    cellStatus.innerHTML = status;
}

