const divCards = document.getElementById("idDivCards");
const divImagenDestacada = document.getElementById("idImagenDestacada");
const imagenDestacada = JSON.parse(localStorage.getItem("imagenDestacada"));
//const divCards = document.getElementsByClassName("classCards");
//const divCards = document.getElementsByTagName("div");

//const divCards = document.querySelector(".classCards");
//const divCards = document.querySelectorAll("#idDivCards");
/* console.log(divCards); */

const productos = [
  {
    id: 1,
    nombre: "Counter Strike",
    precio: 50,
    descripcion:
      "Counter-Strike (conocido también como Counter Strike 1.6 para diferenciarlo de títulos posteriores) es un videojuego de disparos en primera persona multijugador. ",
    imagen: "../Imagenes/counter strike.jpg",
    destacado: false,
  },
  {
    id: 2,
    nombre: "SIFU",
    precio: 30,
    descripcion:
      "Sifu es un juego de lucha realista en tercera persona con cuidadas mecánicas de combate kung-fu y artes marciales cinematográficas que te conducirá por el camino de la venganza.",
    imagen: "../Imagenes/SIFU.avif",
    destacado: false,
  },
  {
    id: 3,
    nombre: "Fortnite",
    precio: 35,
    descripcion:
      "Fortnite es un videojuego del año 2017 desarrollado por la empresa Epic Games lanzado como diferentes paquetes de software que presentan seis diferentes modos de juego, pero que comparten el mismo motor de juego y mecánicas.",
    imagen: "../Imagenes/Fortnite.jpeg",
    destacado: false,
  },
  {
    id: 4,
    nombre: "Dragon Ball Z",
    precio: 40,
    descripcion:
      "Es una serie de juegos de lucha basados en anime y manga Dragon Ball de Akira Toriyama. Cada entrega fue desarrollada por Spike para PlayStation 2.",
    imagen: "../Imagenes/Dragon Ball.jpg",
    destacado: false,
  },
  {
    id: 5,
    nombre: "MortalKombat",
    precio: 42,
    descripcion:
      "Mortal Kombat es un videojuego de lucha, con un plano bidimensional y gráficos tridimensionales. Es la novena entrega de la serie de Mortal Kombat.",
    imagen: "../Imagenes/MortalKombat.jpg",
    destacado: false,
  },
  {
    id: 6,
    nombre: "Strike Fighter",
    precio: 50,
    descripcion:
      "Street Fighter (ストリートファイター Sutorīto Faitā?, Luchador callejero) es una serie de videojuegos de lucha creada por la empresa japonesa Capcom.",
    imagen: "../Imagenes/Street Fighter.jpg",
    destacado: false,
  },
];

localStorage.setItem("productos", JSON.stringify(productos));
console.log(imagenDestacada);
divImagenDestacada.innerHTML = imagenDestacada
  ? ` <img src="${imagenDestacada}" class="card-img-top" alt="..." />`
  : "";

divCards.innerHTML = productos
  .map(
    (producto) =>
      `
    <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center col-12 my-3 ">
      <div class="card border-2 ">
        <img src="${producto.imagen}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.precio}</p>
          <p class="card-text">${producto.descripcion}</p>
          <a href="../paginas/detalleDelProducto.html?id=${producto.id}" class="btn btn-primary">Ver Mas</a>
        </div>
      </div>
    </div>
    `
  )
  .join("");

/* productos.forEach((producto) => {
  const colDiv = document.createElement("div");
  colDiv.className = "col-12 col-md-6 col-lg-4 my-3";

  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const img = document.createElement("img");
  img.src = producto.imagen;
  img.className = "card-img-top";
  img.alt = producto.nombre;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = producto.nombre;

  const cardPrice = document.createElement("p");
  cardPrice.className = "card-text";
  cardPrice.textContent = `Precio: $${producto.precio}`;

  const cardDesc = document.createElement("p");
  cardDesc.className = "card-text";
  cardDesc.textContent = producto.descripcion;

  const cardLink = document.createElement("a");
  cardLink.href = "#";
  cardLink.className = "btn btn-primary";
  cardLink.textContent = "Ver Más";

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardPrice);
  cardBody.appendChild(cardDesc);
  cardBody.appendChild(cardLink);
  cardDiv.appendChild(img);
  cardDiv.appendChild(cardBody);
  colDiv.appendChild(cardDiv);
  divCards.appendChild(colDiv);
});
 */
