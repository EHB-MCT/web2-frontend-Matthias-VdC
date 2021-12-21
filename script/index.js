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