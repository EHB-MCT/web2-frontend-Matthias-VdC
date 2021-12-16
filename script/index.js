//src:  https://stackoverflow.com/questions/4597050/how-to-check-if-the-url-contains-a-given-string
//window location help src: https://www.w3schools.com/js/js_window_location.asp

/////////////////////////
// ---- MAIN PAGE ---- //
/////////////////////////
let mainPageNumber = 0;

if (document.getElementById("body-search-list") && !document.getElementById("login-form") && document.getElementById("body-search-more")) {

    if (mainPageNumber == 0) {
        homepageDeals();
    }

    function homepageDeals() {
        fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1,6,10,12&sortBy=Savings&pageSize=4&pageNumber=${mainPageNumber}`)
            .then(response => {
                return response.json();
            })
            .then(data => {

                console.log("Main page fetch!", data);

                //CHANGE BODY TO RESULTS
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
                                            <p>${k.salePrice} $</p>
                                        </div>
                                    </div>
                                    `;
                }
            });
    }
}

if (document.getElementById("loadMore")) {
    let loadMore = document.getElementById("loadMore");

    loadMore.addEventListener("click", e => {
        mainPageNumber += 1;
        homepageDeals();
    });
}




//////////////////////////
// ---- SEARCH BOX ---- //
//////////////////////////

github = false;

if (location.pathname.indexOf("web2-frontend-Matthias-VdC")) {
    github = true;
}

document.getElementById("header-search-form").addEventListener("submit", e => {
    e.preventDefault();

    sessionStorage.setItem("Search", document.getElementById("header-search-box").value);
    if (github == false) {
        location.assign(`${location.origin}/docs/search.html`);
    } else {
        location.assign(`${location.origin}/web2-frontend-Matthias-VdC/search.html`);
    }
})
'https://ehb-mct.github.io/web2-frontend-Matthias-VdC/search.html'

if (github == false) {
    if (location.pathname == "/docs/search.html" || location.pathname == '/web2-frontend-Matthias-VdC/search.html') {
        let searchBox = sessionStorage.getItem("Search");
        console.log(searchBox);
        fetch(`https://www.cheapshark.com/api/1.0/deals?title=${searchBox}&storeID=1&pageSize=20&sortBy=Reviews`)
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
}