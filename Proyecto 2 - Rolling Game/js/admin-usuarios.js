const tBody = document.getElementById("idtBody");
let usuariosLocalStorage = JSON.parse(localStorage.getItem("usuarios")) || [];
const usuarioSessionStorage =
  JSON.parse(sessionStorage.getItem("usuario")) || "";

// Función para renderizar la tabla de usuarios
const renderizarTablaUsuarios = () => {
  tBody.innerHTML = usuariosLocalStorage
    .map(
      (usuario) =>
        `
    <tr data-userid="${usuario.id}">
      <th scope="row">${usuario.id}</th>
      <td>${usuario.nombreDeUsuario}</td>
      <td>${usuario.role}</td>
      <td>${usuario.bloqueado ? "Bloqueado" : "Activo"}</td>
      <td>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal-${
          usuario.id
        }">
          Editar
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal-${
          usuario.id
        }" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Editar</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form id="form-${usuario.id}">
                  <div class="mb-3">
                    <label for="idUsuario-${
                      usuario.id
                    }" class="form-label">Usuario</label>
                    <input type="text" class="form-control" id="idUsuario-${
                      usuario.id
                    }" value="${
          usuario.nombreDeUsuario
        }" aria-describedby="emailHelp">
                  </div>
                  <div class="mb-3">
                    <label for="idRole-${
                      usuario.id
                    }" class="form-label">Rol</label>
                    <select class="form-select" id="idRole-${usuario.id}">
                      <option value="admin" ${
                        usuario.role === "admin" ? "selected" : ""
                      }>Admin</option>
                      <option value="usuario" ${
                        usuario.role === "usuario" ? "selected" : ""
                      }>Usuario</option>
                    </select>
                  </div>
                  <div class="text-center">
                    <button type="button" class="btn btn-primary" onclick="editarUsuario(${
                      usuario.id
                    })">Guardar Cambios</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <button class="btn btn-danger" onclick="eliminarUsuario(${
          usuario.id
        })">Eliminar</button>
        <button class="btn ${
          usuario.bloqueado ? "btn-success" : "btn-warning"
        }" onclick="${
          usuario.bloqueado
            ? `habilitarUsuario(${usuario.id})`
            : `desHabilitarUsuario(${usuario.id})`
        }">
          ${usuario.bloqueado ? "Habilitar" : "Deshabilitar"}
        </button>
      </td>
    </tr>
    `
    )
    .join("");

  // Configurar los listeners de los modales y formularios
  usuariosLocalStorage.forEach((usuario) => {
    const form = document.getElementById(`form-${usuario.id}`);
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Evitar envío por defecto
    });
  });

  // Configurar los listeners de los modales después de renderizar
  configurarModales();
};

// Función para configurar los modales después de renderizar la tabla
const configurarModales = () => {
  usuariosLocalStorage.forEach((usuario) => {
    const modal = new bootstrap.Modal(
      document.getElementById(`exampleModal-${usuario.id}`)
    );
    modal.handleUpdate(); // Asegurar que el modal se actualice correctamente
  });
};

// Función para editar un usuario
const editarUsuario = (idUsuario) => {
  const inputUsuario = document.getElementById(`idUsuario-${idUsuario}`);
  const inputRole = document.getElementById(`idRole-${idUsuario}`);

  if (inputRole.value !== "admin" && inputRole.value !== "usuario") {
    return alert("Rol Incorrecto. Rol Permitido: usuario o admin");
  }

  const usuarioEditado = {
    ...usuariosLocalStorage.find((usuario) => usuario.id === idUsuario),
    nombreDeUsuario: inputUsuario.value,
    role: inputRole.value,
  };

  usuariosLocalStorage = usuariosLocalStorage.map((usuario) =>
    usuario.id === idUsuario ? usuarioEditado : usuario
  );

  localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));
  alert("Usuario Editado con éxito");

  // Cerrar el modal después de editar
  const modal = new bootstrap.Modal(
    document.getElementById(`exampleModal-${idUsuario}`)
  );
  modal.hide();

  // Redireccionar a admin-usuarios.html después de cerrar el modal
  window.location.href = "admin-usuarios.html";
};

// Función para eliminar un usuario
const eliminarUsuario = (idUsuario) => {
  const confirmarEliminarUsuario = confirm(
    "¿Estás seguro de que quieres eliminar a este usuario?"
  );

  if (confirmarEliminarUsuario) {
    usuariosLocalStorage = usuariosLocalStorage.filter(
      (usuario) => usuario.id !== idUsuario
    );

    localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));
    alert("Usuario Eliminado con éxito");
    renderizarTablaUsuarios();
  }
};

// Función para deshabilitar un usuario
const desHabilitarUsuario = (idUsuario) => {
  const confirmarDeshabilitarUsuario = confirm(
    "¿Estás seguro de que quieres deshabilitar a este usuario?"
  );

  if (confirmarDeshabilitarUsuario) {
    usuariosLocalStorage = usuariosLocalStorage.map((usuario) =>
      usuario.id === idUsuario ? { ...usuario, bloqueado: true } : usuario
    );

    localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));
    alert("Usuario Deshabilitado con éxito");
    renderizarTablaUsuarios();
  }
};

// Función para habilitar un usuario
const habilitarUsuario = (idUsuario) => {
  const confirmarHabilitarUsuario = confirm(
    "¿Estás seguro de que quieres habilitar a este usuario?"
  );

  if (confirmarHabilitarUsuario) {
    usuariosLocalStorage = usuariosLocalStorage.map((usuario) =>
      usuario.id === idUsuario ? { ...usuario, bloqueado: false } : usuario
    );

    localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));
    alert("Usuario Habilitado con éxito");
    renderizarTablaUsuarios();
  }
};

// Llamar a la función para renderizar la tabla al cargar la página
renderizarTablaUsuarios();
