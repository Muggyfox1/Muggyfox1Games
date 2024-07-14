export function initApps(){
    fetch('apps/apps-index.json')
    .then(response => response.json())
    .then(data => {
        const devLogList = document.querySelector('.featured-items-container');
        for (let app of data.apps) {
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