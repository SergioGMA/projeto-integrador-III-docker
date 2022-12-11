function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function main() {
    const data = fazGet("http://127.0.0.1:8000/people/");
    
    document.getElementById("img2").innerHTML = "<img src = 'http://127.0.0.1:8000/media/408fb9d3-6f59-4ea1-9243-422340a420d9-Imagem_1.jpg'>";
    console.log(data)
    const valores = JSON.parse(data);
    console.log(valores)

    let res = Object.values(valores);
    console.log(res)
    new_array = (res.flat());
    console.log(new_array)

    let position
    for (let i = 0; i < new_array.length; i++) {
        position = new_array[i];
        console.log(i)
        console.log(position)
        if(i === 0) {
            document.getElementById("img2").innerHTML = "<img src = 'http://127.0.0.1:8000/media/408fb9d3-6f59-4ea1-9243-422340a420d9-Imagem_1.jpg'>";
            document.getElementById("p1").innerHTML = position.nome_cadastrador;
            document.getElementById("p2").innerHTML = position.email;
            document.getElementById("p3").innerHTML = position.telefone;
            document.getElementById("p4").innerHTML = position.cidade;
            document.getElementById("p5").innerHTML = position.nome_desaparecido;
            document.getElementById("p6").innerHTML = position.sexo;
            document.getElementById("p7").innerHTML = position.data_nascimento
            document.getElementById("p8").innerHTML = position.visto_ultima_vez
            document.getElementById("p9").innerHTML = position.caracteristica_fisica

        
        }
        if(i === 1) {
            document.getElementById("img1").innerHTML = "<img src = 'http://127.0.0.1:8000/media/911a2130-e751-49bb-a7b0-e754639344a2-Imagem_2.jpg'>";
            document.getElementById("p10").innerHTML = position.nome_cadastrador;
            document.getElementById("p11").innerHTML = position.email;
            document.getElementById("p12").innerHTML = position.telefone;
            document.getElementById("p13").innerHTML = position.cidade;
            document.getElementById("p14").innerHTML = position.nome_desaparecido;
            document.getElementById("p15").innerHTML = position.sexo;
            document.getElementById("p16").innerHTML = position.data_nascimento
            document.getElementById("p17").innerHTML = position.visto_ultima_vez
            document.getElementById("p18").innerHTML = position.caracteristica_fisica
        }
        
    }
}
main()