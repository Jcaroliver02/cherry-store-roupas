function validar() {
    var nome = document.forms["formulario"]["nome"].value;
    console.log(nome);
    var email = document.forms["formulario"]["email"].value;
    console.log(email);
    var motivo = document.forms["formulario"]["motivo"].value;
    console.log(motivo);
    var mensagem = document.forms["formulario"]["mensagem"].value;
    console.log(motivo);
    if (nome == "") {
        alert("Nome deve ser preenchido!");
    
    }
    if (email == "") {
        alert("Email deve ser preenchido!");
       
    }
    if (motivo == "") {
        alert("Motivo deve ser preenchido!");
       
    }

    if (mensagem == "") {
        alert("Mensagem deve ser preenchido!");
       
    }
    
   // var numero2 = parseInt(document.getElementById("numero2").value);
    //console.log(numero2);
    
    //var resultado = document.getElementById("resultado").value = numero1 * numero2;
   // console.log(resultado);
}

