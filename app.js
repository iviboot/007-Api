//iniciar mapa desplegar y conectar api.


function iniciarMap(){
    var coord = {lat:19.3255565 ,lng:-99.1729876};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 10,
        center: coord
    });

    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}

// Función para mostrar u ocultar el menú desplegable
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".dropbtn").addEventListener("click", function() {
      var dropdownContent = this.nextElementSibling;
      dropdownContent.classList.toggle("show");
    });
  });
  
  // Cerrar el menú desplegable si el usuario hace clic fuera de él
  window.addEventListener("click", function(event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  });
  