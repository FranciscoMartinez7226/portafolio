
//e --> enter
//o --> ober
//i --> imes
//a --> ai
//u --> ufat

function encriptar() {
      var palabra = document.getElementById("frase").value.toLowerCase();
      var encriptado = palabra.replace(/e/g,'enter');
      var encriptado = encriptado.replace(/o/g,'ober');
      var encriptado = encriptado.replace(/i/g,'imes');
      var encriptado = encriptado.replace(/a/g,'ai');
      var encriptado = encriptado.replace(/u/g,'ufat');
     
      document.getElementById("texto").innerHTML = encriptado; 
      
}
function desencriptar() {
      var palabra = document.getElementById("frase").value.toLowerCase();
      var encriptado = palabra.replace(/enter/g,'e');
      var encriptado = encriptado.replace(/ober/g,'o');
      var encriptado = encriptado.replace(/imes/g,'i');
      var encriptado = encriptado.replace(/ai/g,'a');
      var encriptado = encriptado.replace(/ufat/g,'u');

      document.getElementById("texto").innerHTML = encriptado;

}

 function copiar() {
      var copiado = document.getElementById("texto").innerHTML;
      navigator.clipboard.writeText(copiado);
 }