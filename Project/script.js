document.addEventListener('DOMContentLoaded', function() {
    const toggleMenuBtn = document.getElementById('toggle-menu');
    const leftMenu = document.querySelector('.left-menu');

    toggleMenuBtn.addEventListener('click', function() {
        leftMenu.classList.toggle('collapsed');
        if (leftMenu.classList.contains('collapsed')) {
            toggleMenuBtn.textContent = '☰';
        } else {
            toggleMenuBtn.textContent = 'Menu';
        }
    });

    function resizePage() {
        const width = window.innerWidth;
        let scale = 1;

        if (width >= 992 && width <= 1600) {
            scale = 0.9;
        } else if (width >= 700 && width <= 767) {
            scale = 0.8;
        } else if (width >= 600 && width < 700) {
            scale = 0.75;
        } else if (width <= 600) {
            scale = 0.5;
        }

        document.body.style.transform = `scale(${scale})`;
        document.body.style.transformOrigin = 'top left';
        document.body.style.width = `${100 / scale}%`;
        document.body.style.height = `${100 / scale}%`;
    }

    window.addEventListener('resize', resizePage);
    resizePage(); // Call once on load
});

