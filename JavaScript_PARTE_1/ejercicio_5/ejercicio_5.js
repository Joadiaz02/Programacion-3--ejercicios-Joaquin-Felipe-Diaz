function repitePalabra(numero, palabra = null) {
    if (palabra) {
        for (let i = 0; i < numero; i++) {
            console.log(palabra);
        }
    } else {
        console.log(numero.toString().split('').reverse().join(''));
    }
}

repitePalabrita(3, "Hola");
repitePalabrita(123);  
