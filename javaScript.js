let segundos = 0;
let cronometro;

function formatarTempo(tempo) {
    const horas = Math.floor(tempo / 3600);
    const min = Math.floor((tempo % 3600) / 60);
    const segundosRest = tempo % 60;
    return `${horas.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${segundosRest.toString().padStart(2, '0')}`;
}

function atualizarCronometro() {
    segundos++;
    document.querySelector('#tempo-decorrido').textContent = formatarTempo(segundos);
  }
  
  document.querySelector('#botao-iniciar').addEventListener('click', () => {
    cronometro = setInterval(atualizarCronometro, 1000);
  });
  
  document.querySelector('#botao-parar').addEventListener('click', () => {
    clearInterval(cronometro);
  });
  
  document.querySelector('#botao-zerar').addEventListener('click', () => {
    clearInterval(cronometro);
    segundos = 0;
    document.querySelector('#tempo-decorrido').textContent = formatarTempo(segundos);
  });

