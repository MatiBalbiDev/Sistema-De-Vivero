const plantas = [
  {
    nombre: "Menta",
    familia: "Lamiaceae",
    fase: 1,
    fila: 6,
    columna: 9,
    imagen: "./assets/menta.jpg",
    código: "#fk46p3",
  },
  {
    nombre: "Romero",
    familia: "Lamiaceae",
    fase: 1,
    fila: 5,
    columna: 10,
    imagen: "./assets/romero.jpg",
    código: "#fk46p3",
  },
  {
    nombre: "Tomillo",
    familia: "Lamiaceae",
    fase: 1,
    fila: 5,
    columna: 10,
    imagen: "./assets/tomillo.jpg",
    código: "#fk46p3",
  },
  {
    nombre: "Zanahoria",
    familia: "Umbelíferas",
    fase: 1,
    fila: 5,
    columna: 10,
    imagen: "./assets/zanahoria.jpg",
    código: "#fk46p3",
  },
  {
    nombre: "Alcaravea",
    familia: "Umbelíferas",
    fase: 1,
    fila: 5,
    columna: 10,
    imagen: "./assets/alcaravea.jpeg",
    código: "#fk46p3",
  },
  {
    nombre: "Chirivía",
    familia: "Umbelíferas",
    fase: 1,
    fila: 5,
    columna: 10,
    imagen: "./assets/chirivia.jpg",
    código: "#fk46p3",
  },
];
let contenedor = document.getElementById("cards");

plantas.map((planta) => {
  contenedor.innerHTML += ` 
            <div class="card" id="card" style="width: 18rem;">
                <img src=${planta.imagen} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${planta.nombre}</h5>
                    <p class="card-text">${planta.código} </p>
                    <p class="card-text" id="descripcion">Fase: ${planta.fase}</p>
                    <p class="card-text" id="descripcion">$40.000</p>
                    
                    <a href=#  class="btn btn-xs btn-dark btn-block rounded-0">AGREGAR AL CARRITO</a>
                </div>
            </div> `;
});
function cualquierCosa() {
  var familia = JSON.parse(localStorage.getItem("familia"));

  let container = document.getElementById("cards");

  plantas.map((planta) => {
    if (planta.familia == familia.nombre) {
      container.innerHTML += planta.nombre;
    }
  });
}
cualquierCosa();
