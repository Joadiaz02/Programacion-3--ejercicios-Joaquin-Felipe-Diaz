function obtenerSumaMaxima(arr) {
    let maxSuma = 0;
    let sumaActual = 0;

    for (let i = 0; i < arr.length; i++) {
        sumaActual += arr[i];

        if (sumaActual < 0) {
            sumaActual = 0;
        }

        if (sumaActual > maxSuma) {
            maxSuma = sumaActual;
        }
    }

    return maxSuma;
}

console.log(obtenerSumaMaxima([-1,2,3,-9]));