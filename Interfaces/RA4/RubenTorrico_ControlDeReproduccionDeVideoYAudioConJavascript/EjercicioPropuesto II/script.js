let cambiarText = document.getElementById('texto');
function pulsarBoton() {
    let numero = Math.floor(Math.random() * 3);

    if(numero == 0){
        audio1.src = 'https://sound-effects-media.bbcrewind.co.uk/mp3/NHU05104275.mp3';
        audio1.play();
        cambiarText.innerHTML = '<b>Reproduciendo:</b> Naturaleza';
    } else if(numero == 1){
        audio1.src = 'https://sound-effects-media.bbcrewind.co.uk/mp3/07076051.mp3';
        audio1.play();
        cambiarText.innerHTML = '<b>Reproduciendo:</b> Industria';
    } else if(numero == 2){
        audio1.src = 'https://sound-effects-media.bbcrewind.co.uk/mp3/07001043.mp3';
        audio1.play();
        cambiarText.innerHTML = '<b>Reproduciendo:</b> Base Aérea';
    }
}