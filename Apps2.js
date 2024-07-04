let vWilly = document.getElementById("Willy");
// let fondo = document.getElementById("imgfondo");


let keyDerecha = false;
let keyIzquierda = false;
let keyNoPress = true;
let keySalto = false;

let posiciónX = 0;
let posiciónY = 0;

let velocidadX = 10;
let velocidadY = 10;

let fototeca = 0;

let obstaculos = []; // Array para almacenar los obstáculos

// Función para animar al personaje
const animar = () => {
  if (keyNoPress) {
    vWilly.src = "animación/idle__00" + fototeca + ".png";
  }
  if (keyDerecha) {
    vWilly.src = "animación/Run__00" + fototeca + ".png";
    mover(1);
  }
  if (keyIzquierda) {
    vWilly.src = "animación/Run__00" + fototeca + ".png";
    mover(-1);
  }
  if (keySalto) {
    vWilly.src = "animación/Jump__00" + fototeca + ".png";
    saltar();
  }
  fototeca++;
  if (fototeca === 10) {
    fototeca = 0;
  }
};

// Función para el movimiento horizontal
const mover = (orienta) => {
  posiciónX += orienta * velocidadX;
  vWilly.style.left = posiciónX + "px;"
  vWilly.style.transform = orienta === 1?  "scaleX(1)" : "scaleX(-1)";

};

// Función para el salto del personaje
const saltar = () => {
  vWilly.style.add ("jumping")
  setTimeout(() => {
    posiciónY -= velocidadY; // Regresa al suelo después del salto
    vWilly.style.bottom = "0px";
  }, 500);
};

// Evento para manejar las teclas presionadas
document.body.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp": // Tecla para el salto
      keySalto = true;
      keyNoPress = false;
      break;
    case "ArrowRight":
      keyDerecha = true;
      keyNoPress = false;
      break;
    case "ArrowLeft":
      keyIzquierda = true;
      keyNoPress = false;
      break;
  }
});

document.body.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowUp":
      keySalto = false;
      keyNoPress = true;
      break;
    case "ArrowRight":
      keyDerecha = false;
      keyNoPress = true;
      break;
    case "ArrowLeft":
      keyIzquierda = false;
      keyNoPress = true;
      break;
  }
});

// Función para generar obstáculos
const generarObstaculo = () => {
  let obstaculo = document.createElement("img");
  let randomNum = Math.floor(Math.random() * 2);
  obstaculo.src = `animación/labial__00${randomNum}.png`;
  obstaculo.className = "obstaculo";

  // Ajustar tamaño del obstáculo
  obstaculo.style.width = "50px";
  obstaculo.style.height = "50px";
  obstaculo.style.position = "absolute";
  obstaculo.style.left = "800px";
  obstaculo.style.bottom = "0px";

  document.body.appendChild(obstaculo);
  obstaculos.push(obstaculo);

  // Animar el movimiento del obstáculo hacia la izquierda
  let moveObstaculo = setInterval(() => {
    let obstaculoLeft = parseInt(obstaculo.style.left);
    obstaculo.style.left = obstaculoLeft - 5 + "px";

    // Detectar colisión con Willy
    if (
      obstaculoLeft <= posiciónX + vWilly.offsetWidth &&
      obstaculoLeft + obstaculo.offsetWidth >= posiciónX &&
      posiciónY <= obstaculo.offsetHeight
    ) {
      vWilly.src = "animación/Dead__00" + fototeca + ".png";
      clearInterval(moveObstaculo);
    }

    // Eliminar el obstáculo cuando sale de la pantalla
    if (obstaculoLeft < -obstaculo.offsetWidth) {
      document.body.removeChild(obstaculo);
      clearInterval(moveObstaculo);
    }
  }, 20);
};

// Intervalo para generar obstáculos cada 3 segundos
setInterval(generarObstaculo, 3000);

//Función para añadir fondo al juego
const añadirFondo = () => {
  let fondo = document.getElementById("imgfondo");
  fondo.src = "animación/fondo__001.png"; // Ajusta la ruta y nombre del fondo
  fondo.style.position = "absolute";
  fondo.style.left = "100%";
  fondo.style.top = "100px";
  fondo.style.zIndex = "-1"; // Asegura que el fondo esté detrás de otros elementos
  fondo.style.width = "100%";
  fondo.style.height = "100%";
  fondo.style.backgroundImage = "url('animación/fondo_001.png')";
  fondo.style.backgroundRepeat = "repeat";
};

// Llamada para añadir el fondo al inicio
añadirFondo();

//Función para animar al personaje cada 80 milisegundos
setInterval(animar, 80);




