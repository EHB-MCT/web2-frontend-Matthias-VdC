fetch(`https://www.cheapshark.com/api/1.0/games?id=${sessionStorage.getItem("game-id")}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log("get one game", data);
        document.getElementById("one-game-container").innerHTML = `
        <div id="one-game-info-container">
            <img id="one-game-image" src="${data.info.thumb}" alt="game image">
            <div id="one-game-info">
                <span class="icon-heart"></span>
                <p id="one-game-title">${data.info.title}</p>
            </div>
        </div>
        <div id="one-game-store-deals">
            <h2 id="one-game-store-deal-text">Store deals:</h2>
        </div>

        `;

        for (let i = 0; i < data.deals.length; i++) {
            document.getElementById("one-game-store-deals").innerHTML +=
                `
            <div class="one-game-stores">
                <p class="one-game-stores-retail">Retail price: $ ${data.deals[i].retailPrice}</p>
                <p class="one-game-stores-price">Current price: $ ${data.deals[i].price}</p>
                <p class="one-game-stores-savings">Savings: ${Math.floor(data.deals[i].savings)} %</p>
                <a class="one-game-stores-redirect" href="https://www.cheapshark.com/redirect?dealID=${data.deals[i].dealID}" target="_blank">Go to deal</a>
            </div>
            `;
        }
    })