import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Detail from "./components/Detail";
import ImgSlider from "./components/ImgSlider";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
        
       <Router>
          <Header />


          <Switch>
              <Route path='/' exact>
                  <Home />   
              </Route>

              <Route path='/login' exact>
                <Login />
              </Route>

              <Route path='/detail/:id' >
                <Detail />
              </Route>
              
          
          </Switch>
       </Router>
    </div>
  );
}

export default App;
