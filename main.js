function playSong (selectorAudio) {
    const element = document.querySelector(selectorAudio);
    if (element && element.localName === 'audio'){
        element.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor invállido.');
    }
}

const keyList = document.querySelectorAll('.tecla');

for (let counter = 0; counter < keyList.length; counter++) {

    const key = keyList[counter];
    const instrumento = key.classList[1]; 
    
    const idAudio = `#som_${instrumento}`;
    
    key.onclick = function(){
        playSong(idAudio)
    }

    key.onkeydown = function(event) {
        if (event.code === 'Space' || event.code === 'Enter'){
            key.classList.add('ativa');
        }
    }
        
    key.onkeyup = function() {
        key.classList.remove('ativa');
    }

}
