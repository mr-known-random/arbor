let links = "";
fetch('./assets/links.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Convert object → array
        const linkArray = Object.values(data);
        renderLinks(linkArray);
    })
    .catch(error => {
        console.error('Error fetching the JSON file:', error);
    });

function renderLinks(links) {
    const flexBox = document.querySelector(".js-flex-box");

    links.forEach(item => {
        const flexItem = document.createElement("div");
        flexItem.classList.add("js-flex-item");

        const img = document.createElement("img");
        img.classList.add("js-icon");
        img.src = item.icon;

        const link = document.createElement("a");
        link.classList.add("js-link");
        link.href = item.link;
        link.textContent = item.text;
        link.target = "_blank";

        flexItem.appendChild(img);
        flexItem.appendChild(link);
        flexBox.appendChild(flexItem);
    });
}
