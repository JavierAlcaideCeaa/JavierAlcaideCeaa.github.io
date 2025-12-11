// Pequeño script para mejorar la experiencia: scroll suave en anclas internas
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll para enlaces internos que comienzan con '#'
    document.querySelectorAll('a[href^="#"]').forEach(function(link) {
        // Ignorar enlaces que sean sólo '#'
        if (link.getAttribute('href') === '#') return;
        // Si el enlace apunta a otra página (contiene '//' o 'http'), se deja como está
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            link.addEventListener('click', function(e) {
                // Si es un enlace externo con target _blank no hacemos nada aquí
                const targetId = href.slice(1);
                const targetEl = document.getElementById(targetId);
                if (targetEl) {
                    e.preventDefault();
                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // Actualizar el hash sin saltos instantáneos
                    history.pushState(null, '', href);
                }
            });
        }
    });
});
