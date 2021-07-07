import React from 'react';
import './App.css';
import { Quote } from './components/Quote';
import Navbar from './components/NavBar';
import FavoriteQuotes from './components/FavoriteQuotes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GlobalProvider } from './context/GlobalState';
import { TopBar } from './components/TopBar';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <TopBar />
          <Switch>
            <Route exact path="/" component={Quote} />
            <Route path="/favorite" component={FavoriteQuotes} />
          </Switch>
          <Navbar />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
