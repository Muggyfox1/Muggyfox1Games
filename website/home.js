import {loadPage} from "./scripts.js"

export function initHome(){
    loadDevLogs()
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