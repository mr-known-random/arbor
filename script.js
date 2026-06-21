const searchInput = document.getElementById("js-search-input");
const categorySelect = document.getElementById("categories");
const flexBox = document.querySelector(".js-flex-box");

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

        // Get unique categories
        const categories = [...new Set(linkArray.map(item => item.category))].sort((a, b) => a.localeCompare(b));

        // Build dropdown
        categories.forEach(category => {
            const option = document.createElement("option");
            option.value = category;
            option.textContent = formatCategory(category);
            categorySelect.appendChild(option);
        });

        // Show all links initially
        renderLinks(linkArray);
        // Search functionality
        function filterLinks() {
            const searchText = searchInput.value.trim().toLowerCase();
            const selectedCategory = categorySelect.value;

            const filteredLinks = linkArray.filter(item => {
                const matchesText =
                    item.text.toLowerCase().includes(searchText);

                const matchesCategory =
                    selectedCategory === "all" ||
                    item.category === selectedCategory;

                return matchesText && matchesCategory;
            });

            flexBox.replaceChildren();
            renderLinks(filteredLinks);
        }

        searchInput.addEventListener("keyup", filterLinks);
        categorySelect.addEventListener("change", filterLinks);
    })
    .catch(error => {
        console.error('Error fetching the JSON file:', error);
    }
    );

function renderLinks(links) {
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

function formatCategory(str) {
    return str
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
