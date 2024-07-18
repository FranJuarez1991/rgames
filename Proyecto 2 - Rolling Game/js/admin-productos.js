// const tBody = document.getElementById("idtBody");

// const inputNombre = document.getElementById("idInputNombre");
// const inputPrecio = document.getElementById("idInputPrecio");
// const inputDescripcion = document.getElementById("idInputDescripcion");
// const inputImagen = document.getElementById("idInputImagen");
// const botonGuardarCambios = document.getElementById("idBotonGuardarCambios");
// const botonInsertarFila = document.getElementById("idBotonInsertarFila");

// let productosLocalStorage = JSON.parse(localStorage.getItem("productos")) || [];

// // Función para renderizar la tabla
// const renderizarTabla = () => {
//   tBody.innerHTML = productosLocalStorage
//     .map(
//       (producto) =>
//         `
//      <tr>
//        <th scope="row">${producto.id}</th>
//        <td>${producto.nombre}</td>
//        <td>$${producto.precio}</td>
//        <td>${producto.bloqueado ? "Bloqueado" : "Activo"}</td>
//        <td>
//          <button class="btn btn-primary" onclick='editarProducto(${
//            producto.id
//          })'>Editar</button>
//          <button class="btn btn-danger" onclick='eliminarProducto(${
//            producto.id
//          })'>Eliminar</button>
//          <button class="btn ${
//            producto.bloqueado ? "btn-success" : "btn-warning"
//          }" onclick='${
//           producto.bloqueado
//             ? `habilitarProducto(${producto.id})`
//             : `desHabilitarProducto(${producto.id})`
//         }'>${producto.bloqueado ? "Habilitar" : "Deshabilitar"}</button>

//        </td>
//      </tr>
//     `
//     )
//     .join("");
// };

// // Función para agregar una nueva fila a la tabla
// const agregarFila = () => {
//   const nuevoProducto = {
//     id: productosLocalStorage.length + 1,
//     nombre: inputNombre.value,
//     precio: inputPrecio.value,
//     bloqueado: false, // Se asume que el producto no estará bloqueado inicialmente
//   };

//   productosLocalStorage.push(nuevoProducto);
//   localStorage.setItem("productos", JSON.stringify(productosLocalStorage));
//   renderizarTabla(); // Volver a renderizar la tabla con el nuevo producto
// };

// // Event listener para el botón Guardar Cambios
// botonGuardarCambios.addEventListener("click", () => {
//   enviarCambios();
//   renderizarTabla(); // Renderizar la tabla después de guardar cambios
// });

// // Event listener para el botón Insertar Fila
// botonInsertarFila.addEventListener("click", agregarFila);

// // Función para editar un producto
// const editarProducto = (idProducto) => {
//   const producto = productosLocalStorage.find((prod) => prod.id === idProducto);
//   inputNombre.value = producto.nombre;
//   inputPrecio.value = producto.precio;
//   inputDescripcion.value = producto.descripcion; // Agregar lógica de descripción si es necesario
//   inputImagen.value = producto.imagen; // Agregar lógica de imagen si es necesario

//   sessionStorage.setItem("idProductoAeditar", idProducto);
// };

// // Función para enviar los cambios de edición
// const enviarCambios = () => {
//   const idProducto =
//     JSON.parse(sessionStorage.getItem("idProductoAeditar")) || "";
//   const posicionProductoEnElArray = productosLocalStorage.findIndex(
//     (prod) => prod.id === idProducto
//   );

//   if (idProducto) {
//     const productoEditado = {
//       id: idProducto,
//       nombre: inputNombre.value,
//       precio: inputPrecio.value,
//       descripcion: inputDescripcion.value, // Agregar lógica de descripción si es necesario
//       imagen: inputImagen.value, // Agregar lógica de imagen si es necesario
//       bloqueado: productosLocalStorage[posicionProductoEnElArray].bloqueado, // Mantener el estado de bloqueado
//     };

//     productosLocalStorage[posicionProductoEnElArray] = productoEditado;

//     localStorage.setItem("productos", JSON.stringify(productosLocalStorage));
//     sessionStorage.removeItem("idProductoAeditar");
//   }
// };

