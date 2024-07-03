// Nome, email, idade, cidade, foto e senha
let container = document.getElementById('container')
let formRegistro = document.getElementById('formRegistro')
let containerAlunos = document.createElement('div')
containerAlunos.setAttribute('id','container_Alunos')

let tituloDaSecao = document.getElementById("tituloDaSecao");

/*
async function carregarDados() {
    let buscarDados = await fetch('https://raw.githubusercontent.com/GilsonJunio/Alunos-Do-Lets-Code-2024/main/data.json')
    let transportarDados = await buscarDados.json()    
    let guardarDados = transportarDados.alunos
    //console.log(guardarDados)
    localStorage.setItem('usuarios', JSON.stringify(guardarDados))       
}
carregarDados()
*/
let botaoRegistrar = document.getElementById("botao-registro");
if (botaoRegistrar) {
    botaoRegistrar.addEventListener("click", () => {
        localStorage.clear()

        let usuario = document.getElementById("usuario").value;

        let email = document.getElementById("email").value;

        let idade = document.getElementById("idade").value;

        let cidade = document.getElementById("cidade").value;

        let foto = document.getElementById("foto").value;

        let senha = document.getElementById("senha").value;

       // console.log(usuario);
        
        let usuarios = localStorage.getItem("usuarios") || [];
		usuarios.push({ usuario, email, idade, cidade, foto, senha });
        //console.log(usuarios)
        
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        alert ('Usuário Registrado')
        
        container.removeChild(formRegistro)
        tituloDaSecao.innerHTML = "Login"
        
        let areaDeEmail_input = document.createElement('input')
        areaDeEmail_input.setAttribute('name','email')
        areaDeEmail_input.setAttribute('type','email')
        areaDeEmail_input.setAttribute('id','email_login')
        
        let areaDeEmail_label = document.createElement('label')
        areaDeEmail_label.innerHTML = "Email"
        areaDeEmail_label.setAttribute('for','email')
        
        let areaDeSenha_input = document.createElement('input')
        areaDeSenha_input.setAttribute('name','senha')
        areaDeSenha_input.setAttribute('type','password')
        areaDeSenha_input.setAttribute('id','senha_login')
        
        let areaDeSenha_label = document.createElement('label')
        areaDeSenha_label.innerHTML = "Senha"
        areaDeSenha_label.setAttribute('for','senha')

        let botaoLogin = document.createElement('button')
        botaoLogin.setAttribute('type', 'button')
        botaoLogin.setAttribute('id', 'botao_login')
        botaoLogin.innerHTML = "ENTRAR"
        
        container.appendChild(areaDeEmail_label)

        container.appendChild(areaDeEmail_input)

        container.appendChild(areaDeSenha_label)

        container.appendChild(areaDeSenha_input)

        container.appendChild(botaoLogin)
        
        if(botaoLogin){ 
            botaoLogin.addEventListener('click', () => {
                
                let emailLogin = document.getElementById("email_login").value
                let senhaLogin = document.getElementById("senha_login").value
                
                let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
                //usuarios.push(usuariosBase)
                //console.log(usuariosBase)
               // console.log(usuarios)

                let usuario = usuarios.find(usuario => usuario.email === emailLogin)
                console.log(usuario)

                console.log(usuario, emailLogin, senhaLogin, usuario)
                if(usuario){
                    container.removeChild(areaDeEmail_input)
                    container.removeChild(areaDeEmail_label)
                    container.removeChild(areaDeSenha_input)
                    container.removeChild(areaDeSenha_label)
                    container.removeChild(botaoLogin)                    
                    tituloDaSecao.innerHTML = 'Bem Vindo! Conheça nossa turma!'                    

                    async function carregarDados() {
                        let buscarDados = await fetch('https://raw.githubusercontent.com/GilsonJunio/Alunos-Do-Lets-Code-2024/main/data.json')
                        let transportarDados = await buscarDados.json()    
                        let guardarDados = transportarDados.alunos
                        //console.log(guardarDados)
                        localStorage.setItem('usuarios', JSON.stringify(guardarDados))
                        container.appendChild(containerAlunos)

                        guardarDados.map((x)=>{
                            let imagem = document.createElement('img')
                            imagem.setAttribute('src', x.foto)
                            imagem.setAttribute('id', 'pp')
                            imagem.setAttribute('width', '100px')
                            containerAlunos.appendChild(imagem)

                            let descricao = document.createElement('p')
                            descricao.setAttribute('id', 'descricao')
                            descricao.innerHTML = `Nome: ${x.usuario} \n Idade:${idade} \n Cidade: ${cidade} \n Email:${email} \n`
                            containerAlunos.appendChild(descricao)
                        })



                    }
                    carregarDados()



                    alert('funcionou') 
                }
                else{
                    alert('nao funcionou')
                }

            })
}
        
        
    });
}
/*
let botaoLogin = document.getElementById('botao_login')
if(botaoLogin){ 
        botaoLogin.addEventListener('click', () => {
                
        container.removeChild(formRegistro)
        tituloDaSecao.innerHTML = "Login"
        
        let areaDeEmail_input = document.createElement('input')
        areaDeEmail_input.setAttribute('name','email')
        areaDeEmail_input.setAttribute('type','email')
        areaDeEmail_input.setAttribute('id','email_login')
        
        let areaDeEmail_label = document.createElement('label')
        areaDeEmail_label.innerHTML = "Email"
        areaDeEmail_label.setAttribute('for','email')
        
        let areaDeSenha_input = document.createElement('input')
        areaDeSenha_input.setAttribute('name','senha')
        areaDeSenha_input.setAttribute('type','password')
        areaDeSenha_input.setAttribute('id','senha_login')
        
        let areaDeSenha_label = document.createElement('label')
        areaDeSenha_label.innerHTML = "Senha"
        areaDeSenha_label.setAttribute('for','senha')

        let botaoLogin = document.createElement('button')
        botaoLogin.setAttribute('type', 'button')
        botaoLogin.setAttribute('id', 'botao_login')
        botaoLogin.innerHTML = "ENTRAR"
        
        container.appendChild(areaDeEmail_label)

        container.appendChild(areaDeEmail_input)

        container.appendChild(areaDeSenha_label)

        container.appendChild(areaDeSenha_input)

        container.appendChild(botaoLogin)
        let emailLogin = document.getElementById("email_login").value
        let senhaLogin = document.getElementById("senha_login").value

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        //usuarios.push(usuariosBase)
        //console.log(usuariosBase)
        // console.log(usuarios)

        let usuario = usuarios.find(usuario => usuario.email === emailLogin)
        // console.log(usuario)

        console.log(usuario, emailLogin, senhaLogin, usuario)
        if(usuario){
           tituloDaSecao.innerHTML = 'Bem Vindo!'
           alert('funcionou') 
        }
        else{
            alert('nao funcionou')
        }

        })
        }
//let botaoLogin = document.getElementById("botao_login");




/*
async function carregarDados() {
    let buscarDados = await fetch('https://raw.githubusercontent.com/GilsonJunio/Alunos-Do-Lets-Code-2024/main/data.json')
    let transportarDados = await buscarDados.json()    
    let guardarDados = transportarDados.alunos
    console.log(guardarDados)
	/*
	guardarDados.map((x) =>{
		console.log(x)
		

		});
    *//*
	let usuarioLogado = guardarDados.find((usuarioProcurar) => guardarDados.usuario === "Gilson Junio")
	console.log(usuarioLogado)
	
	let tituloDoPerfil = document.createElement('h2');
	tituloDoPerfil.textContent = usuarioLogado
	container.appendChild(tituloDoPerfil)
	console.log()
    
    let imagem = document.createElement('img')
	//imagem.setAttribute('src', guardarDados)
	//container.appendChild()
	
	let informações = document.createElement('p')
	//descricao.
}
carregarDados()
*/








