var titulo = document.querySelector(".titulo");
titulo.textContent = "Maison Marcel Clínica"

var primeiroPaciente = document.querySelector("#primeiro-paciente");
var pesoPrimeiroPaciente = primeiroPaciente.querySelector(".info-peso");
var alturaPrimeiroPaciente = primeiroPaciente.querySelector(".info-altura");
var imcPrimeiroPaciente = primeiroPaciente.querySelector(".info-imc");
var peso = pesoPrimeiroPaciente.textContent;
var altura = alturaPrimeiroPaciente.textContent
if (pesoPrimeiroPaciente <= 0 || pesoPrimeiroPaciente >= 1000) {
    imcPrimeiroPaciente.textContent = "Peso inválido";

} else if (alturaPrimeiroPaciente <= 0 || alturaPrimeiroPaciente >= 3.00) {
    imcPrimeiroPaciente.textContent = "Altura inválida";
} else {
    var imc = peso / (altura * altura);
    imcPrimeiroPaciente.textContent = imc;
}

