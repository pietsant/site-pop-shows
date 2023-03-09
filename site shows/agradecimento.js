var nome = window.localStorage.getItem("nome");
var email = window.localStorage.getItem("email");

var agradecimento = document.getElementById("agradecimento");
agradecimento.innerText = "Obrigado por entrar em contato " + nome + "!"