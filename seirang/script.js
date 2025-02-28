const pages = [
    "<h1>Ahanba matang</h1><p>Global warming, a phenomenon characterized by the gradual increase in Earth's average surface temperature, has emerged as one of the most pressing challenges of the 21st century. Driven primarily by human activities, global warming is a consequence of the excessive release of greenhouse gases, such as carbon dioxide (CO2), methane (CH4), and nitrous oxide (N2O), into the atmosphere. These gases trap heat, leading to a rise in global temperatures and causing widespread environmental, economic, and social impacts. Addressing global warming is no longer a choice but a necessity for the survival of our planet and future generations.The primary cause of global warming is the burning of fossil fuels, such as coal, oil, and natural gas, for energy production, transportation, and industrial processes. Deforestation, another significant contributor, reduces the number of trees that absorb CO2, further exacerbating the problem. Additionally, agricultural practices, including livestock farming and the use of synthetic fertilizers, release substantial amounts of methane and nitrous oxide, both potent greenhouse gases. The cumulative effect of these activities has led to a dramatic increase in atmospheric CO2 levels, which have risen by over 50% since the pre-industrial era. </p>",
    "<h1>Page 2 Title</h1><p>This is page 2 content. More information here.</p>",
    "<h1>Page 3 Title</h1><p>This is page 3 content. Yet more data.</p>",
    "<h1>Page 4 Title</h1><p>This is page 4 content.</p>",
    "<h1>Page 5 Title</h1><p>This is page 5 content.</p>",
    "<h1>Page 6 Title</h1><p>This is page 6 content.</p>",
    "<h1>Page 7 Title</h1><p>This is page 7 content.</p>",
    "<h1>Page 8 Title</h1><p>This is page 8 content.</p>",
    "<h1>Page 9 Title</h1><p>This is page 9 content.</p>",
    "<h1>Page 10 Title</h1><p>This is page 10 content.</p>"
];

let currentPage = 1;
const totalPages = pages.length;
const visiblePages = 5;

function updatePage() {
    document.getElementById("page-content").innerHTML = pages[currentPage - 1];
    updatePaginationButtons();
    updateEntriesInfo();
}

function updatePaginationButtons() {
    const pageNumbersContainer = document.querySelector(".page-numbers");
    pageNumbersContainer.innerHTML = "";

    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);

    if (endPage - startPage + 1 < visiblePages) {
        startPage = Math.max(1, endPage - visiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        if (i === currentPage) {
            button.classList.add("active");
        }
        button.addEventListener("click", () => {
            currentPage = i;
            updatePage();
        });
        pageNumbersContainer.appendChild(button);
    }

    document.getElementById("prev-page").disabled = currentPage === 1;
    document.getElementById("next-page").disabled = currentPage === totalPages;
}

function updateEntriesInfo() {
    document.getElementById("entries-info").textContent = `Showing ${currentPage} of ${totalPages} entries`;
}

document.getElementById("prev-page").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        updatePage();
    }
});

document.getElementById("next-page").addEventListener("click", () => {
    if (currentPage < totalPages) {
        currentPage++;
        updatePage();
    }
});

updatePage();
