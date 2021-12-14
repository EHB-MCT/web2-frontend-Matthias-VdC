window.onload = async function () {
    if (window.location.href.indexOf("/docs/login.html") > -1) {

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
                        //src:  https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage?retiredLocale=nl

                        sessionStorage.setItem("id", data.id);
                        sessionStorage.setItem("login", data.login);
                    } else {
                        console.log("Invalid credentials");
                    }
                })
        })


    }
}