const contentList = document.getElementById('contentList');

async function fetchData() {
  const data = await fetch(`./dados/dados.json`).then((res) => res.json());
  return data;
};

fetchData().then(displaylist)

function displaylist(data) {
  console.log("data, ", data)
  const listHTML = data.map(item => 
    `
      <li class="box">
        <img src="./assets/${item.foto}" alt="">
        <div class="bioBox">
          <p>${item.nome}</p>
          <p>${item.cargo}</p>
        </div>
      </li>
    `
  ).join('');
  console.log("listHTML ", listHTML)
  contentList.innerHTML = listHTML
}



/* const displayPokemon = (pokemon) => {
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
        <li class="card">
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
        </li>
    `
        )
        .join('');
    contentList.innerHTML = pokemonHTMLString;
}; */

