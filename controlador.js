//declaro las variables que almacenaran lo objetos del html para controlarlos
let boton = document.getElementById('boton');
let foto1 = document.getElementById('foto1');
let titulo1 = document.getElementById('titulo1');
let audio1 = document.getElementById('audio1');
let foto2 = document.getElementById('foto2');
let titulo2 = document.getElementById('titulo2');
let audio2 = document.getElementById('audio2');
let foto3 = document.getElementById('foto3');
let titulo3 = document.getElementById('titulo3');
let audio3 = document.getElementById('audio3');

// addeventlistener funciona para cuando detecta un evento en este caso el click
boton.addEventListener('click',perroGuardian);

function perroGuardian() {
    titulo1.textContent="El dia de mi suerte - Red Code";
    foto1.src='imgs/elRedCode.jpg';
    audio1.src='audios/elDiaDeMiSuerteRedCode.mp3'

    titulo2.textContent="YUNG SARRIA x BARBER G 4 LIFE Chuleton Prod BLACKTHOVEN";
    foto2.src='imgs/yungSarria.jpg';
    audio2.src='audios/ChuletonYungSarria.mp3'

    titulo3.textContent="Realidad Mental - Cuanto Dan Por Mi";
    foto3.src='imgs/realidadMenta.jpg';
    audio3.src='audios/CuantoDanPorMiRealidadMental.mp3'   
}
