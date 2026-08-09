window.addEventListener('DOMContentLoaded', () => {
    const neonScene = document.getElementById('neon-scene');
    const roseScene = document.getElementById('rose-scene');

    setTimeout(() => {
        neonScene.classList.remove('active');
        neonScene.classList.add('hidden');

        roseScene.classList.remove('hidden');
        roseScene.classList.add('active');
    }, 3000); 
});
