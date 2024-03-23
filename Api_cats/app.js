

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



  const URL = 'https://api.thecatapi.com/v1/images/search?limit=10';


fetch(URL)
   .then(res => res.json())
   .then(data =>{
    const img = document.getElementById('img2');
    img.src = data[0].url;
   });










