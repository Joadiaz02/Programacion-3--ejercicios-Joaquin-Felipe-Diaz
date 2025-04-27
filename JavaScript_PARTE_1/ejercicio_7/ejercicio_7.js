function truncate(cadena, longitud) {
    if (cadena.length > longitud) {
        return cadena.slice(0, longitud) + '…';
    }
    return cadena;
}

console.log(truncate("Texto muy largo", 8));
console.log(truncate("Corto", 8));  
