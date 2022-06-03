function mostrarMapa() {
  var map = L.map('map').setView([-34.5221554, -58.7000067],14);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let sucursales = [[-34.5221554, -58.7000067], [-34.527468, -58.708561], [-34.53040295302667, -58.70292272848468], [-34.52710594143552, -58.68587559181003], [-34.5134171387725, -58.70638836032645]];

var redIcon = L.icon({
    iconUrl: './js/leaflet/images/marker-icon-red.png',
    iconSize: [30, 35]
});

var listaCalles = document.querySelectorAll("#name-street");
var nombreSucursales = document.querySelectorAll("#title-location");


for(let i = 0; i < sucursales.length; i++) {
  let calle = listaCalles[i].textContent;
  let sucursal = nombreSucursales[i].textContent;
  var marker = L.marker(sucursales[i], {icon: redIcon}).addTo(map).bindPopup('<b>'+sucursal+'</b>' + "</br>" + calle);
}

}
