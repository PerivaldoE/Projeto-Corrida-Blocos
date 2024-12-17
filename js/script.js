//Declarando a posição inicial dos palyers
let p1Pos = 1;
let p2Pos = 1;

//Criando variáveis vazias que vão ser utilizadas depois
let verificador;
let velocidadeP2;
let vencedor;

//Função declarada no html usando onclick
function startGame() {
    //Declarando as variáveis
    let p1Color = document.querySelector('#cor1').value;
    let p2Color = document.querySelector('#cor2').value;
    let dificuldade = document.querySelector('#difficulty').value;
    let main = document.querySelector('#main');
    let cenario = document.querySelector('#cenario');
    let acelerar = document.querySelector('#btn-xrl8');
    let p1 = document.querySelector('#player1');
    let p2 = document.querySelector('#player2');

    //Escondendo o conteúdo da página inicial e mostrando o cenário do jogo
    main.classList.toggle('hide');
    cenario.classList.remove('hide');
    acelerar.classList.remove('hide');
    p1.style.backgroundColor = p1Color;
    p2.style.backgroundColor = p2Color;

    if (dificuldade == 'easy') {
        //Velocidade para dificuldade fácil
        velocidadeP2 = 1.2;
    } else if (dificuldade == 'medium') {
        //Velocidade para dificuldade média
        velocidadeP2 = 1.4;
    } else {
        //Velocidade para dificuldade difícil
        velocidadeP2 = 1.6;
    }

    verificador = setInterval(() => {
        //Código para mover o player2
        p2Pos += velocidadeP2;
        p2.style.left = p2Pos + '%';

        //Código para verificar se o player2 ganhou
        if (p2Pos >= 90) {
            clearInterval(verificador);
            vencedor = 'Jogador 2';
        }
    }, 100)

    acelerar.addEventListener('click', () => {
        //Código para acelerar o player1
    })
}