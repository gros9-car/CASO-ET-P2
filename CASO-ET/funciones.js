<script>
$(document).ready(function() {
  $('#miFormulario').submit(function(event) {
    var nombre = $('#nombre').val();
    var contraseña = $('#contraseña').val();
    var email = $('#email').val();
    var descripcion = $('#descripcion').val();
    if (nombre.trim() == '') {
      alert('Por favor, ingrese su nombre.');
      event.preventDefault();
    }
    if (contraseña.trim() == '') {
        alert('Por favor, ingrese una contraseña.');
        event.preventDefault();
      }
    if (email.trim() == '') {
      alert('Por favor, ingrese su email.');
      event.preventDefault();
    }
    if (descripcion.trim() == '') {
      alert('Por favor, ingrese una descripcion.');
      event.preventDefault();
    }
  });
});
</script>