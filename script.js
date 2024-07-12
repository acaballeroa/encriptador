document.getElementById('btn-desencriptacion').addEventListener('click', function() {
    let inputText = document.getElementById('texto-entrada').value;

    let decryptedText = decryptText(inputText);
   
    if (inputText=='')
    {
        document.getElementById('texto-salida').style.visibility='hidden';
        document.getElementById('btn-copiar').style.visibility='hidden'
    }
    else{
        document.getElementById('texto-salida').style.visibility='visible';
        document.getElementById('texto-salida').value = decryptedText;
                document.getElementById('btn-copiar').style.visibility='visible'
    }
    document.getElementById('texto-entrada').value="";


    /*
    let decryptedText = decryptText(inputText);
    document.getElementById('texto-salida').value = decryptedText;*/
});

document.getElementById('btn-encriptacion').addEventListener('click', function() {
 
    let inputText = document.getElementById('texto-entrada').value;
   
    if (validarAcento(inputText))
    {
        resultado = confirm("La cadena contiene acento(s), ¿desea quitarlo(s)?");
        if (resultado == true)
        {
            document.getElementById('texto-entrada').value = quitarAcentos(document.getElementById('texto-entrada').value);
            inputText=document.getElementById('texto-entrada').value
        }
    }

    let encryptedText = encryptText(inputText);
   
    if (inputText=='')
    {
        document.getElementById('texto-salida').style.visibility='hidden';
        document.getElementById('btn-copiar').style.visibility='hidden'
    }
    else{
        document.getElementById('texto-salida').style.visibility='visible';
        document.getElementById('texto-salida').value = encryptedText;
                document.getElementById('btn-copiar').style.visibility='visible'
    }
    document.getElementById('texto-entrada').value="";
});

document.getElementById('btn-copiar').addEventListener('click', function() {
    let outputText = document.getElementById('texto-salida');
    outputText.select();
    document.execCommand('copy');
    document.getElementById('texto-salida').style.visibility='hidden';
    document.getElementById('btn-copiar').style.visibility='hidden'
    alert('Texto copiado al portapapeles');
});

function encryptText(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decryptText(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}


function validarAcento(cadena) {
    const acentos = /[ÁÉÍÓÚÜÑáéíóúüñ]/;
    return acentos.test(cadena);
    
}

function quitarAcentos(cadena){
	const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
	return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();	
}