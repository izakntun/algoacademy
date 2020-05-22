import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation'
import Cards from './components/Cards'
import Header from './components/Header'
import Footer from './components/Footer'
import Python from './pages/Python'
import Go from './pages/Go'
import Cpp from './pages/C++'
import C from './pages/C'
import Javascript from './pages/Javascript'
import Contribute from './components/Contribute'
import QuizHome from './pages/QuizHome'

import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Switch>
        <Route path="/" exact>
          <Header></Header>
          <Cards></Cards>
        </Route>
        <Route path="/python">
          <Python />
        </Route>
        <Route path="/javascript">
          <Javascript />
        </Route>
        <Route path="/go">
          <Go />
        </Route>
        <Route path="/c++">
          <Cpp />
        </Route>
        <Route path="/c">
          <C />
        </Route>
        <Route path="/contribute">
          <Contribute />
        </Route>
        <Route path="/quiz">
          <QuizHome></QuizHome>
        </Route>
        <Route>
          <h1 className="text-center py-5">Page not found</h1>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  )
}

export default App