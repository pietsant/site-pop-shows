var nome = document.getElementById("nome")

var email = document.getElementById("email")

var btnEnviar = document.getElementById("btn-enviar");

btnEnviar.addEventListener("click", ()=>{
    window.localStorage.setItem("nome", nome.value)
    window.localStorage.setItem("email", email.value)
})