function sumar(){
    num1 = parseInt(document.getElementById('primerDato').value);
    num2 = parseInt(document.getElementById('segundoDato').value);
    let resul = num1 + num2;

    document.getElementById('resultado').value = resul;
}
function restar(){
    num1 = parseInt(document.getElementById('primerDato').value);
    num2 = parseInt(document.getElementById('segundoDato').value);
    let resul = num1 - num2;

    document.getElementById('resultado').value = resul;
}
function multiplicar(){
    num1 = parseInt(document.getElementById('primerDato').value);
    num2 = parseInt(document.getElementById('segundoDato').value);
    let resul = num1 * num2;

    document.getElementById('resultado').value = resul;
}
function dividir(){
    num1 = parseInt(document.getElementById('primerDato').value);
    num2 = parseInt(document.getElementById('segundoDato').value);
    
    if( num2 >= 1)
    {
        let resul = num1 / num2;
        document.getElementById('resultado').value = resul;
    }
    else{
        document.getElementById('resultado').value = resul;
        alert('no se puede dividir')
    }


    document.getElementById('resultado').value = resul;
}







