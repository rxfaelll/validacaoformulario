var enviarBtn = document.querySelector("#submit");

enviarBtn.addEventListener("click", function(){
    validaFormulario();
});

function validaFormulario(){
    var formulario = document.querySelector("form");
    var ul = document.querySelector("#mensagemErro");
    var nomeErro = document.createElement("li");
    var emailErro = document.createElement("li");
    var idadeErro = document.createElement("li");
    var estadoErro = document.createElement("li");
    
    if(nome.value == "" || email.value == "" || idade.value == "" || estado.value == ""){
        ul.innerHTML = "";

        if(nome.value == ""){        
            ul.appendChild(nomeErro).textContent = "Nome inválido";
        }

        if(email.value == ""){
            ul.appendChild(emailErro).textContent = "Email inválido";
        }

        if(idade.value == ""){
            ul.appendChild(idadeErro).textContent = "Idade inválida";
        }

        if(estado.value == ""){
            ul.appendChild(estadoErro).textContent = "Estado inválido";
        }
    }else{
        criaUsuario()
        ul.innerHTML = "";
        formulario.reset();
    }
}

function criaUsuario(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var idade = document.getElementById("idade").value;
    var estado = document.getElementById("estado").value;
    var infoColetada = [nome, email, idade, estado];
    var table = document.querySelector("#table");
    var usuario = document.createElement("tr");

    usuario.classList.add("pessoa");
    
    table.appendChild(usuario);

    for(i=0; i<4; i++){
        var usuarioInfo = document.createElement("td");
        usuario.appendChild(usuarioInfo).textContent = infoColetada[i];
    }
}

table.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("pessoa-fade-out");

    setTimeout(() => {
        event.target.parentNode.remove();    
    }, 500);    
})