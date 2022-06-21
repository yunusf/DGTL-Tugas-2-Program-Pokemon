const xhttp = new XMLHttpRequest();
const url = "https://pokeapi.co/api/v2/pokemon?limit=30";

async function fetchData1(url) {
    const response = await fetch(url, {
        method: "GET",
    });
    const json = await response.json();
    return json;
};

async function fetchData() {
    xhttp.onload = function() {
        const response = JSON.parse(this.responseText);
        const results = response.results;
        let data = "";

        for(i = 0; i < results.length; i++) {
            const hasil = fetchData1(results[i].url);

            hasil.then(function(result) {
                console.log(result);
                let pType = result.types[0].type.name;
                let color = "";

                switch (pType) {
                    case "bug":
                        color = "#FAFFAF";
                        break;
                    case "fire":
                        color = "#F77E21";
                        break;
                    case "grass":
                        color = "#14C38E";
                        break;
                    case "water":
                        color = "#4CACBC";
                        break;
                    case "normal":
                        color = "#D0C9C0";
                        break;
                    case "electric":
                        color = "#F9D923";
                        break;
                    case "poison":
                        color = "#AB46D2";
                        break;
                    default:
                        color = "#EFFFFD";
                        break;
                }
                
                data = data + `
                    <div class="" style="width: 8rem; inline-black; background: ${color}; text-align: center">
                        <img src="${result.sprites.front_shiny}" class="card-img-top" alt="">
                        <ul class="list-group list-group-flush" style="color: #000; background: ${color}; font-size: 12px;">
                            <li class="list-group" id="id">${result.id}</li>
                            <li class="list-group" id="name">${result.name}</li>
                            <li class="list-group" id="type">Type: ${result.types[0].type.name}</li>
                        </ul>
                    </div>
                    <p>
                    `;

                document.getElementById("pokemon").innerHTML = data;
            });
        }
    };
    xhttp.open("GET", url);
    xhttp.send();
}