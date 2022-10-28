let horatomainicial = parseInt(prompt("(Programa medicinas) Hora inicial:"));
console.log(`Hora de la toma inicial: ${horatomainicial}`)
let frecuenciatomadiaria = parseInt(prompt("(Programa medicinas) Frecuencia toma diaria:"));
console.log(`Frecuencia de la toma diaria: ${frecuenciatomadiaria}`)
let cant_tomas = parseInt(prompt("(Programa medicinas) Cantidad de tomas:"));
console.log(`Cantidad de tomas: ${cant_tomas}`)
let hora = horatomainicial;

for (i = 1; i <= cant_tomas; i++) {
    if (hora > 23) {hora -= 24;}
    document.write("toma" + " " + i + " " + hora + ":00");
    document.write("<br><br>");
    hora += frecuenciatomadiaria;
}

let Numeros = prompt("(Programa numeros perfectos) ¿Cantidad de numeros: ?");
let Lista_Numeros = 0;

let numero = 0;

document.write(`<h1>Cantidad de Numeros Perfectos</h1>`);
document.write(`<h2>Numeros Encontrados: ${Numeros}</h2>`)
while (Numeros != Lista_Numeros){
    numero = numero + 1;
    let sumatoria = 0;

    for (let i = 1; i < numero; i++){
        if(numero % i == 0 ){
            sumatoria = sumatoria + i;
        };
    };
    if (sumatoria == numero) {
        document.write(numero + "<br>");
        Lista_Numeros = Lista_Numeros + 1;
    };
}