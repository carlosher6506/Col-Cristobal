// Contenido de upload.js
window.onload = function() {
    if (mensaje) {
        // Suponiendo que tienes funciones para mostrar el modal
        showModal(mensaje);
    }
};

function showModal(mensaje) {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var modalMessage = document.getElementById("modalMessage");

    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    modalMessage.innerText = mensaje;
    modal.style.display = "block";
}


