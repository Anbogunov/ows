document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const izbornik = document.getElementById('izbornik');

    hamburger.addEventListener('click', () => {
        izbornik.classList.toggle('show');
    });
});
