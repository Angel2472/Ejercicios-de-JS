function divisores(dato) {
    let total = 0;
    for ( i=0 ; i<=dato ; i++) {if ( dato % i == 0) {total = total + 1;}}
    return total;
}
console.log("Divisores:", divisores(75));

function calcular(){
    let dato = 
    parseInt(document.getElementById("numero").value);
    document.getElementById("resul").value = divisores(dato)
}
