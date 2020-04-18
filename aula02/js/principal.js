var titulo = document.querySelector(".titulo");
titulo.textContent = "Aula02"

var primeiroPaciente = document.querySelector("#primeiro-paciente");
var pesoPrimeiroPaciente = primeiroPaciente.querySelector(".info-peso").textContent;
var alturaPrimeiroPaciente = primeiroPaciente.querySelector(".info-altura").textContent;
var imcPrimeiroPaciente = primeiroPaciente.querySelector(".info-imc");
if (pesoPrimeiroPaciente < 0 || pesoPrimeiroPaciente >= 1000) {
    pesoPrimeiroPaciente = "Peso inválido";

} else if (alturaPrimeiroPaciente <= 0 || alturaPrimeiroPaciente >= 3.00) {
    alturaPrimeiroPaciente = "Altura inválido";
} else {
    var imc = pesoPrimeiroPaciente / (alturaPrimeiroPaciente * alturaPrimeiroPaciente);
    imcPrimeiroPaciente.textContent = imc;
}

