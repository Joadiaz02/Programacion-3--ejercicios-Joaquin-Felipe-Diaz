function esPalindromo(cadena) {
    const cadenaSinEspacios = cadena.replace(/\s+/g, '').toLowerCase();

    const cadenaInvertida = cadenaSinEspacios.split('').reverse().join('');

    if (cadenaSinEspacios === cadenaInvertida) {
        console.log("La cadena es un palíndromo.");
    } else {
        console.log("La cadena no es un palíndromo.");
    }
}

esPalindromo("La ruta nos aporto otro paso natural");  
esPalindromo("Hola Mundo"); 