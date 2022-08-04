var valor = document.querySelector("#conta");
var botao = document.querySelectorAll(".botao-tip");
var pessoas = document.querySelector("#pessoas");
const reset = document.querySelector(".reset");
const gorjetaTxt = document.querySelector("[data-gorjeta]");
const pessoaTxt = document.querySelector("[data-pessoa]");
var gorjetaCustom = document.querySelector("#custom");
const error = document.querySelector("#error-msg");

botao.forEach((elemento) => {
  elemento.addEventListener("click", (e) => {
    calculaGorjeta(e.target.dataset.valor, gorjetaCustom);
  });
});

function calculaGorjeta(gorjeta, gorjetaCustom) {
  var gorjetaTotal;
  var contaTotal;
  var contaPessoa;
  if (valor.value != "" && pessoas.value != "") {
    if (gorjetaCustom.value != "") {
      gorjetaTotal = parseFloat(valor.value * gorjetaCustom.value) / 100;
    } else {
      gorjetaTotal = parseFloat(valor.value) * gorjeta;
    }
    contaTotal = parseFloat(valor.value) + gorjetaTotal;

    contaPessoa = contaTotal / pessoas.value;

    gorjetaTxt.innerHTML = `$${gorjetaTotal.toFixed(2)}`;
    pessoaTxt.innerHTML = `$${contaPessoa.toFixed(2)}`;
    error.hidden = true; //esconde
    pessoas.style.border = "2px solid white;";
  } else {
    error.hidden = false; //mostra
    pessoas.style.border = "2px solid red";
    setTimeout(() => {
      pessoas.style.border = "2px solid white";
      error.hidden = true;
    }, 2500);
  }
}
reset.addEventListener("click", (e) => {
  gorjetaTxt.innerHTML = `$0.00`;
  pessoaTxt.innerHTML = `$0.00`;
  valor.value = "";
  pessoas.value = "";
});
