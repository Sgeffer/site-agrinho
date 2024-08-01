document.getElementById('enter-btn').addEventListener('click', function() {
    document.getElementById('overlay').style.opacity = '0';
    setTimeout(function() {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('main-content').style.opacity = '1';
    }, 1000); // Sincroniza com a duração da transição no CSS
});
