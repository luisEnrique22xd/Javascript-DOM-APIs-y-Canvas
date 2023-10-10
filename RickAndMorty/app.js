const URL = 'https://rickandmortyapi.com/api';
const characters = document.querySelector('.characters');
const modalTitle = document.querySelector('.modal-title');
const modalBody = document.querySelector('.modal-body');



function createPagination(){
  let buttons=``
  for (let i=1; i<=42; i++){
    buttons += `<li class="page-item">
                <a class="page-link" href="#" data-id='${ i }'> ${ i }</a>
                </li>`;
  }
document.querySelector('.pagination').innerHTML = buttons
}

createPagination();

function fetchApi(url){
  return fetch(url).then(response => response.json())
}

function getCharacters(page=1){
  fetchApi(`${URL}/character/?page=${page}`)
    .then(data=>{
        const personajes =data.results;
        showCharacters(personajes);
    })
}

function getCharacter(id){
  fetchApi(`${URL}/character/${ id }`)
    .then(data=>{
        const personaje =data;
        modalTitle.innerHTML = personaje.name;
        modalBody.innerHTML = '';
        const card = createCardChar(personaje);
        modalBody.appendChild(card);
    })
}

 function showCharacters(personajes){
    characters.innerHTML='';
    personajes.forEach(personaje => {
        characters.appendChild(createCard(personaje));
    });
 }   

/*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/

function createCard(personaje){
    const card = document.createElement('div');
    card.classList.add('card', 'mb-3');
    card.style.width='18rem'
    const cardContent = `<img src="${ personaje.image }" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title", >${ personaje.name }/</h5>
      <p class="card-text">${ personaje.status }</p>
      <p class="card-text">${ personaje.gender }</p>
      <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${personaje.id}">View more</a>
    </div>`;
    card.innerHTML= cardContent;
    return card;
}

function createCardChar(personaje){
  const card = document.createElement('div');
  card.classList.add('card');
  card.style.width='60%'
  card.style.margin='0 auto'
  let badge = '';
  if(personaje.status === 'Alive'){
    badge = `<span class="badge rounded-pill text-bg-success">${personaje.status}</span>`;
  }else if (personaje.status === 'Dead'){
    badge = `<span class="badge rounded-pill text-bg-danger">${personaje.status}</span>`;
  }else {
    badge = `<span class="badge rounded-pill text-bg-secondary">${personaje.status}</span>`;
  }
  const cardContent = `<img src="${ personaje.image }" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${ badge }</p>
    <p class="card-text">${ personaje.gender }</p>
    <p class="card-text">${ personaje.origin.name }</p>
    <p class="card-text">${ personaje.location.name }</p>
  </div>`;
  card.innerHTML= cardContent;
  return card;
}

function getButton(e){
  e.preventDefault();
  if(e.target.classList.contains('page-link')){
    const page = e.target.getAttribute('data-id');
    getCharacters(page);
  }
}

function getCard(e){
  e.preventDefault();
  if(e.target.classList.contains('btn')){
    modalTitle.innerHTML = 'Buscando ...';
    modalBody.innerHTML = '<i class="fa fa-refresh fa-spin fa-3x"></i>'
    getCharacter(e.target.getAttribute('data-id'));
  }
}
document.querySelector('.pagination')
        .addEventListener('click', getButton);
characters.addEventListener('click', getCard)