// Nome, email, idade, cidade, foto e senha

let botaoRegistrar = document.getElementById("botao-registro");

if (botaoRegistrar) {
    botaoRegistrar.addEventListener("click", () => {
        let usuario = document.getElementById("usuario").value;

        let email = document.getElementById("email").value;

        let idade = document.getElementById("idade").value;

        let cidade = document.getElementById("cidade").value;

        let foto = document.getElementById("foto").value;

        let senha = document.getElementById("senha").value;

        console.log(usuario);
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        usuarios.push({ usuario, email, idade, cidade, foto, senha });
        console.log(usuarios);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        window.location.href = "../login/index.html"
    });
}
let botaoLogin = document.getElementById("botao_login");
if(botaoLogin){ 
    botaoLogin.addEventListener('click', () => {
        let emailLogin = document.getElementById("email_login").value
        let senhaLogin = document.getElementById("senha_login").value
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        let usuario = usuarios.find(usuario => usuario.email === emailLogin && usuario.senha === senhaLogin)
        console.log(usuarios, emailLogin, senhaLogin, usuario)
        if(usuario){
            window.location.href = "../boas_vindas/index.html"
            
        }
    })
}
