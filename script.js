// Estado de la app

let fotos = ["casa1", "casa2", "casa3", "casa4", "casa5", "casa6", "casa7", "casa8"];
let galeria = [];

const fototecaCont = document.querySelector("#fototeca");
const galeriaCont = document.querySelector("#galeria");



for (let i = 0; i < fotos.length; i++) {
    // 1. Recuperamos el nombre de la foto
    let siguienteFoto = fotos[i];

    let imagen = document.createElement("img");
    imagen.src = `/img/${siguienteFoto}.jpg`;
    fototecaCont.appendChild(imagen);

    let foto = {
        "nombre" : fotos[i], 
        "src" : `/img/${siguienteFoto}.jpg`,
        "ubicacion" : fototecaCont
    }

    galeria.push(foto);
    //galeria[i].nombre = siguienteFoto;

    //console.log(galeria[i]);


    // 1.1 Creo un array de objetos con toda la información relevante de la foto como el nombre, la ubicación (si se encuentra en la galería o no), etc. toda información relevante que vaya necesitando, como por ejemplo asignarle una clase u otra según el lugar donde se encuentre o incluso quitarle o asignarle el listener

    // 2. Creamos un elemento nuevo del tipo 'img' y tenemos que llenar la propiedad .src con la ruta a la imagen
    

    //galeria[i].ubicacion = fototeca;

    //document.querySelector(galeria[i].ubicacion).style.background = "red";

    //console.log(imagen.src);
/* 
    imagen.addEventListener("dblclick", function (event) {

        let sectionFototeca = document.querySelector("#fototeca");
        sectionFototeca.appendChild(imagen);

        let imagen = document.createElement("img");
        imagen.src = galeria[i];

        // 3. añadir la imagen como hijo de id="galeria"
        let sectionGaleria = document.querySelector("#galeria");
        sectionGaleria.appendChild(imagen);

        // 1. Identificar la foto clicada (event.target.src)
        // 1.5. Añadir el valor del event.target.src en el array de galeria
        // 2. llamar a la función llenarGaleria()

        //let fotoClicada = event.target.src;
        //galeria.push(fotoClicada);
       

    }) */

    // 3. Añadir la imagen como hijo del section id=fototeca
    
}

