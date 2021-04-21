import React from 'react'
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import './css/App.css'
import Dovod from './pages/Dovod.jsx'

const App = ()=>{
    return (
      <Router>
        <Switch>
          <Route 
            exact 
            path="/" 
            render={()=><Dovod/>} 
          />
          {/* <Route 
            exact 
            path="/" 
            render={<Joker/>} 
          /> */}
          {/* <Route 
            exact 
            path="/" 
            render={<Aquaman/>} 
          /> */}
        </Switch>
      </Router>
    )
}

export default App;