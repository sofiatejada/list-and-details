// eslint-disable-next-line max-len
const URL = 'https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games/';

export const getGames = () => {
  return fetch(`${URL}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.TOKEN}`,
      'Client-ID': process.env.CLIENT_ID,
    },
    body: 'fields *;',
  })
    .then((res) => console.log(res.json()))
    .then((json) => json.map((game) => ({
      id: game.id,
      name: game.name,
      rating: game.rating,
    })));
};

export const getGameById = (id) => {
  return fetch(`${URL}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.TOKEN}`,
      'Client-ID': process.env.CLIENT_ID,
    },
    body: `fields ${id}`
  });
};
