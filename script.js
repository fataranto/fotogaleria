// Estado de la app

const fotos = ["casa1", "casa2", "casa3", "casa4", "casa5", "casa6", "casa7", "casa8"];

let galeria = []; // creo un array donde guardaré toda la info de las imágenes como objetos, guardaré en todo momento cambios en la misma como ser la ubicación, de manera que al hacer doble click, dependiendo de la ubicación donde se encuentre cambiará y actualizará 

//almaceno como constantes los contenedores #fototeca y #galeria para una más fácil referencia cuando necesite mover una foto de un lugar a otro
const fototecaCont = document.querySelector("#fototeca");
const galeriaCont = document.querySelector("#galeria");



for (let i = 0; i < fotos.length; i++) {
    // Recuperamos el nombre de la foto desde el array inicial
    let siguienteFoto = fotos[i];
    // creo un objeto "img"...
    let imagen = document.createElement("img");
    //... y le asigno la ubicación de l aimagen
    imagen.src = `./img/${siguienteFoto}.jpg`;
    imagen.classList.add("fotoFototeca");
    //v2.0 ya no manipulo directamente la imagen, creo un contenedor div para luego poder agregarle un botón para activar el lightbox. También podría utilizar este contenedor para mostrar una descripción de la imagen
    let contenedorImg = document.createElement("div");
    contenedorImg.classList.add("contImgStyle");
    contenedorImg.appendChild(imagen);
    let openLightboxBtn = document.createElement("div");
    openLightboxBtn.textContent = "[·]";
    openLightboxBtn.classList.add("lightboxBtn");
    contenedorImg.appendChild(openLightboxBtn);


    //cargo la imagen en la fototeca
    fototecaCont.appendChild(contenedorImg);

    //creo un objeto "foto" almacenando los datos que vaya necesitando
    let foto = {
        "nombre": fotos[i],
        "src": `./img/${siguienteFoto}.jpg`,
        "ubicacion": fototecaCont,
        "imagen": imagen, //ya no cargaré la imagen sola, sino el "divFoto" que es la imagen dentro de un div
        "class": "fotoFototeca",
        "contImg": contenedorImg,
        "lightBoxBtn": openLightboxBtn
    }

    //agrego el objeto "foto" al array "galeria"
    galeria.push(foto);

    //creo un evento "dblclick" a la imagen que según el contenedor donde se encuentra cambia al otro y actualiza su ubicación en el objeto
    foto.imagen.addEventListener("dblclick", function (event) {
        foto.imagen.classList.add("fadeOut") //la clase "fadeOut" hará que sea más suave el cambio de un contenedor a otro


        setTimeout(myTimer, 400); //doy un margen de 400 milisegundos para que se ejecute la animación FadeOut antes de hacer el cambio de imagen

        function myTimer() {
            if (foto.ubicacion == fototecaCont) {
                foto.ubicacion = galeriaCont; //actualizo la ubicación de la imagen en su objeto
                foto.class = "fotoGaleria" //actualizo la clase asociada
                imagen.classList.remove("fotoFototeca");
                foto.lightBoxBtn.style.display = "block";
            } else {
                foto.ubicacion = fototecaCont;
                foto.class = "fotoFototeca";
                imagen.classList.remove("fotoGaleria");
                foto.lightBoxBtn.style.display = "none";

            }

            foto.ubicacion.appendChild(foto.contImg) //agrego la imagen al contenedor correspondiente
            imagen.classList.remove("fadeOut") //actualizo las classes
            foto.imagen.classList.add(foto.class)

        }
    })



}