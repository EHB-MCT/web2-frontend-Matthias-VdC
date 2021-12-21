//If user is logged in
if (sessionStorage.getItem("login") || sessionStorage.getItem("id")) {
    document.getElementById("header-profile").innerHTML = `<a href="./profile.html" id="header-profile-link"><img id="profile-icon" src="./images/abstract-user-flat-4.svg" alt="profile picture"></a>`;
}