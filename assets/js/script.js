let nome = window.document.getElementById('nome')
let email = document.querySelector("#email") //selecionando por seletor do css # por ser id
let assunto = document.querySelector("#assunto")
let nomeok = false
let emailok = false
let assuntook = false
let menu = document.querySelector(".navbar")

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length<3){
        txtNome.style.color ="red"
        txtNome.style.fontSize="12px"
        txtNome.style.fontFamily="Helvetica"
        txtNome.style.marginLeft="13px"
        txtNome.innerHTML ='Nome Inválido'
        nomeok=false
    }
    else{
        txtNome.innerHTML = ''
        nomeok=true
    }
    
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.style.color ="red"
        txtEmail.style.fontSize="12px"
        txtEmail.style.fontFamily="Helvetica"
        txtEmail.style.marginLeft="13px"
        txtEmail.innerHTML ='E-mail Inválido'
        emailok=false
    }
    else{
        txtEmail.innerHTML =''
        emailok=true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length>500){
        txtAssunto.style.color ="red"
        txtAssunto.style.fontSize="12px"
        txtAssunto.style.fontFamily="Helvetica"
        txtAssunto.style.marginLeft="13px"
        txtAssunto.innerHTML='Mensagens válidas até 500 caracteres'
        assuntook=false
    }
    else{
        txtAssunto.innerHTML =''
        assuntook=true
    }
}

document.querySelector("#btn-enviar").addEventListener("click",function(){
    if(nomeok == true && emailok == true && assuntook==true){
        alert("Mensagem enviada com sucesso")
    }
    else{
        alert("AVISO: PREENCHA O FORMULÁRIO CORRETAMENTE")
    }
})


function esconderMenu(){
    menu.style.display='none'
}

function mostrarMenu(){
    menu.style.display='flex'
}