import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Switch} from 'react-router-dom';
import Home from './view/Home'
import News from './view/News';
import Prices from './view/Prices'
import Statistics from './view/Statistics'




function App() {
  return (
    <div className="App">
       <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/News" component={News}></Route>
        <Route exact path="/Prices" component={Prices}></Route>
        <Route exact path="/Statistics" component={Statistics}></Route>
                      </Switch>
      


    </div>
  );
}

export default App;
