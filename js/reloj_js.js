//Declaro constantes (las agujas del reloj)
const aguja_hora = document.getElementById('hora');
const aguja_minutos = document.getElementById('minuto');
const aguja_segundos = document.getElementById('segundo');

//Cada mil milisegundos (un segundo) se va a ejectuar esta arrow function
setInterval(() =>  {
    //Crea un objeto Date que contiene los datos de la fecha y hora actual
    let horario = new Date();
    //Obtiene la hora, minutos y segundos (los datos que necesito para el ejercicio del reloj)
    let hora = horario.getHours();
    let minutos = horario.getMinutes();
    let segundos = horario.getSeconds();
    //Establece los angulos de cada aguja de acuerdo al valor de cada dato
    let rotacion_horas = 30 * hora + minutos / 2;
    let rotacion_minutos = 6 * minutos;
    let rotacion_segundos = 6 * segundos;

    //Rota las agujas (antes modificando en el css el transform origin para que rote desde el extremo de la aguja y no desde el centros)
    aguja_hora.style.transform = `rotate(${rotacion_horas}deg)`;
    aguja_minutos.style.transform = `rotate(${rotacion_minutos}deg)`;
    aguja_segundos.style.transform = `rotate(${rotacion_segundos}deg)`;
}, 1000);