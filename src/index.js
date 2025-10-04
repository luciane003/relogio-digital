const relogio = document.getElementById('relogio');
const botaoTema = document.getElementById('botao-tema');
const corpo = document.body;
const dataElemento = document.getElementById('data');
//Uma função que cria o relogio digital 
function atualizarRelogio() {
    //Pego a hora atual    
    const agora = new Date();
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    //Transformo os numeros que forem menores que dez em dois digitos, adicionando 0 a esquerda.
    const horasStr = String(horas).padStart(2, '0');
    const minutosStr = String(minutos).padStart(2, '0');
    const segundosStr = String(segundos).padStart(2, '0');

    const separador = segundos % 2 === 0 ? ':' : ' ';

    //O que vai aparecer na tela
    const horaFinal = `${horasStr}${separador}${minutosStr}${separador}${segundosStr}`;

    //acrescento ela na minha <div>
    relogio.innerText = horaFinal;

    //Mostrar data formatada
    const opcoes = {
        weekday:'long', 
        year: 'numeric',
        month: 'long', 
        day: 'numeric'    
    };

    const dataFormatada = agora.toLocaleDateString('pt-BR', opcoes);
    dataElemento.innerText = dataFormatada;
}

//Aqui fora desparo o intervalo
atualizarRelogio();
setInterval(atualizarRelogio, 1000);

//Alternar tema claro/escuro
botaoTema.addEventListener('click', () => {
    corpo.classList.toggle('tema-claro');

    if (corpo.classList.contains('tema-claro')) {
        botaoTema.textContent = '🌛';
    } else {
        botaoTema.textContent = '🌞';
    }
});
