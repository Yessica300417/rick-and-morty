import React from 'react';
import Home from './Pages/Home/Home';
import CharacterInformation from './Pages/CharacterInformation/CharacterInformation';
import CharacterFavorites from './Pages/Favorites/CharacterFavorites';
import Navbar from './Components/Navbar/Navbar';


import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Switch>
          <Route exact path="/">
          <Navbar />
            <Home />
          </Route>
          <Route exact path="/information">
            <CharacterInformation />
          </Route>
          <Route exact path="/favorites">
            <CharacterFavorites />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
