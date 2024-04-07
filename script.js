const operação = ["+", "-", "/", "X", "+/-", "=", "x²", "ln", "√", "x^", "%"];

function eOperador(tecla) {
  return operação.includes(tecla);
}

window.onload = () => {
  Calculadora().init();
}

function Calculadora() {
  let antesA = [];
  let atualA = [];
  let podeCalcula = false;
  let podeLimpa = false;
  let memoria = 0;

  function limparArray() {
    atualA = [];
    antesA = [];
  }

  function movimentapradireita() {
    document.querySelector(".tela-calculadora-atual").scrollLeft = document.querySelector(".tela-calculadora-atual").scrollWidth;
  }

  function existeOperadorAnterior(){
    return qualquerOperadorNoArray(antesA);
  }

  function contemNoAnterior(tecla){
    return temOperadorArray(antesA, tecla);
  }

  return {
    init: function () {
      const boutões = document.querySelectorAll("button");
      boutões.forEach((botão) => {
        botão.addEventListener("click", noClique);
      })
    }
  }

  function noClique(evento) {
    asTecla(evento.target.innerHTML);
  }

  function asTecla(teclaAtual) {
    if (teclaAtual === "C") {
      agora("");
      antes("");
      limparArray();
      return
    }
    if (teclaAtual === "+/-") {
      if (atualA.length!== 0) {
        if (atualA[0] === "-") {
          atualA.shift();
        } else {
          atualA.unshift("-");
        }
        agora(atualA.join(""));
      }
    }

    if (teclaAtual === "M+") {
      memoria += conversãoPraNúmero(atualA);
      return;
    }

    if (teclaAtual === "M-") {
      memoria -= conversãoPraNúmero(atualA);
      return;
    }

    if (teclaAtual === "RM") {
      atualA = String(memoria).split('');
      agora(atualA.join(""));
      return;
    }

    if (teclaAtual === "CM") {
      memoria = 0;
      return;
    }

    if (teclaAtual === "←") {
      atualA.pop();
      agora(atualA.join(""));
      return;
    }

    if (atualA.length=== 0 && teclaAtual === "."){
      return;
    }

    if (podeLimpa &&!eOperador(teclaAtual)){
      atualA = [];
      podeLimpa = false;
    }

    if (operação.includes(teclaAtual)) {
      if (existeOperadorAnterior() && podeCalcula){
        const operador = pegarOperadorArray(antesA);
        const numeroAnterior = conversãoPraNúmero(antesA.slice(0, antesA.length - 1));
        const numeroAtual = conversãoPraNúmero(atualA);
        const resultado = calcula(operador, numeroAnterior, numeroAtual);

        if (teclaAtual === "="){
          antesA = [numeroAnterior, operador, numeroAtual, "="];

        }else{
          antesA = [resultado, operador];
        }
        podeCalcula = false;
        atualA = [resultado];
        agora(resultado);
        antes(antesA.join(""));

        if (eOperador(antesA.last())){
          antesA.pop();
          antesA.push(teclaAtual);
          antes(antesA.join(""));
          podeLimpa = true;
        }

      }else if (atualA.length!==0){
        antesA = [...atualA, teclaAtual];
        antes(antesA.join(""));
        podeLimpa = true;
        podeCalcula = false;
      }
    } else {
      if (atualA.length < 11) {
        podeCalcula = true;
        atualA.push(teclaAtual);
        agora(atualA.join(""));
      }
    }

    if (teclaAtual === "%") {
      const numeroAtual = conversãoPraNúmero(atualA);
      const resultado = calcula("%", memoria, numeroAtual);
      atualA = [resultado];
      agora(resultado);
      antes(antesA.join(""));
      podeLimpa = true;
      podeCalcula = false;
    }

    movimentapradireita();
  }

  function agora(texto) {
    document.querySelector(".tela-calculadora-atual").innerHTML = texto;
  }

  function antes(texto) {
    document.querySelector(".tela-calculadora-anterior").innerHTML = texto;
  }
}

function conversãoPraNúmero(array = []) {
  return Number(array.join(""));
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
      return Math.pow(num1, num2);
    case "x²":
      return num1 * num1;
    case "%":
      return (num1 / 100) * num2;
    default:
      return null;
  }
}

function qualquerOperadorNoArray(array = []){
  return array.find((e) => eOperador(e))!=null;
}

function pegarOperadorArray(array = []){
  return array.find((e)=> eOperador(e));
}

Array.prototype.last = function (){
  return this[this.length - 1];
};