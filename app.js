let vWilly = document.getElementById("Willy"); //Uso mi elemento desde el DOM
let obstáculosContainer = document.getElementById("obstáculos-container");
let obstaculo = document.getElementById("obts");

//Variable Caminar
let keyDerecha = false; //Esta constante me va a permitir saber el estado en que está mi la tecla de mi teclado, si oprimina o sin oprimir.Inicialmente no está oprimida así que inicia en false
let keyIzquierda = false;
let keyNoPress = true; //Si ninguna de las dos está oprimida entonces este estado será true

//Eje x
let posicionx = 0;
let velocidadx = 10; //Velocidad de mi personaje

//Saltar y bajar
let keyArriba = false;
let keyAbajo = false;

//Eje y
let posiciony = 0;
let velocidady = 10;

// let labi = 0;
let fototeca = 0; //Contador

 let obstáculos = [];

const animar = () => {
  //Por ser función flecha no requiere un return obligatoriamente

  if (keyNoPress) {
    //esto lo creo cuando ya tengo creada mi función y el evento que va a icurrir al presionar las teclas. y digo que si no hay tecla presionada aplique la animación idle

    vWilly.src = "animación/idle__00" + fototeca + ".png ";
  }
  if (keyDerecha) {
    //Pero si la tecla derecha está presionada que aplique la animación Rum

    vWilly.src = "animación/Run__00" + fototeca + ".png ";
    //La función mover está creada despues de esta función animar, donde creo la lógica de el movimiento, donde se muestra que se camina
    mover(1);
  }

  if (keyIzquierda) {
    //Pero si la tecla derecha está presionada que aplique la animación Rum

    vWilly.src = "animación/Run__00" + fototeca + ".png ";
    mover(-1);
  }
  if (keyArriba) {
    vWilly.src = "animación/Jump__00" + fototeca + ".png ";
    saltar();
  }
  // if(keyAbajo){
  //   vWilly.src = "animación/Slide__00" + fototeca + ".png ";
  //   saltar(1);
  //   }
  detectarColisión();

  fototeca++; //Que aumente de desde 0 hasta 9, tal y como está organizado en mi mi archivo de imágenes "animación"

  if (fototeca === 10) {
    fototeca = 0;
  }
};

const mover = (orienta) => {
  posicionx += orienta * velocidadx;
  vWilly.style.left = posicionx + "px";
  vWilly.style.transform = orienta === 1 ? "scaleX(1)" : "scaleX(-1)";
};

const saltar = () => {
  vWilly.classList.add("jumping");
  setTimeout(() => {
    vWilly.classList.remove("jumping");
  }, 500); // Duración de la animación
};


// Función para detectar colisión
const detectarColisión = () => {
  let willyRect = vWilly.getBoundingClientRect();
  let obstaculoRect = obstaculo.getBoundingClientRect();

  if (
    willyRect.left < obstaculoRect.left + obstaculoRect.width &&
    willyRect.left + willyRect.width > obstaculoRect.left &&
    willyRect.top < obstaculoRect.top + obstaculoRect.height &&
    willyRect.top + willyRect.height > obstaculoRect.top
  ) {
    vWilly.src = "animación/Melee__00" + fototeca + ".png";
    obstaculo.style.animationPlayState = 'paused'; // Detener animación
    obstaculo.style.visibility = 'hidden'; // Ocultar obstáculo
    setTimeout(() => {
      obstaculo.style.visibility = 'visible'; // Mostrar obstáculo
      obstaculo.style.animationPlayState = 'running'; // Reanudar animación
      obstaculo.style.left = '100%'; // Restablecer la posición inicial del obstáculo
    }, 1000);
    alert("Willy es mujer");
  }
};

//Oprimir Flecha
//Creo un evento para dar la oprimir teclas, manipulo el DOM y llamo al evento que quiero en este caso keydown, la cuál se dispara a tecla presiona una tecla
document.body.addEventListener("keydown", (e) => {
  // creo un menú de opciones switch usando el evento más un parámetro para guardar allí cada recorrido

  switch (
    e.key //key es una propiedad delobjeto del evento, es decir del objeto keyup
  ) {
    case "ArrowUp":
      keyArriba = true;
      keyNoPress = false;
      break;

    // case "ArrowDown":
    // keyArriba = true;
    // keyNoPress = false;
    // break;

    case "ArrowRight": //Usamos las claves del teclado de JavaScrip, según lo que se requiere. En este caso  "ArrowRight" la necesito aquí, para decirke a mi evento que ha sido presionada,la tecla derecha
      keyDerecha = true;
      keyNoPress = false;
      return;

    case "ArrowLeft": //Usamos las claves del teclado de JavaScrip, según lo que se requiere. En este caso  "ArrowRight" la necesito aquí, para decirke a mi evento que ha sido presionada,la tecla derecha
      keyIzquierda = true;
      keyNoPress = false;
      return;
  }
});

//Soltar flecha

document.body.addEventListener("keyup", (e) => {
  // creo un menú de opciones switch usando el evento más un parámetro para guardar allí cada recorrido

  switch (
    e.key //key es una propiedad delobjeto del evento, es decir del objeto keyup
  ) {
    case "ArrowUp":
      keyArriba = false;
      keyNoPress = true;
      break;

    // case "ArrowDown":
    // keyArriba = false ;
    // keyNoPress = true;
    // break;

    case "ArrowRight":
      keyDerecha = false;
      keyNoPress = true;
      return;

    case "ArrowLeft":
      keyIzquierda = false;
      keyNoPress = true;
      return;
  }
});

//Función para crear un nuevo obstáculo
const crearObstaculo = () => {
  const obstaculo = document.createElement("div");
  obstaculo.className = "obst";
  const tipoObstaculo = Math.floor(Math.random() * 2);

  //Ajusta el alto del obstáculo

  vWilly.src = "animación/labial__00" + labial + ".png ";
      labial++;

    if (labial ===2) {
      labial = 0;
    }
  obstáculosContainer.appendChild(obstaculo);
  obstáculos.push(obstaculo);
};

// Crear un obstáculo cada 3 segundos
 setInterval(crearObstaculo, 3000);


// Ejecutar la detección de colisión en un intervalo
setInterval(detectarColisión, 50);

// Función para animar al personaje cada 80 milisegundos
setInterval(animar, 20);














