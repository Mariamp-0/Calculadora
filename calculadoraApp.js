
const boton = document.getElementById('calcular')

boton.addEventListener('click', function(event){

event.preventDefault();

let numero1 = parseInt(document.getElementById("op1").value);
let numero2 = parseInt(document.getElementById("op2").value);
let operador = (document.getElementById("op").value);
let resultado;


if (operador == "+" || operador== "-" || operador == "*" || operador == "/" || operador == "**" || operador == "%" ){

     if (operador == "+") {
        resultado = numero1 + numero2;
    } else if (operador == "-") {
        resultado = numero1 - numero2;
    } else if (operador == "*") {
        resultado = numero1 * numero2;
    } else if (operador == "/"){
        if (numero2 != 0){
        resultado = numero1 / numero2;
        } else {
            alert("ERROR: No se puede dividir por cero")}
    } else if (operador == "**") {
        resultado = numero1 ** numero2;
    } else if (operador == "%") {
        if (numero2 != 0 ) {
            resultado = numero1 % numero2;
        } else {
            alert("Error: No se puede hallar el módulo diviendo por cero")
        }
    }

} else {
    alert("ERROR: operador no válido")
    };

    document.getElementById('resultado_final').innerText = "Resultado: " + resultado;
    
//console.log(resultado);

})
