 const clock = document.getElementById('clock');

//Uma função que cria o relogio digital 
function updateClock() {

//Pego a hora atual    
const now= new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

//Transformo os numeros que forem menores que dez em dois digitos, adicionando 0 a esquerda.
const hoursStr = String(hours).padStart(2, '0');
const minutesStr = String(minutes).padStart(2, '0');
const secondsStr = String(seconds).padStart(2, '0');

//O que vai aparecer na tela
const timeString = `${hoursStr}:${minutesStr}:${secondsStr}`;

//acrescento ela na minha <div>
clock.innerText = timeString;
}    

//Aqui fora desparo o intervalo
updateClock();
setInterval(updateClock, 1000);
