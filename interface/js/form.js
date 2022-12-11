function fazPost(url, body) {
    //console.log(url)
    //console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}

var url = ""
document.querySelector('form').onchange = e => {
    console.log("passei aqui")
    const file = e.target.files[0]; // this Object holds a reference to the file on disk
    const url = URL.createObjectURL(file); // this points to the File object we just created
    document.querySelector('img').src = url;
    console.log(url)
};

function cadastraUsuario() {
    event.preventDefault()
    //console.log("entrei aqui")
    let url = "http://127.0.0.1:8000/people/"
    let nomeCadastrador = document.getElementById("nomeCadastrador").value
    let email = document.getElementById("email").value
    let telefone = document.getElementById("telefone").value
    let cidade = document.getElementById("cidade").value
    let nomeDesaparecido = document.getElementById("nomeDesaparecido").value
    let sexo = document.getElementById("sexo").value
    let dataNascimento = document.getElementById("dataNascimento").value
    let vistoUltimo = document.getElementById("vistoUltimo").value
    let CaracFisica = document.getElementById("CaracFisica").value
    

    body = {
        "nome_cadastrador": nomeCadastrador,
        "email": email,
        "telefone": telefone,
        "cidade": cidade,
        "nome_desaparecido": nomeDesaparecido,
        "sexo": sexo,
        "data_nascimento": dataNascimento,
        "visto_ultima_vez": vistoUltimo,
        "caracteristica_fisica": CaracFisica,
        "image": url
    }

    fazPost(url, body)
}


/*
$('.btn').on("click", function(){
    console.log('Entrei aqui')
    if( ($(".form-control").val()).length > 0){
    
        $.ajax({
            type: "POST",
            async: true, 
            url: 'http://127.0.0.1:8000/people/',
            data: {"nome_cadastrador": $("#nomeCadastrador").val()},
            data: {"email": $("#email").val()},
            data: {"telefone": $("#telefone").val()},
            data: {"cidade": $("#cidade").val()},
            data: {"nome_desaparecido": $("#nomeDesaparecido").val()},
            data: {"sexo": $("#sexo").val()},
            data: {"data_nascimento": $("#dataNascimrnto").val()},
            data: {"visto_ultima_vez": $("#vistoUltimo").val()},
            data: {"caracteristica_fisica": $("#CaracFisica").val()},
            data: {"image": $("#image").val()},
            
            dataType: 'json',
            
            beforeSend:function(jqXHR){
                $(".spinner").addClass('model');
                $(".bt").prop('disabled', true);
            },
            success: function(res){
                if(res == true)
                    window.location.href = `http://localhost/index.html`;
                else
                    alert("Error")
            }
          });
    
    }
})
*/