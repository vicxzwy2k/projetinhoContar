const input = document.querySelector("#numero");

function maisUm() {
    // Obtém o valor atual e converte para número
    let valorAtual = Number(input.innerText);
    // Incrementa o valor
    valorAtual += 1;
    // Atualiza o texto do elemento com o novo valor
    input.innerText = valorAtual
}

function menosUm() {
    // Obtém o valor atual e converte para número
    let valorAtual = Number(input.innerText);
    // Decrementa o valor
    valorAtual -= 1;
    // Atualiza o texto do elemento com o novo valor
    input.innerText = valorAtual
}