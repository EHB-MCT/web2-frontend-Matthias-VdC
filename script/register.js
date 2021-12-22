document.getElementById("register-form").addEventListener("submit", e => {
    e.preventDefault();


    if (document.getElementById("register-password").value == document.getElementById("verify-password").value) {
        let credentials = {
            email: document.getElementById("register-email").value,
            password: document.getElementById("register-password").value,
            username: document.getElementById("register-name").value
        }
        fetch(`https://course-project-mvdc.herokuapp.com/userdata/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials)
        }).then(e => {
            const credentials = {
                email: document.getElementById("register-email").value,
                password: document.getElementById("register-password").value
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
                        //getting post data source: https://stackoverflow.com/questions/29775797/fetch-post-json-data
                        console.log(data);

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
    } else {
        document.getElementById("matching-password").innerHTML = `<p>Please make sure both given passwords match</p>`;
    }
})