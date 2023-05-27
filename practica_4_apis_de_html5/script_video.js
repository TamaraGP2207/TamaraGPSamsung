

if (window.File && window.FileReader && window.FileList) {
  console.log('Todas las APIs soportadas');
} else {
  alert('La API de FILE no es soportada en este navegador.');
}
function reproducirVideo(evt) {
  var miArchivo = evt.target.files[0];
      if (!miArchivo.type.match('video.*')) {
          alert ('Por favor, selecciona un archivo de vídeo válido.');
      } else {
      var reader = new FileReader();
      reader.onprogress = alert('El vídeo se está cargando...');
      reader.onloadend = (function () {
          return function (e) {
              var zonaVideo = document.createElement('div'); //Creamos un elemento 'div'.
              document.getElementById('zonaVideo').innerHTML = ['<video id="miVideo" width="640px" src="', e.target.result, 
              '" title="', '"/>'].join(''),'<br>';
              document.getElementById('zonaVideo').insertBefore(zonaVideo, null);
          };
      })(miArchivo);

      reader.readAsDataURL(miArchivo);

      document.getElementById('botonera').className= "visible";
  }
}


