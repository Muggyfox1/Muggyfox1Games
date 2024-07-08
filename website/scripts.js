let isNavOpen = false;

document.addEventListener('DOMContentLoaded', () => {
    loadPage('home.html');
});

document.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


document.getElementById('hamburger').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    isNavOpen = !isNavOpen;
    navLinks.classList.toggle('open');
});

function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
            if (page === 'games.html') {
                loadGames();
            }
        })
        .catch(error => console.error('Error loading page:', error));
}

function loadGames() {
    const games = [
        { title: 'Game 1', description: 'An exciting adventure game.' },
        { title: 'Game 2', description: 'A challenging puzzle game.' },
        { title: 'Game 3', description: 'A fast-paced action game.' }
    ];

    const gameList = document.querySelector('.game-list');
    games.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.className = 'game-item';
        gameItem.innerHTML = `<h3>${game.title}</h3><p>${game.description}</p>`;
        gameList.appendChild(gameItem);
    });
}
