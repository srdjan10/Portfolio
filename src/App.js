import "./input.css";
import Navbar from "./component/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../src/page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Projects from "./page/Projects";
import Welcome from "./page/Welcome";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
