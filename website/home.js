import { loadPage } from "./scripts.js"

export function initHome() {
    loadDevLogs();
    loadApps();
}

function loadDevLogs() {
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

            //TODO: figure this out.
            //probably need to add a link to the app page
            // or should we just link to the actualy store page?
            // const link = document.createElement('a');
            // link.href = "#";
            // link.onclick = () => {
            //     loadPage(`./apps/${app.fileName}`)
            // }
            // link.textContent = app.title;

           

            const featuredItemDiv = document.createElement('div');
            featuredItemDiv.classList.add('featured-item');

            // Create the image div
            const imageDiv = document.createElement('div');
            imageDiv.textContent =  "image"; //imageText; //TODO: needs to be the featured image of the app.
        
            // Create the h4 element
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