$(document).ready(function() {
    $('#fullPostModal').on('shown.bs.modal', function () {
        // Asegurar que el contenido se ajuste después de mostrar
        $(this).find('.modal-body').css('overflow-y', 'auto');
    });
});

function showFullPost(postId) {
    const post = document.getElementById(postId);
    const excerpt = post.querySelector('.post-excerpt');
    const fullText = post.querySelector('.post-full-text');
    const mediaElements = post.querySelectorAll('.post-content img, .post-content video');
    const header = post.querySelector('.post-header').cloneNode(true); // Clonar para evitar problemas de DOM
    
    const fullContent = fullText ? fullText.textContent.trim() : excerpt.textContent.trim();
    
    let mediaHtml = '';
    mediaElements.forEach(function(mediaElement) {
        const clonedMedia = mediaElement.cloneNode(true);
        clonedMedia.classList.add('img-fluid', 'rounded'); // Asegurar clases Bootstrap
        mediaHtml += clonedMedia.outerHTML;
    });
    
    // Modal title empty
    document.getElementById('fullPostModalTitle').textContent = '';
    
    document.getElementById('modalBody').innerHTML = `
        <div class="post-header d-flex align-items-center mb-3">
            ${header.innerHTML}
        </div>
        <div class="post-content">
            <p class="mb-3">${fullContent}</p>
            ${mediaHtml}
        </div>
    `;
    
    $('#fullPostModal').modal('show');
}

function sharePost(text) {
    if (navigator.share) {
        navigator.share({
            title: 'Noticia del Colegio Cristóbal Colón',
            text: text,
            url: window.location.href
        }).catch(console.error);
    } else {
        // Fallback: Open share options
        const shareText = encodeURIComponent(text + '\n' + window.location.href);
        const options = [
            { name: 'WhatsApp', url: `https://wa.me/?text=${shareText}` },
            { name: 'Messenger', url: `fb-messenger://share?link=${encodeURIComponent(window.location.href)}&text=${shareText}` },
            { name: 'Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}` },
            { name: 'Twitter', url: `https://twitter.com/intent/tweet?text=${shareText}` }
        ];
        
        let shareOptions = 'Selecciona una opción para compartir:\n';
        options.forEach(opt => shareOptions += `${opt.name}: ${opt.url}\n`);
        prompt(shareOptions); // Simple fallback; replace with modal if needed
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí puedes agregar lógica para enviar el form (ej: EmailJS o AJAX)
        alert('¡Mensaje enviado! Te contactaremos pronto.');
        form.reset();
    });
});