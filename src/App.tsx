import React from 'react'
import styles from './App.module.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, SignIn, Register, Detail, Search } from './pages'

function App () {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signin' component={SignIn} />
          <Route path='/register' component={Register} />
          <Route path='/detail/:touristRouteId' component={Detail} />
          <Route path='/search/:keywords?' component={Search} />
          <Route render={() => <h1>404 not found</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
