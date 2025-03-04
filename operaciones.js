import { sumar, restar, multiplicar, dividir } from './operaciones.js';

function calcular() {
    let continuar = true;

    while (continuar) {
        let operacion = prompt("Seleccione una operación:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir");

        if (operacion === "5") {
            alert("Gracias por usar la calculadora.");
            continuar = false;
            break;
        }

        let num1 = parseFloat(prompt("Ingrese el primer número:"));
        let num2 = parseFloat(prompt("Ingrese el segundo número:"));

        if (isNaN(num1) || isNaN(num2)) {
            alert("Por favor, ingrese valores numéricos válidos.");
            continue;
        }

        let resultado;
        switch (operacion) {
            case "1":
                resultado = sumar(num1, num2);
                break;
            case "2":
                resultado = restar(num1, num2);
                break;
            case "3":
                resultado = multiplicar(num1, num2);
                break;
            case "4":
                resultado = dividir(num1, num2);
                break;
            default:
                alert("Opción no válida.");
                continue;
        }

        alert(`El resultado es: ${resultado}`);
    }
}

calcular();
