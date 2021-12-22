document.getElementById("register-form").addEventListener("submit", e => {
    e.preventDefault();


    if (document.getElementById("register-password").value == document.getElementById("verify-password").value) {
        let credentials = {
            email: document.getElementById("register-email").value,
            password: document.getElementById("register-password").value
        }

        fetch(`https://course-project-mvdc.herokuapp.com/userdata/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials)
        })

    } else {
        document.getElementById("matching-password").innerHTML = `<p>Please make sure both given passwords match</p>`;
    }
})