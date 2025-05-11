const productos = [
    {
      codigoDeBarra: "0011223344556",
      nombre: "Leche",
      precio: 500.00,
      fechaVencimiento: "2030-12-31"
    },
    {
      codigoDeBarra: "0066554433221",
      nombre: "Gaseosa",
      precio: 3499.99,
      fechaVencimiento: "2027-12-31"
    },
    {
      codigoDeBarra: "0099887766554",
      nombre: "Pan lactal",
      precio: 1099.50,
      fechaVencimiento: "2026-12-31"
    }
  ];
  
  productos.forEach((producto, index) => {
    console.log("Código de Barra:", producto.codigoDeBarra);
    console.log("Nombre:", producto.nombre);
    console.log("Precio:", producto.precio);
    console.log("Fecha de Vencimiento:", producto.fechaVencimiento);
    console.log("-----------------------------");
  });
  