// // Función para eliminar un producto
// const eliminarProducto = (idProducto) => {
//   productosLocalStorage = productosLocalStorage.filter(
//     (prod) => prod.id !== idProducto
//   );
//   localStorage.setItem("productos", JSON.stringify(productosLocalStorage));
//   renderizarTabla(); // Volver a renderizar la tabla después de eliminar
// };

// // Función para habilitar un producto
// const habilitarProducto = (idProducto) => {
//   const index = productosLocalStorage.findIndex(
//     (prod) => prod.id === idProducto
//   );
//   productosLocalStorage[index].bloqueado = false; // Cambiar estado a no bloqueado
//   localStorage.setItem("productos", JSON.stringify(productosLocalStorage));
//   renderizarTabla(); // Volver a renderizar la tabla después de habilitar
// };

// // Función para deshabilitar un producto
// const desHabilitarProducto = (idProducto) => {
//   const index = productosLocalStorage.findIndex(
//     (prod) => prod.id === idProducto
//   );
//   productosLocalStorage[index].bloqueado = true; // Cambiar estado a bloqueado
//   localStorage.setItem("productos", JSON.stringify(productosLocalStorage));
//   renderizarTabla(); // Volver a renderizar la tabla después de deshabilitar
// };

// // Función para destacar un producto
// const destacarProducto = (idProducto) => {
//   const confirmarDestacado = confirm(
//     "¿Estás seguro de que quieres destacar este producto?"
//   );
//   if (confirmarDestacado) {
//     const index = productosLocalStorage.findIndex(
//       (prod) => prod.id === idProducto
//     );
//     productosLocalStorage[index].destacado = true;
//     localStorage.setItem("productos", JSON.stringify(productosLocalStorage));
//     localStorage.setItem(
//       "imagenDestacada",
//       JSON.stringify(productosLocalStorage[index].imagen)
//     );
//     renderizarTabla(); // Volver a renderizar la tabla después de destacar
//   }
// };

// // Renderizar la tabla al cargar la página
// renderizarTabla();

const tBody = document.getElementById("idtBody");

const inputNombre = document.getElementById("idInputNombre");
const inputPrecio = document.getElementById("idInputPrecio");
const inputDescripcion = document.getElementById("idInputDescripcion");
const inputImagen = document.getElementById("idInputImagen");
const botonGuardarCambios = document.getElementById("idBotonGuardarCambios");
const botonInsertarFila = document.getElementById("idBotonInsertarFila");

let productosLocalStorage = JSON.parse(localStorage.getItem("productos")) || [];

// Función para renderizar la tabla
const renderizarTabla = () => {
  tBody.innerHTML = productosLocalStorage
    .map(
      (producto) =>
        `
     <tr>
       <th scope="row">${producto.id}</th>
       <td>${producto.nombre}</td>
       <td>$${producto.precio}</td>
       <td>${producto.bloqueado ? "Bloqueado" : "Activo"}</td>
       <td>
         <button class="btn btn-primary" onclick='editarProducto(${
           producto.id
         })'>Editar</button>
         <button class="btn btn-danger" onclick='eliminarProducto(${
           producto.id
         })'>Eliminar</button>
         <button class="btn ${
           producto.bloqueado ? "btn-success" : "btn-warning"
         }" onclick='${
          producto.bloqueado
            ? `habilitarProducto(${producto.id})`
            : `desHabilitarProducto(${producto.id})`
        }'>${producto.bloqueado ? "Habilitar" : "Deshabilitar"}</button>
       </td>
       <td><input type="checkbox" ${
         producto.publicado ? "checked" : ""
       } disabled></td> <!-- Checkbox para publicado -->
     </tr>
    `
    )
    .join("");
};

// Función para agregar una nueva fila a la tabla
const agregarFila = () => {
  const nuevoProducto = {
    id: productosLocalStorage.length + 1,
    nombre: inputNombre.value,
    precio: inputPrecio.value,
    descripcion: inputDescripcion.value, // Asegúrate de incluir esta propiedad si es necesaria
    imagen: inputImagen.value, // Asegúrate de incluir esta propiedad si es necesaria
    bloqueado: false, // Se asume que el producto no estará bloqueado inicialmente
    publicado: false, // Añadir la propiedad 'publicado'
  };

  productosLocalStorage.push(nuevoProducto);
  localStorage.setItem("productos", JSON.stringify(productosLocalStorage));
  renderizarTabla(); // Volver a renderizar la tabla con el nuevo producto
};

