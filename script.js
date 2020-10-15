const magicCards = document.getElementById('magicCards');


async function getCards() {
  let url = 'https://api.magicthegathering.io/v1/cards?random=true&pageSize=100&language=English';
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

// const fetchCard = () => {

//     const url = `https://api.magicthegathering.io/v1/cards?random=true&pageSize=100&language=English`;

//     const results = fetch(url).then((response) => response.json())
//         .then((data) =>{ 
//             console.log(data)
//             data.response
//         });

//    results.then(result => console.log(result));
//         (results) => {const card = results.map((result) => ({
//             artist: result.artist,
//             colors: result.colors,
//             image: result.imageUrl,
//             mana: result.manaCost,
//             name: result.name,
//             number: result.number,
//             setName: result.setName,
//             text: result.text,
//             type: result.type,        
//         }                 
//    });
// };

async function renderUsers() {
  let cards = await getCards();
  // console.log('cards', cards)
  let html = '';
  cards.cards.map(card => {
  
    let htmlSegment = ` <div class="card ">
                            <div class="card-header">
                                
                                <img class="card-img-center" src="${card.imageUrl}"></img>                                
                            </div>
                            
                            <div class="card-body">
                                <h3 class="card-title ">${card.name}</h3><p class="card-title-p" id="manacost">${card.manaCost}</p>
                                <h5 class="card-subtitle">${card.type}</h5>
                                <p class="card-text">${card.text}</p>
                            </div>

                            <div class="card-footer text-center">
                                <p class="card-text-foot">${card.number} ${card.artist}</p>
                                
                                <p class="card-text-foot">${card.setName} ${card.colors}</p>
                                
                            </div>
                        </div>`;

    html += htmlSegment;
  });

  let cardDeck = document.querySelector('.card-deck');
  cardDeck.innerHTML = html;
}

renderUsers();

