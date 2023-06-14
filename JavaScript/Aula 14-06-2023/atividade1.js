function mostrarTexto(id) {
    const texto = document.getElementById(id);
    if (texto.style.display === "none") {
      texto.style.display = "block";
    } else {
      texto.style.display = "none";
    }
  }