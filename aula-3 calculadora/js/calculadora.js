var resultado = document.getElementById('resultado') 

function pegarn(){
    var num1 = document.getElementById('n1').value
    console.log('num', num1)
}

function pegarnu(){
    var num2 = document.getElementById('n2').value
    console.log('num', num2)
}

function soma(){
    var num1 = Number(document.getElementById('n1').value)
    var num2 = Number(document.getElementById('n2').value)
    var soma = num1 + num2;
    console.log(soma)
    resultado.innerHTML = ('<p> a soma é ' + soma + '</p>')
}

function sub(){
    var num1 = document.getElementById('n1').value
    var num2 = document.getElementById('n2').value
    var sub = num1 - num2;
    console.log(sub)
    resultado.innerHTML = ('<p> a subtração é ' + sub + '</p>')
}

function div(){
    var num1 = document.getElementById('n1').value
    var num2 = document.getElementById('n2').value
    var div = num1 / num2;
    console.log(div)
    resultado.innerHTML = ('<p> a divisão é ' + div + '</p>')
}

function mult(){
    var num1 = document.getElementById('n1').value
    var num2 = document.getElementById('n2').value
    var mult = num1 * num2;
    console.log(mult)
    resultado.innerHTML = ('<p> a multiplicação é ' + mult + '</p>')
}

function limpar(){
    resultado.innerHTML = " "
    document.getElementById('n1').value= " "
    document.getElementById('n2').value= " "
}