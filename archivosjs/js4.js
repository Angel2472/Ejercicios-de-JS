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

function image(){
    let numerodeimagen = parseInt(document.getElementById("imagen").value);
    switch (numerodeimagen) {
        case 1:
            document.getElementById("foto").src="https://yt3.ggpht.com/hOsGiOBvXyMC_YyRb5wV5iAB8cKhpdlpFOCIZ1PFTaAc1g9hW5nxGc00ornAvIcdNGLWPCch=s900-c-k-c0x00ffffff-no-rj";
            break
        case 2:
            document.getElementById("foto").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6WbkoOSP5ysun08Y4mXZq-Wwv5bZl-2xqoQ&usqp=CAU";
            break
        case 3:
            document.getElementById("foto").src="https://www.radioformula.com.mx/u/fotografias/m/2019/5/28/f850x638-234692_312181_5050.jpg";
            break
        case 4:
            document.getElementById("foto").src="https://cdn2.excelsior.com.mx/media/styles/grande/public/pictures/2022/09/13/2821894.jpg";
            break
        case 5:
            document.getElementById("foto").src="https://adrianmarcelo.wtf/wp-content/uploads/2022/05/260344131_110963801429343_8255680880269954115_n.jpeg";
            break       
    }
}