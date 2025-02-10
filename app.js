let nomesUsuario = [];
let contagemReset = 0;

function adicionarNome(){
    verificador();
    let adicionarSemValor = nomesUsuario.length > 0 ? "ADICIONAR SEM VALOR = RESET! <br><br>" : "";
    console.log(adicionarSemValor);
    mensagens("listaAmigos", adicionarSemValor + nomesUsuario.join("<br>"));
    embaralhador();
    numeroDecaimento = nomesUsuario.length - 1;
}

function sortearAmigo(){
    if(numeroDecaimento == -1){
        mensagens("resultado", "Todos os nomes já foram sorteados!");
    }
    if(numeroDecaimento >= 0){
        mensagens("resultado", "O amigo sorteado é: " + nomesUsuario[numeroDecaimento]);
        numeroDecaimento--
        console.log(numeroDecaimento);
    }
}

function reset(){
    alert('Digite algum valor. Se você quiser resetar o programa, aperte de novo o botão de adicionar sem declarar nenhum valor')
    contagemReset++
    if (contagemReset >= 2){
        nomesUsuario = [];
        contagemReset = 0;
        mensagens("listaAmigos", "");
        mensagens("resultado", "");   
    }
}

function verificador(){
    nomeTemporario = document.querySelector('input').value;
    if(!nomeTemporario){
        reset();
    } else {
        if(nomesUsuario.includes(nomeTemporario)){
            alert("Insirá um novo nome!");
        }else{
            nomesUsuario.push(nomeTemporario);
            nomesUsuario.sort();
        }
        contagemReset = 0;
    }
    nomeTemporario = document.querySelector('input');
    nomeTemporario.value = '';
    console.log(nomesUsuario);
}

function mensagens(tag, texto){
    let conteudoMensagem = document.getElementById(tag)
    conteudoMensagem.innerHTML = texto;
}

function embaralhador(){
    for (let i = nomesUsuario.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [nomesUsuario[j], nomesUsuario[i]] = [nomesUsuario[i], nomesUsuario[j]];
    }
    console.log(nomesUsuario);
    }