const tBody = document.getElementById("idtBody");
let usuariosLocalStorage = JSON.parse(localStorage.getItem("usuarios")) || [];
const usuarioSessionStorage =
  JSON.parse(sessionStorage.getItem("usuario")) || "";

tBody.innerHTML = usuariosLocalStorage
  .map((usuario) =>
    usuario.id !== usuarioSessionStorage.id
      ? `
          <tr>
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
                      <form>
                        <div class="mb-3">
                          <label for="idUsuario" class="form-label">Usuario</label>
                          <input type="text" class="form-control" id="idUsuario" value='${
                            usuario.nombreDeUsuario
                          }' aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                          <label for="idRole" class="form-label">Rol</label>
                          <select class="form-select" id="idRole">
                            <option value="admin" ${
                              usuario.role === "admin" ? "selected" : ""
                            }>Admin</option>
                            <option value="usuario" ${
                              usuario.role === "usuario" ? "selected" : ""
                            }>Usuario</option>
                          </select>
                        </div>
                        <div class="text-center"> <!-- Div para centrar el botón -->
                          <button type="button" class="btn btn-primary" onclick='editarUsuario(${
                            usuario.id
                          })'>Guardar Cambios</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <button class="btn btn-danger" onclick='eliminarUsuario(${
                usuario.id
              })'>Eliminar</button>
              <button class="btn ${
                usuario.bloqueado ? "btn-success" : "btn-warning"
              }" onclick='${
          usuario.bloqueado
            ? `habilitarUsuario(${usuario.id})`
            : `desHabilitarUsuario(${usuario.id})`
        }'>${usuario.bloqueado ? "Habilitar" : "Deshabilitar"}</button>
            </td>
          </tr>
      `
      : ""
  )
  .join("");

const inputUsuario = document.getElementById("idUsuario");
const inputRole = document.getElementById("idRole");

const editarUsuario = (idUsuario) => {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuario = usuarios.find((usuario) => usuario.id === idUsuario);

  if (inputRole.value !== "admin" && inputRole.value !== "usuario") {
    return alert("Rol Incorrecto. Rol Permitido: usuario o admin");
  }

  const usuarioEditado = {
    ...usuario,
    nombreDeUsuario: inputUsuario.value,
    role: inputRole.value,
  };

  const posicionUsuario = usuarios.findIndex(
    (usuario) => usuario.id === idUsuario
  );

  usuarios[posicionUsuario] = usuarioEditado;

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  alert("Usuario Editado con éxito");
  location.reload();
};

const eliminarUsuario = (idUsuario) => {
  const confirmarEliminarUsuario = confirm(
    "¿Estás seguro de que quieres eliminar a este usuario?"
  );

  if (confirmarEliminarUsuario) {
    const usuarios = usuariosLocalStorage.filter(
      (usuario) => usuario.id !== idUsuario
    );

    usuariosLocalStorage = usuarios;

    localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));
    location.reload();
  }
};

const desHabilitarUsuario = (idUsuario) => {
  const posicionDelUsuarioEnElArray = usuariosLocalStorage.findIndex(
    (usuario) => usuario.id === idUsuario
  );

  const confirmarDeshabilitarUsuario = confirm(
    "¿Estás seguro de que quieres deshabilitar a este usuario?"
  );

  if (confirmarDeshabilitarUsuario) {
    usuariosLocalStorage[posicionDelUsuarioEnElArray].bloqueado = true;

    localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));
    location.reload();
  }
};

const habilitarUsuario = (idUsuario) => {
  const posicionDelUsuarioEnElArray = usuariosLocalStorage.findIndex(
    (usuario) => usuario.id === idUsuario
  );

  const confirmarHabilitarUsuario = confirm(
    "¿Estás seguro de que quieres habilitar a este usuario?"
  );

  if (confirmarHabilitarUsuario) {
    usuariosLocalStorage[posicionDelUsuarioEnElArray].bloqueado = false;

    localStorage.setItem("usuarios", JSON.stringify(usuariosLocalStorage));
    location.reload();
  }
};
