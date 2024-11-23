console.log('\x1b[36m%s\x1b[0m', 'Webseite erstellt von Project 7');

document.addEventListener("DOMContentLoaded", function (event) {

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS('particles-js', 'particles.json', function() {
        console.log('callback - particles.js config loaded');
     });

    /* enable bootstrap tooltips */
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    });  