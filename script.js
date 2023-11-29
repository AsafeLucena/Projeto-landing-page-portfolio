function toogleMode() {
    // Obtenha o elemento body
    var body = document.body;

    // Obtenha o elemento checkbox
    var checkbox = document.querySelector('.toogle-input');

    // Verifique se o checkbox está marcado
    if (checkbox.checked) {
      // Adicione a classe light ao body se o checkbox estiver marcado
      body.classList.add('light');
    } else {
      // Remova a classe light do body se o checkbox não estiver marcado
      body.classList.remove('light');
    }
  }
