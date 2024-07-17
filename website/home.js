import { loadPage } from "./scripts.js"

export function initHome() {
    loadDevLogs();
    loadApps();
}

export function loadDevLogs() {
    fetch('dev-logs/dev-log-index.json')
        .then(response => response.json())
        .then(data => {
            let maxIndex = Math.min(5, data.devLogs.length);

            const devLogList = document.querySelector('ul#dev-log-list');
            for (let index = 0; index < maxIndex; index++) {
                let log = data.devLogs[index];

                const listItem = document.createElement('li');

                const link = document.createElement('a');
                link.href = "#";
                link.onclick = () => {
                    loadPage(`./dev-logs/${log.fileName}`)
                }
                link.textContent = log.title;

                const dateSpan = document.createElement('span');
                dateSpan.textContent = ` (${log.date})`;

                listItem.appendChild(link);
                listItem.appendChild(dateSpan);
                devLogList.appendChild(listItem);
            }
        })
        .catch(error => console.error('Error fetching dev logs:', error));
}

function loadApps(){
    fetch('apps/apps-index.json')
    .then(response => response.json())
    .then(data => {
        let maxIndex = Math.min(5, data.apps.length);

        const devLogList = document.querySelector('.featured-items-container');
        for (let index = 0; index < maxIndex; index++) {
            let app = data.apps[index];
            const featuredItemDiv = document.createElement('a');
            featuredItemDiv.href = app.link;
            featuredItemDiv.classList.add('featured-item');
            const imageDiv = document.createElement('img');
            imageDiv.src =  app.img;
            const titleH4 = document.createElement('h4');
            titleH4.textContent = app.title;
        
            // Append the image div and h4 to the outer div
            featuredItemDiv.appendChild(imageDiv);
            featuredItemDiv.appendChild(titleH4);

            devLogList.appendChild(featuredItemDiv);
        }
    })
    .catch(error => console.error('Error fetching dev logs:', error));
}