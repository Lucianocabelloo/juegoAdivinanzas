document.addEventListener("DOMContentLoaded", function() {
    let numeroMagico = 0;
  
    document.getElementById("btnComenzar").addEventListener("click", function() {
      document.getElementById("juego").style.display = "block";
  
      numeroMagico = Math.floor(Math.random() * 10) + 1;
      console.log(numeroMagico)
  
    });
  
    document.getElementById("btnEnviar").addEventListener("click", function() {

      const numeroUsuario = parseInt(document.getElementById("inputNumero").value);
      if (numeroUsuario > 10) {
        alert("Por favor, ingresa un número menor o igual a 10.");
        return;
      }
  
      if (numeroUsuario === numeroMagico) {
        alert("¡Felicidades! ¡Adivinaste el número!");
        document.getElementById("juego").style.display = "none"; 
      } else {
        const mensaje = (numeroUsuario < numeroMagico) ? "El número es mayor." : "El número es menor.";
        alert(mensaje);
      }
    });
  });
  