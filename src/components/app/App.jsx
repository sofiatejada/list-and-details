import React from 'react';
import VideoGamesContainer from '../../containers/VideoGamesContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import VideoGamesDetailContainer from '../../containers/VideoGamesDetailContainer';


export default function App() {
  return  (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={VideoGamesContainer} />
          <Route exact path="/:id" component={VideoGamesDetailContainer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
