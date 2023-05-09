var miBoton = document.getElementById('miBoton');
var miModal = document.getElementById('miModal');
miBoton.addEventListener('click', function() {
  miModal.style.display = 'block';
});

var miBoton = document.getElementById('miBoton');
var miModal = document.getElementById('miModal');
miBoton.addEventListener('click', function() {
  miModal.style.display = 'block';
  var cerrarBoton = miModal.querySelector('.modal-footer button');
  cerrarBoton.addEventListener('click', function() {
    miModal.style.display = 'none';
  });
});
