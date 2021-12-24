//src:  https://stackoverflow.com/questions/4597050/how-to-check-if-the-url-contains-a-given-string
//window location help src: https://www.w3schools.com/js/js_window_location.asp

/////////////////////////
// ---- MAIN PAGE ---- //
/////////////////////////

//Check if url is github or not
let github = false;
//src: https://stackoverflow.com/questions/21265919/location-pathname-indexof-not-working-with-or
if (location.pathname.indexOf("web2-frontend-Matthias-VdC") != -1) {
    github = true;
}

let mainPageNumber1 = 0;
let mainPageNumber2 = 0;

if (document.getElementById("body-search-list") && !document.getElementById("login-form") && document.getElementById("body-search-more")) {

    if (mainPageNumber1 == 0) {
        homepageDeal1();
    }
    if (mainPageNumber2 == 0) {
        homepageDeal2();
    }

    function homepageDeal1() {
        fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1,6,10,12&sortBy=Savings&pageSize=4&pageNumber=${mainPageNumber1}`)
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
            });
    }

    function homepageDeal2() {
        fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1,6,10,12&sortBy=Reviews&pageSize=4&pageNumber=${mainPageNumber2}`).then(response => {
                return response.json();
            })
            .then(data => {
                console.log("Main page fetch!", data);

                //CHANGE BODY TO RESULTS
                for (let k of data) {
                    document.getElementById("body-top-rated").innerHTML +=
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
            });
    }


    document.getElementById("body-header-linkwrapper").addEventListener("click", e => {
        e.preventDefault();
        sessionStorage.setItem("game-id", 207201);
        window.location.href = 'gamePage.html';
    })
}

if (document.getElementById("loadMore-hot-sales")) {
    let loadMore = document.getElementById("loadMore-hot-sales");

    loadMore.addEventListener("click", e => {
        mainPageNumber1 += 1;
        homepageDeal1();
    });
}
if (document.getElementById("loadMore-top-rated")) {
    let loadMore = document.getElementById("loadMore-top-rated");

    loadMore.addEventListener("click", e => {
        mainPageNumber2 += 1;
        homepageDeal2();
    });
}