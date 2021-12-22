//If user is logged in
if (sessionStorage.getItem("login")) {

    let userData = JSON.parse(sessionStorage.getItem("userData"));
    if (userData) {
        document.getElementById("header-profile").innerHTML = `<a href="./profile.html" id="header-profile-link"><img id="profile-icon" src="./images/abstract-user-flat-4.svg" alt="profile picture">${userData.username}</a>`;
    }
    fetch(`https://course-project-mvdc.herokuapp.com/userdata/get/one/${sessionStorage.getItem("id")}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log("userData: ", data);
            // https://stackoverflow.com/questions/6193574/save-javascript-objects-in-sessionstorage
            sessionStorage.setItem("userData", JSON.stringify(data));
            sessionStorage.removeItem("id");
            location.reload()
        })



    if (document.getElementById("profile-container")) {

    }
}