import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoGamesContainer from './VideoGamesContainer';

describe('VideoGamesContainer', () => {
  it('renders a list of video games', async () => {
    render(<VideoGamesContainer />);

    const ul = await screen.findByRole('list', { name: 'games' });

    expect(ul).toMatchSnapshot();
  });
});
