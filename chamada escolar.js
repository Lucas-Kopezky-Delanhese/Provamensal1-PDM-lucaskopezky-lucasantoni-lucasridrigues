let chamadaDeAlunos = [
    {
        nome: "Kayky",
        idade: 16,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 75,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 10
            },
        ],
        matriculadoEm: "2024/02/23",
        numeroChamada: 1221
    },
    {
        nome: "Ana",
        idade: 17,
        materias: [
            {
                nome: "BD1",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 7.5
            },
        ],
        matriculadoEm: "2024/04/23",
        numeroChamada: 1222
    },
    {
        nome: "Matheus",
        idade: 20,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 79,
                nota: 8.5
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 60,
                nota: 6.5
            },
        ],
        matriculadoEm: "2024/02/25",
        numeroChamada: 1223
    },
    {
        nome: "Jorge",
        idade: 19,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 79,
                nota: 10
            },
        ],
        matriculadoEm: "2024/02/29",
        numeroChamada: 1224
    },
    {
        nome: "Richard",
        idade: 18,
        materias: [
            {
                nome: "BD2",
                presenca: 74,
                nota: 10
            },
            {
                nome: "BD1",
                presenca: 90,
                nota: 7
            },
        ],
        matriculadoEm: "2024/12/23",
        numeroChamada: 1225
    },
]

const listaDeAlunos = [
    {
        nome: "Kayky",
        numeroChamada: 1221

    }
    {
        nome: "Ana",
        numeroChamada: 1222

    }
    {
        nome: "jorge",
        numeroChamada: 1223

    }
    {
        nome: "matheus",
        numeroChamada: 1224

    }
    {
        nome: "Richard",
        numeroChamada: 1225

    }
]


function listarAlunos(listaDeAlunos) {
    // Percorrendo um array
    for (let i = 0; i < listaDeAlunos.length; i++) {
        console.log(listaDeAlunos[i])
    }

    
}

function buscarAlunoPeloNumeroDaChamada(listaDeAlunos, numeroChamada, chamadaDeAlunos){
    // Procurando um elemento no array chamada
    const nome = "kayky"
    console.log(listaDeAlunos.includes(numeroChamada)) // Retorna true se encontrar o elemento "Ana" no array chamada, ou false se não encontrar
    console.log(listaDeAlunos.indexOf(chamadaDeAlunos)) // Retorna a posição do elemento "Ana" no array chamada, ou -1 se não encontrar

 
}

function listarAlunoPorMesMatricula(chamadaDeAlunos, numeroChamada, matriculadoEm){

    const jojo = "2024/02"

    for (let i = 0; i < chamadaDeAlunos.length; i++) {

            matriculadoEm = matriculadoEm.toLowerCase()
            matriculadoEm = matriculadoEm.split('/')
        // Tirar da informação o "/"
    

    for (let o = 0; o < chamadaDeAlunos.length; o++){
            
        if (chamadaDeAlunos[o].matriculadoEm.indexOf(matriculadoEm[o])){

            return console.log(chamadaDeAlunos.nome)
            
        }

    }


        listaDeAluno.forEach(chamadaDeAlunos => { // Loop sobre cada aluno na lista
            console.log("Aluno: " + chamadaDeAlunos.nome)
            
            });
        }
        

     console.log(chamadaDeAlunos.includes(numeroChamada)) // Retorna true se encontrar o elemento "Ana" no array chamada, ou false se não encontrar
    console.log(chamadaDeAlunos.indexOf(chamadaDeAlunos)) // Retorna a posição do elemento "Ana" no array chamada, ou -1 se não encontrar


}

function listarAlunosAprovados(materia, chamadaDeAlunos){

        for (let i = 0; i < chamadaDeAlunos.length; i++) {
            console.log(listaDeAlunos[i])

            if (materia.nota >= 6 && materia.presenca >= 75) {
                // Aprovado
                // ...
                console.log("APROVADO")
                console.log("NOTA: " + materia.nota)
                console.log("PRESENCA: " + materia.presenca)
                return
        }
        }
       
    }

function listarAlunosReprovados(materia, chamadaDeAlunos) {

    for (let i = 0; i < chamadaDeAlunos.length; i++) {
        console.log(listaDeAlunos[i])

        if (materia.nota < 6 || materia.presenca < 75) {
            // Reprovado
            // ...
            console.log("REPROVADO")
            console.log("NOTA: " + materia.nota)
            console.log("PRESENCA: " + materia.presenca)
            return
    }

    }
}

