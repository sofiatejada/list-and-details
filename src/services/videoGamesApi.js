// eslint-disable-next-line max-len
const URL = 'https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games/';

export const getGames = () => {
  return fetch(`${URL}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.TOKEN}`,
      'Client-ID': process.env.CLIENT_ID,
      'Content-Type': 'text/plain',
    },
    body: 'fields *; limit 9; offset 100;'
  })
    .then((res) => res.json())
    // .then((res) => console.log(res.json()))
    .then((json) => json.map((game) => ({
      id: game.id,
      name: game.name,
      url: game.url,
    })
    // .then(console.log(json))
    ));
};

export const getGameById = (id) => {
  return fetch(`${URL}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.TOKEN}`,
      'Client-ID': process.env.CLIENT_ID,
      'Content-Type': 'text/plain'
    },

    body: `fields *; where id = ${id};`
  })
  .then((res) => res.json())
};
