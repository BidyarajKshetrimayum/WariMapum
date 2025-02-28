const pages = [
    "<h2>Leirang Kurak</h2> <h4>(Ahanba Pandup)</h2> <p>'Punc' hanjin hanjin mirol kaya ama gi mamangdage hangduna, neinaduna laklaba wahang 'Punc haibacbu karino?' Mirol kaya ama landuna mirol mirolduge matung inna pwkhow kaya ama pibirame. Buddha na hyberame 'Our life is shaped by our mind' eikhoige punc ashi eikhoige wakhalna sembane. Ngashi amuk nwhwnana hangjaningbad, punc hyba ashige matik chaba wahanthok phanglabra? <br/> <br/> 'Pangloi, ngamloi, khangloi.' <br/><br/> 'Karige?' <br/> <br/> Pwkhum amatang tenna piba tarabad asumna samna piba yai, 'Ngarangi ware, ngashige kumhei, hayenge asha' . Meoi meoiduge matung inna puncge wahanthok hanbana hena mapung fagane amad chumgani. Maram ashi leibana punc gi wahanthok ashi khetnaba kaya ama oihali. Thoklakliba wahanthoki khetnaba wahanthoksing adu aranba amata nate. Loinamak chume mityeng amam mamgi matung inna. <br/><br/> Enkhatlakpa jwbonge puncgi matang ashimuk penjaba ani suna ywde. Puncge khongkap ahumda (3) mac muk nungyba atei mapham amad tanja ywde hyba ashid hynarudrabasu mayekna eduna takcharaba waphamni. Ngi eige lybak ashida phangliba meoibage khongkap ahum ashibu kanthoktuna chatke hyba meoiba jiba amatasu pokte. Theidoktuna chatpasu keidwnungda yade. Adumak puncge echelda khongkap ahum ashi thangduna chatlaragadabane.</p>",
    "<h1>Page 2 </h1><p>coming soon..</p>",
    "<h1>Page 3 </h1><p>coming soon..</p>",
    "<h1>Page 4 </h1><p>coming soon..</p>",
    "<h1>Page 5 </h1><p>coming soon..</p>",
    "<h1>Page 6 </h1><p>coming soon..</p>",
    "<h1>Page 7 </h1><p>coming soon..</p>",
    "<h1>Page 8 </h1><p>coming soon..</p>",
    "<h1>Page 9 </h1><p>coming soon..</p>",
    "<h1>Page 10 </h1><p>coming soon..</p>"
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
