import React from 'react'
import {Switch, Route} from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Designs from './Designs'
import Contact from './Contact'

const App = () => {
  return (
    <React.Fragment>
      <div id="navbar">
        <NavBar />
      </div>
      <div id="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/designs" component={Designs} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </React.Fragment>
  )
}



export default App