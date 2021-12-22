//src:  https://stackoverflow.com/questions/4597050/how-to-check-if-the-url-contains-a-given-string


// Show / Hide password adapted from: https://www.w3schools.com/howto/howto_js_toggle_password.asp
if (document.getElementById("show-password")) {
    document.getElementById("show-password").addEventListener("click", e => {
        let pass = document.getElementById("login-password");
        if (pass.type === "password") {
            pass.type = "text";
        } else {
            pass.type = "password";
        }
    })
}

//Check if url is github or not
let github = false;
//src: https://stackoverflow.com/questions/21265919/location-pathname-indexof-not-working-with-or
if (location.pathname.indexOf("web2-frontend-Matthias-VdC") != -1) {
    github = true;
}


if (document.getElementById("login-form")) {
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
                if (data.login) {
                    //Saves user id to browser
                    //src:  https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage?retiredLocale=nl
                    sessionStorage.setItem("id", data.id);
                    sessionStorage.setItem("login", data.login);
                    window.location.href = 'index.html';
                } else {
                    console.log("Invalid credentials");
                }
            })
    })
}