export const getGames = () => {
  return fetch(`https://api.rawg.io/api/games?key=${process.env.VIDEOGAME_KEY}`)
    .then((res) => res.json())
    .then((json) => json.results.map((game) => ({
      id: game.id,
      image: game.background_image,
      name: game.name,
      rating: game.rating,
    })));
};
