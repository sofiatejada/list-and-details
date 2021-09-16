import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoGamesContainer from './VideoGamesContainer';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import list from './list.json';

const server = setupServer(
  rest.post('https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games/', (req, res, ctx) => {
    return res(
      ctx.json(list)
    )
  })
)


describe('VideoGamesContainer', () => {

  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders a list of video games', async () => {
    render(
    <MemoryRouter>
      <VideoGamesContainer />
    </MemoryRouter>
    );

    screen.getAllByAltText('loading spinner');
    const ul = await screen.findByRole('list', { name: 'games' }, { timeout: 3000 });
      screen.debug()
    expect(ul).not.toBeEmptyDOMElement();
  });
});
