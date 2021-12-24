//If user is logged in
if (sessionStorage.getItem("login")) {

    let userData = JSON.parse(sessionStorage.getItem("userData"));

    if (userData) {
        document.getElementById("header-profile").innerHTML = `<a href="./profile.html" id="header-profile-link"><img id="profile-icon" src="./images/abstract-user-flat-4.svg" alt="profile picture">${userData.username}</a>`;
    }

    //prevent rare errors
    if (sessionStorage.getItem("id")) {
        fetch(`https://course-project-mvdc.herokuapp.com/userdata/get/one/${sessionStorage.getItem("id")}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                // https://stackoverflow.com/questions/6193574/save-javascript-objects-in-sessionstorage
                sessionStorage.setItem("userData", JSON.stringify(data));
                sessionStorage.removeItem("id");

                //Reload checker used from src: https://stackoverflow.com/questions/55075002/is-it-possible-to-add-a-javascript-for-while-loop-for-location-reload
                if (typeof (localStorage.getItem('rlcount')) == 'undefined') {
                    localStorage.setItem('rlcount', 0);
                }
                if (localStorage.getItem('rlcount') < 2) {
                    localStorage.setItem('rlcount', localStorage.getItem('rlcount') + 1);
                    window.location.reload();
                } else {
                    localStorage.removeItem('rlcount');
                }
            })
    }

    //if user clicks on profile
    if (document.getElementById("profile-container")) {
        document.getElementById("profile-username").innerText = `Username: ${userData.username}`;
        document.getElementById("profile-username-change").addEventListener("click", e => {
            e.preventDefault();

            document.getElementById("profile-username-container").innerHTML = `
            <p id="profile-username">Username: </p>
            <input type="text" id="profile-username-changer">
            <button id="profile-username-submit">change</button>
            `;
        })
        document.getElementById("profile-delete-button").addEventListener("click", e => {
            e.preventDefault();
            fetch(`https://course-project-mvdc.herokuapp.com/userdata/delete/${userData._id}`, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    console.log('Profile removed successfully:', data);
                    sessionStorage.clear();
                    window.location.href = 'index.html';
                })
        });
        if (document.getElementById("profile-username-submit")) {
            document.getElementById("profile-username-submit").addEventListener("click", e => {
                e.preventDefault();
                const usernameUpdate = {
                    "username": document.getElementById("profile-username-changer").value
                }
                fetch(`https://course-project-mvdc.herokuapp.com/userdata/change/name/${userData._id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(usernameUpdate)
                    }).then(res => {
                        res.json()
                    })
                    .then(data => {
                        console.log(data);
                        location.reload();
                    });
            });
        }
    }
}