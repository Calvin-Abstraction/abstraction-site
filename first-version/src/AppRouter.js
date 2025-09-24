import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import JoinUs from './pages/JoinUs'

export default function AppRouter(){
  return (
    <Router>
      <Header />
      <main style={{padding:'20px', minHeight:'70vh'}}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/join" component={JoinUs} />
        </Switch>
      </main>
      <Footer />
    </Router>
  )
}
