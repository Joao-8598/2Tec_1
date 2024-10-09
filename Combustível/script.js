let etanol, gasolina;

function calcular() {
    etanol = parseFloat(formularioFlex.valorEtanol.value.replace(",", "."));
    gasolina = parseFloat(formularioFlex.valorGasolina.value.replace(",", "."));

    if (etanol < (0.75*gasolina)) {
        document.getElementById("status").src = "img/alcool.png";
    } else {
        document.getElementById("status").src = "img/gasolina.png";
    }
}

function limpar() {
    document.getElementById("status").src = "img/neutro.png";
}