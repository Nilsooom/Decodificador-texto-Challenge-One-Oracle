function encriptador(){

let texto = document.getElementById("texto").value;

const temLetraMaiuscula = /[A-Z]/.test(texto)
const temCaracteresEspeciais = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(texto)
const temLetraAcentuada = /[áàâãéèêíìîóòôõúùû]/i.test(texto);

if(temLetraMaiuscula || temCaracteresEspeciais || temLetraAcentuada){
   alert("Por favor, digite apenas letras minúsculas sem acento e sem caracteres especiais !")
    return
}

    const textoArray = texto.split("");
    const textoEncriptado = textoArray.map((letra) => {
        if(letra === "e"){
            return "enter"
        } else if(letra === "i"){
            return "imes"
        } else if(letra === "a"){
            return "ai"
        } else if(letra === "o"){
            return "ober"
        } else if(letra === "u"){
            return "ufat"
        } else {
            return letra
        }
    })
    const mensagemEncriptada = document.getElementById("mensagemEncriptada")
    mensagemEncriptada.value = textoEncriptado.join("")

}


function descriptador(){
    let textoCriptografado = document.getElementById("textoEncriptado").value;
    let descript = textoCriptografado

descript = descript.replace(/ai/g, "a")
descript = descript.replace(/enter/g, "e")
descript = descript.replace(/imes/g, "i")
descript = descript.replace(/ober/g, "o")
descript = descript.replace(/ufat/g, "u")

const mensagemDescriptografada = document.getElementById("textoDescriptografado")
mensagemDescriptografada.value = descript

  alert("Pressione Ctrl + R para limpar todos os campos de texto")
}