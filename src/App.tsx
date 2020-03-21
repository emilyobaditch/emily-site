import React from "react"
import logo from "./logo.svg"
import Home from "./components/Home"
import Bio from './components/Bio'
import { Route, Switch, BrowserRouter } from 'react-router-dom'


export default function App() {
  return (
    <div style = {{fontFamily: 'Spartan'}}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bio" component={Bio} />
      </Switch>
    </BrowserRouter>
    </div>
  )
}
