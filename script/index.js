"use strict";


window.onload = async function () {

    /////////////////////////
    // ---- MAIN PAGE ---- //
    /////////////////////////

    if (window.location.pathname == '/index.html') {
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


    //////////////////////////
    // ---- LOGIN PAGE ---- //
    //////////////////////////

    //Taken from:   https://stackoverflow.com/questions/9578348/best-way-to-execute-js-only-on-specific-page
    if (window.location.pathname == '/login.html') {

        //SessionStorage   src:   https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage?retiredLocale=nl

        // Show / Hide password adapted from: https://www.w3schools.com/howto/howto_js_toggle_password.asp
        document.getElementById("show-password").addEventListener("click", e => {
            let pass = document.getElementById("login-password");
            if (pass.type === "password") {
                pass.type = "text";
            } else {
                pass.type = "password";
            }
        })


        document.getElementById("login-form").addEventListener("submit", e => {
            e.preventDefault();
            let emailValue = document.getElementById("login-email").value;
            let passwordValue = document.getElementById("login-password").value;

            const credentials = {
                email: emailValue,
                password: passwordValue
            }

            fetch(`https://course-project-mvdc.herokuapp.com/userdata/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(credentials)
                })
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    if (data) {
                        //getting post data source: https://stackoverflow.com/questions/29775797/fetch-post-json-data
                        console.log(data);

                        //Saves user id to browser
                        sessionStorage.setItem("id", data.id);
                        sessionStorage.setItem("login", data.login);
                    } else {
                        console.log("Invalid credentials");
                    }
                })
        })
    }
}