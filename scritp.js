function encriptar() {
    const texto = document.getElementById('texto').value;
    if (!validarTexto(texto)) {
        mostrarError('Solo letras minúsculas y sin acentos.');
        return;
    }
    const textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    mostrarResultado(textoEncriptado);
}

function desencriptar() {
    const texto = document.getElementById('texto').value;
    if (!validarTexto(texto)) {
        mostrarError('Solo letras minúsculas y sin acentos.');
        return;
    }
    const textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(resultado) {
    const textoResultado = document.querySelector('.texto1');
    const imagen = document.getElementById('image');
    const parrafo = document.querySelector('.parrafo');
    const btnCopiar = document.querySelector('.btn-copiar');

    textoResultado.textContent = resultado;
    textoResultado.style.display = 'block';
    imagen.style.display = 'none';
    parrafo.style.display = 'none';
    btnCopiar.style.display = 'block';
}

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

function validarTexto(texto) {
    const regex = /^[a-zñ\s]+$/;
    return regex.test(texto);
}

//function mostrarError(mensaje) {
   // const errorDiv = document.querySelector('.error-message');
   // errorDiv.textContent = mensaje;
   // errorDiv.style.display = 'block';
//}
function mostrarError(mensaje) {
    alert(mensaje);
}