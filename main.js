function onClick (event) {
    event.preventDefault();
    /* this.style.backgroundColor = "black";
    console.log("click...");
    console.log(event); */
  
  
    const mensaje = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    }
    console.log(mensaje);
  
  
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(mensaje),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => { 
          console.log(json);
          Swal.fire(
              'Enviado',
              'Gracias por tu comentario',
              'success'
          );
          cleanForm();
          /* redirectUrl(); */
      })
      .catch((err) => console.log(err));
  
  }
  function cleanForm() {
    let formulario = document.getElementById('formulario');    
    formulario.reset();    
}
function redirectUrl(){
    window.location.href = "https://google.com";    
}

let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);


/* pruebba locacion */

/* Async - Await */
/* async function getIp() {
    try {
      let response = await fetch("https://api.ipify.org/?format=json");
      let ipResponse = await response.json();
      console.log(ipResponse);
  
      let responseLocation = await fetch("http://ip-api.com/json/" + ipResponse.ip);
      let locationResponse = await responseLocation.json();
      console.log(locationResponse);
    } catch {
      console.log("Algo paso, no se pudo resolver...");
    }
  }
  getIp(); */

/* PETICION A LA API WHEATER */


 

     let temperaturaValor = document.getElementById('temperatura-valor')  
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')  
    let ubicacion = document.getElementById('ubicacion')  
    let iconoAnimado = document.getElementById('icono-animado') 
    let vientoVelocidad = document.getElementById('viento-velocidad') 

           //ubicación  
            
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-24.183447261522947&lon=-65.33123012487464&appid=76e25d1f96454d1ffb84a9bf48382428`)
           .then( response => response.json())
           .then( data => {
               console.log(data)
               
               let temp = data.main.temp;
               console.log(temp);
               temperaturaValor.textContent = `${temp} ° C`;

               console.log(data.weather[0].description);
               let desc = data.weather[0].description;
               temperaturaDescripcion.textContent = desc.toUpperCase();
               ubicacion.textContent = data.name;
               
               vientoVelocidad.textContent = `${data.wind.speed} m/s`;
               
               console.log(data.weather[0].main)
               switch (data.weather[0].main) {
                   case 'Thunderstorm':
                     iconoAnimado.src='./amcharts_weather_icons_1.0.0/animated/thunder.svg'
                     console.log('TORMENTA');
                     break;
                   case 'Drizzle':
                     iconoAnimado.src='./amcharts_weather_icons_1.0.0/animated/rainy-2.svg'
                     console.log('LLOVIZNA');
                     break;
                   case 'Rain':
                     iconoAnimado.src='./amcharts_weather_icons_1.0.0/animated/rainy-7.svg'
                     console.log('LLUVIA');
                     break;
                   case 'Snow':
                     iconoAnimado.src='./amcharts_weather_icons_1.0.0/animated/snowy-6.svg'
                       console.log('NIEVE');
                     break;                        
                   case 'Clear':
                       iconoAnimado.src='./amcharts_weather_icons_1.0.0/animated/day.svg'
                       console.log('LIMPIO');
                     break;
                   case 'Atmosphere':
                     iconoAnimado.src='./amcharts_weather_icons_1.0.0/animated/weather.svg'
                       console.log('ATMOSFERA');
                       break;  
                   case 'Clouds':
                       iconoAnimado.src='./amcharts_weather_icons_1.0.0/animated/cloudy-day-1.svg'
                       console.log('NUBES');
                       break;  
                   default:
                     iconoAnimado.src='./amcharts_weather_icons_1.0.0/animated/cloudy-day-1.svg'
                     console.log('por defecto');
                 }

           })
           .catch( error => {
               console.log(error)
           })
