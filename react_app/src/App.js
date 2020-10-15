import React, { Component } from'react';
import'./App.css';
import{ BrowserRouter as Router, Route, Switch, Link, Redirect } from"react-router-dom";

import Search from'./components/search';
import Home from './components/home'

class App extends Component {

  constructor(props){
    super(props)
  }
  
  render () {

    return(
      <div>
        <Router>
          <div className="App">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
              <div className="navbar-header">
                <Link className="navbar-brand" to="/">Mobile App</Link>
              </div>
              <ul className="navbar-nav">
                
                <li className="nav-item">
                  <Link className="nav-link" to="/search/all">All mobiles </Link>
                </li>
                </ul>
            </nav>
            
            <Switch>
              <Route exact path="/" render={() => <Home products={this.props.products}/>}></Route>
              <Route exact path="/search/:name" render={(prop) => <Search name={prop.match.params.name} products={this.props.products}/>}></Route>
              <Route exact path="*" render={() => <Redirect to="/" />}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;