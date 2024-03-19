let btncopiar = document.querySelector(".btncopiar");
let texto = document.querySelector('.texto');
let btnencriptador = document.querySelector('.btnencriptador');



// textEncriptar((input) => {
//     input.addEventListener('keyup', () =>{
//         console.log('tecla lebantada')
//     });
// });


function encriptar() {
    let textEncriptado = document.querySelector('.textoEncriptado');
    let texto1 = document.querySelector('.resultadoEncriptamiento');
    let displayNone = document.querySelector('.contenido3');
    let textEncriptar = document.getElementById('textoEncriptador').value;


    function esMinuscula(letra) {
        return letra === letra.toLowerCase();
    }
    for (var index = 0; index < textEncriptar.length; index++) {
        var letraActual = textEncriptar.charAt(index);
        let validar = new RegExp("[^a-z\#\&]+")
        if (esMinuscula(letraActual)) {
            if (textEncriptar != 0 || textEncriptar.value == validar) {
               
                    textEncriptado.innerHTML = (textEncriptar.replace(/e/, "enter")
                        .replace(/i/gi, 'imes')
                        .replace(/a/gi, 'ai')
                        .replace(/u/gi, 'ufat')
                        .replace(/o/gi, 'ober')
                    );



                    displayNone.style.display = 'none';
                    document.getElementsByTagName("textarea")[0].value = "";
                    texto1.classList.add("separacion");
                    btncopiar.classList.add("btncopiartrue");
                    document.querySelector(".imgError").style.display = 'none'

            }else {


                textEncriptado.innerHTML = ("debes escribir un mensaje para poder encriptar");
                displayNone.style.display = 'none';
                document.getElementsByTagName("textarea")[0].value = "";
                texto1.classList.add("error");
                texto1.classList.remove("separacion");
                texto1.style.margin = '20px 0';
                document.querySelector(".imgError").style.display = 'block'
                btncopiar.style.display = 'none';

            }
        } else {
            textEncriptado.innerHTML = ("debe ser minuscula y no tener caracteres especiales");
                displayNone.style.display = 'none';
                document.getElementsByTagName("textarea")[0].value = "";
                texto1.classList.add("error");
                texto1.classList.remove("separacion");
                texto1.style.margin = '20px 0';
                document.querySelector(".imgError").style.display = 'block'
                btncopiar.style.display = 'none';
        }
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
        textEncriptado.innerHTML = (textEncriptar
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
        textEncriptado.innerHTML = ("debes escribir un mensaje para poder desencriptar");
        displayNone.style.display = 'none';
        document.getElementsByTagName("textarea")[0].value = "";
        texto1.classList.add("error");
        texto1.classList.remove("separacion");
        texto1.style.margin = '20px 0';
        document.querySelector(".imgError").style.display = 'block'
        btncopiar.style.display = 'none';

    }

}

