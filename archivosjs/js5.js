// operaciones
function operaciones(primernum, segundonum, operacion) {
    let resultado = 0;
    switch (operacion) {
        case '+':
            resultado = primernum + segundonum;
            break;
        case '-':
            resultado = primernum - segundonum;
            break;
        case 'x':
            resultado = primernum * segundonum;
            break;
        case '/':
            resultado = primernum / segundonum;
            break;
    }
    return resultado;
}
function ejecutarcalculadora() {
    let primernum = parseInt(document.getElementById("primernumero").value);
    let segundonum = parseInt(document.getElementById("segundonumero").value);
    let operacion = document.getElementById("operacion").value;
    document.getElementById("resultado").value = operaciones(primernum, segundonum, operacion);
}
