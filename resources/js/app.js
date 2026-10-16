import './bootstrap';

// Livewire 3 ya incluye Alpine (con el plugin focus); solo lo arrancamos
// nosotros en las paginas sin Livewire para evitar dos instancias.
if (!window.Livewire) {
    Promise.all([import('alpinejs'), import('@alpinejs/focus')]).then(([{ default: Alpine }, { default: focus }]) => {
        window.Alpine = Alpine;

        Alpine.plugin(focus);

        Alpine.start();
    });
}
