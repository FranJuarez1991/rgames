document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    // Prevenir el envío del formulario
    event.preventDefault();

    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Validar el nombre
    if (nombre === "") {
      alert("Por favor, ingrese su nombre.");
      return false;
    }

    // Validar el correo electrónico
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return false;
    }

    // Validar el mensaje
    if (mensaje === "") {
      alert("Por favor, ingrese su mensaje.");
      return false;
    }

    // Si todas las validaciones pasan, redirigir a otra página
    window.location.href = "../paginas/error.html"; // Cambia esto a la URL deseada
  });
});