// Event listener para el botón Guardar Cambios
botonGuardarCambios.addEventListener("click", () => {
  enviarCambios();
  renderizarTabla(); // Renderizar la tabla después de guardar cambios
});

// Event listener para el botón Insertar Fila
botonInsertarFila.addEventListener("click", agregarFila);

// Función para editar un producto
const editarProducto = (idProducto) => {
  const producto = productosLocalStorage.find((prod) => prod.id === idProducto);
  inputNombre.value = producto.nombre;
  inputPrecio.value = producto.precio;
  inputDescripcion.value = producto.descripcion; // Agregar lógica de descripción si es necesario
  inputImagen.value = producto.imagen; // Agregar lógica de imagen si es necesario

  sessionStorage.setItem("idProductoAeditar", idProducto);
};

// Función para enviar los cambios de edición
const enviarCambios = () => {
  const idProducto =
    JSON.parse(sessionStorage.getItem("idProductoAeditar")) || "";
  const posicionProductoEnElArray = productosLocalStorage.findIndex(
    (prod) => prod.id === idProducto
  );

  if (idProducto) {
    const productoEditado = {
      id: idProducto,
      nombre: inputNombre.value,
      precio: inputPrecio.value,
      descripcion: inputDescripcion.value, // Agregar lógica de descripción si es necesario
      imagen: inputImagen.value, // Agregar lógica de imagen si es necesario
      bloqueado: productosLocalStorage[posicionProductoEnElArray].bloqueado, // Mantener el estado de bloqueado
      publicado: productosLocalStorage[posicionProductoEnElArray].publicado, // Mantener el estado de publicado
    };

    productosLocalStorage[posicionProductoEnElArray] = productoEditado;

    localStorage.setItem("productos", JSON.stringify(productosLocalStorage));
    sessionStorage.removeItem("idProductoAeditar");
  }
};

// Función para eliminar un producto
const eliminarProducto = (idProducto) => {
  productosLocalStorage = productosLocalStorage.filter(
    (prod) => prod.id !== idProducto
  );
  localStorage.setItem("productos", JSON.stringify(productosLocalStorage));
  renderizarTabla(); // Volver a renderizar la tabla después de eliminar
};

// Función para habilitar un producto
const habilitarProducto = (idProducto) => {
  const index = productosLocalStorage.findIndex(
    (prod) => prod.id === idProducto
  );
  productosLocalStorage[index].bloqueado = false; // Cambiar estado a no bloqueado
  localStorage.setItem("productos", JSON.stringify(productosLocalStorage));
  renderizarTabla(); // Volver a renderizar la tabla después de habilitar
};

// Función para deshabilitar un producto
const desHabilitarProducto = (idProducto) => {
  const index = productosLocalStorage.findIndex(
    (prod) => prod.id === idProducto
  );
  productosLocalStorage[index].bloqueado = true; // Cambiar estado a bloqueado
  localStorage.setItem("productos", JSON.stringify(productosLocalStorage));
  renderizarTabla(); // Volver a renderizar la tabla después de deshabilitar
};

// Función para destacar un producto
const destacarProducto = (idProducto) => {
  const confirmarDestacado = confirm(
    "¿Estás seguro de que quieres destacar este producto?"
  );
  if (confirmarDestacado) {
    const index = productosLocalStorage.findIndex(
      (prod) => prod.id === idProducto
    );
    productosLocalStorage[index].destacado = true;
    localStorage.setItem("productos", JSON.stringify(productosLocalStorage));
    localStorage.setItem(
      "imagenDestacada",
      JSON.stringify(productosLocalStorage[index].imagen)
    );
    renderizarTabla(); // Volver a renderizar la tabla después de destacar
  }
};

// Renderizar la tabla al cargar la página
renderizarTabla();
