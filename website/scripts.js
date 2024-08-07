import { initApps } from "./apps.js";
import { initDevLogs } from "./dev-logs.js";
import { initHome } from "./home.js"

export function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;

            //specific page things
            switch (page) {
                case "home.html":
                    initHome();
                    break;
                case "dev-logs.html":
                    initDevLogs();
                    break;
                case "apps.html":
                    initApps();
                    break;

            }
        })
        .catch(error => console.error('Error loading page:', error));
}

export function initalize() {
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

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const overlay = document.getElementById('overlay');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('open');
        overlay.style.display = navLinks.classList.contains('open') ? 'block' : 'none';
    });

    overlay.addEventListener('click', function () {
        navLinks.classList.remove('open');
        overlay.style.display = 'none';
    });

    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            navLinks.classList.remove('open');
            overlay.style.display = 'none';
        });
    });
}
