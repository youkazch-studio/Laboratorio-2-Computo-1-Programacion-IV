function changeAnimal() {
    const animalDiv = document.getElementById("animal");
    animalDiv.innerHTML = "<h2>Mi animal favorito</h2><p>El gato: curioso, independiente y ágil.</p>";
}

function showFavoriteFood() {
    const foodDiv = document.getElementById("comida");
    foodDiv.innerHTML = "<h2>Comida favorita</h2><p>Pizza, especialmente la de queso con pepperoni.</p>";
}

function showFavoriteMovie() {
    const movieDiv = document.getElementById("pelicula");
    movieDiv.innerHTML = "<h2>Película o serie favorita</h2><p>'Breaking Bad': una obra maestra del drama.</p>";
}

function resetSongText() {
    const songDiv = document.getElementById("cancion");
    songDiv.innerHTML = "<h2>Canciones favoritas</h2><p>Lo-fi beats para estudiar y relajarme.</p>";
}

function highlightPerson() {
    const personDiv = document.getElementById("persona");
    personDiv.style.backgroundColor = "#f0e68c";
    personDiv.innerHTML = "<h2>Persona a quien admiro</h2><p>Elon Musk, por su innovación y visión futurista.</p>";
}

function expandCountry() {
    const countryDiv = document.getElementById("pais");
    countryDiv.style.fontSize = "1.2rem";
    countryDiv.innerHTML = "<h2>País que me gustaría visitar</h2><p>Japón: cultura, tecnología y paisajes asombrosos.</p>";
}

function resetCountry() {
    const countryDiv = document.getElementById("pais");
    countryDiv.style.fontSize = "initial";
    countryDiv.innerHTML = "<h2>País que me gustaría visitar</h2><p>Pasa el cursor aquí para saber cuál es</p>";
}
