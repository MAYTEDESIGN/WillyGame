let vWilly = document.getElementById("Willy");
let vWilla = document.getElementById("Willa");
let obstáculosContainer = document.getElementById("obstáculos-container");
let obstaculo = document.getElementById("obst");
let resetButton = document.getElementById("reset-button");

// Estados
let estadoWilly = {
    keyDerecha: false,
    keyIzquierda: false,
    keyNoPress: true,
    keyArriba: false,
    posicionx: 0,
    velocidadx: 10,
    fototeca: 0,
    mujer : 0,
    enColision: false,
    keyAbajo: false,

};

let estadoObstaculo = {
    visible: true,
    animacion: 'running',
};

// Función de animacion
const animar = () => {
    
    if (estadoWilly.keyNoPress) {
<<<<<<< HEAD
        vWilly.src = "animacion/temblar00" + estadoWilly.fototeca + ".png";
    } 
    if (estadoWilly.keyDerecha) {
        vWilly.src = "animacion/correr00" + estadoWilly.fototeca + ".png";
=======
        vWilly.src = "/animación/idle__00" + estadoWilly.fototeca + ".png";
    } 
    if (estadoWilly.keyDerecha) {
        vWilly.src = "/animación/Run__00" + estadoWilly.fototeca + ".png";
>>>>>>> d8f01ed4e75f99ff6954f6e3a39c3f6749a439b8
        
        mover(1);
    }
    if (estadoWilly.keyIzquierda) {
<<<<<<< HEAD
        vWilly.src = "animacion/correr00" + estadoWilly.fototeca + ".png";
        mover(-1);
    }
    if (estadoWilly.keyArriba) {
        vWilly.src = "animacion/saltar00" + estadoWilly.fototeca + ".png";
=======
        vWilly.src = "/animación/Run__00" + estadoWilly.fototeca + ".png";
        mover(-1);
    }
    if (estadoWilly.keyArriba) {
        vWilly.src = "/animación/Jump__00" + estadoWilly.fototeca + ".png";
>>>>>>> d8f01ed4e75f99ff6954f6e3a39c3f6749a439b8
        saltar();
    }
    // detectarColisión();


    estadoWilly.fototeca++;
    if (estadoWilly.fototeca === 10) {
    estadoWilly.fototeca=0;


    }
};

const animarM = () => {

    if (estadoWilly.enColision) {

        vWilly.src = "animacion/muere00" + estadoWilly.fototeca + ".png";

            if (estadoWilly.keyNoPress) {
    vWilla.src = "animacion/png/temblar00" +estadoWilly.fototeca+".png";
        }

        if (estadoWilly.keyDerecha) {
        vWilla.src = "animacion/png/correr00" + estadoWilly.mujer + ".png";
        mover(1); }

    if (estadoWilly.keyIzquierda) {
    vWilla.src = "animacion/png/correr00" + estadoWilly.mujer + ".png";
        mover(-1);    }

if (estadoWilly.keyArriba) {
    vWilla.src = "animacion/png/saltar00" + estadoWilly.fototeca + ".png";
        saltar(); }

    estadoWilly.fototeca++;
    if (estadoWilly.fototeca === 10) {
    estadoWilly.fototeca=0;
    }

    estadoWilly.mujer++;
    if (estadoWilly.mujer === 7) {
    estadoWilly.mujer=0;
    }
   
}
};
    

const mover = (orienta) => {
    estadoWilly.posicionx += orienta * estadoWilly.velocidadx;
    vWilly.style.left = estadoWilly.posicionx + "px";
    vWilly.style.transform = orienta === 1 ? "scaleX(1)" : "scaleX(-1)";    

    vWilla.style.left = estadoWilly.posicionx + "px";
    vWilla.style.transform = orienta === 1 ? "scaleX(1)" : "scaleX(-1)"; 
};

const saltar = () => {
    vWilly.classList.add("jumping");
    vWilla.classList.add("jumping");
    setTimeout(() => {
        vWilly.classList.remove("jumping");
        vWilla.classList.remove("jumping");
    },900);
};

// Eventos de teclado
document.body.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowUp":
            estadoWilly.keyArriba = true;
            estadoWilly.keyNoPress = false;
            break;
        case "ArrowRight":
            estadoWilly.keyDerecha = true;
            estadoWilly.keyNoPress = false;
            break;
        case "ArrowLeft":
            estadoWilly.keyIzquierda = true;
            estadoWilly.keyNoPress = false;
            break;
            case "ArrowDown":
                estadoWilly.keyAbajo = true;
                estadoWilly.keyNoPress = false;
            break;
    }
});

document.body.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "ArrowUp":
            estadoWilly.keyArriba = false;
            estadoWilly.keyNoPress = true;
            break;
        case "ArrowRight":
            estadoWilly.keyDerecha = false;
            estadoWilly.keyNoPress = true;
            break;
        case "ArrowLeft":
            estadoWilly.keyIzquierda = false;
            estadoWilly.keyNoPress = true;
            break;
        case "ArrowDown":
        estadoWilly.keyAbajo = false;
        estadoWilly.keyNoPress = true;
            break;
    }

    reset-button.addEventListener('click', _ => {
        location.reload();
    });

    

    
});

// Función para detectar colisión

const detectarColisión = () => {
    let willyPosy = vWilly.getBoundingClientRect();
    let labiPosi = obstaculo.getBoundingClientRect();

    if (
        willyPosy.left < labiPosi.left + labiPosi.width &&
        willyPosy.left + willyPosy.width > labiPosi.left &&
        willyPosy.top < labiPosi.top + labiPosi.height &&
        willyPosy.top + willyPosy.height > labiPosi.top
    )  {
        (estadoWilly.enColision = true); 
                    
        obstaculo.style.animationPlayState = 'pause';
        obstaculo.style.visibility = 'hidden';

        vWilly.style.animationPlayState = 'pause';
        vWilly.style.visibility = 'hidden';
    


        // setTimeout(() => {
        //     obstaculo.style.visibility = 'break';
        //     obstaculo.style.animationPlayState = 'running';
            
        //     estadoWilly.enColision = false;
        // }, 0);
    // estadoWilly.posicionx===0;
    animarM();

        
    //     // Opción 1: Mantener el estado de mujer durante 3 segundos
    //     setTimeout(() => {
    //     //     // Aquí puedes detener cualquier animacion o lógica del juego
    //         clearInterval(animarInterval);
    //         clearInterval(detectarColisionInterval);
    //         alert("Willy es mujer");
    // }, -10);

    
}       
    
};


// Animar el personaje cada 20 milisegundos
setInterval(animarM,  20 );
setInterval(animar,  20 );
setInterval(detectarColisión, 50);
setInterval("location.reload()", 10000,0);







