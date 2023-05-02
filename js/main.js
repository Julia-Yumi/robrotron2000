//.addEventListener() é um escutador de eventos
//document.querySelector("#robotron") procura pelo id que está em parênteses
//a function anônima (() =>) criada dentro robotron.addEventListener, se diferencia das outras pq ela só pode ser usada nesse momento
//evento - criou um PointerEvent
//const robotron = document.querySelector("#robotron");

/*robotron.addEventListener("click",  (evento) => {
    console.log(evento)
});

function dizOi(nome) {
    console.log("Oi " + nome);
    console.log("Bem-vindo ao Robotron 2000");
}
dizOi("Pedro");*/

//const subtrair = document.querySelector("#subtrair");
//const somar = document.querySelector("#somar");

//document.querySelectorAll serve para procurar todos os elementos com a classe controle-ajuste (. classe e # id), aparece em array
const controle = document.querySelectorAll("[data-controle]"); 
const estatisticas = document.querySelectorAll("[ data-estatistica]");
// variável pecas com 5 objetos
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca); //este evento.target.dataset.peca serve para selecionar a peça que foi clicada
    })
})

//esta function serve para controlar a pontuação de cada parte através da classe controle-contador
function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");

    if (operacao === "-"){
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}
//
function atualizaEstatisticas(peca) {
    
    estatisticas.forEach((elemento) => { //forEach serve para percorrer todos os valores de estatisticas para cada elementod
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        //cada vez que um elemento é clicado é adicionado/diminuido o valor das estatisticas
    })
}
