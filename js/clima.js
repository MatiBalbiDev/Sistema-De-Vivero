const cargarClima = async () => {

  let temperaturaValor = document.getElementById('temperatura-valor')
  let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

  let ubicacion = document.getElementById('ubicacion')
  let iconoAnimado = document.getElementById('icono-animado')

  let vientoVelocidad = document.getElementById('viento-velocidad')
  let presionViento = document.getElementById('presion-viento')
  let cantidadHumedad = document.getElementById('humedad-valor')

  let visibilidad = document.getElementById('visibilidad-valor')

  try {
    const url = 'https://weatherservices.herokuapp.com/api/weather';
    const res = await fetch(url);
    const datos = await res.json();

    //temperatura
    let temperatura = datos.items[0].weather.temp;
    temperaturaValor.textContent = temperatura + "°C";

    //ciudad y provincia
    let ubi = datos.items[0].name + ", " + datos.items[0].province;
    ubicacion.textContent = ubi;

    //Descripcion
    let desc = datos.items[0].weather.description;
    let humedad = datos.items[0].weather.humidity;
    let visib = datos.items[0].weather.visibility;
    temperaturaDescripcion.textContent = desc;
    cantidadHumedad.textContent = humedad + "%";
    visibilidad.textContent = visib + "KM";

    //vientoVelocidad
    let veloc = datos.items[0].weather.wind_speed;
    vientoVelocidad.textContent = veloc + " KM/H";
    let presion = datos.items[0].weather.pressure;
    presionViento.textContent = presion + "hPa";

    //icono
    iconoAnimado.src = "images/day.svg";

    //Pronostico semanal
    for (i = 0; i < 5; i++) {
      document.getElementById("dia" + (i + 1) + "Min").innerHTML = "Min: " + Number(datos.items[0].forecast.forecast[i].temp_min) + "°C";
      document.getElementById("dia" + (i + 1) + "Max").innerHTML = "Max: " + Number(datos.items[0].forecast.forecast[i].temp_max) + "°C";
      document.getElementById("fecha" + (i + 1)).innerHTML = datos.items[0].forecast.forecast[i].date;
    }
    //Mostrar iconos.
    for (i = 0; i < 5; i++) {
      document.getElementById("img" + (i + 1)).src = "images/cloudy-day-2.svg";
    }

    //alertas
    const resAlertaDia1 = await fetch('https://weatherservices.herokuapp.com/api/alerts/byDay/0');
    const resAlertaDia2 = await fetch('https://weatherservices.herokuapp.com/api/alerts/byDay/1');
    const resAlertaDia3 = await fetch('https://weatherservices.herokuapp.com/api/alerts/byDay/2');
    const resAlertaDia4 = await fetch('https://weatherservices.herokuapp.com/api/alerts/byDay/3');
    const alertaDia1 = await resAlertaDia1.json();
    const alertaDia2 = await resAlertaDia2.json();
    const alertaDia3 = await resAlertaDia3.json();
    const alertaDia4 = await resAlertaDia4.json();

    const alertas = [alertaDia1, alertaDia2, alertaDia3, alertaDia4];
    const contenedorAlertas = document.getElementById('contenedor-alertas');
    let div, subDiv;
    let fechaHora, descripcion, zonasAfectadas, zonas;
    //Creamos los elementos y los mostramos.
    for (let i = 0; i < alertas.length; i++) {
      let alerta = alertas[i];
      for (let j = 0; j < alerta.alerts.length; j++) {
        div = document.createElement("div");
        div.setAttribute("id", "alerta");
        div.setAttribute("class", "alerta");
        subDiv = document.createElement("div");
        subDiv.setAttribute("id", "alerta-info");
        subDiv.setAttribute("class", "alerta-info");
        div.appendChild(subDiv);
        fechaHora = document.createElement("h2");
        fechaHora.setAttribute("class", "fecha-hora-alerta");
        fechaHora.textContent = "Fecha: " + alerta.alerts[j].date + "  " + "Hora: " + alerta.alerts[j].hour.slice(0, 5);
        subDiv.appendChild(fechaHora);
        descripcion = document.createElement("p");
        descripcion.setAttribute("class", "descripcion-alerta");
        descripcion.textContent = "Descripcion: " + alerta.alerts[j].description ? alerta.alerts[j].description : "";
        subDiv.appendChild(descripcion);
        zonasAfectadas = Object.keys(alerta.alerts[j].zones);
        zonas = document.createElement("p");
        zonas.setAttribute("class", "zonas");
        zonas.textContent = "Zonas Afectadas: " + zonasAfectadas.map(zona => alerta.alerts[j].zones[zonasAfectadas[zona]]);
        subDiv.appendChild(zonas);
        contenedorAlertas.appendChild(div);
      }
    }

  } catch (err) {
    console.error(err);
  }
}
