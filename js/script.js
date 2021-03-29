// this.secuencia = Array(ULTIMO_NIVEL).fill(0).map(n =>Math.floor(Math.random() * 4))
// document.getElementById("msmUser").src="https://piedra-papel-tijera.com/images/piedra.png";

const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijera = document.getElementById('tijera');
const btnEmpezar = document.getElementById('btnEmpezar');
const btnReiniciar = document.getElementById('btnReiniciar');
const msmFinal = document.querySelector('.msmContainer');//usando la clase
const tituloMsm_win = document.getElementById('tituloMsm_win');
const tituloMsm_lose = document.getElementById('tituloMsm_lose');
const tituloMsm_tie = document.getElementById('tituloMsm_tie');
var maquina;
var usuario;

btnEmpezar.addEventListener('click', juego);
btnReiniciar.addEventListener('click', reiniciarJuego);
// piedra.addEventListener('click',iniciarJuego);
// papel.addEventListener('click',iniciarJuego);
// tijera.addEventListener('click',iniciarJuego);


//  function iniciarJuego() {
//     numeroRadon()
//     transformarNumero(numero);
//     juego();
//     resultado(usuario,maquina);
//  }


function juego(){
    btnEmpezar.classList.add('hide')

    document.getElementById('piedra').onclick  =  () =>  {
        usuario = 'piedra'
        console.log(usuario)
        numeroRadon()
        transformarNumero();
        resultado(usuario,maquina)
    }
    document.getElementById('papel').onclick  =  () =>  {
        usuario = 'papel'
        console.log(usuario)
        numeroRadon()
        transformarNumero();
        resultado(usuario,maquina)
    }
    
    document.getElementById('tijera').onclick  =  () =>  {
        usuario = 'tijera'
        console.log(usuario)
        numeroRadon()
        transformarNumero();
        resultado(usuario,maquina)
    }
}




function resultado(user,cpu){
    var user = usuario;
    var cpu = maquina;
    if (user != cpu) {
        if (user === 'piedra' && cpu === 'tijera' || user === 'papel' && cpu === 'tijera' || user === 'tijera' && cpu === 'papel' ) {
            console.log("El Usuario Gano con " + user)
            ganas()
        }else{
            console.log("La Maquina Gana con " + cpu + user)
            perdio()
        }
        
    }else{
        console.log("EMPATE" + cpu + user);
        empate()
    }
}
function imgUser(){
    switch (usuario) {
        case 'piedra':
            document.getElementById("msmUser").src="https://piedra-papel-tijera.com/images/piedra.png";
            imgCpu()
            break;
        case 'papel':
            document.getElementById('msmUser').src="https://piedra-papel-tijera.com/images/papel.png";
            imgCpu()
            break;
        case 'tijera':
            document.getElementById('msmUser').src="https://piedra-papel-tijera.com/images/tijeras.png";
            imgCpu()

        default:
            break;
    }
    

}

function imgCpu(){
    switch (maquina) {
        case 'piedra':
            document.getElementById("msmCpu").src="https://piedra-papel-tijera.com/images/piedra.png";
            break;
        case 'papel':
            document.getElementById('msmCpu').src="https://piedra-papel-tijera.com/images/papel.png";
            break;
        case 'tijera':
            document.getElementById('msmCpu').src="https://piedra-papel-tijera.com/images/tijeras.png";

        default:
            break;
    }
}

function numeroRadon(){
    numero = Math.floor(Math.random() * 3)
}

function transformarNumero(){
    // numeroRadon()
    switch (numero) {
        case 0:
            maquina = 'piedra'
            return maquina
            
        case 1:
            maquina = 'papel'
            return maquina

        case 2:
            maquina = 'tijera'
            return maquina

        default:
            
    }
}


function ganas(){
    imgUser()
    tituloMsm_win.classList.remove('hide')
    msmFinal.classList.remove('hide')
    // document.getElementById('msmFinal').innerHTML = 'FIERA GANASTE ;)';
}

function perdio(){
    imgUser()
    tituloMsm_lose.classList.remove('hide')
    msmFinal.classList.remove('hide')
}

function empate(){
    imgUser()
    tituloMsm_tie.classList.remove('hide')
    msmFinal.classList.remove('hide')
}

function reiniciarJuego(){
    tituloMsm_win.classList.add('hide')
    tituloMsm_lose.classList.add('hide')
    tituloMsm_tie.classList.add('hide')
    msmFinal.classList.add('hide');
    juego();
}