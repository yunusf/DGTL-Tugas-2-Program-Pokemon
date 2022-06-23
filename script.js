const jumlahPokemon = 84;
const url = `https://pokeapi.co/api/v2/pokemon?limit=${jumlahPokemon}`;

async function getPokemon() {
    fetch(url)
        .then(function(res) {
            res.json()
                .then(function(data) {
                    data.results.forEach(pokemon => {
                        getDetailPokemon(pokemon);
                    });
                })
        })
}

async function getDetailPokemon(detail) {
    details = detail.url;
    fetch(details)
        .then(function(res) {
            res.json()
                .then(function(dataDP) {
                    viewPokemon(dataDP);
                })
        })
}

function viewPokemon(x) {
    const pokeType =  x.types[0].type.name;
    let row = document.getElementById("listPoke")
    let div = document.createElement("div");
    let data = "";

    switch(pokeType) {
        case "bug":
            colorBg = "#9AE66E";
            colorTx = "#000";
            break;
        case "fire":
            colorBg = "#FFC93C";
            colorTx = "#000";
            break;
        case "grass":
            colorBg = "#B4FF9F";
            colorTx = "#000";
            break;
        case "water":
            colorBg = "#A2EAE2";
            colorTx = "#000";
            break;
        case "normal":
            colorBg = "#EEEEEE";
            colorTx = "#000";
            break;
        case "electric":
            colorBg = "#F6F54D";
            colorTx = "#000";
            break;
        case "poison":
            colorBg = "#ECA3F5";
            colorTx = "#000";
            break;
        case "ground":
            colorBg = "#ECB365";
            colorTx = "#000";
            break;
        default:
            colorBg = "#000";
            colorTx = "#fff";
            break;
    }

    div.classList.add("col-sm-2");
    data += 
        `
            <br>
            <div class="card" style=" width: 10rem; height:17rem; background-color: ${colorBg}; color: ${colorTx}">
               <div class="card-body">
                    <img src='${x.sprites.front_shiny}' class="card-img-top"/>
                    <p class="text-center" style=" font-weight: bold;">${x.name}</p>
                    <p>Nomor: ${x.id}</p>
                    <p class="text-center">Tipe: ${pokeType}</p>
                </div>
            </div>
            <p></p>
        `;
    div.innerHTML = data;
    row.appendChild(div);
}
