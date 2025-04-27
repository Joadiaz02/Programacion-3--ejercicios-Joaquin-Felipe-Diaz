function mostrarNombreApellido(nombre, apellido) {
    const nombreFormateado = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    const apellidoFormateado = apellido.toUpperCase();   
    console.log(`${apellidoFormateado}, ${nombreFormateado}`);
}

let nombre = "joaquin";
let apellido = "diaz";
mostrarNombreApellido(nombre, apellido);  
