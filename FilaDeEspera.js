let menu = "";
let fila_de_espera = [];
let paciente_adicionado = "";
let paciente_consultado = "";
let lista_de_espera = "";

do {
  for (let indice = 0; indice < fila_de_espera.length; indice++) {
    let paciente = fila_de_espera[indice];
    lista_de_espera += indice + 1 + "º " + paciente + "\n";
  }

  menu = prompt(
    "Escolha uma opção abaixo:" +
      "\n" +
      "1. Novo Paciente" +
      "\n" +
      "2. Consultar Paciente" +
      "\n" +
      "3. Sair" +
      "\n\n" +
      "Fila de Espera: " +
      "\n" +
      lista_de_espera
  );

  lista_de_espera = "";

  if (menu === "1") {
    paciente_adicionado = prompt("Qual o nome do paciente?");
    fila_de_espera.push(paciente_adicionado);
  } else if (menu === "2") {
    if (fila_de_espera.length > 0) {
      paciente_consultado = fila_de_espera.shift();
      alert(paciente_consultado + " foi consultado");
    } else if (fila_de_espera.length == 0) {
      alert("Não existem pacientes a serem consultados");
    }
  }
} while (menu != "3");
2;
