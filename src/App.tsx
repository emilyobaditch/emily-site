import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Bio from './components/Bio'
import Contact from './components/Contact'
import Games from './components/Games'

export default function App() {
  return (
    <div style={{ fontFamily: 'Spartan' }}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bio" component={Bio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/games" component={Games} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
