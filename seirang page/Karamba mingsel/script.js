document.addEventListener('DOMContentLoaded', () => {
    const pageButtons = document.querySelectorAll('.page-num');
    const previousButton = document.getElementById('previous');
    const nextButton = document.getElementById('next');
    const pageCount = 6;
    let currentPage = 1;
    const visibleButtons = 5;
    const image = document.getElementById('book-page');
    const searchInput = document.getElementById('page-search-input');
    const searchButton = document.getElementById('page-search-button');

    function updatePage(pageNumber) {
       
        document.querySelector('.pagination p').textContent = `Showing ${pageNumber} of ${pageCount} entries`;

      
        let startPage = Math.max(1, pageNumber - Math.floor(visibleButtons / 2));
        if (startPage + visibleButtons - 1 > pageCount) {
            startPage = pageCount - visibleButtons + 1;
        }
        startPage = Math.max(1, startPage);

      
        for (let i = 0; i < visibleButtons; i++) {
            pageButtons[i].textContent = startPage + i;
            pageButtons[i].classList.remove('active');
            if (startPage + i === pageNumber) {
                pageButtons[i].classList.add('active');
            }
        }

        currentPage = pageNumber;

   
        image.src = `images/page${pageNumber}.jpg`;

  
        image.onerror = () => {
            console.error(`Failed to load image: images/page${pageNumber}.jpg`);
           
        };
    }


    pageButtons.forEach(button => {
        button.addEventListener('click', () => {
            updatePage(parseInt(button.textContent));
        });
    });

    previousButton.addEventListener('click', () => {
        if (currentPage > 1) {
            updatePage(currentPage - 1);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < pageCount) {
            updatePage(currentPage + 1);
        }
    });

    searchButton.addEventListener('click', () => {
        const pageNumber = parseInt(searchInput.value);
        if (pageNumber >= 1 && pageNumber <= pageCount) {
            updatePage(pageNumber);
        } else {
            alert(`Please enter a page number between 1 and ${pageCount}.`);
        }
    });

    updatePage(currentPage);
});




