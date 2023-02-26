
document.getElementById('boton_dire').addEventListener ("click", 
    function myFunction() {
        var x = document.getElementById('dire');
        if (x.style.display === 'none') {
          x.style.display = 'block';
        } else {
          x.style.display = 'none';
        }
      }
 );
 
 document.getElementById('boton_tele').addEventListener ("click", function myFunction() {
    var x = document.getElementById('tele');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }
);


 document.getElementById('boton_correo').addEventListener ("click",function myFunction() {
    var x = document.getElementById('correo');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }
);
