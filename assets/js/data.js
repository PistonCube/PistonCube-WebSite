function loadJSON(callback) {
    fetch('https://api.2b2t.net.ar/data')
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error al cargar el JSON:', error));
}

loadJSON(function (data) {
    document.getElementById('years').textContent = data.years;
    document.getElementById('size').textContent = data.size;
    document.getElementById('players').textContent = data.players;
});
