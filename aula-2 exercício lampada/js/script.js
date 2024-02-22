const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lamp')
const rest = document.getElementById('rest')
const int = document.getElementById('int')

function estaquebrada(){
    return lampada.src.indexOf('quebrada') > -1
    //retorna true ou false
}

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

int.addEventListener('click',lampligada)
int.addEventListener('dblclick',lampdesligada)
ligar.addEventListener('click',lampligada)
desligar.addEventListener('click',lampdesligada)

lampada.addEventListener('mouseover',lampligada)
lampada.addEventListener('mouseleave',lampdesligada)

lampada.addEventListener('dblclick', lampquebrada)

rest.addEventListener('click', restaurar)







