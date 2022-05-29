
function mostrarFamilia(){
    const familias = [
        {
            nombre: "Árboles", 
        },
        {
            nombre: "Limoneros"
        },
        {
            nombre: "Flores"
        }, 
        {
            nombre: "Árboles", 
        },
        {
            nombre: "Limoneros"
        },
        {
            nombre: "Flores"
        },
        {
            nombre: "Árboles", 
        },
        {
            nombre: "Limoneros"
        },
        {
            nombre: "Flores"
        },
    ] 

    let contenedor = document.getElementById("cards")

    familias.map(
        familia => {
            contenedor.innerHTML+= ` <div class="card" id="card" style="width: 18rem;">
            <img src="./images/familia1.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${familia.nombre}</h5>
            <p class="card-text">$40.000</p>
            <a href="#" class="btn btn-primary">Agregar al carrito</a>
            </div>
        </div> `
        }
    )
}
mostrarFamilia()