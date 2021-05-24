// document.getElementById("msmUser").src="https://piedra-papel-tijera.com/images/piedra.png";
import './css/style.css'
import './css/table.css'


const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijera = document.getElementById('tijera');
const btnEmpezar = document.getElementById('btnEmpezar');
const btnReiniciar = document.getElementById('btnReiniciar');
const msmFinal = document.querySelector('.msmContainer');//usando la clase del html
const tituloMsm_win = document.getElementById('tituloMsm_win');
const tituloMsm_lose = document.getElementById('tituloMsm_lose');
const tituloMsm_tie = document.getElementById('tituloMsm_tie');
const msmInicial = document.getElementById('msmInicial');


btnEmpezar.addEventListener('click', juego);
btnReiniciar.addEventListener('click', reiniciarJuego);


function juego(){
    btnEmpezar.classList.add('hide')
    let maquina
    document.getElementById('piedra').onclick  =  () =>  {
        maquina = transformarNumero();
        resultado('piedra',maquina)
    }
    document.getElementById('papel').onclick  =  () =>  {
        maquina = transformarNumero();
        resultado('papel',maquina)
    }
    
    document.getElementById('tijera').onclick  =  () =>  {
        maquina = transformarNumero();
        resultado('tijera',maquina)
    }
}




function resultado(user,cpu){
    if (user != cpu) {
        if (user === 'piedra' && cpu === 'tijera' || user === 'papel' && cpu === 'tijera' || user === 'tijera' && cpu === 'papel' ) {
            ganas(user,cpu)
        }else{
            perdio(user,cpu)
        }
        
    }else{
        empate(user,cpu)
    }
}
function imgUser(usuario, maquina){
    switch (usuario) {
        case 'piedra':
            document.getElementById("msmUser").src="./assets/img/piedra.png";
            imgCpu(maquina)
            break;
        case 'papel':
            document.getElementById('msmUser').src="./assets/img/papel.png";
            imgCpu(maquina)
            break;
        case 'tijera':
            document.getElementById('msmUser').src="./assets/img/tijeras.png";
            imgCpu(maquina)

        default:
            break;
    }
    

}

function imgCpu(maquina){
    switch (maquina) {
        case 'piedra':
            document.getElementById("msmCpu").src="../src/assets/img/piedra.png";
            break;
        case 'papel':
            document.getElementById('msmCpu').src="../src/assets/img/papel.png";
            break;
        case 'tijera':
            document.getElementById('msmCpu').src="../src/assets/img/tijeras.png";

        default:
            break;
    }
}


function transformarNumero(){
    let number = Math.floor(Math.random() * 3)
    let maquina
    switch (number) {
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


function ganas(user,cpu){
    imgUser(user,cpu)
    tituloMsm_win.classList.remove('hide')
    msmFinal.classList.remove('hide')
    msmInicial.classList.add('hide')
    // document.getElementById('msmFinal').innerHTML = 'FIERA GANASTE ;)';
}

function perdio(user,cpu){
    imgUser(user,cpu)
    tituloMsm_lose.classList.remove('hide')
    msmFinal.classList.remove('hide')
    msmInicial.classList.add('hide')
}

function empate(user,cpu){
    imgUser(user,cpu)
    tituloMsm_tie.classList.remove('hide')
    msmFinal.classList.remove('hide')
    msmInicial.classList.add('hide')
}

function reiniciarJuego(){
    tituloMsm_win.classList.add('hide')
    tituloMsm_lose.classList.add('hide')
    tituloMsm_tie.classList.add('hide')
    msmFinal.classList.add('hide');
    msmInicial.classList.remove('hide')
    juego();
}