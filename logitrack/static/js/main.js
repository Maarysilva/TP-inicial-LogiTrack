document.addEventListener('DOMContentLoaded', () => {
    const flashes = document.querySelectorAll('.flash');
    flashes.forEach(flash => {
        setTimeout(() => {
            flash.style.opacity = '0';
            flash.style.transform = 'translateX(100%)';
            flash.style.transition = 'all .3s ease';
            setTimeout(() => flash.remove(), 300);
        }, 4000);
    });

    const searchInput = document.getElementById('search-input');
    const searchForm = document.getElementById('search-form');
    if (searchInput && searchForm) {
        let timer;
        searchInput.addEventListener('input', () => {
            clearTimeout(timer);
            timer = setTimeout(() => searchForm.submit(), 300);
        });
    }

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const currentTheme = localStorage.getItem('theme') || 'dark';
        if (currentTheme === 'light') {
            document.body.classList.add('light-theme');
            themeToggle.textContent = '🌙';
        } else {
            themeToggle.textContent = '☀️';
        }

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            const isLight = document.body.classList.contains('light-theme');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            themeToggle.textContent = isLight ? '🌙' : '☀️';
        });
    }

    // Transportista field toggle
    const nuevoEstadoSelect = document.getElementById('nuevo_estado');
    const transportistaGroup = document.getElementById('transportista-group');
    const transportistaSelect = document.getElementById('transportista');
    
    if (nuevoEstadoSelect && transportistaGroup) {
        nuevoEstadoSelect.addEventListener('change', () => {
            if (nuevoEstadoSelect.value === 'En tránsito') {
                transportistaGroup.style.display = 'block';
                transportistaSelect.required = true;
            } else {
                transportistaGroup.style.display = 'none';
                transportistaSelect.required = false;
                transportistaSelect.value = '';
            }
        });
    }
});
