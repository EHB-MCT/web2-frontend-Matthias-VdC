window.onload = async function () {
    if (window.location.href.indexOf("/docs/index.html") > -1) {

        /////////////////////////
        // ---- MAIN PAGE ---- //
        /////////////////////////

        console.log(window.location.pathname);

        let mainPageNumber = 0;

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
        let loadMore = document.getElementById("loadMore");

        loadMore.addEventListener("click", e => {
            mainPageNumber += 1;
            homepageDeals();
        });



        //////////////////////////
        // ---- SEARCH BOX ---- //
        //////////////////////////

        document.getElementById("header-search-form").addEventListener("submit", e => {
            e.preventDefault();

            //Remove load more
            document.getElementById("body-search-more").innerHTML = ``;

            let searchBox = document.getElementById("header-search-box").value;
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
        });
    }
}