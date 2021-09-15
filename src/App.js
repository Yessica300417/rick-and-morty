import React from 'react';
import Home from './Pages/Home/Home';
import CharacterInformation from './Pages/CharacterInformation/CharacterInformation';
import CharacterFavorites from './Pages/Favorites/CharacterFavorites';
import CharacterFilter from './Pages/Filter/CharactersFilter';
import ViewFiltered from './Pages/ViewFiltered/ViewFiltered';
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
            <Navbar />
            <CharacterInformation />
          </Route>
          <Route exact path="/favorites">
            <CharacterFavorites />
          </Route>
          <Route exact path="/filter">
            <Navbar />
            <CharacterFilter />
          </Route>
          <Route exact path="/viewFilter">
            <Navbar />
            <ViewFiltered />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
