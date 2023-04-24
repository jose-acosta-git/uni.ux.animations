//Obtiene la tarjeta del HTML
const card = document.getElementById('card');

//Obtiene alto y ancho de la tarjeta
const alto = card.clientHeight;
const ancho = card.clientWidth;

//Declara constante que se usa para cambiar la intensidad de la rotacion de la carta
const rotacion = 10;

//Si se ejecuta el evento mousemove en la card se ejecuta la funcion actualizarPerspectiva
card.addEventListener('mousemove', actualizarPerspectiva);

function actualizarPerspectiva(e) {
    //Obtiene las coordenadas relativas del cursor
    const x = e.layerX;
    const y = e.layerY;

    //Calcula los angulos de rotacion teniendo en cuenta las dimensiones de la card, la posicion del cursor y la constante rotacion
    const rotacionX = -rotacion * ((y - alto / 2) / alto);
    const rotacionY = rotacion * ((x - ancho / 2) / ancho);

    //Modifica la perspectiva (distancia al elemento, es decir entre plano donde z=0 y el del usuario), agranda un 10% el elemento
    //y aplica las rotaciones calculadas anteriormente para lograr el efecto 3d
    card.style.transform = "perspective(500px) scale(1.1) rotateX(" + rotacionX + "deg) rotateY(" + rotacionY + "deg)";
}

//Devuelve la card a su tamaño y rotación original
card.addEventListener('mouseout', function() {
    card.style.transform = 'scale(1) rotateX(0) rotateY(0)'
  })