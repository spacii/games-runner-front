import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import GamePage from './Pages/GamePage/GamePage.js';
import GameRelatedPage from "./Pages/GameRelatedPages/GameRelatedPage.js";
import Games from "./Pages/GamesPage/GamesPage.js";
import Person from "./Pages/PersonPage/PersonPage.js";
import PageNotReady from "./Pages/ErrorPages/PageNotReady.js";
import Error404Page from "./Pages/ErrorPages/Error404Page.js";
import PassportPage from "./Pages/PassportPage/PassportPage.js";
import reportWebVitals from './reportWebVitals';
import "./index.css"


ReactDOM.render(
  <React.StrictMode>
    <Router>
		  <Switch>
          <Route path="/games" exact component={Games} />

          <Route path="/game/:id" exact component={GamePage} />
          <Route path="/game/:id/images" exact component={GameRelatedPage} />
          <Route path="/game/:id/videos" exact component={PageNotReady} />
          <Route path="/game/:id/awards" exact component={PageNotReady} />
          <Route path="/game/:id/reviews" exact component={PageNotReady} />
          <Route path="/game/:id/stores" exact component={PageNotReady} />
          <Route path="/game/:id/relations" exact component={PageNotReady} />
          <Route path="/game/:id/cast" exact component={PageNotReady} />

          <Route path="/persons" exact component={PageNotReady} />
          <Route path="/person/:id" component={PageNotReady} />
          
          <Route path="/passport" component={PassportPage} />

          <Route path="*" component={Error404Page} />
      </Switch>
		</Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();