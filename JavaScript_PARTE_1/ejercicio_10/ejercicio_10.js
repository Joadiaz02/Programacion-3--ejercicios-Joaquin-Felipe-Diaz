let estilos = ["Jazz", "Blues"];
console.log(estilos.join(", "));

estilos.push("Rock-n-Roll");
console.log(estilos.join(", "));

let medio = Math.floor(estilos.length / 2);
estilos[medio] = "Heavy Metal";
console.log(estilos.join(", "));

estilos.shift();
console.log(estilos.join(", "));

estilos.unshift("Rap", "Reggae");
console.log(estilos.join(", "));
