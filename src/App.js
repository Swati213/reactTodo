
import About from './About';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from "./Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
      <>
      <div>
      <Router>
      <Header/>
      <Switch>
       <Route exact activeClassName="selected" path="/">
         <Home/>
       </Route>
       <Route exact ctiveClassName="selected" path='/about'>
       <About/>
     </Route>
    </Switch>
      <Footer/>
      </Router>
      </div>
      </>
  );
}

export default App;
