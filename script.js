// Function ejercicio 1

function onClickHandler(callback){
    callback();
}

function mensajeConsola () {
    console.log(`Esta funcion fue llamada usando un callback`);
}

// Function ejercicio 2

function onClickHandler2 (variable, callback){
    type = document.getElementById("typeOf").value;
    if(type == "Integer" || type == "integer"){
        variable = parseInt(variable);
    } else if (type == "boolean" || type == "Boolean"){
        if(variable === "true"){
            variable = true;
        } else if (variable === "false"){
            variable = false;
        }
    }
    window[callback](variable);
}

function typeOfVariable (variable) {
    alert(`El tipo del argumento "${variable}" es "${typeof(variable)}"`)
}

// Function ejercicio 3

function onClickHandler3 (number1, number2, callback){
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    window[callback](number1, number2);
}

function suma(number1, number2){
    let result = number1 + number2;
    alert(`La suma entre los dos numeros es ${result}`)
}

function resta(number1, number2){
    result = number1 - number2;
    alert(`La suma entre los dos numeros es ${result}`)
}

function multiplicacion(number1, number2){
    result = number1 * number2;
    alert(`La suma entre los dos numeros es ${result}`)
}

function division(number1, number2){
    result = number1 / number2;
    alert(`La suma entre los dos numeros es ${result}`)
}

// Funcion ejercicio 4

function onClickHandler4 (caracteres, callback){
    window[callback](caracteres);
}

function minusculas (caracteres){
    alert(caracteres.toLowerCase());
};

function mayusculas (caracteres){
    alert(caracteres.toUpperCase());
};

// Funcion ejercicio 5
 

 function OnClickHandler5 (string,callback){
    const arrayHoras = string.split(",");
    console.log(arrayHoras);
    const ArrayMasDosHoras = [];
    for (let i = 0; i < arrayHoras.length; i++) {
        arrayHoras[i] = parseInt(arrayHoras[i]);
        if(arrayHoras[i] >= 120){
            ArrayMasDosHoras.push(arrayHoras[i]);
        }
    }
    callback(ArrayMasDosHoras);
 }

 function convertirMinutosHoras (masDosHoras){
    const conversionHoras = [];
    for (let i = 0; i < masDosHoras.length; i++) {
        conversionHoras.push(Math.round((masDosHoras[i] / 60) * 100) / 100);
        alert(`${masDosHoras[i]} minutos en horas es ${conversionHoras[i]} `);        
    }
 }




