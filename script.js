let tamanhoFonte = 18;

// Mensagem de boas-vindas
window.onload = function(){
    alert("Bem-vindo ao site sobre Acessibilidade Visual!");
};

// Aumentar fonte
function aumentarFonte(){
    tamanhoFonte += 2;
    document.getElementById("conteudo").style.fontSize = tamanhoFonte + "px";
}

// Diminuir fonte
function diminuirFonte(){
    if(tamanhoFonte > 12){
        tamanhoFonte -= 2;
        document.getElementById("conteudo").style.fontSize = tamanhoFonte + "px";
    }
}

// Alto contraste
function alternarContraste(){
    document.body.classList.toggle("alto-contraste");
}