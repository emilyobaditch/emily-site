import React from "react"
import logo from "./logo.svg"
import Home from "./Home"
import { Route, Switch, BrowserRouter } from 'react-router-dom'


export default function App() {
  return (
    <div style = {{fontFamily: 'Spartan'}}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
    </div>
  )
}
