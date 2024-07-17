export function initApps(){
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

            featuredItemDiv.appendChild(imageDiv);
            featuredItemDiv.appendChild(titleH4);

            devLogList.appendChild(featuredItemDiv);
        }
    })
    .catch(error => console.error('Error fetching dev logs:', error));
}