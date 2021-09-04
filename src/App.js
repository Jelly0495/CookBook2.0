import React from "react";
import Recipe from "./Components/Recipe/Recipe";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import NewRecipe from "./Components/NewRecipe/NewRecipe";
import NavComp from "./Components/NavComp/NavComp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <main>
          <NavComp></NavComp>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipe" component={Recipe} />
            <Route path="/newrecipe" component={NewRecipe} />
            <Route path="/about" component={About} />
          </Switch>
          {/* <Footer></Footer> */}
        </main>
      </div>
    </Router>
  );
}

export default App;
