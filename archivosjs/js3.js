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
