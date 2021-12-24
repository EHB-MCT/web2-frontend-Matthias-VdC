//Check if url is github or not
let github = false;
//src: https://stackoverflow.com/questions/21265919/location-pathname-indexof-not-working-with-or
if (location.pathname.indexOf("web2-frontend-Matthias-VdC") != -1) {
    github = true;
}

document.getElementById("header-search-form").addEventListener("submit", e => {
    e.preventDefault();

    sessionStorage.setItem("search", document.getElementById("header-search-box").value);
    if (github == false) {
        location.assign(`${location.origin}/docs/search.html`);
    } else {
        location.assign(`${location.origin}/web2-frontend-Matthias-VdC/search.html`);
    }
})

if (location.pathname.indexOf("search.html") != -1) {
    document.getElementById("header-search-box").value = sessionStorage.getItem("search");

    let searchBox = sessionStorage.getItem("search");
    //filter on store
    let storeFilterId = document.getElementById("store-names").value;
    document.getElementById("store-names").addEventListener("change", e => {
        e.preventDefault();
        storeFilterId = document.getElementById("store-names").value;
        pageNumber = 1;
        fetchSearch();
    });
    //filter by sorting
    let sortFilterId = document.getElementById("sorter-names").value;
    document.getElementById("sorter-names").addEventListener("change", e => {
        e.preventDefault();
        sortFilterId = document.getElementById("sorter-names").value;
        pageNumber = 1;
        fetchSearch();
    });
    //sort by minimum price
    let minPriceFilter = document.getElementById("lower-price").value;
    document.getElementById("lower-price").addEventListener("input", e => {
        e.preventDefault();
        if (minPriceFilter >= maxPriceFilter) {
            minPriceFilter = 0;
            maxPriceFilter = 199;
        }
        minPriceFilter = document.getElementById("lower-price").value;
        pageNumber = 1;
        fetchSearch();
    });
    //sort by maximum price
    let maxPriceFilter = document.getElementById("max-price").value;
    document.getElementById("max-price").addEventListener("input", e => {
        e.preventDefault();
        if (minPriceFilter >= maxPriceFilter) {
            minPriceFilter = 0;
            maxPriceFilter = 199;
        }
        maxPriceFilter = document.getElementById("max-price").value;
        pageNumber = 1;
        fetchSearch();
    });

    let pageNumber = 1;

    function fetchSearch() {
        // src:   https://stackoverflow.com/questions/4147112/how-to-jump-to-top-of-browser-page
        scroll(0, 0)

        fetch(`https://www.cheapshark.com/api/1.0/deals?sortBy=${sortFilterId}&title=${searchBox}&storeID=${storeFilterId}&pageSize=20&lowerPrice=${minPriceFilter}&upperPrice=${maxPriceFilter}&pageNumber=${pageNumber}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log("Search fetch!", data);

                //deletes previous html entries if you search again
                document.getElementById("body-search-list").innerHTML = ``

                //CHANGE BODY TO SEARCH RESULTS
                for (let k of data) {
                    document.getElementById("body-search-list").innerHTML +=
                        `
                    <div class="body-search-list-game">
                        <div class="body-search-list-game-container1">
                            <img class="body-search-list-game-thumb" src="${k.thumb}">
                        </div>
                        <div class="body-search-list-game-container2">
                            <p class="game-container-title">${k.title}</p>
                            <p class="game-container-savings">-${Math.floor(k.savings)}%</p>
                            <a href="#/" id="${k.gameID}" class="game-container-salePrice">$ ${k.salePrice}</a>
                        </div>
                    </div>
                    `;
                }
                for (let i = 0; i < data.length; i++) {
                    document.getElementById(data[i].gameID).addEventListener("click", e => {
                        e.preventDefault();
                        sessionStorage.setItem("game-id", data[i].gameID);
                        window.location.href = 'gamePage.html';
                    })
                }
                if (pageNumber == 1) {
                    document.getElementById("body-page-nav").innerHTML = `
                <p class="pageNumbers" id="current">${pageNumber}</p>
                <p class="pageNumbers" id="next1">${pageNumber + 1}</p>
                <p class="pageNumbers" id="next2">${pageNumber + 2}</p>
                `
                } else if (pageNumber >= 2) {
                    document.getElementById("body-page-nav").innerHTML = `
                    <p class="pageNumbers" id="previous1">${pageNumber - 1}</p>
                    <p class="pageNumbers" id="current">${pageNumber}</p>
                    <p class="pageNumbers" id="next1">${pageNumber + 1}</p>
                    `
                }
                if (document.getElementById("previous1")) {
                    document.getElementById("previous1").addEventListener("click", e => {
                        e.preventDefault();
                        pageNumber -= 1;
                        fetchSearch();
                    });
                }
                if (document.getElementById("next1")) {
                    document.getElementById("next1").addEventListener("click", e => {
                        e.preventDefault();
                        pageNumber += 1;
                        fetchSearch();
                    });
                }
                if (document.getElementById("next2")) {
                    document.getElementById("next2").addEventListener("click", e => {
                        e.preventDefault();
                        pageNumber += 2;
                        fetchSearch();
                    });
                }
            })
    }
    fetchSearch();
}