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
    let searchBox = sessionStorage.getItem("search");
    //filter on store
    let storeFilterId = document.getElementById("store-names").value;
    document.getElementById("store-names").addEventListener("change", e => {
        e.preventDefault();
        storeFilterId = document.getElementById("store-names").value;
        fetchSearch();
    })
    //filter by sorting
    let sortFilterId = document.getElementById("sorter-names").value;
    document.getElementById("sorter-names").addEventListener("change", e => {
        e.preventDefault();
        sortFilterId = document.getElementById("sorter-names").value;
        fetchSearch();
    })

    function fetchSearch() {
        fetch(`https://www.cheapshark.com/api/1.0/deals?sortBy=${sortFilterId}&title=${searchBox}&storeID=${storeFilterId}&pageSize=20`)
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
                                <p>${k.title}</p>
                                <a href="#">view</a>
                                <p>${k.normalPrice} $</p>
                            </div>
                        </div>
                        `;
                }
            })
    }
    fetchSearch();
}