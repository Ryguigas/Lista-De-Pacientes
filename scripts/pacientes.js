/**
 * Autor: Guilherme Oliveira Casagrande
 */

var pacientesCadastrados = [] //Lista de todos os pacientes cadastrados

function cadastrarPaciente(
    //Se não colocar valores no cadastrar, quer dizer que não é o BD
    //Então pega os valores do cadastro no index.html
    primeiroNomeIn = document.getElementById("nome").value, 
    sobrenomeIn = document.getElementById("sobrenome").value,
    idadeIn = Number(document.getElementById("idade").value,
    ),
) {
    //Cria um objeto de paciente
    var paciente = {
        primeiroNome: primeiroNomeIn, //com o primeiro nome
        sobrenome: sobrenomeIn, //com o sobrenome
        idade: idadeIn, //com uma idade
        id: idInput = Math.floor((Math.random() * 1000) + 1), //e uma identificação única
    }

    //Verifica se já não tem um paciente com essa identificação
    for(var pos in pacientesCadastrados){
        if(pacientesCadastrados[pos].id == paciente.id){
            paciente.id = Math.floor((Math.random() * 1000) + 1)
            pos = 0
        }
    }
    //console.log(paciente)

    //Verifica se as informações do cadastro não são nulas ou inválidas
    if (paciente.primeiroNome == "" || paciente.sobrenome == "" || paciente.idade <= 0 || paciente.id <= 0) {
        alert("Verifique se você colocou as informações do paciente corretamente") //Se for o caso avisa
        return //não faz o cadastro
    }

    var tabelaPacientes = document.getElementById("tabela-pacientes") //Pega a table de pacientes
    var trPaciente = document.createElement("tr") //Prepara a linha da table

    //Diz que o id dessa linha é o id do paciente (importante para deletarPaciente())
    trPaciente.id = paciente.id 

    //Coloca os dados do paciente com uma class para que o estilo.css deixe mais visível
    trPaciente.innerHTML =
        `<td class="info">${paciente.primeiroNome} </td>` 
        + `<td class="info">${paciente.sobrenome} </td>`
        + ` <td class= "info">${paciente.idade} </td>`
        + `<td><Button onclick="deletarPaciente(${paciente.id})">Deletar paciente</Button></td>`

    tabelaPacientes.appendChild(trPaciente) //Coloca a linha na tabela

    pacientesCadastrados.push(paciente) //Coloca o objeto paciente no array de pacientes cadastrados
}

function deletarPaciente(id) { //usa o id gerado lá de cima
    //console.log("REMOVER")
    for (var pos in pacientesCadastrados) { //procura no array de pacientes cadastrados
        if (pacientesCadastrados[pos].id == id) { //se tem algum com o id informado
            pacientesCadastrados.splice(pos, 1) //deleta no array

            //deleta do HTML
            document.getElementById("tabela-pacientes").removeChild(document.getElementById(`${id}`))
        }
    }

}
