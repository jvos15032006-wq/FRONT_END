function revelar() {

    document.getElementById("imagemJogador").src = "_vinicius_junior.png";

    document.getElementById("nome").textContent =
        "Vinícius José Paixão de Oliveira Júnior";

    document.getElementById("nascimento").textContent =
        "Nascimento: 12/07/2000 (25 anos)";

    document.getElementById("altura").textContent =
        "Altura: 1,76 m";

    document.getElementById("posicao").textContent =
        "Posição: Ponta-esquerda / Atacante";

    document.getElementById("rank").textContent =
        "Rank: 9,5";

    const elementos = document.querySelectorAll(".placeholder");

    elementos.forEach(el => {
        el.classList.remove("placeholder");
        el.classList.add("card-text");
    });
}
