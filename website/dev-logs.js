export function initDevLogs(){
    fetch('dev-logs/dev-log-index.json')
    .then(response => response.json())
    .then(data => {
        const devLogList = document.querySelector('ul#dev-log-list');
        for (let log of data.devLogs) {
            const listItem = document.createElement('li');

            const link = document.createElement('a');
            link.href = "#";
            link.onclick = () => {
                loadPage(`./apps/${log.fileName}`)
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