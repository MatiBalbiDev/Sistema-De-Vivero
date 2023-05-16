function mostrarFamilia() {
  const familias = [
    {
      nombre: "Lamiaceae",
      imagen: "./assets/lamiaceae.jpg",
    },
    {
      nombre: "Umbelíferas",
      imagen: "./assets/umbeliferas.jfif",
    },
    {
      nombre: "Flores",
      imagen: "./assets/familia1.jpg",
    },
    {
      nombre: "Árboles",
      imagen: "./assets/familia1.jpg",
    },
    {
      nombre: "Limoneros",
      imagen: "./assets/familia1.jpg",
    },
    {
      nombre: "Flores",
      imagen: "./assets/familia1.jpg",
    },
  ];

  let contenedor = document.getElementById("cards");

  familias.map((familia) => {
    contenedor.innerHTML += `
            <div class="card" id="card" style="width: 18rem;">
                <img src=${familia.imagen} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${familia.nombre}</h5>
                    <p class="card-text">$40.000</p>
                    <a onclick="${settearFamilia(
                      familia.nombre
                    )}" href="./listaPlantas.html"  class="btn btn-xs btn-dark btn-block rounded-0">VER PLANTAS</a>
                </div>
            </div> `;
  });
}

function settearFamilia(nombreFamilia) {
  let familia = {
    nombre: "nombreFamilia",
  };
  localStorage.setItem("familia", JSON.stringify(familia));
}

mostrarFamilia();
