import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import WishListForm from "./places/components/WishListForm";
import WishListItem from "./places/components/WishListItem";
import Register from "./Registration/Register";
import ImageCards from "./places/components/ImageCards";
import galleryData from "./dummy_data/galleryData";
import UserHeading from "./User_title/UserHeading";

const App = () => {
  const [places, setPlaces] = useState([]);

  const saveData = (userData) => {
    setPlaces((previousPlaces) => {
      return [...previousPlaces, userData];
    });
  };

  const updatePlaces = (newPlaces) => {
    setPlaces(newPlaces);
  };

  const cards = (p)=>{
    return (
      <ImageCards key={p.id} url={p.url} alt={p.alt} info={p.info} />
    );
  }

  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <UserHeading/>
            <Users />
          </Route>
          <Route path="/places/gallery" exact>
            {galleryData.map(cards)}
          </Route>
          <Route path="/places/wishlist" exact>
            <WishListForm saveData={saveData} />
            <WishListItem places={places} updatePlaces={updatePlaces} />
          </Route>
          <Route path="/places/new" exact>
            <NewPlace />
          </Route>
          <Route path="/auth/register" exact>
              <Register/>
          </Route>
          <Redirect to='/'/>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
