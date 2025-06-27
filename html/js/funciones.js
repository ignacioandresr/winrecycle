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