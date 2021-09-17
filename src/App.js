import React from "react";
import Recipe from "./Components/Recipe/Recipe";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import NewRecipe from "./Components/NewRecipe/NewRecipe";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <main>
          <Navigation></Navigation>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipe/:id" component={Recipe} />
            <Route path="/newrecipe" component={NewRecipe} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
