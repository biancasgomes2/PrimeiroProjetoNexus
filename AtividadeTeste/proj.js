const linksEscondido = document.querySelector('.links-mobile')
const botaoT = document.querySelector('.tracinhos')

    botaoT.addEventListener('click', () => {
        linksEscondido.classList.toggle('escondido');

        if(linksEscondido.classList.contains("escondido")){
            botaoT.textContent = "☰"
        }else{
            botaoT.textContent = "✕"
        }
    });