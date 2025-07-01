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

document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".reciclaje-checkbox");
  const btnEnviar = document.getElementById("btnEnviar");

  function toggleButton() {
    const isAnyChecked = Array.from(checkboxes).some(cb => cb.checked);

    if (isAnyChecked) {
      btnEnviar.classList.remove("disabled");
      btnEnviar.classList.add("btn-primary");
      btnEnviar.style.pointerEvents = "auto";
      btnEnviar.style.opacity = "1";
    } else {
      btnEnviar.classList.add("disabled");
      btnEnviar.classList.remove("btn-primary");
      btnEnviar.style.pointerEvents = "none";
      btnEnviar.style.opacity = "0.5";
    }
  }

  checkboxes.forEach(cb => cb.addEventListener("change", toggleButton));
  toggleButton();
});

  fetch('json/tips-reciclaje.json')
      .then(response => response.json())
      .then(data => {
        const contenedor = document.getElementById('contenido-reciclaje');
        const reciclaje = data.reciclaje;

        for (const tipo in reciclaje) {
          const titulo = document.createElement('h2');
          titulo.textContent = tipo.charAt(0).toUpperCase() + tipo.slice(1);
          contenedor.appendChild(titulo);

          const lista = document.createElement('ul');
          reciclaje[tipo].forEach(consejo => {
            const item = document.createElement('li');
            item.textContent = consejo;
            lista.appendChild(item);
          });

          contenedor.appendChild(lista);
        }
      })
      .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
      });