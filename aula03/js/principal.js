var titulo = document.querySelector(".titulo");
titulo.textContent = "Aula03"

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes)

for (var i = 0; i < pacientes.length; i++) {
    var medidaInvalida = false;
    paciente = pacientes[i];
    var pesoPaciente = paciente.querySelector(".info-peso");
    var alturaPaciente = paciente.querySelector(".info-altura");
    var imcPaciente = paciente.querySelector(".info-imc");
    var peso = pesoPaciente.textContent;
    var altura = alturaPaciente.textContent;
    if (peso <= 0 || peso >= 1000) {
        pesoPaciente.textContent = "Peso inválido";
        medidaInvalida = true;
        paciente.classList.add("paciente-invalido")
    }
    if (altura <= 0 || altura >= 3.00) {
        alturaPaciente.textContent = "Altura inválida";
        medidaInvalida = true;
        paciente.classList.add(".paciente-invalido")
    }
    if (medidaInvalida == false) {
        var imc = peso / (altura * altura);
        imcPaciente.textContent = imc.toFixed(1);
    } else {
        imcPaciente.textContent = "Erro ao processar"
    }

}




