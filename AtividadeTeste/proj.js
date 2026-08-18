const botaoGeral = document.querySelector('#geral');
const abas = document.querySelector('#a');

    botaoGeral.addEventListener('click', () => {
        abas.classList.toggle('escondido');

        if(botaoGeral.classList.contains('escondido')){
            botaoGeral.textContent = abas;
        }else{
            botaoGeral.textContent = abas;
        }
    });