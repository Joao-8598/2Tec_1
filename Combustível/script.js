let etanol, gasolina;
let body = document.body;

function calcular() {
    etanol = parseFloat(formularioFlex.valorEtanol.value.replace(",", "."));
    gasolina = parseFloat(formularioFlex.valorGasolina.value.replace(",", "."));

    if (etanol < (0.75*gasolina)) {
        document.getElementById("status").src = "img/alcool.png";
        document.body.style.background = "green";
    } else {
        document.getElementById("status").src = "img/gasolina.png";
        document.body.style.background = "rgb(51, 24, 2)";
    }
}

function limpar() {
    document.getElementById("status").src = "img/neutro.png";
    document.body.style.background = "lightgray";
}