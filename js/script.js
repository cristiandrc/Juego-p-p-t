// this.secuencia = Array(ULTIMO_NIVEL).fill(0).map(n =>Math.floor(Math.random() * 4))

const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijera = document.getElementById('tijera');
const btnEmpezar = document.getElementById('btnEmpezar');
const btnContenedor = document.getElementById('btnContenedor');

var numero;
var maquina;
var usuario;

btnEmpezar.addEventListener('click', juego);
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
    btnContenedor.classList.add('hide')

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
    alert('ganastes')
}

function perdio(){
    alert('Pierdes')
}

function empate(){
    alert('EMPATE CRACK')
}