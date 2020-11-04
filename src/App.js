import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NavbarSection from './components/Navbars/NavbarSection.js'
import ImageGalleries from './components/ImageGalleries/ImageGalleries.js'

function Users() {
  return <h2>Users</h2>;
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="MainNav">
            <ul>
              <li>
                <Link to="/Navbars">Navbars</Link>
              </li>
              <li>
                <Link to="/ImageGalleries">ImageGalleries</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/ImageGalleries">
              <ImageGalleries />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/Navbars">
              <NavbarSection />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
