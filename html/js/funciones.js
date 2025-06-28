function togglePassword() {
      const input = document.getElementById("inputPassword5");
      const btn = document.querySelector(".toggle-btn");
      if (input.type === "password") {
        input.type = "text";
        btn.textContent = "🙈";
      } else {
        input.type = "password";
        btn.textContent = "👁️";
      }
    }

function copiarCorreo() {
    const correo = 'soporte@winrecycle.cl';
    
    // Usamos la API Clipboard moderna
    navigator.clipboard.writeText(correo).then(() => {
      // Opcional: mostrar un mensaje o feedback
      alert('Correo copiado al portapapeles');
    }).catch(err => {
      // En caso de error
      console.error('Error al copiar al portapapeles: ', err);
    });
  }