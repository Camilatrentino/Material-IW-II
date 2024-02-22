const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lamp')
const rest = document.getElementById('rest')
const int = document.getElementById('int')

function estaquebrada(){
    return lampada.src.indexOf('quebrada') > -1
    //retorna true ou false
}

function inte(){
    return lampada.src.indexOf('desligada') > -1
}

//interruptor
function inter(){
    if(!estaquebrada()){
        if(inte()){
        lampada.src = 'img/ligada.jpg'
      }
        else{
        lampada.src = 'img/desligada.jpg'
      }
    }
}
//interruptor


function lampligada(){
    if(!estaquebrada()){
        lampada.src = 'img/ligada.jpg'
    }  
}

function lampdesligada(){
    if(!estaquebrada()){
        lampada.src = 'img/desligada.jpg'
    } 
}

function lampquebrada(){
    lampada.src = 'img/quebrada.jpg'
}

function restaurar(){
    lampada.src = 'img/desligada.jpg'
}

int.addEventListener('click',inter)
ligar.addEventListener('click',lampligada)
desligar.addEventListener('click',lampdesligada)

lampada.addEventListener('mouseover',lampligada)
lampada.addEventListener('mouseleave',lampdesligada)

lampada.addEventListener('dblclick', lampquebrada)

rest.addEventListener('click', restaurar)


//texto

// const bot = document.getElementById('botao')

// let estado
// function quebra(){
    
// }

// if(estaquebrada()){
//         estado = 'quebrada'
// }
// else{
//      if(inte()){
//             estado = 'desligada'
//      }
//      else{
//             estado ='ligada'
//     }
// }


// let text = estado
// document.getElementById("oi").innerHTML = text;





