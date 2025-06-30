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
    
    navigator.clipboard.writeText(correo).then(() => {
      alert('Correo copiado al portapapeles');
    }).catch(err => {
      console.error('Error al copiar al portapapeles: ', err);
    });
  }

  function checkEmail() {
    const emailInput = document.getElementById("exampleFormControlInput1");
    const alert = document.getElementById("emailAlert");

    if (emailInput.value !== "" && !emailInput.value.includes("@")) {
      alert.classList.remove("d-none");
    } else {
      alert.classList.add("d-none");
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll(".reciclaje-checkbox");
    const btnEnviar = document.getElementById("btnEnviar");

    function toggleButton() {
      const isAnyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
      
      if (isAnyChecked) {
        btnEnviar.classList.remove("disabled");
        btnEnviar.removeAttribute("disabled");
      } else {
        btnEnviar.classList.add("disabled");
        btnEnviar.setAttribute("disabled", true);
      }
    }

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener("change", toggleButton);
    });

    toggleButton();
  });