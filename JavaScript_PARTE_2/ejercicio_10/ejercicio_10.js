//Punto 1.
const trabajos = usuarios.map(u => u.trabajo);
console.log("Trabajos:", trabajos);

//Punto 2.
const paises = usuarios.map(u => u.pais);
console.log("Paises:", paises);

//Punto 3.
const usuariosChina = usuarios.filter(u => u.pais === "China");
console.log("Usuarios de China:", usuariosChina);

//Punto 4.
const menores_21 = usuarios.filter(u => u.edad < 21);
console.log("Usuarios menores de 21:", menores_21);

//Punto 5.
const cantMasculinos = usuarios.filter(u => u.sexo === "Male").length;
console.log("Cantidad de usuarios masculinos:", cantMasculinos);

//Punto 6.
const cantFemeninos = usuarios.filter(u => u.sexo === "Female").length;
console.log("Cantidad de usuarios femeninos:", cantFemeninos);


//Punto 7.
const nombresFemeninos = usuarios.filter(u => u.sexo === "Female").map(u => u.nombre);
console.log("Nombres de usuarias femeninas:", nombresFemeninos);

//Punto 8.
const emailsMasculinos = usuarios.filter(u => u.sexo === "Male").map(u => u.email);
console.log("Emails de usuarios masculinos:", emailsMasculinos);

//Punto 9.
const datosBasicos = usuarios.map(u => ({
    nombre: u.nombre,
    apellido: u.apellido,
    ciudad: u.ciudad
}));
console.log("Nombres, apellidos y ciudades:", datosBasicos);

//Punto 10.
const hombres35 = usuarios
    .filter(u => u.sexo === "Male" && u.edad > 35).map(u => ({
        nombre: u.nombre,
        apellido: u.apellido,
        ciudad: u.ciudad
    }));
console.log("Hombres mayores de 35:", hombres35);


//Punto 11.
const promedioEdad = usuarios.reduce((acumulado, usuario) => acumulado + usuario.edad, 0) / usuarios.length;
console.log("Promedio de edad:", promedioEdad);

//Punto 12.
const hombres = usuarios.filter(usuario => usuario.sexo === "Male");
const promedioEdadHombres = hombres.reduce((acumulado, u) => acumulado + u.edad, 0) / hombres.length;
console.log("Promedio de edad de hombres:", promedioEdadHombres);

//Punto 13.
const egipcios = usuarios.filter(u => u.pais === "Egypt");
const promedioEdadEgipcios = egipcios.length > 0 ? egipcios.reduce((acc, u) => acc + u.edad, 0) / egipcios.length : 0;
console.log("Promedio de edad de egipcios:", promedioEdadEgipcios);
