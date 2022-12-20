/*Las "llaves" de encriptación que utilizaremos son las siguientes:
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/ 


const inputMensaje = document.querySelector("#inputText");
const inputResultado = document.querySelector("#textEdit");

const btnEncriptar = document.querySelector("#btnEncrypt");
const btnDesencriptar = document.querySelector("#btnDecrypt");
const btnCopiar = document.querySelector("#copy");
const textoCopiado = document.querySelector("#textoCopiado");

function encriptar(){
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje
    .replaceAll("e","enter")
    .replaceAll("o","ober")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("u","ufat");

    inputResultado.value = mensajeEncriptado;
    document.getElementById("imgRigth").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
}

function desencriptar(){
    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado
    .replaceAll("enter","e")
    .replaceAll("ober","o")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ufat","u");

    inputResultado.value = mensaje;
    document.getElementById("imgRigth").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
}
function copiar(){
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    textoCopiado.innerHTML = '<p>Copiado al portapapeles</p>';
    setTimeout(()=> textoCopiado.innerHTML = "", 2500)

}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;