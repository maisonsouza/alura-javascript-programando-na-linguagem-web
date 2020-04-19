var titulo = document.querySelector(".titulo");
titulo.textContent = "Aula04 - Eventos, Formulários e Criando Elementos"

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
        paciente.classList.add("paciente-invalido")
    }
    if (medidaInvalida == false) {
        var imc = peso / (altura * altura);
        imcPaciente.textContent = imc.toFixed(1);
    } else {
        imcPaciente.textContent = "Erro ao processar"
    }
}

var botaoAdicionarPaciente = document.querySelector("#adicionar-paciente")
botaoAdicionarPaciente.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("form")
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)

    var tabela = document.querySelector("#tabela-pacientes")
    console.log("tabela", tabela)
    tabela.appendChild(pacienteTr)


})





