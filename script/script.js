const contentList = document.getElementById('contentList');

async function fetchData() {
  const data = await fetch(`./dados/dados.json`).then((res) => res.json());
  return data;
};

fetchData().then(displaylist)

function displaylist(data) {
  const listHTML = data.map(item => 
    `
      <li data-id='${item.id}' data-idade='${item.idade}' data-nome='${item.nome}' data-cargo='${item.cargo}' data-foto='${item.foto}' class="box">
        <img src="./assets/${item.foto}" alt="">
        <div class="bioBox">
          <p>${item.nome}</p>
          <p>${item.cargo}</p> 
        </div>
      </li>
    `
  ).join('');
  contentList.innerHTML = listHTML
}

const cardBio = document.getElementById('cardBio');
document.addEventListener('click', function (event) {
  if (!event.target.matches('.box')) return;
  event.preventDefault();
  
  var id = event.target.getAttribute("data-id");
  var nome = event.target.getAttribute("data-nome");
  var cargo = event.target.getAttribute("data-cargo");
  var idade = event.target.getAttribute("data-idade");
  var foto = event.target.getAttribute("data-foto");

  const cardBio1 = `
    <img src="./assets/${foto}" alt="">
        <div class="bio">
          <p>NOME: <span>${nome} </span></p>
          <p>CARGO: <span> ${cargo} </span></p>
          <p>IDADE: <span> ${idade} </span></p>
        </div>
  `;
  cardBio.innerHTML = cardBio1

}, false);
