function Cadastrar(){
    var nome = document.getElementById("user").value;
    var senha = parseInt(document.getElementById("senha").value);
    if(senha != '1234'){
        alert("Senha incorreta")
        alert("Tente 1234")
    }
    else{
        window.location.href = 'index.html'
        alert("Olá " + nome)
    }
   
}