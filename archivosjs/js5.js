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

// Generar tabla

function generar_tabla (numero, tipodetabla, longitudtabla) {
    let tablafinal = [];
    switch (parseInt(tipodetabla)) {
        case 1:
            for (i=0; i<= longitudtabla; i++) {tablafinal.push(`${numero} x ${i} = ${numero*i}`);}
            break;
        case 2:
            for (i=longitudtabla+1; i> 0; i--) {tablafinal.push(`${numero} x ${i} = ${numero*i}`);}
            break
    }
    return tablafinal;
}

function tablafinal() {
    document.getElementById("tabla").innerHTML = "";
    let nro = parseInt(document.getElementById("nro").value);
    let tipo = document.getElementById("tipodetabla").value;
    let longitud = parseInt(document.getElementById("longitud").value);
    let tabla_obtenida = generar_tabla(nro, tipo, longitud);
    let lugar_a_colocar = document.getElementById("tabla");
    for (i=1; i< tabla_obtenida.length; i++) {lugar_a_colocar.innerHTML += tabla_obtenida[i]; lugar_a_colocar.innerHTML += "<br>"}
}