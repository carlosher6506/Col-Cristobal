// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Abrir el modal al hacer clic en la flecha
document.querySelectorAll('.read-more').forEach(function(arrow) {
    arrow.addEventListener('click', function() {
        var id = this.getAttribute('data-id');
        var photoDiv = document.querySelector('.photo[data-id="' + id + '"]');
        var image = photoDiv.querySelector('img');
        var title = photoDiv.querySelector('h3');
        var description = photoDiv.querySelector('.hidden-description');

        document.getElementById('modalImage').src = image.src;
        document.getElementById('modalTitle').innerText = title.innerText;
        document.getElementById('modalDescription').innerText = description.textContent;

        modal.style.display = "block";
        });
    });

// Cuando el usuario hace clic en <span> (x), cierra el modal
span.addEventListener('click', function() {
    modal.style.display = "none";
});

// Cuando el usuario hace clic en cualquier lugar fuera del modal, ciérralo
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});