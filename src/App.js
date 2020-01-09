import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router'

//Spinner
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

// Pages
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound'
import Newsletter from './Pages/Newsletter'

class App extends Component {
  render() {
    return (
      <BrowserRouter basename='/home'>
        <div className='App'>
          <Switch>
            <Route path='/(|home)/' component={Home} />
            <Route path='/newsletter' component={Newsletter} />
            <Route path='/404' component={PageNotFound} />
            <Redirect to='/404' />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
