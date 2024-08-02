// script.js

// Función para encriptar el texto
function encriptar() {
    const texto = document.getElementById('texto').value;
    const textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    mostrarResultado(textoEncriptado);
}

// Función para desencriptar el texto
function desencriptar() {
    const texto = document.getElementById('texto').value;
    const textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    mostrarResultado(textoDesencriptado);
}

// Función para mostrar el resultado en la interfaz
function mostrarResultado(resultado) {
    const textoResultado = document.querySelector('.texto1');
    const imagen = document.getElementById('image');
    const parrafo = document.querySelector('.parrafo');
    const btnCopiar = document.querySelector('.btn-copiar');

    if (resultado) {
        textoResultado.textContent = resultado;
        textoResultado.style.display = 'block';
        imagen.style.display = 'none';
        parrafo.style.display = 'none';
        btnCopiar.style.display = 'block';
    } else {
        textoResultado.textContent = 'Ningún mensaje fue encontrado';
        textoResultado.style.display = 'block';
        imagen.style.display = 'block';
        parrafo.style.display = 'block';
        btnCopiar.style.display = 'none';
    }
}

// Función para copiar el texto al portapapeles
function copiar() {
    const resultado = document.querySelector('.texto1').textContent;
    if (resultado && resultado !== 'Ningún mensaje fue encontrado') {
        navigator.clipboard.writeText(resultado)
            .then(() => alert('Texto copiado al portapapeles'))
            .catch(err => console.error('Error al copiar el texto: ', err));
    } else {
        alert('No hay texto para copiar');
    }
}
