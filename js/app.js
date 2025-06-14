let jogosAlugados = 0;

function exibirAlugados() {
    console.log(`Jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id){
    let game = document.getElementById(`game-${id}`); //Pega o jogo pelo ID

    //Serão alterados
    let capaJogo = game.querySelector(".dashboard__item__img"); //Pego um elemento pela classe do CSS
    let botao = game.querySelector(".dashboard__item__button"); //Pego o botão pelo pela classe do CSS

    if(capaJogo.classList.contains("dashboard__item__img--rented")){
        if(confirm("Você tem certeza que deseja devolver este jogo?")){ //Pergunta se o usuário tem certeza
            capaJogo.classList.remove("dashboard__item__img--rented");
            botao.classList.remove("dashboard__item__button--return");
            botao.textContent = "Alugar";
            jogosAlugados--; //Decrementa a quantidade de jogos alugados
        }
    } else{
        capaJogo.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";
        jogosAlugados++
    }

    exibirAlugados(); //Exibe a quantidade de jogos alugados
}

// Inicializa a contagem considerando todos os jogos que já estão alugados
document.addEventListener('DOMContentLoaded', function() { //Espera o carregamento de toda a página e executa a função
    
    //Manipula a variável global jogosAlugados, mostrando a quantidade de jogos alugados ao carregar a página
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    exibirAlugados();
});