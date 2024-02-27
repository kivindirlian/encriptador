let btncopiar = document.querySelector(".btncopiar");
let texto = document.querySelector('.texto');
function encriptar() {
    let textEncriptar = document.getElementById('textoEncriptador').value;
    let textEncriptado = document.querySelector('.textoEncriptado');
    let texto1 = document.querySelector('.resultadoEncriptamiento');
    let displayNone = document.querySelector('.contenido3');

    if (textEncriptar != 0) {
        textEncriptado.innerHTML = (textEncriptar.replace(/e/, "enter")
            .replace(/i/gi, 'imes')
            .replace(/a/gi, 'ai')
            .replace(/u/gi, 'ufat')
            .replace(/e/gi, 'enter')
            .replace(/o/gi, 'ober')
        );

        displayNone.style.display = 'none';
        document.getElementsByTagName("textarea")[0].value = "";
        texto1.classList.add("separacion");
        btncopiar.classList.add("btncopiartrue");
    } else {
        textEncriptado.innerHTML = ('oh no, no te olvides que tienes que escribir el texto a encriptar, porfavor vuelve e intentalo de nuevo.');
        displayNone.style.display = 'none';
        textEncriptado.classList.add("alert");
        imgAlert = document.querySelector('.imgAlert');
        imgAlert.style.display = 'flex';
        
    } 
}

function copiarTexto() {
    let textEncriptado = document.querySelector('.textoEncriptado');
    let btncopiar = document.querySelector(".btncopiar");

    navigator.clipboard.writeText(textEncriptado.textContent);
    btncopiar.textContent = 'copiado';
}

function desencriptar() {
    let textEncriptar = document.getElementById('textoEncriptador').value;
    let textEncriptado = document.querySelector('.textoEncriptado');
    let texto1 = document.querySelector('.resultadoEncriptamiento');
    let displayNone = document.querySelector('.contenido3');
    if (textEncriptar != 0) {
        textEncriptado.innerHTML = (textEncriptar.replace(/e/, "enter")
            .replace(/imes/gi, 'i')
            .replace(/ai/gi, 'a')
            .replace(/ufat/gi, 'u')
            .replace(/enter/gi, 'e')
            .replace(/ober/gi, 'o')
        );

        displayNone.style.display = 'none';
        document.getElementsByTagName("textarea")[0].value = "";
        texto1.classList.add("separacion");
        btncopiar.classList.add("btncopiartrue");
    } else {
        textEncriptado.innerHTML = ('oh no, no te olvides que tienes que escribir el texto a encriptar, porfavor vuelve e intentalo de nuevo.');
        displayNone.style.display = 'none';
        textEncriptado.classList.add("alert");
        imgAlert = document.querySelector('.imgAlert');
        imgAlert.style.display = 'flex';
        
    } 
}