document.addEventListener("DOMContentLoaded", function() {

    const tarefas = document.querySelectorAll(".tarefa");
    const contador = document.querySelector("#contador-tarefas");
    const mensagem = document.querySelector("#mensagem-motivacional");
    const botaoMotivacao = document.querySelector("#botao-motivacao");

    const frases = [
    "Pequenos passos também levam longe.",
    "Errar faz parte de aprender.",
    "Continue, você está evoluindo.",
    "Acredite no seu potencial!",
    "Cada dia é uma nova oportunidade.",
    "Você é capaz de grandes conquistas.",
    "Não desista antes de tentar.",
    "O progresso acontece um passo de cada vez.",
    "Seu esforço de hoje será sua conquista de amanhã.",
    "Aprender é crescer um pouco todos os dias.",
    "Não precisa ser perfeito, só precisa continuar.",
    "Grandes resultados começam com pequenas atitudes.",
    "Você está mais perto do que imagina.",
    "Transforme dificuldades em aprendizado.",
    "O importante é não parar.",
    "Cada desafio é uma chance de melhorar.",
    "Tenha paciência com o seu processo.",
    "Seu futuro é construído pelas suas escolhas.",
    "Você consegue mais do que pensa.",
    "Um passo de cada vez também é progresso.",
    "Não compare sua evolução com a de outras pessoas.",
    "Hoje é um bom dia para recomeçar.",
    "A persistência faz a diferença.",
    "Com dedicação, você pode chegar longe.",
    "Não tenha medo de começar do zero.",
    "Toda conquista começa com uma tentativa.",
    "Continue, mesmo que seja devagar.",
    "Você não precisa saber tudo para começar.",
    "O aprendizado vale cada esforço.",
    "Celebre cada pequena vitória!"
];

    function atualizarContador() {
        const concluidas = document.querySelectorAll(".tarefa-concluida").length;

        contador.textContent = concluidas + " de " + tarefas.length + " tarefas concluídas";
    }

    atualizarContador();

    tarefas.forEach(function(tarefa) {
        const botao = tarefa.querySelector(".botao-avancar");
        const indicador = tarefa.querySelector(".indicador-estado");

        botao.addEventListener("click", function() {

            if (tarefa.classList.contains("tarefa-pendente")) {
                tarefa.classList.remove("tarefa-pendente");
                tarefa.classList.add("tarefa-andamento");

                indicador.textContent = "Em andamento";
                botao.textContent = "Concluir tarefa";

                indicador.classList.remove("estado-pendente");
                indicador.classList.add("estado-andamento");
            }

            else if (tarefa.classList.contains("tarefa-andamento")) {
                tarefa.classList.remove("tarefa-andamento");
                tarefa.classList.add("tarefa-concluida");

                indicador.textContent = "Concluída";
                botao.textContent = "Recomeçar tarefa";

                indicador.classList.remove("estado-andamento");
                indicador.classList.add("estado-concluida");
            }

            else if (tarefa.classList.contains("tarefa-concluida")) {
                tarefa.classList.remove("tarefa-concluida");
                tarefa.classList.add("tarefa-pendente");

                indicador.textContent = "Pendente";
                botao.textContent = "Iniciar tarefa";

                indicador.classList.remove("estado-concluida");
                indicador.classList.add("estado-pendente");
            }

            atualizarContador();
        });
    });

    botaoMotivacao.addEventListener("click", function() {
        const indice = Math.floor(Math.random() * frases.length);
        const fraseEscolhida = frases[indice];

        mensagem.textContent = fraseEscolhida;
    });

});