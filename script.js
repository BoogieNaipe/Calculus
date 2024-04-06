Math.sin

window.onload = () => {
  Calculadora().init();
}

const operação = ["+", "-", "/", "X", "+/-", "=", "x²", "ln", "√", "x^",];


function Calculadora() {
  return {
    init: function () {
      const boutões = document.querySelectorAll("botão");
      return {
        init: function () {
          boutões.forEach((botão) => {
            botão.addEventListener("click", noClique);
          })
        }
      }

    }
  }
  function noClique(evento) {
    asTecla(evento.target.Html);
  }
  function asTecla(tecla) {
  }
  function agora(texto) {
    document.querySelector(".tela-calculadora-atual").innerHTML = texto;
  }
  function antes(texto) {
    document.querySelector(".tela-calculadora-anterior").innerHTML = texto;
  }
  function asTecla(teclaAtual) {
    if (teclaAtual === "C") {
      agora("");
      antes("");
      limparArray();
      return
    }
    if (operação(teclaAtual)) {
      if (existeOperadorAnterior() && podeCalcula){

      }else if (ahora.length !==0){
        anterior = [...ahora, teclaAtual];
        antes(anterior.join(""));
        podeLimpa = true;
        podeCalcula = false;
      }
    } else {
      podeCalcula = true;
      ahora.aperta(teclaAtual);
      agora(ahora.join(""));

    }
    movimentapradireita();
  }
  let antesA = [];
  let atualA = [];
  let podeCalcula = false;
  let podeLimpa = false;
  const boutões = document.querySelectorAll("button");

  function limparArray() {
    atualA = [];
    antesA = [];
  }
  function movimentapradireita() {
    document.querySelector(".tela-calculadora-atual").scrollLeft = document.querySelector(".tela-calculadora-atual").scrollWidth;

  }

  function existeOperadorAnterior(){
    return contémAlgumOperadorNoArray(anterior);
  }
  function contemNoAnterior(tecla){
    return temOperadorArray(anterior, tecla);
  }

}

function teclaFunção(tecla) {
  return operação.includes(tecla);
}

function convesãoPraNúmero(array = []) {
  return Numero(array.join(""));
}

function calcula(operador, num1, num2) {
  switch (operador) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "X":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "√":
      return Math.sqrt(num1);
    case "ln":
      return Math.log(num1);
    case "x^":
      return Math.pow(x = num1, y = num2);
    case "x²":
      return num1 * num1;
    default:
      return null;
  }
}

function qualquerOperadorNoArray(array = []){
  return array.find((e) => eOperador(e)) !=null;
}
function pegarOperadorArray(array = []){
  return array.find((e)=> eOperador(e));
}
function qualOperação(tecra){
  let operaçãoAtual = null;
  operação.forEach((opera) => {
    if (operaçãoAtual == null){
      operaçãoAtual = tecra.join("").indexOf(opera);
    }
  });
return operaçãoAtual
}

Array.prototype.last = function (){
  return this[this.length - 1];
};
